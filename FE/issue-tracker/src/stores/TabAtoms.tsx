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

export const addNewLabelTitleState = atom<string | undefined>({
  key: "addNewLabelTitleState",
  default: "",
});

export const addNewLabelDescriptionState = atom<string | undefined>({
  key: "addNewLabelDescriptionState",
  default: "",
});

export const addNewLabelBackgroundState = atom<string | undefined>({
  key: "addNewLabelBackgroundState",
  default: "",
});

export const addnewLabelFontColor = atom<string | undefined>({
  key: "addnewLabelFontColor",
  default: "black",
});

export const labelDataState = atom<labelType[]>({
  key: "labelDataState",
  default: [],
});

export const milestoneDataState = atom<milestoneType[]>({
  key: "milestoneDataState",
  default: [],
});

export const addNewMilestoneTitleState = atom<string | undefined>({
  key: "addNewMilestoneTitleState",
  default: "",
});

export const addNewMilestoneDescriptionState = atom<string | undefined>({
  key: "addNewMilestoneDescriptionState",
  default: "",
});

export const addNewMilestoneDateState = atom<string | undefined>({
  key: "addNewMilestoneDateState",
  default: "",
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
    created_time: "",
    due_date: "",
    opened_issue_count: 0,
    closed_issue_count: 0,
  },
});
