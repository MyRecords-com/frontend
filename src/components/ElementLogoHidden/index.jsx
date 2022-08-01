import React from "react";
import styled from "styled-components";


class ElementLogoHidden extends React.Component {
  render() {
    const { className } = this.props;

    return <ElementLogoHidden1 className={`element-logo-hidden ${className || ""}`}></ElementLogoHidden1>;
  }
}

const ElementLogoHidden1 = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 4px;
  background-image: url(/img/logo@2x.svg);
  background-size: 100% 100%;

  &.element-logo-hidden.element-logo-hidden-2 {
    width: 54px;
    height: 54px;
    margin-right: 3px;
    margin-bottom: unset;
  }

  &.element-logo-hidden.element-logo-hidden-3 {
    width: 54px;
    height: 54px;
    margin-right: 3px;
    margin-bottom: unset;
  }
`;

export default ElementLogoHidden;
