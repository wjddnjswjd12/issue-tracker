import { Link } from "react-router-dom";
import { Home as S } from "../HomeStyles";

const CreateIssueButton = () => {
  return (
    <Link to="/issue/new">
      <S.WriteIssueBtn>+ 이슈작성</S.WriteIssueBtn>
    </Link>
  );
};

export default CreateIssueButton;
