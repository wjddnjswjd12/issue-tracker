import { useSetRecoilState } from "recoil";
import { showDropDownState } from "@/stores/settingSideBarAtoms";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

interface Props {
  id: string;
}

const PlusButton = ({ id }: Props) => {
  const setAssigneeShowFlag = useSetRecoilState(showDropDownState.assignee);
  const setLabelShowFlag = useSetRecoilState(showDropDownState.label);
  const setMileStoneShowFlag = useSetRecoilState(showDropDownState.mileStone);
  const setBackgroundShowFlag = useSetRecoilState(showDropDownState.background);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setBackgroundShowFlag(true);
    const clicked = (e.target as HTMLElement).closest(`#${id}`);

    interface ObjType {
      [index: string]: () => void;
    }

    const action: ObjType = {
      담당자() {
        setAssigneeShowFlag((prev) => !prev);
        setLabelShowFlag(false);
        setMileStoneShowFlag(false);
      },
      레이블() {
        setLabelShowFlag((prev) => !prev);
        setAssigneeShowFlag(false);
        setMileStoneShowFlag(false);
      },
      마일스톤() {
        setMileStoneShowFlag((prev) => !prev);
        setAssigneeShowFlag(false);
        setLabelShowFlag(false);
      },
    };

    action[(clicked as HTMLElement).id]();
  };

  return (
    <IconButton onClick={handleOnClick}>
      <AddIcon />
    </IconButton>
  );
};

export default PlusButton;
