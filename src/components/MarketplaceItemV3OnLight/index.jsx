import React from "react";
import ButtonsIconLabelTransparentRestingO from "../ButtonsIconLabelTransparentRestingO";
import styled from "styled-components";
import { TextLabels14pxRegular, HeadingH6 } from "../../styledMixins";


class MarketplaceItemV3OnLight extends React.Component {
  render() {
    const { art, title, img, name, className, buttonsIconLabelTransparentRestingOProps } = this.props;

    return (
      <MarketplaceItemV1OnLight className={`marketplace-item-v1-on-light-1 ${className || ""}`}>
        <Art className="art-2" src={art} />
        <Title className="title-2">{title}</Title>
        <FlexRow className="flex-row-4">
          <Artist className="artist">
            <Img className="img-2" src={img} />
            <Name className="name-3">{name}</Name>
          </Artist>
          <ButtonsIconLabelTransparentRestingO
            lable={buttonsIconLabelTransparentRestingOProps.lable}
            className={buttonsIconLabelTransparentRestingOProps.className}
          />
        </FlexRow>
      </MarketplaceItemV1OnLight>
    );
  }
}

const MarketplaceItemV1OnLight = styled.div`
  width: 302px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 382px;
  background-color: var(--ffffff);

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-4-1 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-6-1 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-5-1 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-4-2 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-6-2 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-5-2 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-7-1 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-4-3 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-6-3 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-5-3 {
    margin-top: 50px;
  }

  &.marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-7-2 {
    margin-top: 50px;
  }
`;

const Art = styled.img`
  width: 302px;
  height: 302px;
  object-fit: cover;
`;

const Title = styled.div`
  ${HeadingH6}
  min-height: 24px;
  margin-top: 14px;
  font-weight: 800;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const FlexRow = styled.div`
  height: 46px;
  position: relative;
  margin-top: 1px;
  display: flex;
  align-items: center;
  min-width: 302px;
`;

const Artist = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
`;

const Img = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
`;

const Name = styled.div`
  ${TextLabels14pxRegular}
  min-height: 21px;
  margin-left: 10px;
  margin-bottom: 1px;
  min-width: 86px;
  font-weight: 400;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const Name1 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-4-1  & {
    min-width: 82px;
  }
`;

const Name2 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-1  & {
    min-width: 89px;
  }
`;

const Name3 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-6-1  & {
    min-width: 106px;
  }
`;

const Name4 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-2  & {
    min-width: 98px;
  }
`;

const Name5 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-5-1  & {
    min-width: 100px;
  }
`;

const Name6 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-4-2  & {
    min-width: 82px;
  }
`;

const Name7 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-7  & {
    min-width: 89px;
  }
`;

const Name8 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-6-2  & {
    min-width: 106px;
  }
`;

const Name9 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-2-1  & {
    min-width: 98px;
  }
`;

const Name10 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-5-2  & {
    min-width: 100px;
  }
`;

const Name11 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-3-1  & {
    min-width: 88px;
  }
`;

const Name12 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-7-1  & {
    min-width: 71px;
  }
`;

const Name13 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-4-3  & {
    min-width: 82px;
  }
`;

const Name14 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-8  & {
    min-width: 89px;
  }
`;

const Name15 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-6-3  & {
    min-width: 106px;
  }
`;

const Name16 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-2-2  & {
    min-width: 98px;
  }
`;

const Name17 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-5-3  & {
    min-width: 100px;
  }
`;

const Name18 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-3-2  & {
    min-width: 88px;
  }
`;

const Name19 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light-1.marketplace-item-v1-on-light-copy-7-2  & {
    min-width: 71px;
  }
`;

export default MarketplaceItemV3OnLight;
