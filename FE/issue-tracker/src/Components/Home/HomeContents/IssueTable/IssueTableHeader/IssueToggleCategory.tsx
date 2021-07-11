import { useSetRecoilState } from "recoil";
import { IssueTable as S, HomeAssets as Icon } from "../../../HomeStyles";
import { openCloseIssueToggle } from "@/stores/homeAtoms";

const IssueToggleCategory = () => {
  const setIsOpen = useSetRecoilState(openCloseIssueToggle);

  return (
    <S.TableHeaderToggleDiv>
      <div onClick={() => setIsOpen(true)}>
        <S.TableTh>
          <Icon.IssueMark />
          열린 이슈
        </S.TableTh>
      </div>
      <div onClick={() => setIsOpen(false)}>
        <S.TableTh>
          <Icon.CloseIssueMark />
          닫힌 이슈
        </S.TableTh>
      </div>
    </S.TableHeaderToggleDiv>
  );
};

export default IssueToggleCategory;
