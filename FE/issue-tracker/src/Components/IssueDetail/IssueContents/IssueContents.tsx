import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { issueDetailState, newCommentState } from "@/stores/issueDetailAtoms";
import SettingSideBar from "@/Components/AtomicComponents/SettingSideBar/SettingSideBar";
import CommentBox from "./CommentBox/CommentBox";
import IssueDeleteButton from "./IssueDeleteButton";
import Editor from "@/Components/AtomicComponents/Editor/Editor";
import SubmitButton from "./SubmitButton";
import UserImage from "./UserImage";
import { IssueDetail as S } from "@/Components/IssueDetail/IssueDetailStyles";
import { IssueDetailType } from "../issueDetailTypes";

type IssueDetailContentsType = {
  issue: IssueDetailType;
};

const IssueContents = ({ issue }: IssueDetailContentsType) => {
  const [newComment, setNewComment] = useRecoilState(newCommentState);
  const [disabled, setDisabled] = useState(true);

  const handleOnChange = (e: string) => {
    if (e.length <= 0) setDisabled(true);
    else setDisabled(false);
    setNewComment(e);
  };

  return (
    <S.IssueContentsWrapper>
      <S.IssueContents>
        {issue.comments?.map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
        <S.TextAreaWrapper>
          <UserImage imgUrl={issue.author.image_url} />
          <Editor
            value={"코멘트를 입력하세요"}
            height={300}
            visiableDragbar={false}
            hideToolbar={true}
            handleOnChange={handleOnChange}
          />
        </S.TextAreaWrapper>
        <SubmitButton
          innerText={"코멘트 작성"}
          issueNumber={issue.number}
          newComment={newComment}
          disabled={disabled}
        />
      </S.IssueContents>
      <S.NavWrapper>
        <SettingSideBar type="detailPage" />
        <IssueDeleteButton />
      </S.NavWrapper>
    </S.IssueContentsWrapper>
  );
};

export default IssueContents;
