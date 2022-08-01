import React from "react";
import styled from "styled-components";
import { ButtonLabels14px } from "../../styledMixins";


class ButtonsLabelFilledRestingOnLight extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ButtonsLabelFilledRestingOnLight1 className={`buttons-label-filled-resting-on-light-2 ${className || ""}`}>
        <Lable className="lable-1">Cancel</Lable>
      </ButtonsLabelFilledRestingOnLight1>
    );
  }
}

const ButtonsLabelFilledRestingOnLight1 = styled.div`
  height: 46px;
  margin-left: 519px;
  display: flex;
  padding: 12px 57.5px;
  align-items: flex-start;
  min-width: 165px;
  background-color: var(--white);
  border-radius: 23px;

  &.buttons-label-filled-resting-on-light-2.buttons-label-filled-resting-on-light-3 {
    margin-left: 309px;
    padding: 12px 83.8px;
    min-width: 241px;
  }

  &.buttons-label-filled-resting-on-light-2.buttons-label-filled-1 {
    margin-left: 20px;
    padding: 12px 41.9px;
    justify-content: flex-end;
    min-width: 193px;
  }

  &.buttons-label-filled-resting-on-light-2.buttons-label-filled-resting-on-light-4 {
    margin-top: 71px;
    margin-right: 1px;
    padding: 12px 83.8px;
    min-width: 241px;
    margin-left: unset;
  }

  &.buttons-label-filled-resting-on-light-2.buttons-label-filled-resting-on-light-5 {
    margin-top: 60px;
    margin-right: 1px;
    padding: 12px 83.8px;
    min-width: 241px;
    margin-left: unset;
  }

  &.buttons-label-filled-resting-on-light-2.buttons-label-filled-2 {
    margin-top: 32px;
    margin-left: 9px;
    padding: 12px 83.8px;
    min-width: 241px;
  }

  &.buttons-label-filled-resting-on-light-2.buttons-label-filled-resting-on-light-6 {
    margin-left: 1px;
    padding: 12px 83.8px;
    min-width: 241px;
  }
`;

const Lable = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  min-width: 48px;
  font-weight: 700;
  color: var(--x7a52f4--hover);
  text-align: center;
  line-height: 21px;
  white-space: nowrap;
`;

const Lable1 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light-2.buttons-label-filled-resting-on-light-3  & {
    min-width: 72px;
  }
`;

const Lable2 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light-2.buttons-label-filled-1  & {
    min-width: 109px;
  }
`;

const Lable3 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light-2.buttons-label-filled-resting-on-light-4  & {
    min-width: 72px;
  }
`;

const Lable4 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light-2.buttons-label-filled-resting-on-light-5  & {
    min-width: 72px;
  }
`;

const Lable5 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light-2.buttons-label-filled-2  & {
    min-width: 72px;
  }
`;

const Lable6 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-filled-resting-on-light-2.buttons-label-filled-resting-on-light-6  & {
    min-width: 72px;
  }
`;

export default ButtonsLabelFilledRestingOnLight;
