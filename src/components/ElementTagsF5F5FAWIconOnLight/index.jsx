import React from "react";
import styled from "styled-components";
import { TextLabels12pxBold, Icons16px } from "../../styledMixins";


class ElementTagsF5F5FAWIconOnLight extends React.Component {
  render() {
    const { icon, tag, className } = this.props;

    return (
      <ElementTagsF5F5FAEditableOnLight className={`element-tags-f5-f5-fa-editable-on-light ${className || ""}`}>
        <OverlapGroup className="overlap-group-8">
          <Icon className="icon-5">{icon}</Icon>
          <Tag className="tag">{tag}</Tag>
        </OverlapGroup>
      </ElementTagsF5F5FAEditableOnLight>
    );
  }
}

const ElementTagsF5F5FAEditableOnLight = styled.div`
  height: 36px;
  margin-top: 25px;
  margin-left: 39px;
  display: flex;
  align-items: flex-end;
  min-width: 123px;

  &.element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-fa-editable-on-light-1 {
    margin-top: unset;
    margin-left: unset;
  }

  &.element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-f {
    margin-left: 598px;
    min-width: 120px;
    margin-top: unset;
  }

  &.element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-fa-editable-on-light-2 {
    margin-left: 6px;
    min-width: 96px;
    margin-top: unset;
  }
`;

const OverlapGroup = styled.div`
  height: 37px;
  margin-bottom: -1px;
  display: flex;
  padding: 8px 19px;
  align-items: center;
  min-width: 124px;
  background-image: url(/img/bg-hover@2x.svg);
  background-size: 100% 100%;
`;

const Icon = styled.div`
  ${Icons16px}
  min-height: 19px;
  align-self: flex-end;
  min-width: 6px;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: center;
`;

const Tag = styled.div`
  ${TextLabels12pxBold}
  min-height: 18px;
  margin-left: 11px;
  margin-bottom: 1px;
  min-width: 68px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 18px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  .element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-fa-editable-on-light-1 & {
    padding: 9px 14px;
    align-items: flex-start;
  }
`;

const Icon1 = styled.div`
  ${Icons16px}

  .element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-fa-editable-on-light-1  & {
    min-height: 16px;
    align-self: center;
    margin-bottom: 1px;
    min-width: 16px;
  }
`;

const Tag1 = styled.div`
  ${TextLabels12pxBold}

  .element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-fa-editable-on-light-1  & {
    margin-left: 6px;
    margin-bottom: unset;
    min-width: unset;
  }
`;

const OverlapGroup3 = styled.div`
  .element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-f & {
    padding: 9px 14px;
    align-items: flex-start;
    min-width: 121px;
    background-image: url(/img/bg-hover-4@2x.svg);
  }
`;

const Icon2 = styled.div`
  ${Icons16px}

  .element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-f  & {
    min-height: 16px;
    align-self: center;
    margin-bottom: 1px;
    min-width: 16px;
  }
`;

const Tag2 = styled.div`
  ${TextLabels12pxBold}

  .element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-f  & {
    margin-left: 6px;
    margin-bottom: unset;
    min-width: unset;
  }
`;

const OverlapGroup4 = styled.div`
  .element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-fa-editable-on-light-2 & {
    padding: 9px 14px;
    align-items: flex-start;
    min-width: 97px;
    background-image: url(/img/bg-hover-5@2x.svg);
  }
`;

const Icon3 = styled.div`
  ${Icons16px}

  .element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-fa-editable-on-light-2  & {
    min-height: 16px;
    align-self: center;
    margin-bottom: 1px;
    min-width: 16px;
  }
`;

const Tag3 = styled.div`
  ${TextLabels12pxBold}

  .element-tags-f5-f5-fa-editable-on-light.element-tags-f5-f5-fa-editable-on-light-2  & {
    margin-left: 6px;
    margin-bottom: unset;
    min-width: unset;
  }
`;

export default ElementTagsF5F5FAWIconOnLight;
