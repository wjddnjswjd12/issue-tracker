import { useSetRecoilState } from "recoil";
import { searchBarValue } from "@/stores/HomeAtoms";

const ModalCheckButton = ({ data }: any) => {
  const setSearchBarString = useSetRecoilState(searchBarValue);

  const getString = (str: string) => {
    switch (str) {
      case "open":
        setSearchBarString((searchBarString) => [
          searchBarString[0],
          `is:${str}`,
          searchBarString[2],
        ]);
        break;
      case "close":
        setSearchBarString((searchBarString) => [
          searchBarString[0],
          `is:${str}`,
          searchBarString[2],
        ]);
        break;
      case "assignee":
        setSearchBarString((searchBarString) => [
          searchBarString[0],
          searchBarString[1],
          `${str}:@me`,
        ]);
        break;

      case "writer":
        setSearchBarString((searchBarString) => [
          searchBarString[0],
          searchBarString[1],
          `${str}:@me`,
        ]);
        break;

      case "comment":
        setSearchBarString((searchBarString) => [
          searchBarString[0],
          searchBarString[1],
          `${str}:@me`,
        ]);
        break;
    }
  };

  const modalItemClickHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    getString((e.target as HTMLInputElement).value);
  };

  return (
    <input
      name="modalItem"
      type="radio"
      value={data.type}
      onClick={modalItemClickHandler}
    />
  );
};

export default ModalCheckButton;
