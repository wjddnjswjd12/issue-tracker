const ModalCheckButton = ({ index }: any) => {
  return (
    <input
      type="radio"
      onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        // console.log(index);
      }}
    />
  );
};

export default ModalCheckButton;
