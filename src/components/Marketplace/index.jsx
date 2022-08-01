import React from "react";
import NavigationWebTopBarOnLight from "../NavigationWebTopBarOnLight";
import ElementTags00D066Soft from "../ElementTags00D066Soft";
import ElementTagsF5F5FAOutlineOnLight from "../ElementTagsF5F5FAOutlineOnLight";
import ElementTagsF5F5FAWIconOnLight from "../ElementTagsF5F5FAWIconOnLight";
import Grid from "../Grid";
import ButtonsLabelFilledRestingOnLight from "../ButtonsLabelFilledRestingOnLight";
import NavigationWebFooterOnLight from "../NavigationWebFooterOnLight";
import styled from "styled-components";
import { HeadingH1 } from "../../styledMixins";
import "./Marketplace.css";

class Marketplace extends React.Component {
  render() {
    const {
      exploreNfts,
      navigationWebTopBarOnLightProps,
      elementTagsF5F5FAOutlineOnLight1Props,
      elementTagsF5F5FAOutlineOnLight2Props,
      elementTagsF5F5FAOutlineOnLight3Props,
      elementTagsF5F5FAWIconOnLight1Props,
      elementTagsF5F5FAWIconOnLight2Props,
      gridProps,
      buttonsLabelFilledRestingOnLightProps,
      navigationWebFooterOnLightProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="marketplace screen">
          <NavigationWebTopBarOnLight
            className={navigationWebTopBarOnLightProps.className}
            buttonsLabelFilledActiveOnLightProps={navigationWebTopBarOnLightProps.buttonsLabelFilledActiveOnLightProps}
            buttonsIconOutlineRestingOnLightProps={
              navigationWebTopBarOnLightProps.buttonsIconOutlineRestingOnLightProps
            }
          />
          <ExploreNFTs>{exploreNfts}</ExploreNFTs>
          <Tags>
            <Categories>
              <ElementTags00D066Soft />
              <ElementTagsF5F5FAOutlineOnLight tag={elementTagsF5F5FAOutlineOnLight1Props.tag} />
              <ElementTagsF5F5FAOutlineOnLight
                tag={elementTagsF5F5FAOutlineOnLight2Props.tag}
                className={elementTagsF5F5FAOutlineOnLight2Props.className}
              />
              <ElementTagsF5F5FAOutlineOnLight
                tag={elementTagsF5F5FAOutlineOnLight3Props.tag}
                className={elementTagsF5F5FAOutlineOnLight3Props.className}
              />
            </Categories>
            <ElementTagsF5F5FAWIconOnLight
              icon={elementTagsF5F5FAWIconOnLight1Props.icon}
              tag={elementTagsF5F5FAWIconOnLight1Props.tag}
              className={elementTagsF5F5FAWIconOnLight1Props.className}
            />
            <ElementTagsF5F5FAWIconOnLight
              icon={elementTagsF5F5FAWIconOnLight2Props.icon}
              tag={elementTagsF5F5FAWIconOnLight2Props.tag}
              className={elementTagsF5F5FAWIconOnLight2Props.className}
            />
          </Tags>
          <Grid {...gridProps} />
          <ButtonsLabelFilledRestingOnLight className={buttonsLabelFilledRestingOnLightProps.className} />
          <NavigationWebFooterOnLight {...navigationWebFooterOnLightProps} />
        </div>
      </div>
    );
  }
}

const ExploreNFTs = styled.div`
  ${HeadingH1}
  min-height: 51px;
  align-self: flex-start;
  margin-top: 114px;
  margin-left: 80px;
  font-weight: 800;
  color: var(--x000000primary);
`;

const Tags = styled.div`
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const Categories = styled.div`
  height: 36px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 460px;
`;

export default Marketplace;
