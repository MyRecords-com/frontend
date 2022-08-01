import React from "react";
import NavigationWebTopBarOnLight from "../NavigationWebTopBarOnLight";
import ButtonsIconLabelOutlineRestingOnLig2 from "../ButtonsIconLabelOutlineRestingOnLig2";
import ButtonsIconOutlineRestingOnLight from "../ButtonsIconOutlineRestingOnLight";
import ButtonsLabelFilledActiveOnLight from "../ButtonsLabelFilledActiveOnLight";
import ButtonsLabelFilledRestingOnLight from "../ButtonsLabelFilledRestingOnLight";
import NavigationWebFooterOnLight from "../NavigationWebFooterOnLight";
import styled from "styled-components";
import { TextLabels12pxMedium, ButtonLabels14px, HeadingH1, TextLabels14pxRegular } from "../../styledMixins";
import "./AlbumDetails.css";

class AlbumDetails extends React.Component {
  render() {
    const {
      bg,
      livefellaz2452,
      detailsCopy,
      name,
      readMore,
      subtitle1,
      img1,
      address,
      subtitle2,
      img1Copy,
      title,
      navigationWebTopBarOnLightProps,
      buttonsIconLabelOutlineRestingOnLig2Props,
      buttonsIconOutlineRestingOnLightProps,
      buttonsLabelFilledActiveOnLightProps,
      buttonsLabelFilledRestingOnLightProps,
      navigationWebFooterOnLightProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="album-details screen">
          <NavigationWebTopBarOnLight
            buttonsLabelFilledActiveOnLightProps={navigationWebTopBarOnLightProps.buttonsLabelFilledActiveOnLightProps}
            buttonsIconOutlineRestingOnLightProps={
              navigationWebTopBarOnLightProps.buttonsIconOutlineRestingOnLightProps
            }
          />
          <FlexRow>
            <Image>
              <ButtonsIconLabeContainer>
                <ButtonsIconLabelOutlineRestingOnLig2 lable={buttonsIconLabelOutlineRestingOnLig2Props.lable} />
                <ButtonsIconOutlineRestingOnLight className={buttonsIconOutlineRestingOnLightProps.className}>
                  {buttonsIconOutlineRestingOnLightProps.children}
                </ButtonsIconOutlineRestingOnLight>
              </ButtonsIconLabeContainer>
              <Bg src={bg} />
            </Image>
            <Sidebar>
              <LiveFellaz2452>{livefellaz2452}</LiveFellaz2452>
              <DetailsCopy>{detailsCopy}</DetailsCopy>
              <Text>
                <Name>{name}</Name>
                <ReadMore>{readMore}</ReadMore>
              </Text>
              <FlexRow1>
                <Creator>
                  <Subtitle>{subtitle1}</Subtitle>
                  <FlexRow2>
                    <Img1 src={img1} />
                    <Address>{address}</Address>
                  </FlexRow2>
                </Creator>
                <Collection>
                  <Subtitle>{subtitle2}</Subtitle>
                  <FlexRow3>
                    <Img1 src={img1Copy} />
                    <Title>{title}</Title>
                  </FlexRow3>
                </Collection>
              </FlexRow1>
              <Tabs src="/img/tabs@2x.svg" />
              <ButtonsLabelFilContainer>
                <ButtonsLabelFilledActiveOnLight className={buttonsLabelFilledActiveOnLightProps.className}>
                  {buttonsLabelFilledActiveOnLightProps.children}
                </ButtonsLabelFilledActiveOnLight>
                <ButtonsLabelFilledRestingOnLight className={buttonsLabelFilledRestingOnLightProps.className} />
              </ButtonsLabelFilContainer>
            </Sidebar>
          </FlexRow>
          <NavigationWebFooterOnLight {...navigationWebFooterOnLightProps} />
        </div>
      </div>
    );
  }
}

const FlexRow = styled.div`
  height: 736px;
  margin-top: 40px;
  margin-right: 23px;
  display: flex;
  align-items: center;
  min-width: 1257px;
`;

const Image = styled.div`
  width: 736px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 736px;
`;

const ButtonsIconLabeContainer = styled.div`
  height: 46px;
  position: relative;
  margin-top: 24px;
  margin-right: 24.5px;
  display: flex;
  align-items: flex-start;
  min-width: 139px;
`;

const Bg = styled.img`
  width: 736px;
  height: 736px;
  margin-top: 54px;
  margin-right: -80px;
  object-fit: cover;
`;

const Sidebar = styled.div`
  width: 411px;
  margin-left: 110px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 692px;
`;

const LiveFellaz2452 = styled.div`
  ${HeadingH1}
  min-height: 51px;
  font-weight: 800;
  color: var(--x000000primary);
`;

const DetailsCopy = styled.div`
  ${TextLabels14pxRegular}
  min-height: 21px;
  margin-top: 6px;
  font-weight: 400;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const Text = styled.div`
  width: 411px;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 88px;
`;

const Name = styled.p`
  ${TextLabels14pxRegular}
  width: 411px;
  min-height: 63px;
  font-weight: 400;
  color: var(--x000000primary);
  line-height: 21px;
`;

const ReadMore = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-top: 4px;
  font-weight: 700;
  color: var(--x7a52f4--hover);
  line-height: 21px;
  white-space: nowrap;
`;

const FlexRow1 = styled.div`
  height: 64px;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  min-width: 386px;
`;

const Creator = styled.div`
  width: 189px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 64px;
`;

const Subtitle = styled.div`
  ${TextLabels12pxMedium}
  min-height: 18px;
  font-weight: 500;
  color: var(--x000000primary);
  line-height: 18px;
  white-space: nowrap;
`;

const FlexRow2 = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  min-width: 184px;
`;

const Img1 = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
`;

const Address = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-left: 10px;
  margin-bottom: 3px;
  min-width: 138px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const Collection = styled.div`
  width: 157px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 64px;
`;

const FlexRow3 = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  min-width: 195px;
`;

const Title = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-left: 10px;
  margin-bottom: 3px;
  min-width: 149px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const Tabs = styled.img`
  width: 401px;
  height: 1px;
  margin-top: 32px;
  margin-left: -2px;
`;

const ButtonsLabelFilContainer = styled.div`
  height: 46px;
  position: relative;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  min-width: 406px;
`;

export default AlbumDetails;
