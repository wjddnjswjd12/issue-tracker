import { useEffect } from "react";
import { useResetRecoilState } from "recoil";
import Modal from "@/Components/AtomicComponents/Modal/Modal";
import { FilterSearchBar as S } from "../../HomeStyles";
import { filterModalOpenState } from "@/stores/homeAtoms";

const FilterModal = () => {
  const mock = [
    { type: "open", content: "열린 이슈" },
    { type: "writer", content: "내가 작성한 이슈" },
    { type: "assignee", content: "나에게 할당된 이슈" },
    { type: "comment", content: "내가 댓글을 남긴 이슈" },
    { type: "close", content: "닫힌 이슈" },
  ];

  const resetIssueModalState = useResetRecoilState(filterModalOpenState);

  useEffect(() => {
    const handleIssueModalOutClick = ({ target }: MouseEvent) => {
      const checkModal = (target as HTMLElement).closest(".filterModal");
      if (!checkModal) resetIssueModalState();
    };
    document.addEventListener("click", handleIssueModalOutClick);
    return () =>
      document.removeEventListener("click", handleIssueModalOutClick);
  });

  return (
    <S.FilterModalDiv className="filterModal">
      <Modal modalTitle="이슈" modalDataArray={mock} modalType="filter" />
    </S.FilterModalDiv>
  );
};

export default FilterModal;
