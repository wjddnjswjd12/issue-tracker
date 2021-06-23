import { LabelMilestoneTable as S } from "../../TabStyles";

type descriptionType = {
  description?: string;
};

const ContentDescription = ({ description }: descriptionType) => {
  return <S.DescriptionWrapper>{description}</S.DescriptionWrapper>;
};

export default ContentDescription;
