import { Link } from "react-router-dom";
import { IssueTable as S } from "../../../../HomeStyles";
import CheckButton from "./CheckButton";
import IssueDescription from "./IssueDescription";
import IssueDropDownSymbol from "./IssueDropDownSymbol";
import IssueTitle from "./IssueTitle";
import IssueLabel from "./IssueLabel";
import { IssueType } from "@/Components/Home/homeTypes";

type IssueTableRowProps = {
  issue: IssueType;
};

const IssueTableRow = ({ issue }: IssueTableRowProps) => {
  return (
    <S.TableRow>
      <S.TableRowLeft>
        <CheckButton issueId={issue.id} />
        <S.IssueInfoDiv>
          <S.IssueInfoTop>
            <Link to={`/issue/detail/${issue.id}`}>
              <IssueTitle issueTitle={issue.title} />
            </Link>
            <IssueLabel labels={issue.labels} />
          </S.IssueInfoTop>
          <IssueDescription
            issueNumber={issue.number}
            author={issue.author}
            createdTime={issue.created_time}
            milestone={issue.milestone}
          />
        </S.IssueInfoDiv>
      </S.TableRowLeft>
      <IssueDropDownSymbol author={issue.author} />
    </S.TableRow>
  );
};

export default IssueTableRow;
