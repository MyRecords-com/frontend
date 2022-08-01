import React from "react";
import styled from "styled-components";
import { TextLabels12pxBold } from "../../styledMixins";


class ElementTags00D066Soft extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ElementTagsF5F5FAEditableOnLight className={`element-tags-f5-f5-fa-editable-on-light-3 ${className || ""}`}>
        <Tag className="tag-1">All</Tag>
      </ElementTagsF5F5FAEditableOnLight>
    );
  }
}

const ElementTagsF5F5FAEditableOnLight = styled.div`
  height: 36px;
  display: flex;
  padding: 0 30.8px;
  align-items: center;
  min-width: 78px;
  background-image: url(/img/bg-hover@2x.svg);
  background-size: 100% 100%;

  &.element-tags-f5-f5-fa-editable-on-light-3.element-tags-00-d066-soft {
    height: 32px;
    margin-top: 2px;
    padding: 0 13.3px;
    min-width: 120px;
    background-image: url(/img/bg-hover-1@2x.svg);
  }

  &.element-tags-f5-f5-fa-editable-on-light-3.element-tags-00-d066-soft-1 {
    height: 32px;
    margin-top: 2px;
    padding: 0 13.3px;
    min-width: 120px;
    background-image: url(/img/bg-hover-1@2x.svg);
  }

  &.element-tags-f5-f5-fa-editable-on-light-3.element-tags-00-d066-soft-2 {
    height: 32px;
    margin-top: 2px;
    padding: 0 13.3px;
    min-width: 120px;
    background-image: url(/img/bg-hover-1@2x.svg);
  }
`;

const Tag = styled.div`
  ${TextLabels12pxBold}
  min-height: 18px;
  min-width: 16px;
  font-weight: 700;
  color: var(--x7a52f4--hover);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

const Tag1 = styled.div`
  ${TextLabels12pxBold}

  .element-tags-f5-f5-fa-editable-on-light-3.element-tags-00-d066-soft  & {
    min-width: 93px;
  }
`;

const Tag2 = styled.div`
  ${TextLabels12pxBold}

  .element-tags-f5-f5-fa-editable-on-light-3.element-tags-00-d066-soft-1  & {
    min-width: 93px;
  }
`;

const Tag3 = styled.div`
  ${TextLabels12pxBold}

  .element-tags-f5-f5-fa-editable-on-light-3.element-tags-00-d066-soft-2  & {
    min-width: 93px;
  }
`;

export default ElementTags00D066Soft;
