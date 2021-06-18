import styled from "styled-components";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";

const SettingSideBar = {
  Background: styled.div<{ isShow: boolean }>`
    display: ${(props) => (props.isShow ? "block" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  `,
  SettingSideBar: styled.div`
    width: 100%;
    background: ${theme.GRAY_SCALE.OFF_WHITE};
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    border-radius: 16px;
    margin: 0px 0px 20px 32px;
    z-index: 1;
  `,
  SettingSideBarItem: styled(BOX.FLEX_COLUMN_BOX)`
    position: relative;
    padding: 20px 40px;
    color: ${theme.GRAY_SCALE.LABEL};
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    font-weight: 700;
    :not(:last-child) {
      border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    }
  `,
  SettingSideBarTitle: styled(BOX.FLEX_ROW_CENTER_BOX)`
    justify-content: space-between;
  `,
  CheckedItem: styled.div`
    margin-top: 20px;
    input {
      width: 100%;
      margin-bottom: 8px;
      ::-webkit-slider-thumb {
        visibility: hidden;
      }
      :hover {
        opacity: 1;
      }
    }
  `,
  CheckedUser: styled(BOX.FLEX_ROW_CENTER_BOX)``,
  CheckedUserImage: styled(Avatar)`
    margin-right: 16px;
  `,
  CheckedLabelWrapper: styled(BOX.FLEX_ROW_CENTER_BOX)``,
  CheckedLabel: styled.div<{ labelColor: any }>`
    color: #fff;
    margin-right: 8px;
    padding: 6px 20px;
    border-radius: 30px;
    background: ${(props) => props.labelColor};
  `,
  SettingDropDown: styled.div<{ isShow: boolean }>`
    position: absolute;
    top: 60%;
    left: 7%;
    width: 86%;
    display: ${(props) => (props.isShow ? "block" : "none")};
    background: ${theme.GRAY_SCALE.OFF_WHITE};
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    border-radius: 16px;
    z-index: 1;
  `,
  Title: styled.div`
    padding: 16px;
    background: ${theme.GRAY_SCALE.BACKGROUND};
    border-radius: 16px 16px 0px 0px;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-weight: 400;
    font-size: ${theme.FONT_SIZE.TEXT_MEDIUM};
  `,
  Item: styled(BOX.FLEX_ROW_CENTER_BOX)`
    justify-content: space-between;
    padding: 16px;
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-weight: 400;
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    :not(:last-child) {
      border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    }
  `,
  LeftItems: styled(BOX.FLEX_ROW_CENTER_BOX)`
    justify-content: center;
  `,
  ItemText: styled.span`
    padding-top: 3px;
  `,
  UserImage: styled(Avatar)`
    width: 20px;
    height: 20px;
    margin-right: 16px;
  `,
  Label: styled.div<{ labelColor: any }>`
    color: #fff;
    margin-right: 16px;
    padding: 6px 20px;
    border-radius: 30px;
    background: ${(props) => props.labelColor};
  `,
  DueDate: styled.span`
    padding-top: 3px;
    font-size: ${theme.FONT_SIZE.TEXT_X_SMALL};
    color: ${theme.GRAY_SCALE.LINE};
    margin-left: 16px;
  `,
  ItemCheckBox: styled(Checkbox)`
    width: 16px;
    height: 16px;
  `,
};

export { SettingSideBar };
