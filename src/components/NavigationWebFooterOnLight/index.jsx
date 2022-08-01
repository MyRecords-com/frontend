import React from "react";
import FormsV1SelectRestingonLight from "../FormsV1SelectRestingonLight";
import ButtonsSocialWoLableOnLight from "../ButtonsSocialWoLableOnLight";
import ButtonsSocialWoLableOnLight2 from "../ButtonsSocialWoLableOnLight2";
import Links from "../Links";
import ButtonsLabelIconTransparentRestingO from "../ButtonsLabelIconTransparentRestingO";
import ButtonsIconOutlineRestingOnLight from "../ButtonsIconOutlineRestingOnLight";
import styled from "styled-components";
import { ButtonLabels14px, ButtonLabels16px, TextLabels16pxRegular } from "../../styledMixins";


class NavigationWebFooterOnLight extends React.Component {
  render() {
    const {
      className,
      formsV1SelectRestingonLightProps,
      buttonsSocialWoLableOnLight1Props,
      buttonsSocialWoLableOnLight2Props,
      buttonsSocialWoLableOnLight3Props,
      buttonsSocialWoLableOnLight2Props2,
      linksProps,
      buttonsLabelIconTransparentRestingOProps,
      buttonsIconOutlineRestingOnLightProps,
    } = this.props;

    return (
      <NavigationWebFooterBarOnLightCopy className={`navigation-web-footer-bar-on-light-copy ${className || ""}`}>
        <FlexRow className="flex-row-9">
          <FlexCol className="flex-col-8">
            <OverlapGroup1 className="overlap-group1-3">
              <SubscribeToUpdates className="subscribe-to-updates">Subscribe to updates</SubscribeToUpdates>
              <FormsV1SelectRestingonLight
                fieldTitle={formsV1SelectRestingonLightProps.fieldTitle}
                placeholder={formsV1SelectRestingonLightProps.placeholder}
                icon={formsV1SelectRestingonLightProps.icon}
              />
            </OverlapGroup1>
            <Follow className="follow">
              <FollowUs className="follow-us">Follow us</FollowUs>
              <ButtonsIconFillContainer className="buttons-icon-fill-container">
                <ButtonsSocialWoLableOnLight />
                <ButtonsSocialWoLableOnLight className={buttonsSocialWoLableOnLight1Props.className} />
                <ButtonsSocialWoLableOnLight className={buttonsSocialWoLableOnLight2Props.className} />
                <ButtonsSocialWoLableOnLight className={buttonsSocialWoLableOnLight3Props.className} />
                <ButtonsSocialWoLableOnLight2
                  buttonsSocialLogoLinkedinProps={buttonsSocialWoLableOnLight2Props2.buttonsSocialLogoLinkedinProps}
                />
              </ButtonsIconFillContainer>
            </Follow>
          </FlexCol>
          <Links1 className="links-7">
            <Marketplace className="marketplace">Marketplace</Marketplace>
            <ExploreHelpCenter className="explore-help-center">
              Explore
              <br />
              Help Center
              <br />
              Become a Partner
              <br />
              About Us
              <br />
              Platform Status
            </ExploreHelpCenter>
          </Links1>
          <Links2 className="links-8">
            <Marketplace className="community">Community</Marketplace>
            <ProfileFavoritesWa className="profile-favorites-wa">
              Profile
              <br />
              Favorites
              <br />
              Watchlist
              <br />
              My Collections
              <br />
              Rankings
              <br />
              Activity
            </ProfileFavoritesWa>
          </Links2>
          <Language className="language">
            <WebsiteName className="website-name">MyRecords</WebsiteName>
            <TheWorldsFirstMa className="the-worlds-first-ma">
              Our marketplace is the world&#39;s largest collection of vinyl from the best artists worldwide.
            </TheWorldsFirstMa>
          </Language>
        </FlexRow>
        <FlexCol1 className="flex-col-9">
          <Line className="line-6" src="/img/line@1x.svg" />
          <FlexRow1 className="flex-row-10">
            <Links x2021AllRightsRe={linksProps.x2021AllRightsRe} className={linksProps.className} />
            <ButtonsLabelIconTransparentRestingO
              lable={buttonsLabelIconTransparentRestingOProps.lable}
              icon={buttonsLabelIconTransparentRestingOProps.icon}
              className={buttonsLabelIconTransparentRestingOProps.className}
            />
            <ButtonsIconOutlineRestingOnLight className={buttonsIconOutlineRestingOnLightProps.className}>
              {buttonsIconOutlineRestingOnLightProps.children}
            </ButtonsIconOutlineRestingOnLight>
          </FlexRow1>
        </FlexCol1>
      </NavigationWebFooterBarOnLightCopy>
    );
  }
}

const NavigationWebFooterBarOnLightCopy = styled.div`
  width: 1452px;
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  padding: 20px 0.5px;
  align-items: flex-start;
  min-height: 457px;
  background-color: var(--ebf0f0soft-onlight);
`;

const FlexRow = styled.div`
  height: 251px;
  align-self: center;
  margin-top: 46px;
  margin-left: 3.5px;
  display: flex;
  align-items: flex-start;
  min-width: 1294px;
`;

const FlexCol = styled.div`
  width: 302px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 242px;
`;

const OverlapGroup1 = styled.div`
  width: 301px;
  height: 90px;
  position: relative;
  margin-left: 0.5px;
`;

const SubscribeToUpdates = styled.div`
  ${ButtonLabels16px}
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const Follow = styled.div`
  width: 262px;
  margin-top: 63px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 89px;
`;

const FollowUs = styled.div`
  ${ButtonLabels16px}
  min-height: 24px;
  margin-top: 1px;
  margin-left: 0.5px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const ButtonsIconFillContainer = styled.div`
  height: 46px;
  position: relative;
  margin-top: 18px;
  display: flex;
  align-items: flex-start;
  min-width: 262px;
`;

const Links1 = styled.div`
  width: 122px;
  margin-left: 247px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 213px;
`;

const Marketplace = styled.div`
  ${ButtonLabels16px}
  min-height: 24px;
  margin-top: 1px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const ExploreHelpCenter = styled.p`
  ${ButtonLabels14px}
  min-height: 174px;
  margin-top: 14px;
  font-weight: 700;
  color: var(--x5d5d5b);
  line-height: 34px;
`;

const Links2 = styled.div`
  width: 102px;
  align-self: flex-end;
  margin-left: 95px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 248px;
`;

const ProfileFavoritesWa = styled.div`
  ${ButtonLabels14px}
  min-height: 209px;
  margin-top: 14px;
  font-weight: 700;
  color: var(--x5d5d5b);
  line-height: 34px;
`;

const Language = styled.div`
  width: 305px;
  margin-left: 122px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 182px;
`;

const WebsiteName = styled.div`
  ${ButtonLabels16px}
  min-height: 24px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const TheWorldsFirstMa = styled.p`
  ${TextLabels16pxRegular}
  width: 305px;
  min-height: 71px;
  margin-top: 16px;
  font-weight: 400;
  color: var(--x000000primary);
  line-height: 24px;
`;

const FlexCol1 = styled.div`
  width: 1440px;
  margin-top: 51px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 69px;
`;

const Line = styled.img`
  width: 1440px;
  height: 1px;
  object-fit: cover;
`;

const FlexRow1 = styled.div`
  height: 47px;
  position: relative;
  margin-top: 21px;
  margin-left: 11px;
  display: flex;
  align-items: flex-start;
  min-width: 1388px;
`;

const NavigationWebFooterBarOnLightCopy1 = styled.div`
  .navigation-web-footer-bar-on-light-copy & {
    align-self: flex-start;
    margin-top: 104px;
  }
`;

const NavigationWebFooterBarOnLightCopy2 = styled.div`
  .navigation-web-footer-bar-on-light-copy & {
    align-self: flex-start;
    margin-top: 72px;
  }
`;

const NavigationWebFooterBarOnLightCopy3 = styled.div`
  .navigation-web-footer-bar-on-light-copy & {
    margin-top: 83px;
    margin-left: -7px;
    align-items: center;
  }
`;

const FlexRow2 = styled.div`
  .navigation-web-footer-bar-on-light-copy.navigation-web-footer-bar-on-light-copy-3 & {
    align-self: unset;
  }
`;

const FlexCol2 = styled.div`
  .navigation-web-footer-bar-on-light-copy.navigation-web-footer-bar-on-light-copy-3 & {
    width: 1446px;
    margin-right: 5px;
  }
`;

const Line1 = styled.img`
  .navigation-web-footer-bar-on-light-copy.navigation-web-footer-bar-on-light-copy-3 & {
    width: 1446px;
  }
`;

const FlexRow3 = styled.div`
  .navigation-web-footer-bar-on-light-copy.navigation-web-footer-bar-on-light-copy-3 & {
    margin-left: 5px;
  }
`;

export default NavigationWebFooterOnLight;
