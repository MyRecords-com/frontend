import React from "react";
import styled from "styled-components";
import { ButtonLabels14px, HeadingH6, TextLabels14pxRegular, Border1pxCfdbd5OutlineOnlight } from "../../styledMixins";


class MarketplaceItemV8OnLight extends React.Component {
  render() {
    const { art, title, amount, details, className } = this.props;

    return (
      <MarketplaceItemV1OnLight className={`marketplace-item-v1-on-light ${className || ""}`}>
        <OverlapGroup className="overlap-group-3">
          <OverlapGroup1 className="overlap-group1">
            <ShadowBg className="shadow-bg"></ShadowBg>
            <ShadowBg1 className="shadow-bg-1"></ShadowBg1>
            <Art className="art" src={art} />
          </OverlapGroup1>
          <Title className="title-1">{title}</Title>
          <Items className="items">
            <Amount className="amount">{amount}</Amount>
            <Details className="details-1">{details}</Details>
          </Items>
        </OverlapGroup>
      </MarketplaceItemV1OnLight>
    );
  }
}

const MarketplaceItemV1OnLight = styled.div`
  height: 378px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 325px;
  background-color: var(--ffffff);

  &.marketplace-item-v1-on-light.marketplace-item-v1-on-light-copy-4 {
    margin-top: 24px;
  }

  &.marketplace-item-v1-on-light.marketplace-item-v1-on-light-copy-6 {
    margin-top: 24px;
  }

  &.marketplace-item-v1-on-light.marketplace-item-v1-on-light-copy-5 {
    margin-top: 24px;
  }
`;

const OverlapGroup = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  width: 327px;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  padding: 25px 24px;
  align-items: flex-start;
  min-height: 380px;
  border-radius: 16px;
`;

const OverlapGroup1 = styled.div`
  width: 277px;
  height: 264px;
  position: relative;
  align-self: center;
`;

const ShadowBg = styled.div`
  position: absolute;
  width: 253px;
  height: 254px;
  top: 10px;
  left: 12px;
  background-color: var(--ffffff);
  border-radius: 10px;
  box-shadow: 0px 3px 4px #999ba840;
`;

const ShadowBg1 = styled.div`
  position: absolute;
  width: 265px;
  height: 254px;
  top: 4px;
  left: 6px;
  background-color: var(--ffffff);
  border-radius: 10px;
  box-shadow: 0px 3px 4px #999ba840;
`;

const Art = styled.img`
  position: absolute;
  width: 277px;
  height: 254px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Title = styled.div`
  ${HeadingH6}
  min-height: 24px;
  margin-top: 16px;
  font-weight: 800;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const Items = styled.div`
  display: flex;
  margin-top: 4px;
  width: min-content;
  height: min-content;
  align-items: center;
  gap: 4px;
`;

const Amount = styled.div`
  ${ButtonLabels14px}
  min-width: 17px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const Details = styled.div`
  ${TextLabels14pxRegular}
  min-width: 36px;
  font-weight: 400;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const Amount1 = styled.div`
  ${ButtonLabels14px}

  .marketplace-item-v1-on-light.marketplace-item-v1-on-light-copy-4  & {
    min-width: 19px;
  }
`;

const Details1 = styled.div`
  ${TextLabels14pxRegular}

  .marketplace-item-v1-on-light.marketplace-item-v1-on-light-copy-4  & {
    min-width: 61px;
  }
`;

const Amount2 = styled.div`
  ${ButtonLabels14px}

  .marketplace-item-v1-on-light.marketplace-item-v1-on-light-copy  & {
    min-width: 25px;
  }
`;

const Amount3 = styled.div`
  ${ButtonLabels14px}

  .marketplace-item-v1-on-light.marketplace-item-v1-on-light-copy-6  & {
    min-width: 19px;
  }
`;

const Amount4 = styled.div`
  ${ButtonLabels14px}

  .marketplace-item-v1-on-light.marketplace-item-v1-on-light-copy-3  & {
    min-width: 19px;
  }
`;

const Amount5 = styled.div`
  ${ButtonLabels14px}

  .marketplace-item-v1-on-light.marketplace-item-v1-on-light-copy-5  & {
    min-width: 26px;
  }
`;

export default MarketplaceItemV8OnLight;
