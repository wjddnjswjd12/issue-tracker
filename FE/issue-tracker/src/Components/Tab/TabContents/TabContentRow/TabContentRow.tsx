import { LabelMilestoneTable as S } from "../../TabStyles";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Label from "@/Components/AtomicComponents/Label";
import ContentDescription from "./ContentDescription";
import {
  toggleEditLabelState,
  currentTabState,
  toggleEditMilestoneState,
} from "../../../../stores/TabAtoms";
import { useRecoilValue } from "recoil";
import LabelEditModal from "../../TabModal/Label/LabelEditModal";
import ContentTitle from "./ContentTitle";
import RangeBar from "./RangeBar";
import RangeDescription from "./RangeDescription";
import MilestoneEditModal from "../../TabModal/Milestone/MilestoneEditModal";
import { milestoneType, labelType } from "../../TabTypes";

type tabContentProp = {
  id: number;
  rowData?: milestoneType;
};

const TabContentRow = ({ id, rowData }: tabContentProp) => {
  const EditLabelState = useRecoilValue(toggleEditLabelState);
  const EditMilestoneState = useRecoilValue(toggleEditMilestoneState);

  const tabState = useRecoilValue(currentTabState);

  return (
    <>
      {tabState === "label" ? (
        <>
          {EditLabelState.isOpen && id === EditLabelState.rowId ? (
            <LabelEditModal id={id} />
          ) : (
            <S.TableRow>
              <S.TableRowContentLeft>
                <S.LabelWrapper>
                  <Label
                    label="JennyJJang"
                    fontcolor="white"
                    backgroundcolor="green"
                  />
                </S.LabelWrapper>
                <ContentDescription />
              </S.TableRowContentLeft>
              <S.TableRowButtonDiv>
                <EditButton id={id} />
                <DeleteButton />
              </S.TableRowButtonDiv>
            </S.TableRow>
          )}
        </>
      ) : (
        <>
          {EditMilestoneState.isOpen && id === EditMilestoneState.rowId ? (
            <MilestoneEditModal id={id} />
          ) : (
            <MilestoneRow id={id} rowData={rowData} />
          )}
        </>
      )}
    </>
  );
};

const MilestoneRow = ({ id, rowData }: tabContentProp) => {
  return (
    <S.TableRow>
      <S.TableRowContentLeft>
        <S.TableRowContentLeftCol>
          <ContentTitle title={rowData?.title} due_date={rowData?.due_date} />
          <ContentDescription description={rowData?.description} />
        </S.TableRowContentLeftCol>
      </S.TableRowContentLeft>
      <S.TableRowContentRight>
        <S.TableRowButtonDiv>
          <EditButton id={id} />
          <DeleteButton />
        </S.TableRowButtonDiv>
        <RangeBar />
        <RangeDescription
          openedIssueCount={rowData?.opened_issue_count}
          closedIssueCount={rowData?.closed_issue_count}
        />
      </S.TableRowContentRight>
    </S.TableRow>
  );
};

export default TabContentRow;
