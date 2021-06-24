import { useRecoilValue } from "recoil";
import { SettingSideBar as S } from "@/Components/AtomicComponents/AtomicComponentsStyles";
import { issueDetailState } from "@/stores/issueDetailAtoms";

interface Props {
  id: string;
  type: string;
}

const CheckedItem = ({ id, type }: Props) => {
  const issueDetailData = useRecoilValue(issueDetailState);

  const makeCheckedItem = () => {
    let item;

    console.log(issueDetailData);

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
            <S.CheckedUser>
              <S.CheckedUserImage />
              유저
            </S.CheckedUser>
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
                  <S.CheckedLabel labelColor={"pink"}>
                    {label.title}
                  </S.CheckedLabel>
                ))}
            </S.CheckedLabelWrapper>
          ) : (
            <S.CheckedLabelWrapper>
              <S.CheckedLabel labelColor={"pink"}>swing</S.CheckedLabel>
            </S.CheckedLabelWrapper>
          )}
        </S.CheckedItem>
      );
    } else {
      item = (
        <S.CheckedItem>
          <input type="range" step={1} max={5} value={4} />
          <S.CheckedUser>마일스톤</S.CheckedUser>
        </S.CheckedItem>
      );
    }

    return item;
  };

  return <>{makeCheckedItem()}</>;
};

export default CheckedItem;
