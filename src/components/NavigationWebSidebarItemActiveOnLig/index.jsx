import React from "react";
import styled from "styled-components";
import { ButtonLabels14px, Icons22px } from "../../styledMixins";


class NavigationWebSidebarItemActiveOnLig extends React.Component {
  render() {
    const { icon, link, className } = this.props;

    return (
      <NavigationWebSidebarItemActiveOnLig1 className={`navigation-web-sideb-2 ${className || ""}`}>
        <Icon className="icon-2">{icon}</Icon>
        <Link className="link-1">{link}</Link>
      </NavigationWebSidebarItemActiveOnLig1>
    );
  }
}

const NavigationWebSidebarItemActiveOnLig1 = styled.div`
  height: 56px;
  margin-top: 12px;
  display: flex;
  padding: 13px 28px;
  align-items: center;
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

const Link = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-left: 21px;
  margin-bottom: 1px;
  min-width: 109px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const Link1 = styled.div`
  ${ButtonLabels14px}

  .navigation-web-sideb-2.navigation-web-sideb-3  & {
    min-width: 75px;
  }
`;

export default NavigationWebSidebarItemActiveOnLig;
