import React from "react";
import NavigationWebSidebarItemRestingOnLi from "../NavigationWebSidebarItemRestingOnLi";
import NavigationWebSidebarItemActiveOnLig2 from "../NavigationWebSidebarItemActiveOnLig2";
import styled from "styled-components";
import { TextLabels14pxLight } from "../../styledMixins";


class NavigationWebSidebarMenuOnLight2 extends React.Component {
  render() {
    const {
      manageListings,
      profileSettings,
      navigationWebSidebarItemRestingOnLi1Props,
      navigationWebSidebarItemActiveOnLig2Props,
      navigationWebSidebarItemRestingOnLi2Props,
      navigationWebSidebarItemRestingOnLi3Props,
      navigationWebSidebarItemRestingOnLi4Props,
      navigationWebSidebarItemRestingOnLi5Props,
      navigationWebSidebarItemRestingOnLi6Props,
      navigationWebSidebarItemRestingOnLi7Props,
      navigationWebSidebarItemRestingOnLi8Props,
    } = this.props;

    return (
      <NavigationWebSidebarMenuOnLight>
        <OverlapGroup>
          <ManageListings>{manageListings}</ManageListings>
          <NavigationWebSidebarItemRestingOnLi
            icon={navigationWebSidebarItemRestingOnLi1Props.icon}
            link={navigationWebSidebarItemRestingOnLi1Props.link}
          />
          <NavigationWebSidebarItemActiveOnLig2
            icon={navigationWebSidebarItemActiveOnLig2Props.icon}
            link={navigationWebSidebarItemActiveOnLig2Props.link}
          />
          <NavigationWebSidebarItemRestingOnLi
            icon={navigationWebSidebarItemRestingOnLi2Props.icon}
            link={navigationWebSidebarItemRestingOnLi2Props.link}
            className={navigationWebSidebarItemRestingOnLi2Props.className}
          />
          <NavigationWebSidebarItemRestingOnLi
            icon={navigationWebSidebarItemRestingOnLi3Props.icon}
            link={navigationWebSidebarItemRestingOnLi3Props.link}
            className={navigationWebSidebarItemRestingOnLi3Props.className}
          />
          <ProfileSettings>{profileSettings}</ProfileSettings>
          <NavigationWebSidebarItemRestingOnLi
            icon={navigationWebSidebarItemRestingOnLi4Props.icon}
            link={navigationWebSidebarItemRestingOnLi4Props.link}
            className={navigationWebSidebarItemRestingOnLi4Props.className}
          />
          <NavigationWebSidebarItemRestingOnLi
            icon={navigationWebSidebarItemRestingOnLi5Props.icon}
            link={navigationWebSidebarItemRestingOnLi5Props.link}
            className={navigationWebSidebarItemRestingOnLi5Props.className}
          />
          <NavigationWebSidebarItemRestingOnLi
            icon={navigationWebSidebarItemRestingOnLi6Props.icon}
            link={navigationWebSidebarItemRestingOnLi6Props.link}
            className={navigationWebSidebarItemRestingOnLi6Props.className}
          />
          <NavigationWebSidebarItemRestingOnLi
            icon={navigationWebSidebarItemRestingOnLi7Props.icon}
            link={navigationWebSidebarItemRestingOnLi7Props.link}
            className={navigationWebSidebarItemRestingOnLi7Props.className}
          />
          <NavigationWebSidebarItemRestingOnLi
            icon={navigationWebSidebarItemRestingOnLi8Props.icon}
            link={navigationWebSidebarItemRestingOnLi8Props.link}
            className={navigationWebSidebarItemRestingOnLi8Props.className}
          />
        </OverlapGroup>
      </NavigationWebSidebarMenuOnLight>
    );
  }
}

const NavigationWebSidebarMenuOnLight = styled.div`
  height: 839px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 256px;
`;

const OverlapGroup = styled.div`
  width: 258px;
  position: relative;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  padding: 45px 0;
  align-items: center;
  min-height: 840px;
  background-color: var(--ffffff);
`;

const ManageListings = styled.div`
  ${TextLabels14pxLight}
  min-height: 21px;
  align-self: flex-start;
  margin-left: 33px;
  font-weight: 300;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const ProfileSettings = styled.div`
  ${TextLabels14pxLight}
  min-height: 21px;
  align-self: flex-start;
  margin-top: 74px;
  margin-left: 33px;
  font-weight: 300;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

export default NavigationWebSidebarMenuOnLight2;
