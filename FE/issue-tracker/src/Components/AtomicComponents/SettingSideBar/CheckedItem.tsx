import { useRecoilValue } from "recoil";
import { SettingSideBar as S } from "@/Components/AtomicComponents/AtomicComponentsStyles";
import { issueDetailState } from "@/stores/issueDetailAtoms";
import { newIssueState } from "@/stores/newIssueAtoms";
import { userDataListState } from "@/stores/homeAtoms";
import { labelDataListState, milestoneDataListState } from "@/stores/tabAtoms";
import Label from "../Label";

interface Props {
  id: string;
  type: string;
}

const CheckedItem = ({ id, type }: Props) => {
  const issueDetailData = useRecoilValue(issueDetailState);
  const newIssueDataState = useRecoilValue(newIssueState);
  const labelDatas = useRecoilValue(labelDataListState);
  const milestoneDatas = useRecoilValue(milestoneDataListState);
  const userDatas = useRecoilValue(userDataListState);

  const addedMile = milestoneDatas.find(
    (mile) => mile.id === newIssueDataState.milestone_id
  );

  console.log("레이블", labelDatas);
  const makeCheckedItem = () => {
    let item;

    console.log("he", issueDetailData);

    if (id === "담당자") {
      item = (
        <S.CheckedItem>
          {type === "detailPage" ? (
            <>
              {issueDetailData &&
                issueDetailData.assignee?.map((user) => (
                  <S.CheckedUser>
                    <S.CheckedUserImage />
                    {user}
                  </S.CheckedUser>
                ))}
            </>
          ) : (
            <>
              {newIssueDataState.assignee_id.map((assigneeId) => {
                const addedAssignee = userDatas.find(
                  (user) => user.id === assigneeId
                );
                return (
                  <S.CheckedUser>
                    <S.CheckedUserImage src={addedAssignee?.image_url} />
                    {addedAssignee?.name}
                  </S.CheckedUser>
                );
              })}
            </>
          )}
        </S.CheckedItem>
      );
    } else if (id === "레이블") {
      item = (
        <S.CheckedItem>
          {type === "detailPage" ? (
            <S.CheckedLabelWrapper>
              {issueDetailData &&
                issueDetailData.labels?.map((label) => (
                  <Label label={label.title} backgroundcolor={label.color} />
                ))}
            </S.CheckedLabelWrapper>
          ) : (
            <S.CheckedLabelWrapper>
              {newIssueDataState.label_ids.map((labelId) => {
                const addedLabel = labelDatas?.find(
                  (label) => label.id === labelId
                );
                return (
                  <Label
                    label={addedLabel?.title}
                    backgroundcolor={addedLabel?.color}
                  />
                );
              })}
            </S.CheckedLabelWrapper>
          )}
        </S.CheckedItem>
      );
    } else {
      item = (
        <S.CheckedItem>
          {newIssueDataState.milestone_id !== 0 ? (
            <>
              <input type="range" step={1} max={5} value={4} />
              <S.CheckedUser>{addedMile?.title}</S.CheckedUser>
            </>
          ) : (
            <></>
          )}
        </S.CheckedItem>
      );
    }

    return item;
  };

  return <>{makeCheckedItem()}</>;
};

export default CheckedItem;
