import React from "react";
import ElementLogoHidden from "../ElementLogoHidden";
import Search from "../Search";
import ButtonsLabelFilledActiveOnLight from "../ButtonsLabelFilledActiveOnLight";
import ButtonsIconOutlineRestingOnLight from "../ButtonsIconOutlineRestingOnLight";
import styled from "styled-components";
import { ButtonLabels16px } from "../../styledMixins";


class NavigationWebTopBarOnLight extends React.Component {
  render() {
    const { className, buttonsLabelFilledActiveOnLightProps, buttonsIconOutlineRestingOnLightProps } = this.props;

    return (
      <NavigationWebTopBarWLinksOnLightCop className={`navigation-web-top-b ${className || ""}`}>
        <ElementLogoHidden />
        <Search />
        <Links className="links">
          <Explore className="explore">Explore</Explore>
          <Stats className="stats">My Collections</Stats>
          <Drops className="drops">Favorites</Drops>
        </Links>
        <ButtonsLabelFilledActiveOnLight>
          {buttonsLabelFilledActiveOnLightProps.children}
        </ButtonsLabelFilledActiveOnLight>
        <ButtonsIconOutlineRestingOnLight>
          {buttonsIconOutlineRestingOnLightProps.children}
        </ButtonsIconOutlineRestingOnLight>
        <Img className="img" src="/img/img-8@2x.png" />
      </NavigationWebTopBarWLinksOnLightCop>
    );
  }
}

const NavigationWebTopBarWLinksOnLightCop = styled.div`
  height: 84px;
  position: relative;
  display: flex;
  padding: 4px 0;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--ffffff);
  box-shadow: 0px 3px 4px #999ba840;
`;

const Links = styled.div`
  ${ButtonLabels16px}
  display: flex;
  margin-left: 273px;
  margin-bottom: 4px;
  width: min-content;
  height: min-content;
  align-items: center;
  justify-content: flex-end;
  gap: 29px;
`;

const Explore = styled.div`
  min-width: 59px;
  font-weight: 700;
  color: var(--x5d5d5b);
  line-height: 24px;
  white-space: nowrap;
`;

const Stats = styled.div`
  min-width: 117px;
  font-weight: 700;
  color: var(--x5d5d5b);
  line-height: 24px;
  white-space: nowrap;
`;

const Drops = styled.div`
  min-width: 73px;
  font-weight: 700;
  color: var(--x5d5d5b);
  line-height: 24px;
  white-space: nowrap;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  align-self: flex-end;
  margin-left: 1376px;
  object-fit: cover;
`;

const Explore1 = styled.div`
  .navigation-web-top-b.navigation-web-top-b-2 & {
    color: var(--x000000primary);
  }
`;

export default NavigationWebTopBarOnLight;
