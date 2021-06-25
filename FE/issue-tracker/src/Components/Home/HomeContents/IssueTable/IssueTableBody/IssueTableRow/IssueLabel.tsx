import Label from "@/Components/AtomicComponents/Label";
import { issueLabelType } from "@/Components/Home/homeTypes";

const IssueLabel = ({ labels }: { labels: issueLabelType[] }) => {
  console.log(labels);
  return (
    <>
      {labels?.map((label) => (
        <Label
          label={label.title}
          backgroundcolor={label.color}
          fontcolor="white"
        />
      ))}
    </>
  );
};

export default IssueLabel;
