import { IssueTable as S } from "../../../../HomeStyles";
import CheckButton from "./CheckButton";
import IssueDescription from "./IssueDescription";
import IssueDropDownSymbol from "./IssueDropDownSymbol";
import IssueTitle from "./IssueTitle";
import IssueLabel from "./IssueLabel";

type IssueTableRowProps = {
  issue: IssueObj;
};

interface IssueObj {
  id: number;
  title: string;
  number: number;
  author: authorType;
  created_time: string;
  milestone: string;
  isOpen: boolean;
  asignee: object[];
  label: object[];
}

type authorType = {
  name: string;
  id: number;
};

const IssueTableRow = ({ issue }: IssueTableRowProps) => {
  return (
    <S.TableRow>
      <S.TableRowLeft>
        <CheckButton issueId={issue.id} />
        <S.IssueInfoDiv>
          <S.IssueInfoTop>
            <IssueTitle issueTitle={issue.title} />
            <IssueLabel />
          </S.IssueInfoTop>
          <IssueDescription
            issueNumber={issue.number}
            author={issue.author}
            createdTime={issue.created_time}
          />
        </S.IssueInfoDiv>
      </S.TableRowLeft>
      <IssueDropDownSymbol />
    </S.TableRow>
  );
};

export default IssueTableRow;
