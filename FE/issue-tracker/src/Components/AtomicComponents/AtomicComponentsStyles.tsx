import styled from "styled-components";
import { Avatar, Chip, Checkbox } from "@material-ui/core";
import { BOX } from "@/Styles/CommonStyles";
import theme from "@/Styles/theme";

const defaultTransition = "all 0.3s";

const AvatarDiv = styled(Avatar)<{ size?: number }>`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;

type LabelDivProp = {
  fontcolor?: string;
  backgroundcolor?: string;
};

const LabelDiv = styled(Chip)<LabelDivProp>`
  color: ${({ fontcolor }) => (fontcolor ? fontcolor : "black")};
  background-color: ${({ backgroundcolor }) =>
    backgroundcolor ? backgroundcolor : "gray"};
`;

const Modal = {
  ModalDiv: styled(BOX.FLEX_COLUMN_BOX)`
    border-radius: 16px;
    width: 240px;
    height: fit-content;
    z-index: 2;
  `,

  ModalTitleDiv: styled(BOX.FLEX_ROW_BOX)`
    align-items: center;
    padding: 0 16px;
    width: 240px;
    height: 44px;
    color: ${theme.GRAY_SCALE.TITLE_ACTIVE};
    font-size: ${theme.FONT_SIZE.TEXT_MEDIUM};
    font-weight: bold;
    background: ${theme.GRAY_SCALE.BACKGROUND};
    border: 1px solid ${theme.GRAY_SCALE.LINE};
    border-radius: 16px 16px 0 0;
  `,

  ModalItemDiv: styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    width: 240px;
    height: 44px;
    background-color: ${theme.GRAY_SCALE.OFF_WHITE};
    color: ${theme.GRAY_SCALE.BODY};
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    border-right: 1px solid ${theme.GRAY_SCALE.LINE};
    border-left: 1px solid ${theme.GRAY_SCALE.LINE};
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    &:last-child {
      border-radius: 0 0 16px 16px;
    }
    &:hover {
      background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    }
  `,
};

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

const TextArea = {
  TextAreaWrapper: styled(BOX.FLEX_COLUMN_BOX)`
    width: 100%;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    border-radius: 14px;
  `,
  TextArea: styled.textarea`
    width: 100%;
    font-size: ${theme.FONT_SIZE.TEXT_SMALL};
    border-radius: 14px;
    padding: 18px 24px;
    background: ${theme.GRAY_SCALE.INPUT_BACKGROUND};
    border: none;
    outline: none;
    resize: none;
    border-bottom: 1px solid ${theme.GRAY_SCALE.LINE};
    :focus {
      transition: ${defaultTransition};
      border: 1px solid ${theme.GRAY_SCALE.LINE};
      background: ${theme.COLOR.WHITE};
    }
  `,
};

export { AvatarDiv, LabelDiv, Modal, SettingSideBar, TextArea };
