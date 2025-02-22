import { Link } from "react-router-dom";
import { Home as S } from "../HomeStyles";
import CreateIssueButton from "./CreateIssueButton";
import IssueSearchBar from "./IssueSearchBar";
import IssueTable from "./IssueTable/IssueTable";
import LabelButton from "./LabelButton";
import MileStoneButton from "./MileStoneButton";

const HomeContents = () => {
  return (
    <S.HomeContent>
      <S.ContentNavDiv>
        <IssueSearchBar />
        <S.ContentNavRight>
          <Link to="/issue/tab">
            <S.ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <LabelButton />
              <MileStoneButton />
            </S.ButtonGroup>
          </Link>
          <CreateIssueButton />
        </S.ContentNavRight>
      </S.ContentNavDiv>
      <IssueTable />
    </S.HomeContent>
  );
};

export default HomeContents;
