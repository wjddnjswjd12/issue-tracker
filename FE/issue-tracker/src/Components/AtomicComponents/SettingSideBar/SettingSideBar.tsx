import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  ItemsState,
  showDropDownState,
} from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStore";
import SettingSideBarItem from "./SettingSideBarItem";
import { SettingSideBar as S } from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStyles";

const SettingSideBar = () => {
  const items = useRecoilValue(ItemsState);
  const setShowAssigneeDropDown = useSetRecoilState(showDropDownState.assignee);
  const setShowLabelDropDown = useSetRecoilState(showDropDownState.label);
  const setShowMileStoneDropDown = useSetRecoilState(
    showDropDownState.mileStone
  );
  const [showBackground, setShowBackground] = useRecoilState(
    showDropDownState.background
  );

  const handleOnClick = () => {
    setShowAssigneeDropDown(false);
    setShowLabelDropDown(false);
    setShowMileStoneDropDown(false);
    setShowBackground(false);
  };

  return (
    <>
      <S.Background isShow={showBackground} onClick={handleOnClick} />
      <S.SettingSideBar>
        {items.map((item) => (
          <SettingSideBarItem key={item} id={item} item={item} />
        ))}
      </S.SettingSideBar>
    </>
  );
};

export default SettingSideBar;
