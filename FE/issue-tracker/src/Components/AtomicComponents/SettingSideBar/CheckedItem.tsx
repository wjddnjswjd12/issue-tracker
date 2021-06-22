import { SettingSideBar as S } from "@/Components/AtomicComponents/AtomicComponentsStyles";

interface Props {
  id: string;
}

const CheckedItem = ({ id }: Props) => {
  const makeCheckedItem = () => {
    let item;

    if (id === "담당자") {
      item = (
        <S.CheckedItem>
          <S.CheckedUser>
            <S.CheckedUserImage />
            유저
          </S.CheckedUser>
        </S.CheckedItem>
      );
    } else if (id === "레이블") {
      item = (
        <S.CheckedItem>
          <S.CheckedLabelWrapper>
            <S.CheckedLabel labelColor={"pink"}>swing</S.CheckedLabel>
          </S.CheckedLabelWrapper>
        </S.CheckedItem>
      );
    } else {
      item = (
        <S.CheckedItem>
          <input type="range" step={1} max={5} value={4} />
          <S.CheckedUser>마일스톤</S.CheckedUser>
        </S.CheckedItem>
      );
    }

    return item;
  };

  return <>{makeCheckedItem()}</>;
};

export default CheckedItem;
