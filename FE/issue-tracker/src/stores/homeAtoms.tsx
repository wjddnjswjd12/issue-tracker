import { atom, selector } from "recoil";
import { IssueType, userType } from "@/Components/Home/homeTypes";

export const checkedItemState = atom({
  key: "checkedItemState",
  default: new Set(),
});

export const checkedItemsCountState = selector({
  key: "checkedItemsCountState",
  get: ({ get }) => {
    const checkedItems = get(checkedItemState);
    return checkedItems.size;
  },
});

export const openCloseIssueToggle = atom({
  key: "OpenCloseIssueToggle",
  default: true,
});

export const filterModalOpenState = atom({
  key: "filterModalOpenState",
  default: false,
});

export const IssueModalState = atom({
  key: "IssueModalState",
  default: false,
});

export const categoryModalOpenState = atom<{
  openedModalTitle: string | any;
  isOpen: boolean;
}>({
  key: "categoryModalOpenState",
  default: {
    openedModalTitle: "",
    isOpen: false,
  },
});

export const editOpenCloseIssueModalState = atom({
  key: "editOpenCloseIssueModalState",
  default: false,
});

export const IssueList = atom<IssueType[]>({
  key: "IssueList",
  default: [],
});

export const searchBarValue = atom<any>({
  key: "searchBarValue",
  default: {
    isIssue: "is: issue",
    isOpen: "",
    myFilter: "",
    author: "",
    asignee: "",
    label: "",
    milestone: "",
  },
});

export const userDataListState = atom<userType[]>({
  key: "userDataList",
  default: [],
});

export const pipeFunctionState = atom<{
  [index: string]: Function;
}>({
  key: "pipeFunctionState",
  default: {},
});

export const filteredData = atom<IssueType[]>({
  key: "filteredData",
  default: [],
});
