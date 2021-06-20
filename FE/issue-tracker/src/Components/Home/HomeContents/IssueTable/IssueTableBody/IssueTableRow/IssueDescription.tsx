import {
  IssueTable as S,
  HomeAssets as Icon,
} from "@/Components/Home/HomeStyles";

type IssueDescriptionProps = {
  issueNumber: number;
  author: authorType;
  createdTime: string;
};

type authorType = {
  name: string;
  id: number;
};

const IssueDescription = ({
  issueNumber,
  author,
  createdTime,
}: IssueDescriptionProps) => {
  console.log(author);
  return (
    <S.IssueInfoBottom>
      <span>{issueNumber}</span>
      <span>
        {author.name}
        {createdTime}
      </span>
      <span>
        <Icon.MilestoneTag />
        마일스톤
      </span>
    </S.IssueInfoBottom>
  );
};

export default IssueDescription;
