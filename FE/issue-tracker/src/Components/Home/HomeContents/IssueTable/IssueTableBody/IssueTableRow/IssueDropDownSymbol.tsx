import UserProfile from "@/Components/AtomicComponents/UserProfile";
import { authorType } from "@/Components/Home/homeTypes";

const IssueDropDownSymbol = ({ author }: { author: authorType }) => {
  return (
    <div>
      <UserProfile imgUrl={author.image_url} size={3} />
    </div>
  );
};

export default IssueDropDownSymbol;
