import { useEffect } from "react";
import { useSetRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import Modal from "@/Components/AtomicComponents/Modal/Modal";
import { IssueTable as S } from "@/Components/Home/HomeStyles";
import { categoryModalOpenState, userDataListState } from "@/stores/homeAtoms";
import { labelDataListState, milestoneDataListState } from "@/stores/tabAtoms";

type dropDownProps = {
  modalTitle: string;
};

type modalTitleObjType = {
  [index: string]: (string | undefined)[];
};

const DropDown = ({ modalTitle }: dropDownProps) => {
  const userData = useRecoilValue(userDataListState);
  const labelData = useRecoilValue(labelDataListState);
  const milestoneData = useRecoilValue(milestoneDataListState);

  const modalTitleObj: modalTitleObjType = {
    담당자: userData && userData.map((v) => v.name),
    작성자: userData && userData.map((v) => v.name),
    레이블: labelData && labelData.map((label) => label.title),
    마일스톤:
      milestoneData && milestoneData.map((milestone) => milestone.title),
  };

  const dropDownMock = modalTitleObj[modalTitle];

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
  });

  return (
    <S.TableCategoryModal className="categModal">
      <Modal modalTitle={modalTitle} modalDataArray={dropDownMock} />
    </S.TableCategoryModal>
  );
};

export default DropDown;
