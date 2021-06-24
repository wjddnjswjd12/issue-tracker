import { useRecoilState } from "recoil";
import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";
import { labelDataListState, milestoneDataListState } from "@/stores/tabAtoms";
import API from "@/Utils/api";

type deleteButtonPropType = {
  id?: number;
  type: string;
};

const DeleteButton = ({ id, type }: deleteButtonPropType) => {
  const [labelDataList, setLabelDataList] = useRecoilState(labelDataListState);
  const [milestoneDataList, setMilestoneDataList] = useRecoilState(
    milestoneDataListState
  );

  const handleDeleteClick = () => {
    type === "label"
      ? API.delete(`/label/${id}`).then((res) => {
          if (res.ok) {
            const modified = labelDataList.filter((label) => label.id !== id);
            setLabelDataList(modified);
          }
        })
      : API.delete(`/milestone/${id}`).then((res) => {
          if (res.ok) {
            const modified = milestoneDataList.filter(
              (mimlestone) => mimlestone.id !== id
            );
            setMilestoneDataList(modified);
          }
        });
  };

  return (
    <S.TableButtonDiv onClick={handleDeleteClick}>
      <Icon.TrashIcon />
      삭제
    </S.TableButtonDiv>
  );
};

export default DeleteButton;
