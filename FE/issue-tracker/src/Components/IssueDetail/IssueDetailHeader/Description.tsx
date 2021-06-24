import { useEffect } from "react";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";
import { IssueDetailType } from "../issueDetailTypes";

type DescriptionProps = {
  issue: IssueDetailType;
};

const Description = ({ issue }: DescriptionProps) => {
  useEffect(() => {
    if (!issue) return;
  }, []);

  const issueState = issue.open ? "열렸" : "닫혔";
  const issueStateBadgeText = issue.open ? "열린" : "닫힌";
  const description = `이슈가 ${issue.created_time} 전에 ${
    issue.author.name
  }님에 의해 ${issueState}습니다 • 코멘트 ${
    issue.comments?.length ? issue.comments.length : 0
  }개`;
  return (
    <S.Description>
      <S.IssueStateBadge isOpen={issue.open}>
        ✪ {issueStateBadgeText} 이슈
      </S.IssueStateBadge>
      {description}
    </S.Description>
  );
};

export default Description;
