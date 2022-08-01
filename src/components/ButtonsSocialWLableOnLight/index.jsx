import React from "react";
import styled from "styled-components";
import { ButtonLabels14px, Border1pxCfdbd5OutlineOnlight } from "../../styledMixins";


class ButtonsSocialWLableOnLight extends React.Component {
  render() {
    const { lable, className } = this.props;

    return (
      <ButtonsSocialWLableOnLight1 className={`buttons-social-w-lable-on-light ${className || ""}`}>
        <OverlapGroup className="overlap-group-16">
          <ButtonsSocialLogoGoogle
            className="buttons-social-logo-google"
            src="/img/-buttons--social---logo---google@2x.svg"
          />
          <Lable className="lable-7">{lable}</Lable>
        </OverlapGroup>
      </ButtonsSocialWLableOnLight1>
    );
  }
}

const ButtonsSocialWLableOnLight1 = styled.div`
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 469px;

  &.buttons-social-w-lable-on-light.buttons-social-w-lable-on-light-1 {
    margin-top: 8px;
  }

  &.buttons-social-w-lable-on-light.buttons-social-w-lable-on-light-2 {
    margin-top: 8px;
  }
`;

const OverlapGroup = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  height: 48px;
  margin-top: -1px;
  display: flex;
  padding: 12px 153.5px;
  align-items: flex-start;
  min-width: 471px;
  border-radius: 23px;
`;

const ButtonsSocialLogoGoogle = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  margin-bottom: 3px;
`;

const Lable = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-left: 8px;
  font-weight: 700;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-social-w-lable-on-light.buttons-social-w-lable-on-light-1  & {
    padding: 12px 144.5px;
  }
`;

export default ButtonsSocialWLableOnLight;
