import PlusButton from "./PlusButton";
import SettingDropDown from "./SettingDropDown/SettingDropDown";
import CheckedItem from "./CheckedItem";
import { SettingSideBar as S } from "@/Components/AtomicComponents/AtomicComponentsStyles";

interface Props {
  id: string;
  category: string;
  type: string;
}

const SettingSideBarItem = ({ id, category, type }: Props) => {
  return (
    <S.SettingSideBarItem id={id}>
      <S.SettingSideBarTitle>
        {category}
        <PlusButton id={id} />
      </S.SettingSideBarTitle>
      <CheckedItem type={type} id={id} />
      <SettingDropDown id={id} />
    </S.SettingSideBarItem>
  );
};

export default SettingSideBarItem;
