import React from "react";
import NavigationWebTopBarOnLight from "../NavigationWebTopBarOnLight";
import ButtonsIconLabelOutlineRestingOnLig2 from "../ButtonsIconLabelOutlineRestingOnLig2";
import ButtonsIconOutlineRestingOnLight from "../ButtonsIconOutlineRestingOnLight";
import ElementTagsF5F5FAWIconOnLight from "../ElementTagsF5F5FAWIconOnLight";
import Grid from "../Grid";
import ButtonsLabelFilledRestingOnLight from "../ButtonsLabelFilledRestingOnLight";
import NavigationWebFooterOnLight from "../NavigationWebFooterOnLight";
import styled from "styled-components";
import {
  TextLabels12pxMedium,
  ButtonLabels14px,
  ButtonLabels16px,
  HeadingH1,
  TextLabels14pxRegular,
  Border1pxCfdbd5OutlineOnlight,
} from "../../styledMixins";
import "./Collection.css";

class Collection extends React.Component {
  render() {
    const {
      bg,
      img,
      invisibleFriends,
      invisiblefriendscol,
      name1,
      createdBy,
      subtitle1,
      amount1,
      subtitle2,
      amount2,
      name2,
      navigationWebTopBarOnLightProps,
      buttonsIconLabelOutlineRestingOnLig2Props,
      buttonsIconOutlineRestingOnLight1Props,
      buttonsIconOutlineRestingOnLight2Props,
      elementTagsF5F5FAWIconOnLightProps,
      gridProps,
      buttonsLabelFilledRestingOnLightProps,
      navigationWebFooterOnLightProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="collection screen">
          <NavigationWebTopBarOnLight
            buttonsLabelFilledActiveOnLightProps={navigationWebTopBarOnLightProps.buttonsLabelFilledActiveOnLightProps}
            buttonsIconOutlineRestingOnLightProps={
              navigationWebTopBarOnLightProps.buttonsIconOutlineRestingOnLightProps
            }
          />
          <Header>
            <OverlapGroup3>
              <Bg src={bg} />
              <Actions>
                <ButtonsIconLabelOutlineRestingOnLig2
                  lable={buttonsIconLabelOutlineRestingOnLig2Props.lable}
                  className={buttonsIconLabelOutlineRestingOnLig2Props.className}
                />
                <ButtonsIconOutlineRestingOnLight className={buttonsIconOutlineRestingOnLight1Props.className}>
                  {buttonsIconOutlineRestingOnLight1Props.children}
                </ButtonsIconOutlineRestingOnLight>
                <ButtonsIconOutlineRestingOnLight className={buttonsIconOutlineRestingOnLight2Props.className}>
                  {buttonsIconOutlineRestingOnLight2Props.children}
                </ButtonsIconOutlineRestingOnLight>
              </Actions>
              <Title>
                <Img src={img} />
                <InvisibleFriends>{invisibleFriends}</InvisibleFriends>
                <Invisiblefriendscol>{invisiblefriendscol}</Invisiblefriendscol>
              </Title>
            </OverlapGroup3>
          </Header>
          <Details>
            <OverlapGroup1>
              <Name>{name1}</Name>
              <CreatedBy>{createdBy}</CreatedBy>
            </OverlapGroup1>
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
            <Name1>{name2}</Name1>
          </Details>
          <Filters>
            <ElementTagsF5F5FAWIconOnLight
              icon={elementTagsF5F5FAWIconOnLightProps.icon}
              tag={elementTagsF5F5FAWIconOnLightProps.tag}
              className={elementTagsF5F5FAWIconOnLightProps.className}
            />
          </Filters>
          <Grid {...gridProps} />
          <ButtonsLabelFilledRestingOnLight className={buttonsLabelFilledRestingOnLightProps.className} />
          <NavigationWebFooterOnLight {...navigationWebFooterOnLightProps} />
        </div>
      </div>
    );
  }
}

const Header = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  min-width: 1280px;
`;

const OverlapGroup3 = styled.div`
  width: 1280px;
  height: 460px;
  position: relative;
`;

const Bg = styled.img`
  position: absolute;
  width: 1280px;
  height: 322px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Actions = styled.div`
  display: flex;
  width: min-content;
  height: min-content;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  position: absolute;
  top: 20px;
  left: 982px;
`;

const Title = styled.div`
  position: absolute;
  width: 342px;
  top: 276px;
  left: 469px;
  display: flex;
  flex-direction: column;
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
  margin-top: 16px;
  margin-left: 1px;
  min-width: 341px;
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

const Details = styled.div`
  ${TextLabels14pxRegular}
  width: 290px;
  margin-top: 16px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 191px;
`;

const OverlapGroup1 = styled.div`
  width: 197px;
  height: 21px;
  position: relative;
  align-self: center;
  margin-left: 30.58px;
`;

const Name = styled.div`
  position: absolute;
  width: 122px;
  top: 0;
  left: 75px;
  font-weight: 400;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const CreatedBy = styled.div`
  position: absolute;
  width: 91px;
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
  margin-left: -1px;
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

const Name1 = styled.p`
  width: 379px;
  min-height: 63px;
  margin-top: 21px;
  margin-left: -37px;
  font-weight: 400;
  color: var(--x5d5d5b);
  text-align: center;
  line-height: 21px;
`;

const Filters = styled.div`
  height: 36px;
  position: relative;
  align-self: flex-start;
  margin-top: 102px;
  margin-left: 81px;
  display: flex;
  align-items: flex-start;
  min-width: 123px;
`;

export default Collection;
