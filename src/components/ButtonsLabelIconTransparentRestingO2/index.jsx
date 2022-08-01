import React from "react";
import styled from "styled-components";
import { ButtonLabels14px } from "../../styledMixins";


class ButtonsLabelIconTransparentRestingO2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <ButtonsLabelIconTransparentRestingO className={`buttons-label-icon-t-7 ${className || ""}`}>
        <Lable className="lable-4">{children}</Lable>
      </ButtonsLabelIconTransparentRestingO>
    );
  }
}

const ButtonsLabelIconTransparentRestingO = styled.div`
  height: 36px;
  margin-left: 460px;
  display: flex;
  padding: 7px 0;
  justify-content: center;
  align-items: flex-start;
  min-width: 72px;

  &.buttons-label-icon-t-7.buttons-label-icon-t-8 {
    margin-left: 124px;
    min-width: 52px;
  }

  &.buttons-label-icon-t-7.buttons-label-icon-t-9 {
    margin-left: 85px;
    padding: 7px 6.5px;
    min-width: 92px;
    justify-content: unset;
  }
`;

const Lable = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

export default ButtonsLabelIconTransparentRestingO2;
