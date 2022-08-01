import React from "react";
import NavigationWebTopBarOnLight from "../NavigationWebTopBarOnLight";
import NavigationWebSidebarMenuOnLight2 from "../NavigationWebSidebarMenuOnLight2";
import MarketplaceItemV8OnLight from "../MarketplaceItemV8OnLight";
import ElementPaginationCenteredOnLight from "../ElementPaginationCenteredOnLight";
import NavigationWebFooterMinimalOnLight from "../NavigationWebFooterMinimalOnLight";
import styled from "styled-components";
import { HeadingH1 } from "../../styledMixins";
import "./YourCollection.css";

class YourCollection extends React.Component {
  render() {
    const {
      yourCollections,
      navigationWebTopBarOnLightProps,
      navigationWebSidebarMenuOnLight2Props,
      marketplaceItemV8OnLight1Props,
      marketplaceItemV8OnLight2Props,
      marketplaceItemV8OnLight3Props,
      marketplaceItemV8OnLight4Props,
      marketplaceItemV8OnLight5Props,
      marketplaceItemV8OnLight6Props,
      elementPaginationCenteredOnLightProps,
      navigationWebFooterMinimalOnLightProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="your-collection screen">
          <NavigationWebTopBarOnLight
            buttonsLabelFilledActiveOnLightProps={navigationWebTopBarOnLightProps.buttonsLabelFilledActiveOnLightProps}
            buttonsIconOutlineRestingOnLightProps={
              navigationWebTopBarOnLightProps.buttonsIconOutlineRestingOnLightProps
            }
          />
          <FlexRow>
            <NavigationWebSidebarMenuOnLight2 {...navigationWebSidebarMenuOnLight2Props} />
            <FlexCol>
              <YourCollections>{yourCollections}</YourCollections>
              <Grid>
                <MarketplaceItemVOnlightContainer>
                  <MarketplaceItemV8OnLight
                    art={marketplaceItemV8OnLight1Props.art}
                    title={marketplaceItemV8OnLight1Props.title}
                    amount={marketplaceItemV8OnLight1Props.amount}
                    details={marketplaceItemV8OnLight1Props.details}
                  />
                  <MarketplaceItemV8OnLight
                    art={marketplaceItemV8OnLight2Props.art}
                    title={marketplaceItemV8OnLight2Props.title}
                    amount={marketplaceItemV8OnLight2Props.amount}
                    details={marketplaceItemV8OnLight2Props.details}
                    className={marketplaceItemV8OnLight2Props.className}
                  />
                </MarketplaceItemVOnlightContainer>
                <MarketplaceItemVOnlightCopyContaine>
                  <MarketplaceItemV8OnLight
                    art={marketplaceItemV8OnLight3Props.art}
                    title={marketplaceItemV8OnLight3Props.title}
                    amount={marketplaceItemV8OnLight3Props.amount}
                    details={marketplaceItemV8OnLight3Props.details}
                    className={marketplaceItemV8OnLight3Props.className}
                  />
                  <MarketplaceItemV8OnLight
                    art={marketplaceItemV8OnLight4Props.art}
                    title={marketplaceItemV8OnLight4Props.title}
                    amount={marketplaceItemV8OnLight4Props.amount}
                    details={marketplaceItemV8OnLight4Props.details}
                    className={marketplaceItemV8OnLight4Props.className}
                  />
                </MarketplaceItemVOnlightCopyContaine>
                <MarketplaceItemVOnlightCopyContaine>
                  <MarketplaceItemV8OnLight
                    art={marketplaceItemV8OnLight5Props.art}
                    title={marketplaceItemV8OnLight5Props.title}
                    amount={marketplaceItemV8OnLight5Props.amount}
                    details={marketplaceItemV8OnLight5Props.details}
                    className={marketplaceItemV8OnLight5Props.className}
                  />
                  <MarketplaceItemV8OnLight
                    art={marketplaceItemV8OnLight6Props.art}
                    title={marketplaceItemV8OnLight6Props.title}
                    amount={marketplaceItemV8OnLight6Props.amount}
                    details={marketplaceItemV8OnLight6Props.details}
                    className={marketplaceItemV8OnLight6Props.className}
                  />
                </MarketplaceItemVOnlightCopyContaine>
              </Grid>
              <ElementPaginationCenteredOnLight
                number1={elementPaginationCenteredOnLightProps.number1}
                number2={elementPaginationCenteredOnLightProps.number2}
                number3={elementPaginationCenteredOnLightProps.number3}
                number4={elementPaginationCenteredOnLightProps.number4}
                number5={elementPaginationCenteredOnLightProps.number5}
                next1Props={elementPaginationCenteredOnLightProps.next1Props}
                next2Props={elementPaginationCenteredOnLightProps.next2Props}
              />
            </FlexCol>
          </FlexRow>
          <NavigationWebFooterMinimalOnLight
            className={navigationWebFooterMinimalOnLightProps.className}
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
  height: 981px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 1359px;
`;

const FlexCol = styled.div`
  width: 1023px;
  position: relative;
  align-self: flex-end;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 941px;
`;

const YourCollections = styled.div`
  ${HeadingH1}
  min-height: 51px;
  font-weight: 800;
  color: var(--x000000primary);
`;

const Grid = styled.div`
  height: 780px;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  min-width: 1023px;
`;

const MarketplaceItemVOnlightContainer = styled.div`
  width: 325px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 780px;
`;

const MarketplaceItemVOnlightCopyContaine = styled.div`
  width: 325px;
  position: relative;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 780px;
`;

export default YourCollection;
