import React from "react";
import styled from "styled-components";
import { ButtonLabels14px, Icons18px } from "../../styledMixins";


class ButtonsIconLabelTransparentRestingO extends React.Component {
  render() {
    const { lable, className } = this.props;

    return (
      <ButtonsIconLabelTransparentRestingO1 className={`buttons-icon-label-t ${className || ""}`}>
        <Icon className="icon-6"></Icon>
        <Lable className="lable-5">{lable}</Lable>
      </ButtonsIconLabelTransparentRestingO1>
    );
  }
}

const ButtonsIconLabelTransparentRestingO1 = styled.div`
  height: 46px;
  margin-left: 106px;
  display: flex;
  padding: 11.5px 6px;
  align-items: flex-start;
  min-width: 46px;

  &.buttons-icon-label-t.buttons-icon-label-t-1 {
    padding: 11.5px 7px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-2 {
    padding: 11.5px 7px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-3 {
    padding: 11.5px 7px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-4 {
    padding: 11.5px 7px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-5 {
    padding: 11.5px 7.5px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-6 {
    padding: 11.5px 7px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-7 {
    padding: 11.5px 7px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-8 {
    padding: 11.5px 7px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-9 {
    padding: 11.5px 7.5px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-10 {
    padding: 11.5px 7px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-11 {
    margin-left: 88px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-12 {
    align-self: flex-end;
    margin-right: 2px;
    margin-left: unset;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-13 {
    align-self: flex-end;
    margin-right: 2px;
    margin-left: unset;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-14 {
    margin-left: 88px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-15 {
    margin-left: 88px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-16 {
    align-self: flex-end;
    margin-right: 2px;
    margin-left: unset;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-17 {
    align-self: flex-end;
    margin-right: 2px;
    margin-left: unset;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-18 {
    margin-left: 88px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-19 {
    margin-left: 88px;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-20 {
    align-self: flex-end;
    margin-right: 2px;
    margin-left: unset;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-21 {
    align-self: flex-end;
    margin-right: 2px;
    margin-left: unset;
  }

  &.buttons-icon-label-t.buttons-icon-label-t-22 {
    margin-left: 88px;
  }
`;

const Icon = styled.div`
  ${Icons18px}
  min-height: 22px;
  min-width: 7px;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: center;
`;

const Lable = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-left: 8px;
  margin-top: 0.5px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

export default ButtonsIconLabelTransparentRestingO;
