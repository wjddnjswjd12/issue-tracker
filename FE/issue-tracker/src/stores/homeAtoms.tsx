import { atom, selector } from "recoil";

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

interface IssueObj {
  id: number;
  title: string;
  number: number;
  author: authorType;
  created_time: string;
  milestone: string;
  isOpen: boolean;
  asignee: object[];
  label: object[];
}
type authorType = {
  name: string;
  id: number;
};

export const IssueList = atom<IssueObj[]>({
  key: "IssueList",
  default: [],
});

export const searchBarValue = atom<any[]>({
  key: "searchBarValue",
  default: ["is:issue", "", ""],
});
