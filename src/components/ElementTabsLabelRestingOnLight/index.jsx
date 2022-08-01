import React from "react";
import styled from "styled-components";
import { ButtonLabels14px } from "../../styledMixins";


class ElementTabsLabelRestingOnLight extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <ElementTagsF5F5FAEditableOnLightCop className={`element-tags-f5-f5-f-4 ${className || ""}`}>
        <TabTitle className="tab-title-1">{children}</TabTitle>
      </ElementTagsF5F5FAEditableOnLightCop>
    );
  }
}

const ElementTagsF5F5FAEditableOnLightCop = styled.div`
  position: absolute;
  height: 36px;
  top: 1px;
  left: 593px;
  display: flex;
  padding: 5px 1.5px;
  align-items: flex-end;
  min-width: 66px;

  &.element-tags-f5-f5-f-4.element-tags-f5-f5-f-5 {
    top: 0;
    left: 732px;
    min-width: 84px;
  }

  &.element-tags-f5-f5-f-4.element-tags-f5-f5-f-6 {
    top: 0;
    left: 889px;
    padding: 5px 24.5px;
    min-width: 108px;
  }
`;

const TabTitle = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  min-width: 62px;
  font-weight: 700;
  color: var(--x5d5d5b);
  text-align: center;
  line-height: 21px;
  white-space: nowrap;
`;

const TabTitle1 = styled.div`
  ${ButtonLabels14px}

  .element-tags-f5-f5-f-4.element-tags-f5-f5-f-5  & {
    min-width: 81px;
  }
`;

const TabTitle2 = styled.div`
  ${ButtonLabels14px}

  .element-tags-f5-f5-f-4.element-tags-f5-f5-f-6  & {
    min-width: 59px;
  }
`;

export default ElementTabsLabelRestingOnLight;
