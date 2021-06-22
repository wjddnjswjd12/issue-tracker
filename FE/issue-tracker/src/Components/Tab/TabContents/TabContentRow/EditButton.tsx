import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";
import {
  toggleEditLabelState,
  toggleEditMilestoneState,
  currentTabState,
  labelDataState,
  milestoneDataState,
  addNewMilestoneTitleState,
  addNewMilestoneDescriptionState,
  addNewMilestoneDateState,
  editLabelDataState,
} from "../../../../stores/tabAtoms";
import { useSetRecoilState, useRecoilValue } from "recoil";

type editButtonProp = {
  id?: number;
};

const EditButton = ({ id }: editButtonProp) => {
  const setLabelEditData = useSetRecoilState(editLabelDataState);

  const setLabelEditState = useSetRecoilState(toggleEditLabelState);

  const setMilestoneEditState = useSetRecoilState(toggleEditMilestoneState);

  const tabState = useRecoilValue(currentTabState);

  const labelList = useRecoilValue(labelDataState);

  const milestoneList = useRecoilValue(milestoneDataState);

  // const setLabelFontColor = useSetRecoilState(addnewLabelFontColor);

  const setMilestoneTitle = useSetRecoilState(addNewMilestoneTitleState);

  const setMilestoneDescription = useSetRecoilState(
    addNewMilestoneDescriptionState
  );
  const setMilestoneDate = useSetRecoilState(addNewMilestoneDateState);

  const handleEditClick = () => {
    if (tabState === "label") {
      const editData = labelList.find((label) => label.id === id);

      setLabelEditState({
        isOpen: true,
        rowId: id,
      });

      setLabelEditData({
        id: id,
        title: editData?.title,
        description: editData?.description,
        color: editData?.color,
      });

      // setLabelFontColor(editData?.description);
    } else {
      const editData = milestoneList.find((milestone) => milestone.id === id);

      setMilestoneEditState({
        isOpen: true,
        rowId: id,
      });

      setMilestoneTitle(editData?.title);
      setMilestoneDescription(editData?.description);
      setMilestoneDate(editData?.due_date);
    }
  };

  return (
    <S.TableButtonDiv onClick={handleEditClick}>
      <Icon.EditIcon />
      편집
    </S.TableButtonDiv>
  );
};

export default EditButton;
