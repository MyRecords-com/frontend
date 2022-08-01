import React from "react";
import styled from "styled-components";
import { ButtonLabels14px } from "../../styledMixins";


class ElementTabsLabelActiveOnLight extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ElementTagsF5F5FAEditableOnLight>
        <TabTitle>{children}</TabTitle>
      </ElementTagsF5F5FAEditableOnLight>
    );
  }
}

const ElementTagsF5F5FAEditableOnLight = styled.div`
  height: 36px;
  display: flex;
  padding: 5px 1.5px;
  align-items: flex-end;
  min-width: 22px;
`;

const TabTitle = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  min-width: 19px;
  font-weight: 700;
  color: var(--x000000primary);
  text-align: center;
  line-height: 21px;
  white-space: nowrap;
`;

export default ElementTabsLabelActiveOnLight;
