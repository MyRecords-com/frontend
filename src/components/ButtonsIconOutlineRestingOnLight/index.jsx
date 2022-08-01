import React from "react";
import styled from "styled-components";
import { Border1pxCfdbd5OutlineOnlight, Icons18px } from "../../styledMixins";


class ButtonsIconOutlineRestingOnLight extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <ButtonsIconFilledRestingOnLight className={`buttons-icon-filled-resting-on-light ${className || ""}`}>
        <OverlapGroup className="overlap-group">
          <Icon className="icon">{children}</Icon>
        </OverlapGroup>
      </ButtonsIconFilledRestingOnLight>
    );
  }
}

const ButtonsIconFilledRestingOnLight = styled.div`
  height: 40px;
  margin-left: 6px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 40px;

  &.buttons-icon-filled-resting-on-light.buttons-icon-label-f {
    height: 46px;
    margin-left: 5px;
    min-width: 46px;
    margin-bottom: unset;
  }

  &.buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light {
    height: 46px;
    align-self: flex-end;
    margin-left: 18px;
    min-width: 46px;
    margin-bottom: unset;
  }

  &.buttons-icon-filled-resting-on-light.buttons-icon-label-f-1 {
    min-width: 46px;
    height: 46px;
    margin-left: unset;
    margin-bottom: unset;
    display: unset;
    justify-content: unset;
    align-items: unset;
  }

  &.buttons-icon-filled-resting-on-light.buttons-icon-label-f-2 {
    min-width: 46px;
    height: 46px;
    margin-left: unset;
    margin-bottom: unset;
    display: unset;
    justify-content: unset;
    align-items: unset;
  }

  &.buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-1 {
    height: 46px;
    align-self: flex-end;
    margin-left: 18px;
    min-width: 46px;
    margin-bottom: unset;
  }

  &.buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-2 {
    height: 46px;
    align-self: flex-end;
    margin-left: 18px;
    min-width: 46px;
    margin-bottom: unset;
  }

  &.buttons-icon-filled-resting-on-light.buttons-icon-outline {
    height: 46px;
    min-width: 46px;
    margin-left: unset;
    margin-bottom: unset;
  }

  &.buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-3 {
    height: 46px;
    margin-left: 565px;
    min-width: 46px;
    margin-bottom: unset;
  }

  &.buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-4 {
    height: 46px;
    align-self: flex-end;
    margin-left: 18px;
    min-width: 46px;
    margin-bottom: unset;
  }
`;

const OverlapGroup = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  height: 42px;
  margin-top: -1px;
  display: flex;
  padding: 11px;
  align-items: flex-start;
  min-width: 42px;
  border-radius: 23px;
`;

const Icon = styled.div`
  ${Icons18px}
  min-height: 18px;
  min-width: 18px;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: center;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-filled-resting-on-light.buttons-icon-label-f  & {
    height: 48px;
    padding: 14px;
    min-width: 48px;
    background-color: var(--ffffff);
  }
`;

const OverlapGroup2 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light  & {
    height: 48px;
    padding: 12px 20px;
    align-items: flex-end;
    min-width: 48px;
  }
`;

const Icon1 = styled.div`
  ${Icons18px}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light  & {
    min-height: 22px;
    min-width: 7px;
  }
`;

const OverlapGroup11 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-filled-resting-on-light.buttons-icon-label-f-1  & {
    position: relative;
    height: 48px;
    top: -1px;
    left: -1px;
    padding: 14px;
    min-width: 48px;
    background-color: var(--ffffff);
    margin-top: unset;
  }
`;

const OverlapGroup21 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-filled-resting-on-light.buttons-icon-label-f-2  & {
    position: relative;
    height: 48px;
    top: -1px;
    left: -1px;
    padding: 14px;
    min-width: 48px;
    background-color: var(--ffffff);
    margin-top: unset;
  }
`;

const OverlapGroup3 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-1  & {
    height: 48px;
    padding: 12px 20px;
    align-items: flex-end;
    min-width: 48px;
  }
`;

const Icon2 = styled.div`
  ${Icons18px}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-1  & {
    min-height: 22px;
    min-width: 7px;
  }
`;

const OverlapGroup4 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-2  & {
    height: 48px;
    padding: 12px 20px;
    align-items: flex-end;
    min-width: 48px;
  }
`;

const Icon3 = styled.div`
  ${Icons18px}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-2  & {
    min-height: 22px;
    min-width: 7px;
  }
`;

const OverlapGroup12 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline  & {
    height: 48px;
    padding: 14px;
    min-width: 48px;
  }
`;

const OverlapGroup5 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-3  & {
    height: 48px;
    padding: 14px;
    min-width: 48px;
  }
`;

const OverlapGroup6 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-4  & {
    height: 48px;
    padding: 12px 20px;
    align-items: flex-end;
    min-width: 48px;
  }
`;

const Icon4 = styled.div`
  ${Icons18px}

  .buttons-icon-filled-resting-on-light.buttons-icon-outline-resting-on-light-4  & {
    min-height: 22px;
    min-width: 7px;
  }
`;

export default ButtonsIconOutlineRestingOnLight;
