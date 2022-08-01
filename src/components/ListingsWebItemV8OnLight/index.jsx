import React from "react";
import styled from "styled-components";
import { ButtonLabels14px, ButtonLabels16px, TextLabels14pxRegular } from "../../styledMixins";


class ListingsWebItemV8OnLight extends React.Component {
  render() {
    const { art, name, subtitle1, items, x7H, price, className } = this.props;

    return (
      <JobsListWebItemV10 className={`jobs-list-web-item-v10 ${className || ""}`}>
        <FlexRow className="flex-row-3">
          <Art className="art-1" src={art} />
          <FlexCol className="flex-col-5">
            <Name className="name-2">{name}</Name>
            <Subtitle className="subtitle-3">{subtitle1}</Subtitle>
          </FlexCol>
          <FlexCol1 className="flex-col-6">
            <Items className="items-1">{items}</Items>
            <Subtitle1 className="subtitle-4">tracks</Subtitle1>
          </FlexCol1>
          <FlexCol2 className="flex-col-7">
            <X7h className="x7h">{x7H}</X7h>
            <Subtitle2 className="subtitle-5">views</Subtitle2>
          </FlexCol2>
        </FlexRow>
        <Price className="price">{price}</Price>
        <Subtitle3 className="subtitle-6">saves</Subtitle3>
      </JobsListWebItemV10>
    );
  }
}

const JobsListWebItemV10 = styled.div`
  width: 1024px;
  height: 74px;
  position: relative;

  &.jobs-list-web-item-v10.jobs-list-web-item-v10-1 {
    margin-top: 4px;
  }

  &.jobs-list-web-item-v10.jobs-list-web-item-v10-2 {
    margin-top: 4px;
  }

  &.jobs-list-web-item-v10.jobs-list-web-item-v10-3 {
    margin-top: 4px;
  }

  &.jobs-list-web-item-v10.jobs-list-web-item-v10-4 {
    margin-top: 4px;
  }
`;

const FlexRow = styled.div`
  position: absolute;
  height: 49px;
  top: 12px;
  left: 24px;
  display: flex;
  align-items: center;
  min-width: 800px;
`;

const Art = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-end;
  object-fit: cover;
`;

const FlexCol = styled.div`
  width: 171px;
  align-self: flex-start;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 47px;
`;

const Name = styled.div`
  ${ButtonLabels16px}
  min-height: 24px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const Subtitle = styled.p`
  ${TextLabels14pxRegular}
  min-height: 21px;
  margin-top: 2px;
  font-weight: 400;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const FlexCol1 = styled.div`
  ${TextLabels14pxRegular}
  width: 41px;
  margin-left: 341px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 45px;
`;

const Items = styled.div`
  min-height: 21px;
  min-width: 16px;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: right;
  line-height: 21px;
  white-space: nowrap;
`;

const Subtitle1 = styled.div`
  min-height: 21px;
  margin-top: 3px;
  min-width: 41px;
  font-weight: 400;
  color: var(--x5d5d5b);
  text-align: right;
  line-height: 21px;
  white-space: nowrap;
`;

const FlexCol2 = styled.div`
  width: 38px;
  margin-left: 143px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 45px;
`;

const X7h = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  min-width: 38px;
  font-weight: 700;
  color: var(--x03db80);
  text-align: right;
  line-height: 21px;
  white-space: nowrap;
`;

const Subtitle2 = styled.div`
  ${TextLabels14pxRegular}
  min-height: 21px;
  margin-top: 3px;
  min-width: 38px;
  font-weight: 400;
  color: var(--x5d5d5b);
  text-align: right;
  line-height: 21px;
  white-space: nowrap;
`;

const Price = styled.div`
  ${ButtonLabels14px}
  position: absolute;
  top: 12px;
  left: 955px;
  font-weight: 700;
  color: var(--x000000primary);
  text-align: right;
  line-height: 21px;
  white-space: nowrap;
`;

const Subtitle3 = styled.div`
  ${TextLabels14pxRegular}
  position: absolute;
  top: 38px;
  left: 956px;
  font-weight: 400;
  color: var(--x5d5d5b);
  text-align: right;
  line-height: 21px;
  white-space: nowrap;
`;

const FlexCol3 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-1 & {
    width: 208px;
  }
`;

const FlexCol4 = styled.div`
  ${TextLabels14pxRegular}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-1  & {
    margin-left: 304px;
  }
`;

const Items1 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-1 & {
    min-width: 18px;
  }
`;

const FlexCol5 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-1 & {
    align-items: flex-end;
  }
`;

const X7h1 = styled.div`
  ${ButtonLabels14px}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-1  & {
    min-width: 27px;
  }
`;

const Price1 = styled.div`
  ${ButtonLabels14px}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-1  & {
    left: 966px;
  }
`;

const FlexCol6 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-2 & {
    width: 180px;
  }
`;

const FlexCol7 = styled.div`
  ${TextLabels14pxRegular}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-2  & {
    margin-left: 332px;
  }
`;

const Items2 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-2 & {
    min-width: 9px;
  }
`;

const FlexCol8 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-2 & {
    align-items: flex-end;
  }
`;

const X7h2 = styled.div`
  ${ButtonLabels14px}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-2  & {
    min-width: 25px;
  }
`;

const FlexCol9 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-3 & {
    width: 232px;
  }
`;

const FlexCol10 = styled.div`
  ${TextLabels14pxRegular}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-3  & {
    margin-left: 280px;
  }
`;

const FlexCol11 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-3 & {
    align-items: flex-end;
  }
`;

const X7h3 = styled.div`
  ${ButtonLabels14px}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-3  & {
    min-width: 19px;
  }
`;

const Price2 = styled.div`
  ${ButtonLabels14px}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-3  & {
    left: 953px;
  }
`;

const FlexCol12 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-4 & {
    width: 180px;
  }
`;

const FlexCol13 = styled.div`
  ${TextLabels14pxRegular}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-4  & {
    margin-left: 332px;
  }
`;

const Items3 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-4 & {
    min-width: 15px;
  }
`;

const FlexCol14 = styled.div`
  .jobs-list-web-item-v10.jobs-list-web-item-v10-4 & {
    align-items: flex-end;
  }
`;

const X7h4 = styled.div`
  ${ButtonLabels14px}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-4  & {
    min-width: 19px;
  }
`;

const Price3 = styled.div`
  ${ButtonLabels14px}

  .jobs-list-web-item-v10.jobs-list-web-item-v10-4  & {
    left: 954px;
  }
`;

export default ListingsWebItemV8OnLight;
