import CircularProgress from "@material-ui/core/CircularProgress";
import { useRecoilValue } from "recoil";
import { LabelMilestoneTable as S } from "../TabStyles";
import TabContentRow from "./TabContentRow/TabContentRow";
import TabContentsHeader from "./TabContentsHeader";
import {
  currentTabState,
  labelDataListState,
  milestoneDataListState,
} from "@/stores/tabAtoms";
import { milestoneType, labelType } from "../tabTypes";

type tabContentsPropType = {
  loading: boolean | null;
};

const TabContents = ({ loading }: tabContentsPropType) => {
  const tabState = useRecoilValue(currentTabState);

  return (
    <S.IssueTable>
      <TabContentsHeader />
      <S.TableBody>
        {tabState === "label" ? (
          <LabelContents loading={loading} />
        ) : (
          <MilestoneContents loading={loading} />
        )}
      </S.TableBody>
    </S.IssueTable>
  );
};

const MilestoneContents = ({ loading }: tabContentsPropType) => {
  const milestoneList = useRecoilValue(milestoneDataListState);

  return (
    <>
      {milestoneList &&
        (milestoneList as milestoneType[]).map((milestone, i) => (
          <TabContentRow milestoneData={milestone} key={i} />
        ))}
      {loading && <CircularProgress />}
    </>
  );
};

const LabelContents = ({ loading }: tabContentsPropType) => {
  const labelDataList = useRecoilValue(labelDataListState);

  return (
    <>
      {labelDataList &&
        (labelDataList as labelType[]).map((label, i) => (
          <TabContentRow labelData={label} key={i} />
        ))}
      {loading && <CircularProgress />}
    </>
  );
};

export default TabContents;
