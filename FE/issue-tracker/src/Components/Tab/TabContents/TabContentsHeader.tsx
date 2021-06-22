import { useRecoilValue } from "recoil";
import { LabelMilestoneTable as S, TabAssets as Icon } from "../TabStyles";
import {
  currentTabState,
  labelDataState,
  milestoneDataState,
} from "../../../stores/tabAtoms";

const TabContentsHeader = () => {
  const tabState = useRecoilValue(currentTabState);
  const labelDatas = useRecoilValue(labelDataState);
  const milestoneDatas = useRecoilValue(milestoneDataState);

  return (
    <S.TableHeader>
      {tabState === "label" ? (
        <S.TableHeaderLeft>
          <S.TableTh>{labelDatas ? labelDatas.length : 0}개의 레이블</S.TableTh>
        </S.TableHeaderLeft>
      ) : (
        <S.TableHeaderLeft>
          <S.TableTh>
            <Icon.MilestoneTag />
            열린 마일스톤({milestoneDatas ? milestoneDatas.length : 0})
          </S.TableTh>
          <S.TableTh>
            <Icon.CloseMileStoneTag />
            닫힌 마일스톤(0)
          </S.TableTh>
        </S.TableHeaderLeft>
      )}
    </S.TableHeader>
  );
};

export default TabContentsHeader;
