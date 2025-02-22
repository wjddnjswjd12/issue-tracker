import styled from "styled-components";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";

const Header = {
  Header: styled(BOX.FLEX_ROW_BOX)`
    justify-content: space-between;
    width: 100%;
    height: 94px;
    padding: 27px 0px;
    margin-bottom: 30px;
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-size: ${theme.FONT_SIZE.LOGOTYPE_REGULAR};
    font-family: "Montserrat", sans-serif;
  `,
};

export { Header };
