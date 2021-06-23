import { atom } from "recoil";
import { milestoneType, labelType } from "@/Components/Tab/tabTypes";

export const toggleAddNewLabelState = atom({
  key: "toggleAddNewLabelState",
  default: false,
});

export const toggleEditLabelState = atom<{ isOpen: boolean; rowId?: number }>({
  key: "toggleEditLabelState",
  default: {
    isOpen: false,
    rowId: 0,
  },
});

export const toggleAddNewMilestoneState = atom({
  key: "toggleAddNewMilestoneState",
  default: false,
});

export const toggleEditMilestoneState = atom<{
  isOpen: boolean;
  rowId?: number;
}>({
  key: "toggleEditMilestoneState",
  default: {
    isOpen: false,
    rowId: 0,
  },
});

export const currentTabState = atom({
  key: "currentTabState",
  default: "label",
});

export const addnewLabelFontColor = atom<string | undefined>({
  key: "addnewLabelFontColor",
  default: "black",
});

export const labelDataListState = atom<labelType[]>({
  key: "labelDataListState",
  default: [],
});

export const milestoneDataState = atom<milestoneType[]>({
  key: "milestoneDataState",
  default: [],
});

export const addLabelDataState = atom({
  key: "addLabelDataState",
  default: {
    id: 0,
    title: "",
    description: "",
    color: "",
  },
});

export const editLabelDataState = atom<labelType>({
  key: "editLabelDataState",
  default: {
    id: 0,
    title: "",
    description: "",
    color: "",
  },
});

export const addMilestoneDataState = atom({
  key: "addMilestoneDataState",
  default: {
    id: 0,
    title: "",
    description: "",
    created_time: new Date().toUTCString(),
    due_date: "",
    opened_issue_count: 0,
    closed_issue_count: 0,
  },
});

export const editMilestoneDataState = atom<milestoneType>({
  key: "editMilestoneDataState",
  default: {
    id: 0,
    title: "",
    description: "",
    created_time: new Date().toUTCString(),
    due_date: "",
    opened_issue_count: 0,
    closed_issue_count: 0,
  },
});
