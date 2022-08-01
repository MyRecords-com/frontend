import React from "react";
import styled from "styled-components";
import { ButtonLabels14px, Border1pxCfdbd5OutlineOnlight } from "../../styledMixins";


class ButtonsIconLabelOutlineRestingOnLig extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ButtonsIconLabelFilledRestingOnLigh>
        <OverlapGroup>
          <Lable>{children}</Lable>
        </OverlapGroup>
      </ButtonsIconLabelFilledRestingOnLigh>
    );
  }
}

const ButtonsIconLabelFilledRestingOnLigh = styled.div`
  position: absolute;
  width: 174px;
  height: 46px;
  top: 20px;
  left: 1086px;
`;

const OverlapGroup = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  position: relative;
  height: 48px;
  top: -1px;
  left: -1px;
  display: flex;
  padding: 13px 24px;
  align-items: flex-start;
  min-width: 176px;
  background-color: var(--ffffff);
  border-radius: 23px;
`;

const Lable = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

export default ButtonsIconLabelOutlineRestingOnLig;
