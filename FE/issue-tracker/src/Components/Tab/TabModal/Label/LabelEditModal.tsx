import { AddNewModal as S, TabAssets as Icon } from "../../TabStyles";
import {
  toggleEditLabelState,
  addNewLabelTitleState,
  addNewLabelDescriptionState,
  addNewLabelBackgroundState,
  addnewLabelFontColor,
  labelDataState,
} from "../../../../stores/tabAtoms";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import EditLabelView from "./EditLabelView";
import API from "@/Utils/api";

type LabelEditProps = {
  id?: number;
};

const LabelEditModal = ({ id }: LabelEditProps) => {
  const setLabelEditState = useSetRecoilState(toggleEditLabelState);

  const [labelData, setLabelData] = useRecoilState(labelDataState);

  const editLabelTitleState = useRecoilValue(addNewLabelTitleState);

  const editLabelDescriptionState = useRecoilValue(addNewLabelDescriptionState);

  const editLabelBackgroundState = useRecoilValue(addNewLabelBackgroundState);

  const handleEditCancleBtnClick = () => {
    setLabelEditState({
      isOpen: false,
      rowId: id,
    });
  };

  const handleEditCloseBtnClick = () => {
    const editLabel = {
      id: id,
      title: editLabelTitleState,
      description: editLabelDescriptionState,
      color: editLabelBackgroundState,
    };

    API.put(`/label/${id}`, editLabel).then((res) => {
      if (res.ok) {
        const modifiedArray = labelData.map((label) =>
          label.id === id ? editLabel : label
        );
        setLabelData(modifiedArray);
      }
    });

    setLabelEditState({
      isOpen: false,
      rowId: id,
    });
  };

  return (
    <S.AddModalDiv isLabel={true}>
      <S.AddModalTitle>레이블 편집</S.AddModalTitle>
      <S.ModalContent>
        <S.ModalLeft>
          <EditLabelView />
        </S.ModalLeft>
        <S.ModalRight>
          <LabelEditTitleDescriptionInput />
          <S.ChangeColorContainer>
            <EditBackgroundContainer />
            <EditFontColorContainer />
          </S.ChangeColorContainer>
          <S.FinishWriteBtnDiv>
            <S.Canclebtn onClick={handleEditCancleBtnClick}>취소</S.Canclebtn>
            <S.FinishWriteBtn onClick={handleEditCloseBtnClick}>
              + 완료
            </S.FinishWriteBtn>
          </S.FinishWriteBtnDiv>
        </S.ModalRight>
      </S.ModalContent>
    </S.AddModalDiv>
  );
};

const LabelEditTitleDescriptionInput = ({ id }: LabelEditProps) => {
  const [editTitle, setEditTitle] = useRecoilState(addNewLabelTitleState);
  const [editDescription, setEditDescription] = useRecoilState(
    addNewLabelDescriptionState
  );

  const handleLabelTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };
  const handleLabelDescriptionInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditDescription(e.target.value);
  };

  return (
    <S.InputWrapper>
      <S.Input
        placeholder="레이블 이름"
        value={editTitle}
        onChange={handleLabelTitleInput}
      />
      <S.Input
        placeholder="설명 (선택)"
        value={editDescription}
        onChange={handleLabelDescriptionInput}
      />
    </S.InputWrapper>
  );
};

const EditBackgroundContainer = () => {
  const [editBackground, setEditBackground] = useRecoilState(
    addNewLabelBackgroundState
  );

  const handleLabelBackgroundInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditBackground(e.target.value);
  };

  const handleLabelColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditBackground((e.target as HTMLInputElement).value);
  };

  return (
    <S.ChangeBackgroundDiv>
      <S.ColorTitle>배경색상</S.ColorTitle>
      <S.BackgroundColorContent>
        <S.Input
          placeholder="색 입력"
          value={editBackground}
          onChange={handleLabelBackgroundInput}
        />
      </S.BackgroundColorContent>
      <S.ColorPickerDiv>
        <label>
          <Icon.RefreshIcon />
          <S.ColorPicker
            type="color"
            onChange={handleLabelColorInput}
            value={editBackground}
          ></S.ColorPicker>
        </label>
      </S.ColorPickerDiv>
    </S.ChangeBackgroundDiv>
  );
};

const EditFontColorContainer = () => {
  const setNewLabelFontColor = useSetRecoilState(addnewLabelFontColor);
  const handleLabelBlackWhiteInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewLabelFontColor(e.target.dataset.color);
  };

  return (
    <S.ChangeFontColorDiv>
      <S.ColorTitle>텍스트 색상</S.ColorTitle>
      <S.FontColorRadioContent>
        <input
          id="black"
          data-color="black"
          name="labelFontColor"
          type="radio"
          onChange={handleLabelBlackWhiteInput}
        />
        <label htmlFor="black">어두운 색</label>
      </S.FontColorRadioContent>
      <S.FontColorRadioContent>
        <input
          id="white"
          data-color="white"
          name="labelFontColor"
          type="radio"
          onChange={handleLabelBlackWhiteInput}
        />
        <label htmlFor="white">밝은 색</label>
      </S.FontColorRadioContent>
    </S.ChangeFontColorDiv>
  );
};

export default LabelEditModal;
