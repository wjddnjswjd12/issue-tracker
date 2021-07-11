import { LabelMilestoneTable as S } from "../../TabStyles";

type rangeDescriptionProp = {
  openedIssueCount?: number;
  closedIssueCount?: number;
};

const RangeDescription = ({
  openedIssueCount,
  closedIssueCount,
}: rangeDescriptionProp) => {
  return (
    <S.RangeDescription>
      <div>70%</div>
      <div>
        열린 이슈 {openedIssueCount} 닫힌 이슈 {closedIssueCount}
      </div>
    </S.RangeDescription>
  );
};

export default RangeDescription;
