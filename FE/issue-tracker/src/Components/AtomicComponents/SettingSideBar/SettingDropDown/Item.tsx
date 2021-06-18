import { useRecoilValue } from "recoil";
import {
  usersState,
  labelsState,
  mileStonesState,
} from "../SettingSideBarStore";
import MyIcon from "./MyIcon";
import ItemCheckBox from "./ItemCheckBox";
import { SettingSideBar as S } from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStyles";

interface Props {
  id: string;
}

const Item = ({ id }: Props) => {
  const users = useRecoilValue(usersState);
  const labels = useRecoilValue(labelsState);
  const mileStones = useRecoilValue(mileStonesState);

  const makeItems = () => {
    let items;
    if (id === "담당자") {
      items = users.map((user) => (
        <S.Item>
          <S.LeftItems>
            <MyIcon id={id} imgUrl={user.image_url} />
            <S.ItemText>{user.name}</S.ItemText>
          </S.LeftItems>
          <ItemCheckBox />
        </S.Item>
      ));
    } else if (id === "레이블") {
      items = labels.map((label) => (
        <S.Item>
          <S.LeftItems>
            <MyIcon id={id} labelColor={label.color} title={label.title} />
            <S.ItemText>{label.description}</S.ItemText>
          </S.LeftItems>
          <ItemCheckBox />
        </S.Item>
      ));
    } else {
      items = mileStones.map((mileStone) => (
        <S.Item>
          <S.LeftItems>
            <S.ItemText>{mileStone.title}</S.ItemText>
            <S.DueDate> Due by {mileStone.due_date}</S.DueDate>
          </S.LeftItems>
          <ItemCheckBox />
        </S.Item>
      ));
    }
    return items;
  };

  return <>{makeItems()}</>;
};

export default Item;
