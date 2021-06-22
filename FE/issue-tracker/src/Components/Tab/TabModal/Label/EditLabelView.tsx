import { useRecoilValue } from "recoil";
import Label from "@/Components/AtomicComponents/Label";
import {
  editLabelDataState,
  addnewLabelFontColor,
} from "../../../../stores/tabAtoms";

const EditLabelView = () => {
  const editLabelData = useRecoilValue(editLabelDataState);

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
        checkValidColor(editLabelData.color) ? editLabelData.color : "gray"
      }
      label={editLabelData.title === "" ? "레이블제목" : editLabelData.title}
      fontcolor={labelFontColor}
    />
  );
};

export default EditLabelView;
