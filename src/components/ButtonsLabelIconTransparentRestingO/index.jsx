import React from "react";
import styled from "styled-components";
import { ButtonLabels14px, Icons18px } from "../../styledMixins";


class ButtonsLabelIconTransparentRestingO extends React.Component {
  render() {
    const { lable, icon, className } = this.props;

    return (
      <ButtonsLabelIconTransparentRestingO1 className={`buttons-label-icon-t ${className || ""}`}>
        <Lable className="lable-2">{lable}</Lable>
        <Icon className="icon-3">{icon}</Icon>
      </ButtonsLabelIconTransparentRestingO1>
    );
  }
}

const ButtonsLabelIconTransparentRestingO1 = styled.div`
  height: 46px;
  margin-left: 939px;
  display: flex;
  padding: 11.5px 4px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 73px;

  &.buttons-label-icon-t.buttons-label-icon-t-2 {
    height: 36px;
    padding: 7px 0;
    min-width: 93px;
    margin-left: unset;
  }

  &.buttons-label-icon-t.buttons-label-icon-t-3 {
    margin-left: 884px;
  }

  &.buttons-label-icon-t.buttons-label-icon-t-4 {
    margin-left: 884px;
  }

  &.buttons-label-icon-t.buttons-label-icon-t-5 {
    margin-left: 884px;
  }

  &.buttons-label-icon-t.buttons-label-icon-t-6 {
    margin-left: 884px;
  }
`;

const Lable = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-top: 0.5px;
  min-width: 51px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const Icon = styled.div`
  ${Icons18px}
  min-height: 22px;
  margin-left: 6px;
  min-width: 7px;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: center;
`;

const Lable1 = styled.div`
  ${ButtonLabels14px}

  .buttons-label-icon-t.buttons-label-icon-t-2  & {
    min-width: 78px;
    margin-top: unset;
  }
`;

const Icon1 = styled.div`
  ${Icons18px}

  .buttons-label-icon-t.buttons-label-icon-t-2  & {
    min-height: 18px;
    align-self: center;
    margin-bottom: 1px;
    min-width: 18px;
  }
`;

export default ButtonsLabelIconTransparentRestingO;
