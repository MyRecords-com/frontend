import React from "react";
import MarketplaceItemV7OnLight from "../MarketplaceItemV7OnLight";
import MarketplaceItemV7OnLight2 from "../MarketplaceItemV7OnLight2";
import MarketplaceItemV7OnLight3 from "../MarketplaceItemV7OnLight3";
import styled from "styled-components";


class TrendingAlbums extends React.Component {
  render() {
    const {
      className,
      marketplaceItemV7OnLightProps,
      marketplaceItemV7OnLight21Props,
      marketplaceItemV7OnLight22Props,
      marketplaceItemV7OnLight3Props,
    } = this.props;

    return (
      <TrendingAlbums1 className={`trending-albums-1 ${className || ""}`}>
        <MarketplaceItemV7OnLight
          buttonsIconLabelTransparentRestingO={marketplaceItemV7OnLightProps.buttonsIconLabelTransparentRestingO}
          buttonsIconLabelTransparentRestingO2={marketplaceItemV7OnLightProps.buttonsIconLabelTransparentRestingO2}
        />
        <MarketplaceItemV7OnLight2
          art={marketplaceItemV7OnLight21Props.art}
          buttonsIconLabelTransparentRestingO={marketplaceItemV7OnLight21Props.buttonsIconLabelTransparentRestingO}
        />
        <MarketplaceItemV7OnLight2
          art={marketplaceItemV7OnLight22Props.art}
          buttonsIconLabelTransparentRestingO={marketplaceItemV7OnLight22Props.buttonsIconLabelTransparentRestingO}
        />
        <MarketplaceItemV7OnLight3
          buttonsIconLabelTransparentRestingO={marketplaceItemV7OnLight3Props.buttonsIconLabelTransparentRestingO}
        />
      </TrendingAlbums1>
    );
  }
}

const TrendingAlbums1 = styled.div`
  position: absolute;
  height: 548px;
  top: 27px;
  left: 0;
  display: flex;
  padding: 64px 0;
  align-items: flex-end;
  min-width: 1280px;

  &.trending-albums-1.popular-albums {
    top: 21px;
    left: 80px;
  }
`;

export default TrendingAlbums;
