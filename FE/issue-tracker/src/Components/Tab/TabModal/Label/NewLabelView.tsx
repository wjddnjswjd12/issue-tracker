import { useRecoilValue } from "recoil";
import Label from "@/Components/AtomicComponents/Label";
import {
  addNewLabelTitleState,
  addNewLabelBackgroundState,
  addnewLabelFontColor,
} from "../../../../stores/tabAtoms";

const NewLabelView = () => {
  const labelTitle = useRecoilValue(addNewLabelTitleState);
  const labelBackgroundState = useRecoilValue(addNewLabelBackgroundState);
  const labelFontColor = useRecoilValue(addnewLabelFontColor);

  const checkValidColor = (str: string) => {
    let s = new Option().style;
    s.color = str;
    if (s.color === str || /^#[0-9A-F]{6}$/i.test(str)) return true;
    else return false;
  };

  return (
    <Label
      backgroundcolor={
        checkValidColor(labelBackgroundState) ? labelBackgroundState : "gray"
      }
      label={labelTitle === "" ? "레이블제목" : labelTitle}
      fontcolor={labelFontColor}
    />
  );
};

export default NewLabelView;
