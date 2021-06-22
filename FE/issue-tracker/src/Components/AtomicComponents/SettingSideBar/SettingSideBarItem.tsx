import PlusButton from "./PlusButton";
import SettingDropDown from "./SettingDropDown/SettingDropDown";
import CheckedItem from "./CheckedItem";
import { SettingSideBar as S } from "@/Components/AtomicComponents/AtomicComponentsStyles";

interface Props {
  id: string;
  category: string;
}

const SettingSideBarItem = ({ id, category }: Props) => {
  return (
    <S.SettingSideBarItem id={id}>
      <S.SettingSideBarTitle>
        {category}
        <PlusButton id={id} />
      </S.SettingSideBarTitle>
      <CheckedItem id={id} />
      <SettingDropDown id={id} />
    </S.SettingSideBarItem>
  );
};

export default SettingSideBarItem;
