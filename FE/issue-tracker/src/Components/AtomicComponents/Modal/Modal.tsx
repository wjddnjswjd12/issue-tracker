import ModalItem from "./ModalItem";
import { Modal as S } from "../AtomicComponentsStyles";

type ModalProps = {
  modalDataArray: any[];
  modalTitle: string;
  modalType?: string;
};

const Modal = ({ modalDataArray, modalTitle, modalType }: ModalProps) => {
  return (
    <S.ModalDiv>
      <S.ModalTitleDiv>{modalTitle}필터</S.ModalTitleDiv>
      {modalDataArray &&
        modalDataArray.map((data, index) => (
          <ModalItem
            data={data}
            index={index}
            key={index}
            modalType={modalType}
            modalTitle={modalTitle}
          />
        ))}
    </S.ModalDiv>
  );
};

export default Modal;
