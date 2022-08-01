import React from "react";
import styled from "styled-components";
import { ButtonLabels14px, Border1pxCfdbd5OutlineOnlight, Icons18px } from "../../styledMixins";


class ButtonsIconLabelOutlineRestingOnLig2 extends React.Component {
  render() {
    const { lable, className } = this.props;

    return (
      <ButtonsIconLabelFilledRestingOnLigh className={`buttons-icon-label-f-4 ${className || ""}`}>
        <OverlapGroup className="overlap-group-9">
          <Icon className="icon-7"></Icon>
          <Lable className="lable-6">{lable}</Lable>
        </OverlapGroup>
      </ButtonsIconLabelFilledRestingOnLigh>
    );
  }
}

const ButtonsIconLabelFilledRestingOnLigh = styled.div`
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 88px;

  &.buttons-icon-label-f-4.buttons-icon-label-f-5 {
    min-width: 174px;
    display: unset;
    justify-content: unset;
    align-items: unset;
  }
`;

const OverlapGroup = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  height: 48px;
  margin-top: -1px;
  display: flex;
  padding: 12px 21.5px;
  align-items: flex-start;
  min-width: 90px;
  background-color: var(--ffffff);
  border-radius: 23px;
`;

const Icon = styled.div`
  ${Icons18px}
  min-height: 18px;
  margin-top: 1.5px;
  min-width: 18px;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: center;
`;

const Lable = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-left: 8px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-label-f-4.buttons-icon-label-f-5  & {
    position: relative;
    top: -1px;
    left: -1px;
    padding: 12px 18px;
    min-width: 176px;
    margin-top: unset;
  }
`;

export default ButtonsIconLabelOutlineRestingOnLig2;
