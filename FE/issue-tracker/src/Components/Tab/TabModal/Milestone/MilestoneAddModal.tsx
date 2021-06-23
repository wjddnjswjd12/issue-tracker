import { AddNewModal as S } from "../../TabStyles";
import {
  toggleAddNewMilestoneState,
  milestoneDataState,
  addMilestoneDataState,
} from "@/stores/tabAtoms";
import { useSetRecoilState, useRecoilState } from "recoil";
import API from "@/Utils/api";

const MilestoneAddModal = () => {
  const [addMilestoneData, setAddMilestoneData] = useRecoilState(
    addMilestoneDataState
  );

  const setMilestoneAddState = useSetRecoilState(toggleAddNewMilestoneState);
  const [milestoneData, setMilestoneData] = useRecoilState(milestoneDataState);

  const handleEditCloseBtnClick = () => {
    API.post("/milestone", addMilestoneData).then((res) => {
      if (res.ok) setMilestoneData([...milestoneData, addMilestoneData]);
    });

    setMilestoneAddState(false);
  };

  const onChangeMilestoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddMilestoneData({ ...addMilestoneData, [name]: value });
  };

  return (
    <S.AddModalDiv isLabel={false}>
      <S.AddModalTitle>새로운 마일스톤 추가</S.AddModalTitle>
      <S.ModalMileContent>
        <S.ModalContent>
          <S.MilestoneSmallInputDiv>
            <S.Input
              name="title"
              placeholder="마일스톤 이름"
              onChange={onChangeMilestoneInput}
            />
          </S.MilestoneSmallInputDiv>
          <S.MilestoneSmallInputDiv>
            <S.Input
              name="due_date"
              placeholder="완료일(선택) ex.YYYY-MM-DD"
              onChange={onChangeMilestoneInput}
            />
          </S.MilestoneSmallInputDiv>
        </S.ModalContent>
        <S.Input
          name="description"
          placeholder="설명(선택)"
          onChange={onChangeMilestoneInput}
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

export default MilestoneAddModal;
