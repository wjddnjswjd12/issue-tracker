import CircularProgress from "@material-ui/core/CircularProgress";
import { useRecoilValue } from "recoil";
import { LabelMilestoneTable as S } from "../TabStyles";
import TabContentRow from "./TabContentRow/TabContentRow";
import TabContentsHeader from "./TabContentsHeader";
import { currentTabState } from "../../../stores/TabAtoms";
import useFetch from "@/Utils/useFetch";
import { milestoneType, labelType } from "../TabTypes";

const TabContents = () => {
  const tabState = useRecoilValue(currentTabState);

  return (
    <S.IssueTable>
      <TabContentsHeader />
      <S.TableBody>
        {tabState === "label" ? <LabelContents /> : <MilestoneContents />}
      </S.TableBody>
    </S.IssueTable>
  );
};

const MilestoneContents = () => {
  const { fetchedData, loading } = useFetch("/milestone");

  return (
    <>
      {fetchedData &&
        (fetchedData as milestoneType[]).map((milestone, i) => (
          <TabContentRow id={i} milestoneData={milestone} key={i} />
        ))}
      {loading && <CircularProgress />}
    </>
  );
};

const LabelContents = () => {
  const { fetchedData, loading } = useFetch("/label");
  return (
    <>
      {fetchedData &&
        (fetchedData as labelType[]).map((label, i) => (
          <TabContentRow id={i} labelData={label} key={i} />
        ))}
      {loading && <CircularProgress />}
    </>
  );
};

export default TabContents;
