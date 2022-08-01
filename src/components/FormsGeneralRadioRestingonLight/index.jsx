import React from "react";
import styled from "styled-components";
import { TextLabels12pxBold } from "../../styledMixins";


class FormsGeneralRadioRestingonLight extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <FormsGeneralRadioRestingonLight1>
        <Bg></Bg>
        <Title>{children}</Title>
      </FormsGeneralRadioRestingonLight1>
    );
  }
}

const FormsGeneralRadioRestingonLight1 = styled.div`
  display: flex;
  align-items: center;
  min-width: 185px;
`;

const Bg = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--ebf0f0soft-onlight);
  border-radius: 10px;
`;

const Title = styled.div`
  ${TextLabels12pxBold}
  min-height: 18px;
  margin-left: 10px;
  min-width: 85px;
  font-weight: 700;
  color: var(--x5d5d5b);
  line-height: 18px;
  white-space: nowrap;
`;

export default FormsGeneralRadioRestingonLight;
