import { IssueTable as S } from "../../../HomeStyles";
import IssueTableRow from "./IssueTableRow/IssueTableRow";
import { useRecoilState } from "recoil";
import { IssueList } from "@/stores/homeAtoms";
import { useEffect } from "react";

const IssueTableBody = () => {
  const [issueList, setIssueList] = useRecoilState(IssueList);

  useEffect(() => {
    fetch("/issue")
      .then((res) => res.json())
      .then((response) => setIssueList(response.data));
  }, []);

  return (
    <S.TableBody>
      {issueList?.map((issue, i) => (
        <IssueTableRow issue={issue} key={issue.id} />
      ))}
    </S.TableBody>
  );
};

export default IssueTableBody;
