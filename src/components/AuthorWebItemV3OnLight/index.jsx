import React from "react";
import styled from "styled-components";
import { ButtonLabels16px, ButtonLabels14px, TextLabels14pxRegular } from "../../styledMixins";


class AuthorWebItemV3OnLight extends React.Component {
  render() {
    const { viewCount, number, art, className } = this.props;

    return (
      <CollectionsListWebItemV10 className={`collections-list-web-item-v10 ${className || ""}`}>
        <Name className="name-7">Username</Name>
        <ViewCount className="view-count">{viewCount}</ViewCount>
        <Name1 className="name-8">Collection Name</Name1>
        <FlexRow className="flex-row-14">
          <Number className="number-5">{number}</Number>
          <Art className="art-6" src={art} />
        </FlexRow>
        <Line className="line-9" src="/img/line-1@2x.svg" />
      </CollectionsListWebItemV10>
    );
  }
}

const CollectionsListWebItemV10 = styled.div`
  width: 410px;
  height: 74px;
  position: relative;

  &.collections-list-web-item-v10.collections-list-web-item-v10-1 {
    margin-top: 28px;
  }

  &.collections-list-web-item-v10.collections-list-web-item-v10-2 {
    margin-top: 28px;
  }

  &.collections-list-web-item-v10.collections-list-web-item-v10-4 {
    margin-top: 28px;
  }

  &.collections-list-web-item-v10.collections-list-web-item-v10-copy {
    margin-top: 28px;
  }

  &.collections-list-web-item-v10.collections-list-web-item-v10-copy-4 {
    margin-top: 28px;
  }

  &.collections-list-web-item-v10.collections-list-web-item-v10-copy-3 {
    margin-top: 28px;
  }
`;

const Name = styled.div`
  ${TextLabels14pxRegular}
  position: absolute;
  top: 30px;
  left: 115px;
  font-weight: 400;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const ViewCount = styled.div`
  ${TextLabels14pxRegular}
  position: absolute;
  top: 30px;
  left: 281px;
  font-weight: 400;
  color: var(--x03db80);
  text-align: right;
  line-height: 21px;
  white-space: nowrap;
`;

const Name1 = styled.div`
  ${ButtonLabels16px}
  position: absolute;
  top: 0;
  left: 115px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 24px;
  white-space: nowrap;
`;

const FlexRow = styled.div`
  position: absolute;
  height: 54px;
  top: 0;
  left: 13px;
  display: flex;
  align-items: center;
  min-width: 84px;
`;

const Number = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-top: 1px;
  min-width: 7px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const Art = styled.img`
  width: 54px;
  height: 54px;
  margin-left: 23px;
  object-fit: cover;
`;

const Line = styled.img`
  position: absolute;
  width: 385px;
  height: 1px;
  top: 73px;
  left: 13px;
  object-fit: cover;
`;

const ViewCount1 = styled.div`
  ${TextLabels14pxRegular}

  .collections-list-web-item-v10.collections-list-web-item-v10-1  & {
    left: 268px;
  }
`;

const Number1 = styled.div`
  ${ButtonLabels14px}

  .collections-list-web-item-v10.collections-list-web-item-v10-1  & {
    min-width: 9px;
  }
`;

const Art1 = styled.img`
  .collections-list-web-item-v10.collections-list-web-item-v10-1 & {
    margin-left: 21px;
  }
`;

const ViewCount2 = styled.div`
  ${TextLabels14pxRegular}

  .collections-list-web-item-v10.collections-list-web-item-v10-2  & {
    left: 269px;
  }
`;

const Number2 = styled.div`
  ${ButtonLabels14px}

  .collections-list-web-item-v10.collections-list-web-item-v10-2  & {
    min-width: 10px;
  }
`;

const Art2 = styled.img`
  .collections-list-web-item-v10.collections-list-web-item-v10-2 & {
    margin-left: 20px;
  }
`;

const Number3 = styled.div`
  ${ButtonLabels14px}

  .collections-list-web-item-v10.collections-list-web-item-v10-3  & {
    min-width: 10px;
  }
`;

const Art3 = styled.img`
  .collections-list-web-item-v10.collections-list-web-item-v10-3 & {
    margin-left: 20px;
  }
`;

const ViewCount3 = styled.div`
  ${TextLabels14pxRegular}

  .collections-list-web-item-v10.collections-list-web-item-v10-4  & {
    left: 272px;
  }
`;

const Number4 = styled.div`
  ${ButtonLabels14px}

  .collections-list-web-item-v10.collections-list-web-item-v10-4  & {
    min-width: 10px;
  }
`;

const Art4 = styled.img`
  .collections-list-web-item-v10.collections-list-web-item-v10-4 & {
    margin-left: 20px;
  }
`;

const ViewCount4 = styled.div`
  ${TextLabels14pxRegular}

  .collections-list-web-item-v10.collections-list-web-item-v10-copy  & {
    left: 271px;
  }
`;

const Number5 = styled.div`
  ${ButtonLabels14px}

  .collections-list-web-item-v10.collections-list-web-item-v10-copy  & {
    min-width: 10px;
  }
`;

const Art5 = styled.img`
  .collections-list-web-item-v10.collections-list-web-item-v10-copy & {
    margin-left: 20px;
  }
`;

const ViewCount5 = styled.div`
  ${TextLabels14pxRegular}

  .collections-list-web-item-v10.collections-list-web-item-v10-copy-2  & {
    left: 271px;
  }
`;

const Number6 = styled.div`
  ${ButtonLabels14px}

  .collections-list-web-item-v10.collections-list-web-item-v10-copy-2  & {
    min-width: 9px;
  }
`;

const Art6 = styled.img`
  .collections-list-web-item-v10.collections-list-web-item-v10-copy-2 & {
    margin-left: 21px;
  }
`;

const ViewCount6 = styled.div`
  ${TextLabels14pxRegular}

  .collections-list-web-item-v10.collections-list-web-item-v10-copy-4  & {
    left: 271px;
  }
`;

const Number7 = styled.div`
  ${ButtonLabels14px}

  .collections-list-web-item-v10.collections-list-web-item-v10-copy-4  & {
    min-width: 10px;
  }
`;

const Art7 = styled.img`
  .collections-list-web-item-v10.collections-list-web-item-v10-copy-4 & {
    margin-left: 20px;
  }
`;

const ViewCount7 = styled.div`
  ${TextLabels14pxRegular}

  .collections-list-web-item-v10.collections-list-web-item-v10-copy-3  & {
    left: 283px;
  }
`;

const Number8 = styled.div`
  ${ButtonLabels14px}

  .collections-list-web-item-v10.collections-list-web-item-v10-copy-3  & {
    min-width: 10px;
  }
`;

const Art8 = styled.img`
  .collections-list-web-item-v10.collections-list-web-item-v10-copy-3 & {
    margin-left: 20px;
  }
`;

export default AuthorWebItemV3OnLight;
