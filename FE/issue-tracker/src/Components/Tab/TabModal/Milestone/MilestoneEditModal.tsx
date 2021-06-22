import { AddNewModal as S } from "../../TabStyles";
import {
  toggleEditMilestoneState,
  addNewMilestoneTitleState,
  addNewMilestoneDescriptionState,
  addNewMilestoneDateState,
  milestoneDataState,
} from "@/stores/tabAtoms";
import { useSetRecoilState, useRecoilState } from "recoil";
import API from "@/Utils/api";

type MilesEditProps = {
  id?: number;
};

const MilestoneEditModal = ({ id }: MilesEditProps) => {
  const setMilestoneEditState = useSetRecoilState(toggleEditMilestoneState);

  const [milestoneData, setMilestoneData] = useRecoilState(milestoneDataState);

  const [milestoneTitle, setMilestoneTitle] = useRecoilState(
    addNewMilestoneTitleState
  );
  const [milestoneDescription, setMilestoneDescription] = useRecoilState(
    addNewMilestoneDescriptionState
  );
  const [milestoneDate, setMilestoneDate] = useRecoilState(
    addNewMilestoneDateState
  );

  const handleMilestoneTitleInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMilestoneTitle(e.target.value);
  };

  const handleMilestoneDescriptionInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMilestoneDescription(e.target.value);
  };

  const handleMilestoneDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMilestoneDate(e.target.value);
  };

  const handleEditCloseBtnClick = () => {
    const editMilestone = {
      id: id,
      title: milestoneTitle,
      description: milestoneDescription,
      due_date: milestoneDate,
      opened_issue_count: 0,
      closed_issue_count: 0,
      created_time: new Date().toUTCString(),
    };

    API.put(`/milestone/${id}`, editMilestone).then((res) => {
      if (res.ok) {
        const modifiedArray = milestoneData.map((mile) =>
          mile.id === id ? editMilestone : mile
        );
        setMilestoneData(modifiedArray);
      }
    });

    setMilestoneEditState({
      isOpen: false,
      rowId: id,
    });
  };

  return (
    <S.AddModalDiv isLabel={false}>
      <S.AddModalTitle>마일스톤 편집</S.AddModalTitle>
      <S.ModalMileContent>
        <S.ModalContent>
          <S.MilestoneSmallInputDiv>
            <S.Input
              placeholder="마일스톤 이름"
              onChange={handleMilestoneTitleInput}
            />
          </S.MilestoneSmallInputDiv>
          <S.MilestoneSmallInputDiv>
            <S.Input
              placeholder="완료일(선택) ex.YYYY-MM-DD"
              onChange={handleMilestoneDateInput}
            />
          </S.MilestoneSmallInputDiv>
        </S.ModalContent>
        <S.Input
          placeholder="설명(선택)"
          onChange={handleMilestoneDescriptionInput}
        />
        <S.FinishWriteBtnDiv>
          <S.FinishWriteBtn onClick={handleEditCloseBtnClick}>
            + 완료
          </S.FinishWriteBtn>
        </S.FinishWriteBtnDiv>
      </S.ModalMileContent>
    </S.AddModalDiv>
  );
};

export default MilestoneEditModal;
