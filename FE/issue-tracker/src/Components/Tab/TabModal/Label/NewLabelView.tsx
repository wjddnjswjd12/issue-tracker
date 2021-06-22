import { useRecoilValue } from "recoil";
import Label from "@/Components/AtomicComponents/Label";
import {
  addLabelDataState,
  addnewLabelFontColor,
} from "../../../../stores/tabAtoms";

const NewLabelView = () => {
  const newlabelData = useRecoilValue(addLabelDataState);
  const labelFontColor = useRecoilValue(addnewLabelFontColor);

  const checkValidColor = (str: any) => {
    let s = new Option().style;
    s.color = str;
    if (s.color === str || /^#[0-9A-F]{6}$/i.test(str)) return true;
    else return false;
  };

  return (
    <Label
      backgroundcolor={
        checkValidColor(newlabelData.color) ? newlabelData.color : "gray"
      }
      label={newlabelData.title === "" ? "레이블제목" : newlabelData.title}
      fontcolor={labelFontColor}
    />
  );
};

export default NewLabelView;
