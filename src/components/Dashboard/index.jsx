import React from "react";
import NavigationWebTopBarOnLight from "../NavigationWebTopBarOnLight";
import ButtonsIconLabelOutlineRestingOnLig from "../ButtonsIconLabelOutlineRestingOnLig";
import NavigationWebSidebarMenuOnLight3 from "../NavigationWebSidebarMenuOnLight3";
import ListingsWebItemV8OnLight from "../ListingsWebItemV8OnLight";
import ButtonsLabelIconTransparentRestingO from "../ButtonsLabelIconTransparentRestingO";
import ButtonsLabelIconTransparentRestingO2 from "../ButtonsLabelIconTransparentRestingO2";
import ElementTagsF5F5FAWIconOnLight from "../ElementTagsF5F5FAWIconOnLight";
import MarketplaceItemV3OnLight from "../MarketplaceItemV3OnLight";
import ButtonsLabelFilledRestingOnLight from "../ButtonsLabelFilledRestingOnLight";
import NavigationWebFooterMinimalOnLight from "../NavigationWebFooterMinimalOnLight";
import styled from "styled-components";
import {
  TextLabels12pxMedium,
  ButtonLabels14px,
  ButtonLabels16px,
  HeadingH1,
  TextLabels14pxRegular,
  Border1pxCfdbd5OutlineOnlight,
} from "../../styledMixins";
import "./Dashboard.css";

class Dashboard extends React.Component {
  render() {
    const {
      bg,
      img,
      invisibleFriends,
      invisiblefriendscol,
      bio,
      name,
      createdBy,
      subtitle1,
      amount1,
      subtitle2,
      amount2,
      myCollections,
      myRecentSaves,
      navigationWebTopBarOnLightProps,
      buttonsIconLabelOutlineRestingOnLigProps,
      navigationWebSidebarMenuOnLight3Props,
      listingsWebItemV8OnLight1Props,
      listingsWebItemV8OnLight2Props,
      listingsWebItemV8OnLight3Props,
      listingsWebItemV8OnLight4Props,
      listingsWebItemV8OnLight5Props,
      buttonsLabelIconTransparentRestingOProps,
      buttonsLabelIconTransparentRestingO21Props,
      buttonsLabelIconTransparentRestingO22Props,
      buttonsLabelIconTransparentRestingO23Props,
      elementTagsF5F5FAWIconOnLightProps,
      marketplaceItemV3OnLight1Props,
      marketplaceItemV3OnLight2Props,
      marketplaceItemV3OnLight3Props,
      marketplaceItemV3OnLight4Props,
      marketplaceItemV3OnLight5Props,
      marketplaceItemV3OnLight6Props,
      buttonsLabelFilledRestingOnLightProps,
      navigationWebFooterMinimalOnLightProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dashboard screen">
          <NavigationWebTopBarOnLight
            buttonsLabelFilledActiveOnLightProps={navigationWebTopBarOnLightProps.buttonsLabelFilledActiveOnLightProps}
            buttonsIconOutlineRestingOnLightProps={
              navigationWebTopBarOnLightProps.buttonsIconOutlineRestingOnLightProps
            }
          />
          <Header>
            <OverlapGroup3>
              <OverlapGroup2>
                <Bg src={bg} />
                <Name>
                  <Img src={img} />
                  <InvisibleFriends>{invisibleFriends}</InvisibleFriends>
                  <Invisiblefriendscol>{invisiblefriendscol}</Invisiblefriendscol>
                </Name>
              </OverlapGroup2>
              <Bio>{bio}</Bio>
            </OverlapGroup3>
            <ButtonsIconLabelOutlineRestingOnLig>
              {buttonsIconLabelOutlineRestingOnLigProps.children}
            </ButtonsIconLabelOutlineRestingOnLig>
          </Header>
          <FlexRow>
            <OverlapGroup5>
              <NavigationWebSidebarMenuOnLight3 {...navigationWebSidebarMenuOnLight3Props} />
              <Details>
                <OverlapGroup4>
                  <Name1>{name}</Name1>
                  <CreatedBy>{createdBy}</CreatedBy>
                </OverlapGroup4>
                <OverlapGroup>
                  <FlexCol>
                    <Subtitle>{subtitle1}</Subtitle>
                    <Amount>{amount1}</Amount>
                  </FlexCol>
                  <Lines src="/img/lines@2x.svg" />
                  <FlexCol1>
                    <Subtitle1>{subtitle2}</Subtitle1>
                    <Amount1>{amount2}</Amount1>
                  </FlexCol1>
                </OverlapGroup>
              </Details>
            </OverlapGroup5>
            <FlexCol2>
              <MyCollections>{myCollections}</MyCollections>
              <OverlapGroup1>
                <Bg1></Bg1>
                <List>
                  <ListingsWebItemV8OnLight
                    art={listingsWebItemV8OnLight1Props.art}
                    name={listingsWebItemV8OnLight1Props.name}
                    subtitle1={listingsWebItemV8OnLight1Props.subtitle1}
                    items={listingsWebItemV8OnLight1Props.items}
                    x7H={listingsWebItemV8OnLight1Props.x7H}
                    price={listingsWebItemV8OnLight1Props.price}
                  />
                  <Line src="/img/line-1@1x.svg" />
                  <ListingsWebItemV8OnLight
                    art={listingsWebItemV8OnLight2Props.art}
                    name={listingsWebItemV8OnLight2Props.name}
                    subtitle1={listingsWebItemV8OnLight2Props.subtitle1}
                    items={listingsWebItemV8OnLight2Props.items}
                    x7H={listingsWebItemV8OnLight2Props.x7H}
                    price={listingsWebItemV8OnLight2Props.price}
                    className={listingsWebItemV8OnLight2Props.className}
                  />
                  <Line src="/img/line-1@1x.svg" />
                  <ListingsWebItemV8OnLight
                    art={listingsWebItemV8OnLight3Props.art}
                    name={listingsWebItemV8OnLight3Props.name}
                    subtitle1={listingsWebItemV8OnLight3Props.subtitle1}
                    items={listingsWebItemV8OnLight3Props.items}
                    x7H={listingsWebItemV8OnLight3Props.x7H}
                    price={listingsWebItemV8OnLight3Props.price}
                    className={listingsWebItemV8OnLight3Props.className}
                  />
                  <Line src="/img/line-1@1x.svg" />
                  <ListingsWebItemV8OnLight
                    art={listingsWebItemV8OnLight4Props.art}
                    name={listingsWebItemV8OnLight4Props.name}
                    subtitle1={listingsWebItemV8OnLight4Props.subtitle1}
                    items={listingsWebItemV8OnLight4Props.items}
                    x7H={listingsWebItemV8OnLight4Props.x7H}
                    price={listingsWebItemV8OnLight4Props.price}
                    className={listingsWebItemV8OnLight4Props.className}
                  />
                  <Line src="/img/line-1@1x.svg" />
                  <ListingsWebItemV8OnLight
                    art={listingsWebItemV8OnLight5Props.art}
                    name={listingsWebItemV8OnLight5Props.name}
                    subtitle1={listingsWebItemV8OnLight5Props.subtitle1}
                    items={listingsWebItemV8OnLight5Props.items}
                    x7H={listingsWebItemV8OnLight5Props.x7H}
                    price={listingsWebItemV8OnLight5Props.price}
                    className={listingsWebItemV8OnLight5Props.className}
                  />
                </List>
                <ListTitle>
                  <ButtonsLabelIconTransparentRestingO
                    lable={buttonsLabelIconTransparentRestingOProps.lable}
                    icon={buttonsLabelIconTransparentRestingOProps.icon}
                    className={buttonsLabelIconTransparentRestingOProps.className}
                  />
                  <ButtonsLabelIconTransparentRestingO2>
                    {buttonsLabelIconTransparentRestingO21Props.children}
                  </ButtonsLabelIconTransparentRestingO2>
                  <ButtonsLabelIconTransparentRestingO2
                    className={buttonsLabelIconTransparentRestingO22Props.className}
                  >
                    {buttonsLabelIconTransparentRestingO22Props.children}
                  </ButtonsLabelIconTransparentRestingO2>
                  <ButtonsLabelIconTransparentRestingO2
                    className={buttonsLabelIconTransparentRestingO23Props.className}
                  >
                    {buttonsLabelIconTransparentRestingO23Props.children}
                  </ButtonsLabelIconTransparentRestingO2>
                </ListTitle>
                <Line1 src="/img/line@1x.svg" />
              </OverlapGroup1>
              <MyRecentSaves>{myRecentSaves}</MyRecentSaves>
              <ElementTagsF5F5FAWIconOnLight
                icon={elementTagsF5F5FAWIconOnLightProps.icon}
                tag={elementTagsF5F5FAWIconOnLightProps.tag}
              />
              <Grid>
                <MarketplaceItemVOnlightContainer>
                  <MarketplaceItemV3OnLight
                    art={marketplaceItemV3OnLight1Props.art}
                    title={marketplaceItemV3OnLight1Props.title}
                    img={marketplaceItemV3OnLight1Props.img}
                    name={marketplaceItemV3OnLight1Props.name}
                    buttonsIconLabelTransparentRestingOProps={
                      marketplaceItemV3OnLight1Props.buttonsIconLabelTransparentRestingOProps
                    }
                  />
                  <MarketplaceItemV3OnLight
                    art={marketplaceItemV3OnLight2Props.art}
                    title={marketplaceItemV3OnLight2Props.title}
                    img={marketplaceItemV3OnLight2Props.img}
                    name={marketplaceItemV3OnLight2Props.name}
                    className={marketplaceItemV3OnLight2Props.className}
                    buttonsIconLabelTransparentRestingOProps={
                      marketplaceItemV3OnLight2Props.buttonsIconLabelTransparentRestingOProps
                    }
                  />
                </MarketplaceItemVOnlightContainer>
                <MarketplaceItemVOnlightCopyContaine>
                  <MarketplaceItemV3OnLight
                    art={marketplaceItemV3OnLight3Props.art}
                    title={marketplaceItemV3OnLight3Props.title}
                    img={marketplaceItemV3OnLight3Props.img}
                    name={marketplaceItemV3OnLight3Props.name}
                    className={marketplaceItemV3OnLight3Props.className}
                    buttonsIconLabelTransparentRestingOProps={
                      marketplaceItemV3OnLight3Props.buttonsIconLabelTransparentRestingOProps
                    }
                  />
                  <MarketplaceItemV3OnLight
                    art={marketplaceItemV3OnLight4Props.art}
                    title={marketplaceItemV3OnLight4Props.title}
                    img={marketplaceItemV3OnLight4Props.img}
                    name={marketplaceItemV3OnLight4Props.name}
                    className={marketplaceItemV3OnLight4Props.className}
                    buttonsIconLabelTransparentRestingOProps={
                      marketplaceItemV3OnLight4Props.buttonsIconLabelTransparentRestingOProps
                    }
                  />
                </MarketplaceItemVOnlightCopyContaine>
                <MarketplaceItemVOnlightCopyContaine>
                  <MarketplaceItemV3OnLight
                    art={marketplaceItemV3OnLight5Props.art}
                    title={marketplaceItemV3OnLight5Props.title}
                    img={marketplaceItemV3OnLight5Props.img}
                    name={marketplaceItemV3OnLight5Props.name}
                    className={marketplaceItemV3OnLight5Props.className}
                    buttonsIconLabelTransparentRestingOProps={
                      marketplaceItemV3OnLight5Props.buttonsIconLabelTransparentRestingOProps
                    }
                  />
                  <MarketplaceItemV3OnLight
                    art={marketplaceItemV3OnLight6Props.art}
                    title={marketplaceItemV3OnLight6Props.title}
                    img={marketplaceItemV3OnLight6Props.img}
                    name={marketplaceItemV3OnLight6Props.name}
                    className={marketplaceItemV3OnLight6Props.className}
                    buttonsIconLabelTransparentRestingOProps={
                      marketplaceItemV3OnLight6Props.buttonsIconLabelTransparentRestingOProps
                    }
                  />
                </MarketplaceItemVOnlightCopyContaine>
              </Grid>
            </FlexCol2>
          </FlexRow>
          <OnlightContainer>
            <ButtonsLabelFilledRestingOnLight className={buttonsLabelFilledRestingOnLightProps.className} />
            <NavigationWebFooterMinimalOnLight
              className={navigationWebFooterMinimalOnLightProps.className}
              linksProps={navigationWebFooterMinimalOnLightProps.linksProps}
              buttonsLabelIconTransparentRestingOProps={
                navigationWebFooterMinimalOnLightProps.buttonsLabelIconTransparentRestingOProps
              }
            />
          </OnlightContainer>
        </div>
      </div>
    );
  }
}

const Header = styled.div`
  width: 1280px;
  height: 460px;
  position: relative;
  margin-top: 45px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 1340px;
  height: 509px;
  top: 0;
  left: -60px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 1340px;
  height: 457px;
  top: 0;
  left: 0;
`;

const Bg = styled.img`
  position: absolute;
  width: 1280px;
  height: 322px;
  top: 0;
  left: 60px;
  object-fit: cover;
`;

const Name = styled.div`
  position: absolute;
  width: 342px;
  top: 273px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0 38px;
  align-items: center;
  min-height: 184px;
`;

const Img = styled.img`
  width: 92px;
  height: 92px;
  object-fit: cover;
`;

const InvisibleFriends = styled.div`
  ${HeadingH1}
  min-height: 51px;
  align-self: flex-end;
  margin-top: 16px;
  min-width: 265px;
  font-weight: 800;
  color: var(--x000000primary);
  text-align: center;
`;

const Invisiblefriendscol = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-top: 4px;
  min-width: 97px;
  font-weight: 700;
  color: var(--x7a52f4--hover);
  text-align: center;
  line-height: 21px;
  white-space: nowrap;
`;

const Bio = styled.p`
  ${TextLabels14pxRegular}
  position: absolute;
  width: 651px;
  top: 394px;
  left: 342px;
  font-weight: 400;
  color: var(--x5d5d5b);
  line-height: 21px;
`;

const FlexRow = styled.div`
  height: 1604px;
  margin-top: 11px;
  margin-right: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 1337px;
`;

const OverlapGroup5 = styled.div`
  width: 290px;
  height: 835px;
  position: relative;
`;

const Details = styled.div`
  position: absolute;
  width: 290px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 191px;
`;

const OverlapGroup4 = styled.div`
  ${TextLabels14pxRegular}
  width: 219px;
  height: 21px;
  position: relative;
  margin-left: 8.58px;
`;

const Name1 = styled.div`
  position: absolute;
  width: 122px;
  top: 0;
  left: 97px;
  font-weight: 400;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const CreatedBy = styled.div`
  position: absolute;
  width: 113px;
  top: 0;
  left: 0;
  font-weight: 400;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  height: 86px;
  margin-top: 21px;
  display: flex;
  padding: 1px 41px;
  align-items: center;
  min-width: 292px;
  border-radius: 16px;
`;

const FlexCol = styled.div`
  width: 67px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 45px;
`;

const Subtitle = styled.div`
  ${TextLabels12pxMedium}
  min-height: 18px;
  min-width: 67px;
  font-weight: 500;
  color: var(--x5d5d5b);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

const Amount = styled.div`
  ${ButtonLabels16px}
  min-height: 24px;
  margin-top: 3px;
  min-width: 49px;
  font-weight: 700;
  color: var(--x000000primary);
  text-align: center;
  line-height: 24px;
  white-space: nowrap;
`;

const Lines = styled.img`
  width: 1px;
  height: 82px;
  align-self: flex-start;
  margin-left: 37px;
`;

const FlexCol1 = styled.div`
  width: 66px;
  margin-left: 35px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 45px;
`;

const Subtitle1 = styled.div`
  ${TextLabels12pxMedium}
  min-height: 18px;
  min-width: 66px;
  font-weight: 500;
  color: var(--x5d5d5b);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

const Amount1 = styled.div`
  ${ButtonLabels16px}
  min-height: 24px;
  margin-top: 3px;
  margin-left: 1px;
  min-width: 39px;
  font-weight: 700;
  color: var(--x000000primary);
  text-align: center;
  line-height: 24px;
  white-space: nowrap;
`;

const FlexCol2 = styled.div`
  ${HeadingH1}
  width: 1025px;
  position: relative;
  align-self: flex-end;
  margin-left: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1580px;
`;

const MyCollections = styled.div`
  min-height: 51px;
  align-self: flex-end;
  margin-right: 1px;
  min-width: 311px;
  font-weight: 800;
  color: var(--x000000primary);
`;

const OverlapGroup1 = styled.div`
  width: 1027px;
  height: 496px;
  position: relative;
  margin-top: 13px;
  margin-left: -1px;
`;

const Bg1 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  position: absolute;
  width: 1026px;
  height: 496px;
  top: 0;
  left: 0;
  border-radius: 12px;
`;

const List = styled.div`
  position: absolute;
  width: 1024px;
  top: 79px;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 402px;
`;

const Line = styled.img`
  width: 975px;
  height: 1px;
  margin-top: 4px;
  margin-right: 1px;
`;

const ListTitle = styled.div`
  position: absolute;
  height: 36px;
  top: 15px;
  left: 25px;
  display: flex;
  align-items: flex-start;
  min-width: 978px;
`;

const Line1 = styled.img`
  position: absolute;
  width: 1025px;
  height: 1px;
  top: 67px;
  left: 2px;
`;

const MyRecentSaves = styled.div`
  min-height: 51px;
  margin-top: 64px;
  margin-left: 39px;
  font-weight: 800;
  color: var(--x000000primary);
`;

const Grid = styled.div`
  height: 814px;
  align-self: center;
  margin-top: 30px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 954px;
`;

const MarketplaceItemVOnlightContainer = styled.div`
  width: 302px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 814px;
`;

const MarketplaceItemVOnlightCopyContaine = styled.div`
  width: 302px;
  position: relative;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 814px;
`;

const OnlightContainer = styled.div`
  width: 1440px;
  position: relative;
  margin-top: 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 215px;
`;

export default Dashboard;
