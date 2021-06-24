import {
  IssueTable as S,
  HomeAssets as Icon,
} from "@/Components/Home/HomeStyles";
import { issueMilestoneType, authorType } from "@/Components/Home/homeTypes";

type IssueDescriptionProps = {
  issueNumber: number;
  author: authorType;
  createdTime: string;
  milestone: issueMilestoneType;
};

const IssueDescription = ({
  issueNumber,
  author,
  createdTime,
  milestone,
}: IssueDescriptionProps) => {
  console.log(author);
  return (
    <S.IssueInfoBottom>
      <span>{issueNumber}</span>
      <span>
        {`${author.name} `}
        {createdTime}
      </span>
      <span>
        <Icon.MilestoneTag />
        {milestone ? milestone.title : "지정된 마일스톤 없음"}
      </span>
    </S.IssueInfoBottom>
  );
};

export default IssueDescription;
