import { IssueDetailType } from "@/Components/IssueDetail/issueDetailTypes";
import { atom } from "recoil";

export const issueDetailState = atom<IssueDetailType>({
  key: "issueDetailState",
  default: {
    id: 0,
    title: "",
    number: 0,
    author: {
      id: 0,
      name: "",
      image_url: "",
    },
    assignee: [],
    created_time: "",
    milestone: {
      id: 0,
      title: "",
      closed_issue_count: 0,
      opened_issue_count: 0,
    },
    labels: [],
    open: false,
    comments: [],
  },
});

export const editTitleFlagState = atom({
  key: "editTitleFlagState",
  default: false,
});

export const editCommentBoxState = atom({
  key: "editCommentBoxState",
  default: { isShow: false, id: 0 },
});

export const newCommentState = atom({
  key: "newCommentState",
  default: "",
});
