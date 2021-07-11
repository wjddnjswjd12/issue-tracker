import { TextArea as S } from "@/Components/AtomicComponents/AtomicComponentsStyles";

interface Props {
  value: string;
  placeholder: string;
  rows: number;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ placeholder, rows, handleOnChange, value }: Props) => {
  return (
    <S.TextAreaWrapper>
      <S.TextArea
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={handleOnChange}
      />
    </S.TextAreaWrapper>
  );
};

export default TextArea;
