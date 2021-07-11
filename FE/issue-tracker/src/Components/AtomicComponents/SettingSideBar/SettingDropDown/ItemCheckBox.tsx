import { newIssueState } from "@/stores/newIssueAtoms";
import { useRecoilState } from "recoil";

const ItemCheckBox = ({
  content,
  id,
  imgUrl,
  header,
  color,
}: {
  content?: string;
  id?: number;
  imgUrl?: string;
  header?: string;
  color?: string;
}) => {
  const [newIssue, setNewIssue] = useRecoilState(newIssueState);
  console.log("바뀜", newIssue);
  const handleCheckClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (header === "담당자") {
      const checkAssignee = newIssue.assignee_ids.find(
        (assigneeId: any) => assigneeId === id
      );
      if (!checkAssignee) {
        setNewIssue({
          ...newIssue,
          assignee_ids: [...newIssue.assignee_ids, id as number],
        });
      } else {
        const modifiedAssigneeArray = newIssue.assignee_ids.filter(
          (assigneeId) => assigneeId !== id
        );
        setNewIssue({
          ...newIssue,
          assignee_ids: modifiedAssigneeArray,
        });
      }
    } else if (header === "레이블") {
      const checkLabel = newIssue.label_ids.find((labelId) => labelId === id);
      if (!checkLabel) {
        setNewIssue({
          ...newIssue,
          label_ids: [...newIssue.label_ids, id as number],
        });
      } else {
        const modifiedLabelArray = newIssue.label_ids.filter(
          (labelId) => labelId !== id
        );
        setNewIssue({
          ...newIssue,
          label_ids: modifiedLabelArray,
        });
      }
    } else if (header === "마일스톤") {
      setNewIssue({
        ...newIssue,
        milestone_id: id as number,
      });
    }
  };

  return (
    <>
      {header === "마일스톤" ? (
        <input
          name="milestone"
          type="radio"
          value={content}
          onChange={handleCheckClick}
        />
      ) : (
        <input type="checkbox" value={content} onChange={handleCheckClick} />
      )}
    </>
  );
};

export default ItemCheckBox;
