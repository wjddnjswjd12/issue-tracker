import { IssueTable as S } from "../../../HomeStyles";
import IssueTableRow from "./IssueTableRow/IssueTableRow";
import { useRecoilState } from "recoil";
import { IssueList } from "@/stores/homeAtoms";
import { useEffect } from "react";
import useFetch from "@/Utils/useFetch";
import { IssueType } from "@/Components/Home/homeTypes";

const IssueTableBody = () => {
  const [issueList, setIssueList] = useRecoilState(IssueList);

  const { fetchedData, loading } = useFetch("/issue");

  useEffect(() => {
    setIssueList(fetchedData as IssueType[]);
  }, [fetchedData]);

  return (
    <S.TableBody>
      {issueList &&
        issueList?.map((issue, i) => (
          <IssueTableRow issue={issue} key={issue.id} />
        ))}
      {loading && <div>loading..</div>}
    </S.TableBody>
  );
};

export default IssueTableBody;
