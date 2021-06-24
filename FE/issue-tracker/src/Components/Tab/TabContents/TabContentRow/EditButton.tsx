import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";
import {
  toggleEditLabelState,
  toggleEditMilestoneState,
  currentTabState,
  labelDataListState,
  milestoneDataListState,
  editLabelDataState,
  editMilestoneDataState,
} from "@/stores/tabAtoms";
import { useSetRecoilState, useRecoilValue } from "recoil";

type editButtonProp = {
  id?: number;
};

const EditButton = ({ id }: editButtonProp) => {
  const setLabelEditData = useSetRecoilState(editLabelDataState);
  const setMilestoneEditData = useSetRecoilState(editMilestoneDataState);

  const setLabelEditState = useSetRecoilState(toggleEditLabelState);

  const setMilestoneEditState = useSetRecoilState(toggleEditMilestoneState);

  const tabState = useRecoilValue(currentTabState);

  const labelList = useRecoilValue(labelDataListState);

  const milestoneList = useRecoilValue(milestoneDataListState);

  // const setLabelFontColor = useSetRecoilState(addnewLabelFontColor);

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
      console.log(editData);
      setMilestoneEditState({
        isOpen: true,
        rowId: id,
      });

      setMilestoneEditData({
        id: id,
        title: editData?.title,
        description: editData?.description,
        created_time: new Date().toUTCString(),
        due_date: editData?.due_date,
        opened_issue_count: 0,
        closed_issue_count: 0,
      });
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
