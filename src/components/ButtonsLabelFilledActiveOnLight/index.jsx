import React from "react";
import styled from "styled-components";
import { ButtonLabels14px } from "../../styledMixins";


class ButtonsLabelFilledActiveOnLight extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <ButtonsLabelFilledRestingOnLight className={`buttons-label-filled-resting-on-light ${className || ""}`}>
        <Lable className="lable">{children}</Lable>
      </ButtonsLabelFilledRestingOnLight>
    );
  }
}

const ButtonsLabelFilledRestingOnLight = styled.div`
  height: 40px;
  margin-left: 37px;
  margin-bottom: 4px;
  display: flex;
  padding: 9px 11px;
  align-items: flex-start;
  min-width: 98px;
  background-color: var(--x7a52f4--hover);
  border-radius: 23px;

  &.buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light {
    height: 46px;
    padding: 12px 26.5px;
    min-width: 165px;
    margin-left: unset;
    margin-bottom: unset;
  }

  &.buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light-1 {
    height: 46px;
    padding: 12px 38.1px;
    min-width: 193px;
    margin-left: unset;
    margin-bottom: unset;
  }

  &.buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light-2 {
    height: 46px;
    margin-left: 108px;
    padding: 12px 41.4px;
    justify-content: flex-end;
    min-width: 136px;
    margin-bottom: unset;
  }

  &.buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light-3 {
    height: 46px;
    margin-top: 24px;
    padding: 12px 210.6px;
    min-width: 469px;
    margin-left: unset;
    margin-bottom: unset;
  }

  &.buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light-4 {
    height: 46px;
    margin-left: 90px;
    padding: 12px 44.4px;
    justify-content: flex-end;
    min-width: 136px;
    margin-bottom: unset;
  }

  &.buttons-label-filled-resting-on-light.buttons-label-filled {
    height: 46px;
    margin-top: 47px;
    padding: 12px 161.6px;
    min-width: 469px;
    margin-left: unset;
    margin-bottom: unset;
  }
`;

const Lable = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  min-width: 76px;
  font-weight: 700;
  color: var(--ffffff);
  text-align: center;
  line-height: 21px;
  white-space: nowrap;
`;

const Lable1 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light  & {
    min-width: 111px;
  }
`;

const Lable2 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light-1  & {
    min-width: 116px;
  }
`;

const Lable3 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light-2  & {
    min-width: 53px;
  }
`;

const Lable4 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light-3  & {
    min-width: 47px;
  }
`;

const Lable5 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light.buttons-label-filled-active-on-light-4  & {
    min-width: 47px;
  }
`;

const Lable6 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light.buttons-label-filled  & {
    min-width: 144px;
  }
`;

export default ButtonsLabelFilledActiveOnLight;
