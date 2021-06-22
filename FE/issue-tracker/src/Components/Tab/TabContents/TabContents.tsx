import CircularProgress from "@material-ui/core/CircularProgress";
import { useRecoilValue, useRecoilState } from "recoil";
import { LabelMilestoneTable as S } from "../TabStyles";
import TabContentRow from "./TabContentRow/TabContentRow";
import TabContentsHeader from "./TabContentsHeader";
import {
  currentTabState,
  labelDataState,
  milestoneDataState,
} from "@/stores/tabAtoms";
import useFetch from "@/Utils/useFetch";
import { milestoneType, labelType } from "../tabTypes";
import { useEffect } from "react";

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
  const [milestoneList, setMilestoneList] = useRecoilState(milestoneDataState);

  useEffect(() => {
    setMilestoneList(fetchedData as milestoneType[]);
  }, [fetchedData]);

  return (
    <>
      {milestoneList &&
        (milestoneList as milestoneType[]).map((milestone, i) => (
          <TabContentRow id={i} milestoneData={milestone} key={i} />
        ))}
      {loading && <CircularProgress />}
    </>
  );
};

const LabelContents = () => {
  const { fetchedData, loading } = useFetch("/label");
  const [labelDataList, setLabelDataList] = useRecoilState(labelDataState);

  useEffect(() => {
    setLabelDataList(fetchedData as labelType[]);
  }, [fetchedData]);

  return (
    <>
      {labelDataList &&
        (labelDataList as labelType[]).map((label, i) => (
          <TabContentRow id={i} labelData={label} key={i} />
        ))}
      {loading && <CircularProgress />}
    </>
  );
};

export default TabContents;
