import { useEffect } from "react";
import Modal from "@/Components/AtomicComponents/Modal/Modal";
import { useResetRecoilState } from "recoil";
import { IssueTable as S } from "@/Components/Home/HomeStyles";
import { IssueModalState } from "@/Components/Home/HomeStore";

const StateDropDown = () => {
  const IssueDropDownMock = ["이슈닫기", "이슈열기"];

  const resetIssueModalState = useResetRecoilState(IssueModalState);

  useEffect(() => {
    const handleIssueModalOutClick = ({ target }: MouseEvent) => {
      const checkModal = (target as HTMLElement).closest(".stateModal");
      if (!checkModal) resetIssueModalState();
    };
    document.addEventListener("click", handleIssueModalOutClick);
    return () =>
      document.removeEventListener("click", handleIssueModalOutClick);
  }, []);

  return (
    <S.TableCategoryModal className="stateModal">
      <Modal modalTitle={"이슈"} modalDataArray={IssueDropDownMock} />
    </S.TableCategoryModal>
  );
};

export default StateDropDown;
