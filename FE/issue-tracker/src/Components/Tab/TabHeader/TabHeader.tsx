import { TabComponents as S, TabAssets as Icon } from "../TabStyles";
import AddTabButton from "./AddTabButton";
import { useSetRecoilState,useRecoilValue } from "recoil";
import { currentTabState,labelDataState } from "../../../stores/tabAtoms";

const TabHeader = () => {
  const setTabState = useSetRecoilState(currentTabState);

  const handleTabClick = (state: string) => {
    setTabState(state);
  };

  const labelDatas=useRecoilValue(labelDataState);

  return (
    <S.TabHeaderDiv>
      <S.ButtonGroup>
        <S.Button onClick={() => handleTabClick("label")}>
          <Icon.LabelTag /> 레이블 ({labelDatas?labelDatas.length:0})
        </S.Button>
        <S.Button onClick={() => handleTabClick("milestone")}>
          <Icon.MilestoneTag />
          마일스톤 (2)
        </S.Button>
      </S.ButtonGroup>
      <AddTabButton />
    </S.TabHeaderDiv>
  );
};

export default TabHeader;
