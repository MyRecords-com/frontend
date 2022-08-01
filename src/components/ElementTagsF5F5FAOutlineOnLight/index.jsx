import React from "react";
import styled from "styled-components";
import { TextLabels12pxBold } from "../../styledMixins";


class ElementTagsF5F5FAOutlineOnLight extends React.Component {
  render() {
    const { tag, className } = this.props;

    return (
      <ElementTagsF5F5FAEditableOnLightCop className={`element-tags-f5-f5-f-1 ${className || ""}`}>
        <OverlapGroup className="overlap-group-13">
          <Tag className="tag-2">{tag}</Tag>
        </OverlapGroup>
      </ElementTagsF5F5FAEditableOnLightCop>
    );
  }
}

const ElementTagsF5F5FAEditableOnLightCop = styled.div`
  height: 36px;
  margin-left: 6px;
  display: flex;
  align-items: flex-end;
  min-width: 106px;

  &.element-tags-f5-f5-f-1.element-tags-f5-f5-f-2 {
    min-width: 120px;
  }

  &.element-tags-f5-f5-f-1.element-tags-f5-f5-f-3 {
    min-width: 138px;
  }
`;

const OverlapGroup = styled.div`
  height: 37px;
  margin-bottom: -1px;
  display: flex;
  padding: 9px 26.5px;
  align-items: flex-start;
  min-width: 107px;
  background-image: url(/img/bg-hover-1@2x.svg);
  background-size: 100% 100%;
`;

const Tag = styled.div`
  ${TextLabels12pxBold}
  min-height: 18px;
  min-width: 53px;
  font-weight: 700;
  color: var(--x000000primary);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  .element-tags-f5-f5-f-1.element-tags-f5-f5-f-2 & {
    padding: 9px 24.5px;
    min-width: 121px;
    background-image: url(/img/bg-hover-2@2x.svg);
  }
`;

const Tag1 = styled.div`
  ${TextLabels12pxBold}

  .element-tags-f5-f5-f-1.element-tags-f5-f5-f-2  & {
    min-width: 70px;
  }
`;

const OverlapGroup2 = styled.div`
  .element-tags-f5-f5-f-1.element-tags-f5-f5-f-3 & {
    padding: 9px 43.5px;
    min-width: 139px;
    background-image: url(/img/bg-hover-3@2x.svg);
  }
`;

const Tag2 = styled.div`
  ${TextLabels12pxBold}

  .element-tags-f5-f5-f-1.element-tags-f5-f5-f-3  & {
    min-width: 50px;
  }
`;

export default ElementTagsF5F5FAOutlineOnLight;
