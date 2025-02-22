import { SettingSideBar as S } from "@/Components/AtomicComponents/AtomicComponentsStyles";

interface Props {
  id: string;
}

const Title = ({ id }: Props) => {
  return <S.Title>{id} 추가</S.Title>;
};

export default Title;
