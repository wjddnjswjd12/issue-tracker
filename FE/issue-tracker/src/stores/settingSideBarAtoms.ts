import { atom } from "recoil";

export const dropDownCategoriesState = atom({
  key: "dropDownCategoriesState",
  default: ["담당자", "레이블", "마일스톤"],
});

export const showDropDownState = {
  assignee: atom({
    key: "assignee",
    default: false,
  }),
  label: atom({
    key: "label",
    default: false,
  }),
  mileStone: atom({
    key: "mileStone",
    default: false,
  }),
  background: atom({
    key: "background",
    default: false,
  }),
};

export const usersState = atom({
  key: "usersState",
  default: [
    {
      id: 1,
      name: "Sally",
      image_url: "https://avatars.githubusercontent.com/u/59776016?v=4",
    },
    {
      id: 2,
      name: "Isaac",
      image_url: "https://avatars.githubusercontent.com/u/26297289?v=4",
    },
    {
      id: 3,
      name: "Jenny",
      image_url: "https://avatars.githubusercontent.com/u/71004200?v=4",
    },
    {
      id: 4,
      name: "쑤",
      image_url: "https://avatars.githubusercontent.com/u/75113784?v=4",
    },
    {
      id: 5,
      name: "Swing",
      image_url: "https://avatars.githubusercontent.com/u/69034766?v=4",
    },
    {
      id: 6,
      name: "Zeke",
      image_url: "https://avatars.githubusercontent.com/u/42647277?v=4",
    },
  ],
});

export const labelsState = atom({
  key: "labelsState",
  default: [
    {
      id: 1,
      title: "swing",
      description: "this is swing",
      color: "pink",
    },
    {
      id: 2,
      title: "jenny",
      description: "this is jenny",
      color: "red",
    },
  ],
});

export const mileStonesState = atom({
  key: "mileStonesState",
  default: [
    {
      id: 1,
      title: "백엔드",
      description: "백엔드 마일스톤",
      created_time: "2021-06-08 20:02",
      due_date: "2021-06-08",
      closedIssueCount: 1,
      openedIssueCount: 2,
    },
    {
      id: 2,
      title: "iOS",
      description: "iOS 마일스톤",
      created_time: "2021-06-08 22:02",
      due_date: "2021-06-08",
      closedIssueCount: 4,
      openedIssueCount: 5,
    },
    {
      id: 3,
      title: "프론트",
      description: "프론트 마일스톤",
      created_time: "2021-06-08 23:02",
      due_date: "2021-06-08",
      closedIssueCount: 2,
      openedIssueCount: 3,
    },
  ],
});

// export const
