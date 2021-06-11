import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";
import { toggleEditLabelState } from "../../TabStore";
import { useSetRecoilState } from "recoil";

const EditButton = () => {
  const setEditState = useSetRecoilState(toggleEditLabelState);

  const handleEditClick = () => {
    setEditState(true);
  };

  return (
    <S.TableButtonDiv onClick={handleEditClick}>
      <Icon.EditIcon />
      편집
    </S.TableButtonDiv>
  );
};

export default EditButton;
