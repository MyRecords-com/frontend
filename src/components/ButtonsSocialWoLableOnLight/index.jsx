import React from "react";
import styled from "styled-components";


class ButtonsSocialWoLableOnLight extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ButtonsIconFilledRestingOnLight className={`buttons-icon-filled-resting-on-light-2 ${className || ""}`}>
        <OverlapGroup className="overlap-group-11">
          <ButtonsSocialLogoPlaceholderFaceboo
            className="buttons-social-logo-placeholder-facebook"
            src="/img/buttons---social---logo-placeholder---facebook@2x.svg"
          />
        </OverlapGroup>
      </ButtonsIconFilledRestingOnLight>
    );
  }
}

const ButtonsIconFilledRestingOnLight = styled.div`
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 46px;

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-1 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-2 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-3 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-4 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-5 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-6 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-7 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-8 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-9 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-10 {
    margin-left: 8px;
  }

  &.buttons-icon-filled-resting-on-light-2.buttons-icon-filled-11 {
    margin-left: 8px;
  }
`;

const OverlapGroup = styled.div`
  height: 48px;
  margin-top: -1px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  min-width: 48px;
  background-color: var(--ffffff);
  border-radius: 23px;
`;

const ButtonsSocialLogoPlaceholderFaceboo = styled.img`
  width: 16px;
  height: 16px;
`;

const OverlapGroup1 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled & {
    background-color: unset;
  }
`;

const OverlapGroup2 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-1 & {
    background-color: unset;
  }
`;

const OverlapGroup3 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-2 & {
    background-color: unset;
  }
`;

const OverlapGroup11 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-3 & {
    background-color: unset;
  }
`;

const OverlapGroup21 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-4 & {
    background-color: unset;
  }
`;

const OverlapGroup31 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-5 & {
    background-color: unset;
  }
`;

const OverlapGroup12 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-6 & {
    background-color: unset;
  }
`;

const OverlapGroup22 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-7 & {
    background-color: unset;
  }
`;

const OverlapGroup32 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-8 & {
    background-color: unset;
  }
`;

const OverlapGroup13 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-9 & {
    background-color: unset;
  }
`;

const OverlapGroup23 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-10 & {
    background-color: unset;
  }
`;

const OverlapGroup33 = styled.div`
  .buttons-icon-filled-resting-on-light-2.buttons-icon-filled-11 & {
    background-color: unset;
  }
`;

export default ButtonsSocialWoLableOnLight;
