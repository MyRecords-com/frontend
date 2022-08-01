import React from "react";
import ElementTagsF5F5FAOnLight from "../ElementTagsF5F5FAOnLight";
import ButtonsIconLabelTransparentRestingO from "../ButtonsIconLabelTransparentRestingO";
import styled from "styled-components";
import { TextLabels14pxRegular, HeadingH6, Border1pxCfdbd5OutlineOnlight } from "../../styledMixins";


class MarketplaceItemV7OnLight3 extends React.Component {
  render() {
    const { buttonsIconLabelTransparentRestingO } = this.props;

    return (
      <MarketplaceItemV1OnLightCopy5>
        <OverlapGroup1>
          <OnlightContainer>
            <ElementTagsF5F5FAOnLight />
            <ButtonsIconLabelTransparentRestingO
              lable={buttonsIconLabelTransparentRestingO.lable}
              className={buttonsIconLabelTransparentRestingO.className}
            />
          </OnlightContainer>
          <Art src="/img/art-1@2x.png" />
          <Title>Album Name</Title>
        </OverlapGroup1>
        <DetailsCopy>Artist Name</DetailsCopy>
      </MarketplaceItemV1OnLightCopy5>
    );
  }
}

const MarketplaceItemV1OnLightCopy5 = styled.div`
  width: 302px;
  height: 408px;
  position: relative;
  margin-left: 24px;
  background-color: var(--ffffff);
`;

const OverlapGroup1 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  position: absolute;
  width: 304px;
  top: -1px;
  left: -1px;
  display: flex;
  flex-direction: column;
  padding: 17px 24px;
  align-items: flex-start;
  min-height: 410px;
  border-radius: 16px;
`;

const OnlightContainer = styled.div`
  height: 46px;
  position: relative;
  align-self: center;
  display: flex;
  align-items: center;
  min-width: 254px;
`;

const Art = styled.img`
  width: 254px;
  height: 254px;
  margin-top: 9px;
  object-fit: cover;
`;

const Title = styled.div`
  ${HeadingH6}
  min-height: 24px;
  margin-top: 15px;
  font-weight: 800;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const DetailsCopy = styled.div`
  ${TextLabels14pxRegular}
  position: absolute;
  top: 372px;
  left: 24px;
  font-weight: 400;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

export default MarketplaceItemV7OnLight3;
