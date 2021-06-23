import { IssueTable as S } from "../../../HomeStyles";
import IssueTableRow from "./IssueTableRow/IssueTableRow";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { IssueList, pipeFunctionState } from "@/stores/homeAtoms";
import { useEffect } from "react";
import useFetch from "@/Utils/useFetch";
import { IssueType } from "@/Components/Home/homeTypes";

const IssueTableBody = () => {
  const [issueList, setIssueList] = useRecoilState(IssueList);

  const pipeFnsArray = useRecoilValue(pipeFunctionState);
  const resetPipe = useResetRecoilState(pipeFunctionState);

  const { fetchedData, loading } = useFetch("/issue");

  const IssueDatas = pipeFnsArray
    ? Object.values(pipeFnsArray).reduce(
        (acc: IssueType[], fn: Function) => fn(acc),
        issueList
      )
    : issueList;

  useEffect(() => {
    setIssueList(fetchedData as IssueType[]);
    resetPipe();
  }, [fetchedData]);

  return (
    <S.TableBody>
      {IssueDatas &&
        IssueDatas?.map((issue: IssueType) => (
          <IssueTableRow issue={issue} key={issue.id} />
        ))}
      {loading && <div>loading..</div>}
    </S.TableBody>
  );
};

export default IssueTableBody;
