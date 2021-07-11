import { useRecoilValue } from "recoil";
import { userDataListState } from "@/stores/homeAtoms";
import { labelDataListState, milestoneDataListState } from "@/stores/tabAtoms";
import MyIcon from "./MyIcon";
import ItemCheckBox from "./ItemCheckBox";
import { SettingSideBar as S } from "@/Components/AtomicComponents/AtomicComponentsStyles";

interface Props {
  id: string;
}

const Item = ({ id }: Props) => {
  const users = useRecoilValue(userDataListState);
  const labels = useRecoilValue(labelDataListState);
  const mileStones = useRecoilValue(milestoneDataListState);

  const makeItems = () => {
    let items;
    if (id === "담당자") {
      items = users.map((user) => (
        <S.Item>
          <S.LeftItems>
            <MyIcon id={id} imgUrl={user.image_url} />
            <S.ItemText>{user.name}</S.ItemText>
          </S.LeftItems>
          <ItemCheckBox
            imgUrl={user.image_url}
            id={user.id}
            header={id}
            content={user.name}
          />
        </S.Item>
      ));
    } else if (id === "레이블") {
      items = labels.map((label) => (
        <S.Item>
          <S.LeftItems>
            <MyIcon id={id} labelColor={label.color} title={label.title} />
            <S.ItemText>{label.title}</S.ItemText>
          </S.LeftItems>
          <ItemCheckBox
            header={id}
            color={label.color}
            id={label.id}
            content={label.title}
          />
        </S.Item>
      ));
    } else {
      items = mileStones.map((mileStone) => (
        <S.Item>
          <S.LeftItems>
            <S.ItemText>{mileStone.title}</S.ItemText>
            <S.DueDate>
              {mileStone.due_date
                ? `Due by ${mileStone.due_date}`
                : "지정된 마감일 없음"}
            </S.DueDate>
          </S.LeftItems>
          <ItemCheckBox
            header={id}
            id={mileStone.id}
            content={mileStone.title}
          />
        </S.Item>
      ));
    }
    return items;
  };

  return <>{makeItems()}</>;
};

export default Item;
