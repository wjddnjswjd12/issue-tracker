import PlusButton from "./PlusButton";
import SettingDropDown from "./SettingDropDown/SettingDropDown";
import CheckedItem from "./CheckedItem";
import { SettingSideBar as S } from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStyles";

interface Props {
  id: string;
  item: string;
}

const SettingSideBarItem = ({ id, item }: Props) => {
  return (
    <S.SettingSideBarItem id={id}>
      <S.SettingSideBarTitle>
        {item}
        <PlusButton id={id} />
      </S.SettingSideBarTitle>
      <CheckedItem id={id} />
      <SettingDropDown id={id} />
    </S.SettingSideBarItem>
  );
};

export default SettingSideBarItem;
