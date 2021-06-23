import { useRecoilState } from "recoil";
import { searchBarValue, pipeFunctionState } from "@/stores/homeAtoms";
import {
  getLabelFilteredData,
  getMilestoneFilteredData,
  getAuthorFilteredData,
} from "@/Utils/filterData";

type filterItemObjType = {
  [index: string]: () => void;
};

type categoryItemObjType = {
  [index: string]: (param: string) => void;
};

const ModalCheckButton = ({ data, modalType, modalTitle }: any) => {
  const [searchBarString, setSearchBarString] = useRecoilState(searchBarValue);

  const filterClickObj: filterItemObjType = {
    open: () => setSearchBarString({ ...searchBarString, isOpen: `is: open` }),

    close: () =>
      setSearchBarString({ ...searchBarString, isOpen: `is: close` }),

    assignee: () =>
      setSearchBarString({ ...searchBarString, myFilter: `assignee:@me` }),

    writer: () =>
      setSearchBarString({ ...searchBarString, author: `author:@me` }),

    comment: () =>
      setSearchBarString({ ...searchBarString, myFilter: `comment:@me` }),
  };

  const categoryClickObj: categoryItemObjType = {
    담당자: (asignee) => {
      setSearchBarString({
        ...searchBarString,
        asignee: `assignee:${asignee}`,
      });
    },
    작성자: (author) => {
      setSearchBarString({ ...searchBarString, author: `author:${author}` });
    },
    레이블: (label) => {
      setSearchBarString({ ...searchBarString, label: `label:${label}` });
    },
    마일스톤: (milestone) => {
      setSearchBarString({
        ...searchBarString,
        milestone: `milestone:${milestone}`,
      });
    },
  };

  const [pipeFnsState, setPipeFnsState] = useRecoilState(pipeFunctionState);

  const filterItemClickHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const clickedItem = (e.target as HTMLInputElement).value;
    filterClickObj[clickedItem]();
  };

  const categoryItemClickHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const clickedItem = (e.target as HTMLInputElement).value;
    const clickedModal = (e.target as HTMLInputElement).name;
    categoryClickObj[clickedModal](clickedItem);

    if (clickedModal === "레이블")
      setPipeFnsState({
        ...pipeFnsState,
        label: getLabelFilteredData(clickedItem),
      });
    else if (clickedModal === "마일스톤")
      setPipeFnsState({
        ...pipeFnsState,
        milestone: getMilestoneFilteredData(clickedItem),
      });
    else if (clickedModal === "작성자")
      setPipeFnsState({
        ...pipeFnsState,
        author: getAuthorFilteredData(clickedItem),
      });
  };

  return modalType === "filter" ? (
    <input
      name={modalTitle}
      type="radio"
      value={data.type}
      onClick={filterItemClickHandler}
    />
  ) : (
    <input
      name={modalTitle}
      type="radio"
      value={data}
      onClick={categoryItemClickHandler}
    />
  );
};

export default ModalCheckButton;
