import { useRecoilValue, useRecoilState } from "recoil";
import {
  issueDetailState,
  editTitleFlagState,
} from "@/stores/issueDetailAtoms";
import TextArea from "@/Components/AtomicComponents/TextArea/TextArea";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";

const Title = ({ title }: { title: string }) => {
  const editTitleFlag = useRecoilValue(editTitleFlagState);
  const [issueTitle, setIssueTitle] = useRecoilState(issueDetailState);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIssueTitle({ ...issueTitle, title: e.target.value });
  };

  return editTitleFlag ? (
    <TextArea
      value={issueTitle.title}
      placeholder={title}
      rows={1}
      handleOnChange={handleOnChange}
    />
  ) : (
    <S.Title>{title}</S.Title>
  );
};

export default Title;
