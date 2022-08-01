import React from "react";
import styled from "styled-components";
import { TextLabels12pxBold } from "../../styledMixins";


class ElementTagsF5F5FAOnLight extends React.Component {
  render() {
    return (
      <ElementTagsF5F5FAOnLight1>
        <Tag>Hot right now 🔥</Tag>
      </ElementTagsF5F5FAOnLight1>
    );
  }
}

const ElementTagsF5F5FAOnLight1 = styled.div`
  height: 32px;
  margin-top: 2px;
  display: flex;
  padding: 0 12px;
  justify-content: flex-end;
  align-items: center;
  min-width: 120px;
  background-image: url(/img/bg-hover@2x.svg);
  background-size: 100% 100%;
`;

const Tag = styled.div`
  ${TextLabels12pxBold}
  min-height: 18px;
  min-width: 95px;
  font-weight: 700;
  color: var(--x5d5d5b);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

export default ElementTagsF5F5FAOnLight;
