import { useRecoilValue } from "recoil";
import { searchBarValue } from "../../../stores/HomeAtoms";
import {
  Home as S,
  FilterSearchBar as SB,
  HomeAssets as Icon,
} from "../HomeStyles";
import Filter from "./Filter/Filter";

const IssueSearchBar = () => {
  const searchString = useRecoilValue(searchBarValue);

  return (
    <S.ContentNavLeft>
      <Filter />
      <SB.SearchDiv>
        <Icon.SearchIcon />
        <SB.SearchInput placeholder="is:issue" value={searchString.join(" ")} />
      </SB.SearchDiv>
    </S.ContentNavLeft>
  );
};

export default IssueSearchBar;
