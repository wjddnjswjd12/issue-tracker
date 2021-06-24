import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const IssueNumber = ({ issueNo }: { issueNo: number }) => {
  return <S.IssueNumber>#{issueNo}</S.IssueNumber>;
};

export default IssueNumber;
