import { useRecoilState, useRecoilValue } from "recoil";
import {
  editTitleFlagState,
  issueDetailState,
} from "@/stores/issueDetailAtoms";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

interface Props {
  innerText: string;
}

const IssueControlButton = ({ innerText }: Props) => {
  const [editTitleFlag, setEditTitleFlag] = useRecoilState(editTitleFlagState);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const editButton = (e.target as HTMLElement).closest("button")?.dataset
      .innerText;
    if (editButton === "제목 편집") {
      if (editTitleFlag === true) {
        // 이슈 업데이트 api 사용
      }
      setEditTitleFlag((prev) => !prev);
    } else if (editButton === "이슈 닫기") {
      // 이슈 닫기이면 이슈 닫기 api
    } else {
      // 이슈 열기이면 이슈 열기 api
    }
  };

  return (
    <S.IssueControlButton
      data-inner-text={innerText}
      onClick={handleOnClick}
      variant="outlined"
      color="primary"
    >
      {innerText.includes("제목") ? <BorderColorIcon /> : <DeleteOutlineIcon />}
      {innerText}
    </S.IssueControlButton>
  );
};

export default IssueControlButton;
