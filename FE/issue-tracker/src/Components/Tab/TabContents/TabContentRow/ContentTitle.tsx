import { TabAssets as Icon, LabelMilestoneTable as S } from "../../TabStyles";

type contentTitleProp = {
  title?: string;
  due_date?: string;
};

const ContentTitle = ({ title, due_date }: contentTitleProp) => {
  return (
    <S.TitleWrapper>
      <span>
        <Icon.MilestoneTag strokecolor="#007AFF" />
        {title}
      </span>
      <S.DateSpan>
        <Icon.CalendarIcon />
        {due_date}
      </S.DateSpan>
    </S.TitleWrapper>
  );
};

export default ContentTitle;
