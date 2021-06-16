import { useEffect } from "react";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import Modal from "@/Components/AtomicComponents/Modal/Modal";
import { IssueTable as S } from "@/Components/Home/HomeStyles";
import { categoryModalOpenState } from "@/Components/Home/HomeStore";

type dropDownProps = {
  modalTitle: string;
};

const DropDown = ({ modalTitle }: dropDownProps) => {
  const dropDownMock = [`${modalTitle}가 없는 이슈`];

  const setModalState = useSetRecoilState(categoryModalOpenState);
  const resetModalState = useResetRecoilState(categoryModalOpenState);

  useEffect(() => {
    const handleModalOutClick = ({ target }: MouseEvent) => {
      const checkModal = (target as HTMLElement).closest(".categModal");
      const checkTH = (target as HTMLElement).closest("div")?.dataset.title;

      if (!checkModal && !checkTH) resetModalState();
      else if (checkTH)
        setModalState({ openedModalTitle: checkTH, isOpen: true });
    };
    document.addEventListener("click", handleModalOutClick);
    return () => document.removeEventListener("click", handleModalOutClick);
  }, []);

  return (
    <S.TableCategoryModal className="categModal">
      <Modal modalTitle={modalTitle} modalDataArray={dropDownMock} />
    </S.TableCategoryModal>
  );
};

export default DropDown;
