import React from "react";
import styled from "styled-components";
import { ButtonLabels14px, Icons22px } from "../../styledMixins";


class NavigationWebSidebarItemRestingOnLi extends React.Component {
  render() {
    const { icon, link, className } = this.props;

    return (
      <Item className={`item ${className || ""}`}>
        <Icon className="icon-1">{icon}</Icon>
        <Link className="link">{link}</Link>
      </Item>
    );
  }
}

const Item = styled.div`
  height: 56px;
  margin-top: 12px;
  display: flex;
  padding: 13px 28px;
  align-items: center;
  min-width: 238px;
  background-color: var(--ffffff);
  border-radius: 28px;

  &.item.navigation-web-sideb {
    margin-top: unset;
  }

  &.item.item-1 {
    margin-top: unset;
  }

  &.item.item-2 {
    margin-top: unset;
  }

  &.item.item-3 {
    margin-top: unset;
  }

  &.item.item-4 {
    margin-top: unset;
  }

  &.item.item-5 {
    margin-top: unset;
  }

  &.item.item-copy {
    margin-top: unset;
  }

  &.item.item-7 {
    margin-top: unset;
  }

  &.item.item-8 {
    margin-top: unset;
  }

  &.item.item-10 {
    margin-top: unset;
  }

  &.item.item-11 {
    margin-top: unset;
  }

  &.item.item-12 {
    margin-top: unset;
  }

  &.item.item-copy-1 {
    margin-top: unset;
  }

  &.item.navigation-web-sideb-1 {
    margin-top: unset;
  }

  &.item.item-13 {
    margin-top: unset;
  }

  &.item.item-14 {
    margin-top: unset;
  }

  &.item.item-16 {
    margin-top: unset;
  }

  &.item.item-17 {
    margin-top: unset;
  }

  &.item.item-18 {
    margin-top: unset;
  }

  &.item.item-copy-2 {
    margin-top: unset;
  }
`;

const Icon = styled.div`
  ${Icons22px}
  min-height: 26px;
  align-self: flex-end;
  min-width: 8px;
  font-weight: 400;
  color: var(--x5d5d5b);
  text-align: center;
`;

const Link = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-left: 21px;
  margin-bottom: 1px;
  min-width: 75px;
  font-weight: 700;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const Link1 = styled.div`
  ${ButtonLabels14px}

  .item.navigation-web-sideb  & {
    min-width: 113px;
  }
`;

const Link2 = styled.div`
  ${ButtonLabels14px}

  .item.item-1  & {
    min-width: 64px;
  }
`;

const Link3 = styled.div`
  ${ButtonLabels14px}

  .item.item-2  & {
    min-width: 66px;
  }
`;

const Link4 = styled.div`
  ${ButtonLabels14px}

  .item.item-3  & {
    min-width: 58px;
  }
`;

const Link5 = styled.div`
  ${ButtonLabels14px}

  .item.item-4  & {
    min-width: 37px;
  }
`;

const Link6 = styled.div`
  ${ButtonLabels14px}

  .item.item-5  & {
    min-width: 89px;
  }
`;

const Link7 = styled.div`
  ${ButtonLabels14px}

  .item.item-copy  & {
    min-width: 82px;
  }
`;

const Link8 = styled.div`
  ${ButtonLabels14px}

  .item.item-7  & {
    min-width: 64px;
  }
`;

const Link9 = styled.div`
  ${ButtonLabels14px}

  .item.item-8  & {
    min-width: 66px;
  }
`;

const Link10 = styled.div`
  ${ButtonLabels14px}

  .item.item-9  & {
    min-width: 109px;
  }
`;

const Link11 = styled.div`
  ${ButtonLabels14px}

  .item.item-10  & {
    min-width: 58px;
  }
`;

const Link12 = styled.div`
  ${ButtonLabels14px}

  .item.item-11  & {
    min-width: 37px;
  }
`;

const Link13 = styled.div`
  ${ButtonLabels14px}

  .item.item-12  & {
    min-width: 89px;
  }
`;

const Link14 = styled.div`
  ${ButtonLabels14px}

  .item.item-copy-1  & {
    min-width: 82px;
  }
`;

const Link15 = styled.div`
  ${ButtonLabels14px}

  .item.navigation-web-sideb-1  & {
    min-width: 113px;
  }
`;

const Link16 = styled.div`
  ${ButtonLabels14px}

  .item.item-13  & {
    min-width: 64px;
  }
`;

const Link17 = styled.div`
  ${ButtonLabels14px}

  .item.item-14  & {
    min-width: 66px;
  }
`;

const Link18 = styled.div`
  ${ButtonLabels14px}

  .item.item-15  & {
    min-width: 109px;
  }
`;

const Link19 = styled.div`
  ${ButtonLabels14px}

  .item.item-16  & {
    min-width: 58px;
  }
`;

const Link20 = styled.div`
  ${ButtonLabels14px}

  .item.item-17  & {
    min-width: 37px;
  }
`;

const Link21 = styled.div`
  ${ButtonLabels14px}

  .item.item-18  & {
    min-width: 89px;
  }
`;

const Link22 = styled.div`
  ${ButtonLabels14px}

  .item.item-copy-2  & {
    min-width: 82px;
  }
`;

export default NavigationWebSidebarItemRestingOnLi;
