import React from "react";
import styled from "styled-components";
import { Icons22px } from "../../styledMixins";


class NavigationWebSidebarItemActiveOnLig2 extends React.Component {
  render() {
    const { icon, link } = this.props;

    return (
      <Item>
        <Icon>{icon}</Icon>
        <Link src={link} />
      </Item>
    );
  }
}

const Item = styled.div`
  height: 56px;
  display: flex;
  padding: 13px 28px;
  align-items: flex-start;
  min-width: 238px;
  background-color: var(--ebf0f0soft-onlight);
  border-radius: 28px;
`;

const Icon = styled.div`
  ${Icons22px}
  min-height: 26px;
  align-self: flex-end;
  min-width: 8px;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: center;
`;

const Link = styled.img`
  width: 112px;
  height: 11px;
  margin-left: 21px;
  margin-top: 4px;
`;

export default NavigationWebSidebarItemActiveOnLig2;
