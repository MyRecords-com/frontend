import React from "react";
import MarketplaceItemV3OnLight from "../MarketplaceItemV3OnLight";
import styled from "styled-components";


class Grid extends React.Component {
  render() {
    const {
      className,
      marketplaceItemV3OnLight1Props,
      marketplaceItemV3OnLight2Props,
      marketplaceItemV3OnLight3Props,
      marketplaceItemV3OnLight4Props,
      marketplaceItemV3OnLight5Props,
      marketplaceItemV3OnLight6Props,
      marketplaceItemV3OnLight7Props,
      marketplaceItemV3OnLight8Props,
    } = this.props;

    return (
      <Grid1 className={`grid-2 ${className || ""}`}>
        <MarketplaceItemVOnlightContainer className="marketplace-item-v-onlight-container-2">
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
        <MarketplaceItemVOnlightCopyContaine className="marketplace-item-v-o-4">
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
        <MarketplaceItemVOnlightCopyContaine className="marketplace-item-v-o-5">
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
        <MarketplaceItemVOnlightCopyContaine className="marketplace-item-v-o-6">
          <MarketplaceItemV3OnLight
            art={marketplaceItemV3OnLight7Props.art}
            title={marketplaceItemV3OnLight7Props.title}
            img={marketplaceItemV3OnLight7Props.img}
            name={marketplaceItemV3OnLight7Props.name}
            className={marketplaceItemV3OnLight7Props.className}
            buttonsIconLabelTransparentRestingOProps={
              marketplaceItemV3OnLight7Props.buttonsIconLabelTransparentRestingOProps
            }
          />
          <MarketplaceItemV3OnLight
            art={marketplaceItemV3OnLight8Props.art}
            title={marketplaceItemV3OnLight8Props.title}
            img={marketplaceItemV3OnLight8Props.img}
            name={marketplaceItemV3OnLight8Props.name}
            className={marketplaceItemV3OnLight8Props.className}
            buttonsIconLabelTransparentRestingOProps={
              marketplaceItemV3OnLight8Props.buttonsIconLabelTransparentRestingOProps
            }
          />
        </MarketplaceItemVOnlightCopyContaine>
      </Grid1>
    );
  }
}

const Grid1 = styled.div`
  height: 814px;
  margin-top: 45px;
  margin-left: 18px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
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

const Grid2 = styled.div`
  .grid-2 & {
    margin-top: 60px;
    margin-left: unset;
  }
`;

export default Grid;
