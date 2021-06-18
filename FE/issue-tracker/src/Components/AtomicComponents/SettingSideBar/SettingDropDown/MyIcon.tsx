import { SettingSideBar as S } from "@/Components/AtomicComponents/SettingSideBar/SettingSideBarStyles";

interface Props {
  id: string;
  imgUrl?: string;
  labelColor?: string;
  title?: string;
}

const MyIcon = ({ id, imgUrl, labelColor, title }: Props) => {
  return id === "담당자" ? (
    <S.UserImage src={imgUrl} />
  ) : (
    <S.Label labelColor={labelColor}>{title}</S.Label>
  );
};

export default MyIcon;
