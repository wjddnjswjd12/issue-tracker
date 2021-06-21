import { LabelMilestoneTable as S } from "../TabStyles";
import TabContentRow from "./TabContentRow/TabContentRow";
import TabContentsHeader from "./TabContentsHeader";
import { currentTabState } from "../../../stores/TabAtoms";
import { useRecoilValue } from "recoil";
import useFetch from "@/Utils/useFetch";
import { milestoneType } from "../TabTypes";

const TabContents = () => {
  const tabState = useRecoilValue(currentTabState);
  const { fetchedData, loading, error } = useFetch("/label");
  console.log("여기다", fetchedData, loading, error);

  return (
    <S.IssueTable>
      <TabContentsHeader />
      <S.TableBody>
        {tabState === "label" ? (
          [...Array(3)].map((v, i) => <TabContentRow id={i} key={i} />)
        ) : (
          <MilestoneView />
        )}
      </S.TableBody>
    </S.IssueTable>
  );
};

const MilestoneView = () => {
  const { fetchedData, loading } = useFetch("/milestone");

  return (
    <>
      {fetchedData &&
        (fetchedData as milestoneType[]).map((milestone, i) => (
          <TabContentRow id={i} rowData={milestone} key={i} />
        ))}
      {loading && <div>loading...</div>}
    </>
  );
};

export default TabContents;
