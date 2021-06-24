import { useRecoilValue } from "recoil";
import { issueDetailState } from "@/stores/issueDetailAtoms";
import Title from "./Title";
import IssueNumber from "./IssueNumber";
import IssueControlButton from "./IssueControlButton";
import Description from "./Description";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";
import { IssueDetailType } from "../issueDetailTypes";

type IssueDetailHeaderType = {
  issue: IssueDetailType;
};

const IssueDetailHeader = ({ issue }: IssueDetailHeaderType) => {
  return (
    <S.IssueDetailHeader>
      <S.HeaderUpper>
        <S.TitleWrapper>
          <Title title={issue.title} />
          <IssueNumber issueNo={issue.id} />
        </S.TitleWrapper>
        <div>
          <IssueControlButton innerText={"제목 편집"} />
          <IssueControlButton
            innerText={issue.open ? "이슈 닫기" : "이슈 열기"}
          />
        </div>
      </S.HeaderUpper>
      <Description issue={issue} />
    </S.IssueDetailHeader>
  );
};

export default IssueDetailHeader;
