import { useRecoilState, useRecoilValue } from "recoil";
import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";
import { labelDataListState, milestoneDataListState } from "@/stores/tabAtoms";
import API from "@/Utils/api";
import { userLoggedIn } from "@/stores/loginAtoms";

type deleteButtonPropType = {
  id?: number;
  type: string;
};

const DeleteButton = ({ id, type }: deleteButtonPropType) => {
  const [labelDataList, setLabelDataList] = useRecoilState(labelDataListState);
  const [milestoneDataList, setMilestoneDataList] = useRecoilState(
    milestoneDataListState
  );
  const loginData = useRecoilValue(userLoggedIn);
  const handleDeleteClick = () => {
    type === "label"
      ? API.delete(`/label/${id}`, loginData.userToken).then((res) => {
          if (res.ok) {
            const modified = labelDataList.filter((label) => label.id !== id);
            setLabelDataList(modified);
            API.get(`/label`, loginData.userToken);
          }
        })
      : API.delete(`/milestone/${id}`, loginData.userToken).then((res) => {
          if (res.ok) {
            const modified = milestoneDataList.filter(
              (mimlestone) => mimlestone.id !== id
            );
            setMilestoneDataList(modified);
            API.get(`/milestone`, loginData.userToken);
          }
        });
    API.get(`/label`, loginData.userToken);
    API.get(`/milestone`, loginData.userToken);
  };

  return (
    <S.TableButtonDiv onClick={handleDeleteClick}>
      <Icon.TrashIcon />
      삭제
    </S.TableButtonDiv>
  );
};

export default DeleteButton;
