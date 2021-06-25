import { atom } from "recoil";
import { newIssueType } from "@/Components/NewIssue/newIssueType";

export const createButtonFlagState = atom({
  key: "createButtonFlagState",
  default: true,
});

export const newIssueState = atom<newIssueType>({
  key: "newIssueState",
  default: {
    title: "",
    assignee_ids: [],
    milestone_id: 0,
    label_ids: [],
    comment: "",
  },
});
