import { useRecoilValue } from "recoil";
import { checkedItemState } from "../../../../../stores/HomeAtoms";
import { IssueTable as S } from "../../../HomeStyles";
import IssueDropDownCategory from "./IssueDropDownCategory";
import IssueToggleCategory from "./IssueToggleCategory";
import TotalIssueCheckButton from "./TotalIssueCheckButton";

const IssueTableHeader = () => {
  const checkedState = useRecoilValue(checkedItemState);

  return (
    <S.TableHeader>
      <S.TableHeaderLeft>
        <TotalIssueCheckButton />
        {checkedState.size ? (
          <>{`${checkedState.size}개`}</>
        ) : (
          <IssueToggleCategory />
        )}
      </S.TableHeaderLeft>
      <IssueDropDownCategory />
    </S.TableHeader>
  );
};

export default IssueTableHeader;
