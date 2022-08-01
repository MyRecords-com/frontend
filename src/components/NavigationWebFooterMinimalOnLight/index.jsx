import React from "react";
import Links from "../Links";
import ButtonsLabelIconTransparentRestingO from "../ButtonsLabelIconTransparentRestingO";
import styled from "styled-components";


class NavigationWebFooterMinimalOnLight extends React.Component {
  render() {
    const { className, linksProps, buttonsLabelIconTransparentRestingOProps } = this.props;

    return (
      <NavigationWebFooterBarOnLightCopy2 className={`navigation-web-foote ${className || ""}`}>
        <Links x2021AllRightsRe={linksProps.x2021AllRightsRe} />
        <ButtonsLabelIconTransparentRestingO
          lable={buttonsLabelIconTransparentRestingOProps.lable}
          icon={buttonsLabelIconTransparentRestingOProps.icon}
        />
      </NavigationWebFooterBarOnLightCopy2>
    );
  }
}

const NavigationWebFooterBarOnLightCopy2 = styled.div`
  height: 86px;
  position: relative;
  display: flex;
  padding: 19px 29px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--ebf0f0soft-onlight);

  &.navigation-web-foote.navigation-web-foote-1 {
    margin-top: 42px;
  }

  &.navigation-web-foote.navigation-web-foote-2 {
    margin-top: 83px;
  }
`;

export default NavigationWebFooterMinimalOnLight;
