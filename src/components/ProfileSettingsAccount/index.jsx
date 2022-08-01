import React from "react";
import NavigationWebTopBarOnLight from "../NavigationWebTopBarOnLight";
import NavigationWebSidebarMenuOnLight from "../NavigationWebSidebarMenuOnLight";
import SettingsFieldTextOnLight from "../SettingsFieldTextOnLight";
import ButtonsLabelFilledActiveOnLight from "../ButtonsLabelFilledActiveOnLight";
import ButtonsLabelFilledRestingOnLight from "../ButtonsLabelFilledRestingOnLight";
import NavigationWebFooterMinimalOnLight from "../NavigationWebFooterMinimalOnLight";
import styled from "styled-components";
import { HeadingH6, HeadingH1 } from "../../styledMixins";
import "./ProfileSettingsAccount.css";

class ProfileSettingsAccount extends React.Component {
  render() {
    const {
      profileSettings,
      accountInformation,
      contactDetails,
      navigationWebTopBarOnLightProps,
      navigationWebSidebarMenuOnLightProps,
      settingsFieldTextOnLight1Props,
      settingsFieldTextOnLight2Props,
      settingsFieldTextOnLight3Props,
      settingsFieldTextOnLight4Props,
      settingsFieldTextOnLight5Props,
      settingsFieldTextOnLight6Props,
      buttonsLabelFilledActiveOnLightProps,
      navigationWebFooterMinimalOnLightProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="profile-settings-account screen">
          <NavigationWebTopBarOnLight
            buttonsLabelFilledActiveOnLightProps={navigationWebTopBarOnLightProps.buttonsLabelFilledActiveOnLightProps}
            buttonsIconOutlineRestingOnLightProps={
              navigationWebTopBarOnLightProps.buttonsIconOutlineRestingOnLightProps
            }
          />
          <FlexRow>
            <NavigationWebSidebarMenuOnLight {...navigationWebSidebarMenuOnLightProps} />
            <FlexCol>
              <ProfileSettings>{profileSettings}</ProfileSettings>
              <Account>
                <AccountInformation>{accountInformation}</AccountInformation>
                <SettingsFieldTextContainer>
                  <SettingsFieldTextOnLight
                    subtitle={settingsFieldTextOnLight1Props.subtitle}
                    title={settingsFieldTextOnLight1Props.title}
                  />
                  <SettingsFieldTextOnLight
                    subtitle={settingsFieldTextOnLight2Props.subtitle}
                    title={settingsFieldTextOnLight2Props.title}
                    className={settingsFieldTextOnLight2Props.className}
                  />
                  <SettingsFieldTextOnLight
                    subtitle={settingsFieldTextOnLight3Props.subtitle}
                    title={settingsFieldTextOnLight3Props.title}
                    className={settingsFieldTextOnLight3Props.className}
                  />
                </SettingsFieldTextContainer>
              </Account>
              <Details>
                <AccountInformation>{contactDetails}</AccountInformation>
                <SettingsFieldTextContainer1>
                  <SettingsFieldTextOnLight
                    subtitle={settingsFieldTextOnLight4Props.subtitle}
                    title={settingsFieldTextOnLight4Props.title}
                    className={settingsFieldTextOnLight4Props.className}
                  />
                  <SettingsFieldTextOnLight
                    subtitle={settingsFieldTextOnLight5Props.subtitle}
                    title={settingsFieldTextOnLight5Props.title}
                    className={settingsFieldTextOnLight5Props.className}
                  />
                  <SettingsFieldTextOnLight
                    subtitle={settingsFieldTextOnLight6Props.subtitle}
                    title={settingsFieldTextOnLight6Props.title}
                    className={settingsFieldTextOnLight6Props.className}
                  />
                </SettingsFieldTextContainer1>
              </Details>
              <Buttons>
                <ButtonsLabelFilledActiveOnLight className={buttonsLabelFilledActiveOnLightProps.className}>
                  {buttonsLabelFilledActiveOnLightProps.children}
                </ButtonsLabelFilledActiveOnLight>
                <ButtonsLabelFilledRestingOnLight />
              </Buttons>
            </FlexCol>
          </FlexRow>
          <NavigationWebFooterMinimalOnLight
            linksProps={navigationWebFooterMinimalOnLightProps.linksProps}
            buttonsLabelIconTransparentRestingOProps={
              navigationWebFooterMinimalOnLightProps.buttonsLabelIconTransparentRestingOProps
            }
          />
        </div>
      </div>
    );
  }
}

const FlexRow = styled.div`
  height: 839px;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 1272px;
`;

const FlexCol = styled.div`
  width: 849px;
  margin-left: 167px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 757px;
`;

const ProfileSettings = styled.div`
  ${HeadingH1}
  min-height: 51px;
  font-weight: 800;
  color: var(--x000000primary);
`;

const Account = styled.div`
  width: 849px;
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 284px;
`;

const AccountInformation = styled.div`
  ${HeadingH6}
  min-height: 24px;
  font-weight: 800;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const SettingsFieldTextContainer = styled.div`
  width: 849px;
  position: relative;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  padding: 10px 26px;
  align-items: flex-start;
  min-height: 244px;
  background-color: var(--ebf0f0soft-onlight);
  border-radius: 16px;
`;

const Details = styled.div`
  width: 849px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 284px;
`;

const SettingsFieldTextContainer1 = styled.div`
  width: 849px;
  position: relative;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  padding: 10px 26px;
  align-items: flex-end;
  min-height: 244px;
  background-color: var(--ebf0f0soft-onlight);
  border-radius: 16px;
`;

const Buttons = styled.div`
  height: 46px;
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 849px;
`;

export default ProfileSettingsAccount;
