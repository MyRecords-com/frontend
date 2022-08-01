import React from "react";
import ButtonsIconFilledActiveOnLight from "../ButtonsIconFilledActiveOnLight";
import MarketplaceItemV7OnLight from "../MarketplaceItemV7OnLight";
import MarketplaceItemV7OnLight2 from "../MarketplaceItemV7OnLight2";
import MarketplaceItemV7OnLight3 from "../MarketplaceItemV7OnLight3";
import AuthorWebItemV3OnLight from "../AuthorWebItemV3OnLight";
import ButtonsLabelFilledRestingOnLight from "../ButtonsLabelFilledRestingOnLight";
import TrendingAlbums from "../TrendingAlbums";
import ButtonsIconOutlineRestingOnLight from "../ButtonsIconOutlineRestingOnLight";
import ElementTabsLabelActiveOnLight from "../ElementTabsLabelActiveOnLight";
import ElementTabsLabelRestingOnLight from "../ElementTabsLabelRestingOnLight";
import NavigationWebFooterOnLight from "../NavigationWebFooterOnLight";
import styled from "styled-components";
import { ButtonLabels16px, Icons28px, TextLabels16pxRegular, HeadingH3 } from "../../styledMixins";
import "./Landing.css";

class Landing extends React.Component {
  render() {
    const {
      discoverCollectA,
      ourMarketplaceIs,
      fieldTitle,
      selectedNotableDro,
      navigationWebTopBarWLinksOnlightCop,
      mostViewedCollections,
      last7Days,
      arrow,
      trendingAlbums,
      browsePopularAlbums,
      buttonsIconFilledActiveOnLightProps,
      marketplaceItemV7OnLightProps,
      marketplaceItemV7OnLight21Props,
      marketplaceItemV7OnLight22Props,
      marketplaceItemV7OnLight3Props,
      authorWebItemV3OnLight1Props,
      authorWebItemV3OnLight2Props,
      authorWebItemV3OnLight3Props,
      authorWebItemV3OnLight4Props,
      authorWebItemV3OnLight5Props,
      authorWebItemV3OnLight6Props,
      authorWebItemV3OnLight7Props,
      authorWebItemV3OnLight8Props,
      authorWebItemV3OnLight9Props,
      buttonsLabelFilledRestingOnLightPro,
      trendingAlbums1Props,
      buttonsIconOutlineRestingOnLight1Pr,
      buttonsIconOutlineRestingOnLight2Pr,
      elementTabsLabelActiveOnLightProps,
      elementTabsLabelRestingOnLight1Prop,
      elementTabsLabelRestingOnLight2Prop,
      elementTabsLabelRestingOnLight3Prop,
      trendingAlbums2Props,
      buttonsLabelFilledRestingOnLightPro2,
      navigationWebFooterOnLightProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing screen">
          <OverlapGroup8>
            <OverlapGroup7>
              <Bg src="/img/bg@1x.svg" />
              <Images>
                <FlexRow>
                  <Images1 src="/img/images-4@2x.svg" />
                  <ImagesContainer>
                    <Images2 src="/img/images@2x.svg" />
                    <Images3 src="/img/images-2@2x.svg" />
                  </ImagesContainer>
                </FlexRow>
                <FlexCol>
                  <ImagesContainer1>
                    <Images4 src="/img/images-3@2x.svg" />
                    <Images5 src="/img/images-1@2x.svg" />
                  </ImagesContainer1>
                  <Images6 src="/img/images-5@2x.svg" />
                </FlexCol>
              </Images>
              <Title>
                <DiscoverCollectA>{discoverCollectA}</DiscoverCollectA>
                <OurMarketplaceIs>{ourMarketplaceIs}</OurMarketplaceIs>
              </Title>
              <OverlapGroup>
                <Bg1></Bg1>
                <FieldTitle>{fieldTitle}</FieldTitle>
                <ButtonsIconFilledActiveOnLight>
                  {buttonsIconFilledActiveOnLightProps.children}
                </ButtonsIconFilledActiveOnLight>
              </OverlapGroup>
            </OverlapGroup7>
            <HighlightAlbums>
              <SelectedNotableDro>{selectedNotableDro}</SelectedNotableDro>
              <MarketplaceItemVOnlightContainer>
                <MarketplaceItemV7OnLight
                  buttonsIconLabelTransparentRestingO={
                    marketplaceItemV7OnLightProps.buttonsIconLabelTransparentRestingO
                  }
                  buttonsIconLabelTransparentRestingO2={
                    marketplaceItemV7OnLightProps.buttonsIconLabelTransparentRestingO2
                  }
                />
                <MarketplaceItemV7OnLight2
                  art={marketplaceItemV7OnLight21Props.art}
                  buttonsIconLabelTransparentRestingO={
                    marketplaceItemV7OnLight21Props.buttonsIconLabelTransparentRestingO
                  }
                />
                <MarketplaceItemV7OnLight2
                  art={marketplaceItemV7OnLight22Props.art}
                  buttonsIconLabelTransparentRestingO={
                    marketplaceItemV7OnLight22Props.buttonsIconLabelTransparentRestingO
                  }
                />
                <MarketplaceItemV7OnLight3
                  buttonsIconLabelTransparentRestingO={
                    marketplaceItemV7OnLight3Props.buttonsIconLabelTransparentRestingO
                  }
                />
              </MarketplaceItemVOnlightContainer>
            </HighlightAlbums>
            <NavigationWebTopBarWLinksOnLightCop src={navigationWebTopBarWLinksOnlightCop} />
          </OverlapGroup8>
          <MostViewed>
            <Title1>
              <MostViewedCollections>{mostViewedCollections}</MostViewedCollections>
              <Last7Days>{last7Days}</Last7Days>
              <Arrow>{arrow}</Arrow>
            </Title1>
            <Grid>
              <CollectionsListWebItemVContainer>
                <AuthorWebItemV3OnLight
                  viewCount={authorWebItemV3OnLight1Props.viewCount}
                  number={authorWebItemV3OnLight1Props.number}
                  art={authorWebItemV3OnLight1Props.art}
                />
                <AuthorWebItemV3OnLight
                  viewCount={authorWebItemV3OnLight2Props.viewCount}
                  number={authorWebItemV3OnLight2Props.number}
                  art={authorWebItemV3OnLight2Props.art}
                  className={authorWebItemV3OnLight2Props.className}
                />
                <AuthorWebItemV3OnLight
                  viewCount={authorWebItemV3OnLight3Props.viewCount}
                  number={authorWebItemV3OnLight3Props.number}
                  art={authorWebItemV3OnLight3Props.art}
                  className={authorWebItemV3OnLight3Props.className}
                />
              </CollectionsListWebItemVContainer>
              <CollectionsListWebItemVContainer1>
                <AuthorWebItemV3OnLight
                  viewCount={authorWebItemV3OnLight4Props.viewCount}
                  number={authorWebItemV3OnLight4Props.number}
                  art={authorWebItemV3OnLight4Props.art}
                  className={authorWebItemV3OnLight4Props.className}
                />
                <AuthorWebItemV3OnLight
                  viewCount={authorWebItemV3OnLight5Props.viewCount}
                  number={authorWebItemV3OnLight5Props.number}
                  art={authorWebItemV3OnLight5Props.art}
                  className={authorWebItemV3OnLight5Props.className}
                />
                <AuthorWebItemV3OnLight
                  viewCount={authorWebItemV3OnLight6Props.viewCount}
                  number={authorWebItemV3OnLight6Props.number}
                  art={authorWebItemV3OnLight6Props.art}
                  className={authorWebItemV3OnLight6Props.className}
                />
              </CollectionsListWebItemVContainer1>
              <ListWebItemVCopyContainer>
                <AuthorWebItemV3OnLight
                  viewCount={authorWebItemV3OnLight7Props.viewCount}
                  number={authorWebItemV3OnLight7Props.number}
                  art={authorWebItemV3OnLight7Props.art}
                  className={authorWebItemV3OnLight7Props.className}
                />
                <AuthorWebItemV3OnLight
                  viewCount={authorWebItemV3OnLight8Props.viewCount}
                  number={authorWebItemV3OnLight8Props.number}
                  art={authorWebItemV3OnLight8Props.art}
                  className={authorWebItemV3OnLight8Props.className}
                />
                <AuthorWebItemV3OnLight
                  viewCount={authorWebItemV3OnLight9Props.viewCount}
                  number={authorWebItemV3OnLight9Props.number}
                  art={authorWebItemV3OnLight9Props.art}
                  className={authorWebItemV3OnLight9Props.className}
                />
              </ListWebItemVCopyContainer>
            </Grid>
            <ButtonsLabelFilledRestingOnLight className={buttonsLabelFilledRestingOnLightPro.className} />
          </MostViewed>
          <Trending>
            <TrendingAlbumsContainer>
              <TrendingAlbums
                marketplaceItemV7OnLightProps={trendingAlbums1Props.marketplaceItemV7OnLightProps}
                marketplaceItemV7OnLight21Props={trendingAlbums1Props.marketplaceItemV7OnLight21Props}
                marketplaceItemV7OnLight22Props={trendingAlbums1Props.marketplaceItemV7OnLight22Props}
                marketplaceItemV7OnLight3Props={trendingAlbums1Props.marketplaceItemV7OnLight3Props}
              />
              <TrendingAlbums1>{trendingAlbums}</TrendingAlbums1>
            </TrendingAlbumsContainer>
            <Slider>
              <ButtonsIconOutlineRestingOnLight className={buttonsIconOutlineRestingOnLight1Pr.className}>
                {buttonsIconOutlineRestingOnLight1Pr.children}
              </ButtonsIconOutlineRestingOnLight>
              <Points>
                <Rectangle></Rectangle>
                <OvalCopy></OvalCopy>
                <OvalCopy></OvalCopy>
                <OvalCopy></OvalCopy>
              </Points>
              <ButtonsIconOutlineRestingOnLight className={buttonsIconOutlineRestingOnLight2Pr.className}>
                {buttonsIconOutlineRestingOnLight2Pr.children}
              </ButtonsIconOutlineRestingOnLight>
            </Slider>
          </Trending>
          <Browse>
            <BrowsePopularAlbums>{browsePopularAlbums}</BrowsePopularAlbums>
            <OverlapGroup5>
              <OverlapGroup1>
                <OverlapGroup2>
                  <Active>
                    <ElementTabsLabelActiveOnLight>
                      {elementTabsLabelActiveOnLightProps.children}
                    </ElementTabsLabelActiveOnLight>
                    <Line3 src="/img/line-3@2x.svg" />
                  </Active>
                  <Line2 src="/img/line-2@1x.svg" />
                </OverlapGroup2>
                <ElementTabsLabelRestingOnLight>
                  {elementTabsLabelRestingOnLight1Prop.children}
                </ElementTabsLabelRestingOnLight>
                <ElementTabsLabelRestingOnLight className={elementTabsLabelRestingOnLight2Prop.className}>
                  {elementTabsLabelRestingOnLight2Prop.children}
                </ElementTabsLabelRestingOnLight>
                <ElementTabsLabelRestingOnLight className={elementTabsLabelRestingOnLight3Prop.className}>
                  {elementTabsLabelRestingOnLight3Prop.children}
                </ElementTabsLabelRestingOnLight>
              </OverlapGroup1>
              <TrendingAlbums
                className={trendingAlbums2Props.className}
                marketplaceItemV7OnLightProps={trendingAlbums2Props.marketplaceItemV7OnLightProps}
                marketplaceItemV7OnLight21Props={trendingAlbums2Props.marketplaceItemV7OnLight21Props}
                marketplaceItemV7OnLight22Props={trendingAlbums2Props.marketplaceItemV7OnLight22Props}
                marketplaceItemV7OnLight3Props={trendingAlbums2Props.marketplaceItemV7OnLight3Props}
              />
            </OverlapGroup5>
            <ButtonsLabelFilledRestingOnLight className={buttonsLabelFilledRestingOnLightPro2.className} />
          </Browse>
          <NavigationWebFooterOnLight {...navigationWebFooterOnLightProps} />
        </div>
      </div>
    );
  }
}

const OverlapGroup8 = styled.div`
  width: 1571px;
  height: 1215px;
  position: relative;
  margin-left: -67px;
`;

const OverlapGroup7 = styled.div`
  position: absolute;
  width: 1571px;
  height: 716px;
  top: 0;
  left: 0;
`;

const Bg = styled.img`
  position: absolute;
  width: 1447px;
  height: 716px;
  top: 0;
  left: 63px;
`;

const Images = styled.div`
  position: absolute;
  height: 315px;
  top: 193px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1571px;
`;

const FlexRow = styled.div`
  height: 293px;
  align-self: flex-end;
  margin-bottom: 0;
  display: flex;
  align-items: flex-start;
  min-width: 324px;
`;

const Images1 = styled.img`
  width: 93px;
  height: 157px;
`;

const ImagesContainer = styled.div`
  width: 164px;
  align-self: flex-end;
  margin-left: 67px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 252px;
`;

const Images2 = styled.img`
  width: 118px;
  height: 116px;
  align-self: flex-end;
`;

const Images3 = styled.img`
  width: 96px;
  height: 94px;
  margin-top: 43px;
`;

const FlexCol = styled.div`
  width: 271px;
  margin-left: 919px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 305px;
`;

const ImagesContainer1 = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 271px;
`;

const Images4 = styled.img`
  width: 160px;
  height: 157px;
`;

const Images5 = styled.img`
  width: 39px;
  height: 94px;
  margin-left: 72px;
  margin-bottom: 0;
`;

const Images6 = styled.img`
  width: 117px;
  height: 115px;
  margin-top: 33px;
  margin-right: 33.69px;
`;

const Title = styled.div`
  position: absolute;
  width: 726px;
  top: 187px;
  left: 426px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 192px;
`;

const DiscoverCollectA = styled.h1`
  width: 726px;
  margin-top: -1px;
  min-height: 130px;
  font-family: var(--font-family-inter);
  font-weight: 800;
  color: var(--x000000primary);
  font-size: 54px;
  text-align: center;
  letter-spacing: 0;
`;

const OurMarketplaceIs = styled.p`
  ${TextLabels16pxRegular}
  width: 470px;
  min-height: 47px;
  margin-top: 15px;
  margin-left: 0;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: center;
  line-height: 24px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 635px;
  height: 85px;
  top: 417px;
  left: 472px;
  background-color: var(--white-2);
  border-radius: 86px;
  box-shadow: 0px 20px 90px #0000000f;
  backdrop-filter: blur(62.52048110961914px) brightness(100%);
  -webkit-backdrop-filter: blur(62.52048110961914px) brightness(100%);
`;

const Bg1 = styled.div`
  position: absolute;
  width: 635px;
  height: 85px;
  top: 0;
  left: 0;
  background-color: var(--ffffff);
  border-radius: 86px;
  opacity: 0.6;
`;

const FieldTitle = styled.p`
  ${ButtonLabels16px}
  position: absolute;
  top: 31px;
  left: 35px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const HighlightAlbums = styled.div`
  position: absolute;
  width: 1280px;
  top: 667px;
  left: 147px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 548px;
`;

const SelectedNotableDro = styled.div`
  ${HeadingH3}
  min-height: 34px;
  min-width: 404px;
  font-weight: 800;
  color: var(--x000000primary);
`;

const MarketplaceItemVOnlightContainer = styled.div`
  height: 408px;
  position: relative;
  margin-top: 42px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const NavigationWebTopBarWLinksOnLightCop = styled.img`
  position: absolute;
  width: 1440px;
  height: 84px;
  top: 3px;
  left: 67px;
`;

const MostViewed = styled.div`
  width: 1280px;
  position: relative;
  align-self: center;
  margin-top: 90px;
  margin-right: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 450px;
`;

const Title1 = styled.div`
  height: 34px;
  margin-left: 0.5px;
  display: flex;
  align-items: flex-end;
  min-width: 514px;
`;

const MostViewedCollections = styled.div`
  ${HeadingH3}
  margin-left: -13px;
  min-height: 34px;
  min-width: 337px;
  font-weight: 800;
  color: var(--x000000primary);
`;

const Last7Days = styled.div`
  ${HeadingH3}
  min-height: 34px;
  margin-left: 12px;
  min-width: 148px;
  font-weight: 800;
  color: var(--x7a52f4--hover);
`;

const Arrow = styled.div`
  ${Icons28px}
  min-height: 34px;
  margin-left: 12px;
  margin-bottom: -6px;
  min-width: 11px;
  font-weight: 400;
  color: var(--x7a52f4--hover);
  text-align: center;
`;

const Grid = styled.div`
  height: 278px;
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const CollectionsListWebItemVContainer = styled.div`
  width: 410px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 278px;
`;

const CollectionsListWebItemVContainer1 = styled.div`
  width: 410px;
  position: relative;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 278px;
`;

const ListWebItemVCopyContainer = styled.div`
  width: 410px;
  position: relative;
  margin-left: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 278px;
`;

const Trending = styled.div`
  width: 1280px;
  align-self: center;
  margin-top: 90px;
  margin-right: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 630px;
`;

const TrendingAlbumsContainer = styled.div`
  width: 1280px;
  height: 575px;
  position: relative;
  margin-left: -3px;
`;

const TrendingAlbums1 = styled.div`
  ${HeadingH3}
  position: absolute;
  top: 0;
  left: 521px;
  font-weight: 800;
  color: var(--x000000primary);
`;

const Slider = styled.div`
  height: 46px;
  position: relative;
  margin-top: 9px;
  display: flex;
  align-items: center;
  min-width: 1280px;
`;

const Points = styled.div`
  height: 8px;
  margin-left: 565px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 58px;
`;

const Rectangle = styled.div`
  width: 18px;
  height: 10px;
  margin-top: -1px;
  background-color: #00000033;
  border-radius: 4px;
`;

const OvalCopy = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 4px;
  margin-top: -1px;
  background-color: var(--white);
  border-radius: 5px;
`;

const Browse = styled.div`
  width: 1440px;
  position: relative;
  margin-top: 90px;
  margin-left: -7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 694px;
`;

const BrowsePopularAlbums = styled.div`
  ${HeadingH3}
  min-height: 34px;
  margin-left: 1px;
  min-width: 325px;
  font-weight: 800;
  color: var(--x000000primary);
  text-align: center;
`;

const OverlapGroup5 = styled.div`
  width: 1434px;
  height: 569px;
  position: relative;
  margin-top: 34px;
  margin-right: 6.5px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1434px;
  height: 51px;
  top: 0;
  left: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 1434px;
  height: 50px;
  top: 1px;
  left: 0;
`;

const Active = styled.div`
  position: absolute;
  height: 50px;
  top: 0;
  left: 463px;
  display: flex;
  align-items: flex-start;
  min-width: 23px;
`;

const Line3 = styled.img`
  width: 24px;
  height: 2px;
  align-self: flex-end;
  margin-left: 441px;
  margin-bottom: -1px;
`;

const Line2 = styled.img`
  position: absolute;
  width: 1434px;
  height: 1px;
  top: 48px;
  left: 0;
`;

export default Landing;
