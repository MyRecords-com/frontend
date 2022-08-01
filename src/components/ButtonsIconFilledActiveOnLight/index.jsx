import React from "react";
import styled from "styled-components";
import { Icons18px } from "../../styledMixins";


class ButtonsIconFilledActiveOnLight extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ButtonsIconFilledActiveOnLight1>
        <Icon>{children}</Icon>
      </ButtonsIconFilledActiveOnLight1>
    );
  }
}

const ButtonsIconFilledActiveOnLight1 = styled.div`
  position: absolute;
  height: 53px;
  top: 16px;
  left: 562px;
  display: flex;
  padding: 17.4px 18px;
  align-items: flex-end;
  min-width: 54px;
  background-color: var(--x7a52f4--hover);
  border-radius: 27.21px/26.7px;
`;

const Icon = styled.div`
  ${Icons18px}
  min-height: 18px;
  min-width: 18px;
  font-weight: 400;
  color: var(--ffffff);
  text-align: center;
`;

export default ButtonsIconFilledActiveOnLight;
