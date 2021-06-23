import React from "react";
import { Modal as S } from "../AtomicComponentsStyles";
import ModalCheckButton from "./ModalCheckButton";

type ModalItemProps = {
  data: any;
  index?: number;
  modalType?: string;
  modalTitle: string;
};

const ModalItem = ({ data, index, modalType, modalTitle }: ModalItemProps) => {
  return (
    <S.ModalItemDiv>
      {modalType === "filter" ? (
        <>
          <span>{data.content}</span>
          <ModalCheckButton
            modalTitle={modalTitle}
            index={index}
            data={data}
            modalType={modalType}
          />
        </>
      ) : (
        <>
          <span>{data}</span>
          <ModalCheckButton
            modalTitle={modalTitle}
            index={index}
            data={data}
            modalType={modalType}
          />
        </>
      )}
    </S.ModalItemDiv>
  );
};

export default ModalItem;
