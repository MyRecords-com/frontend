import React from "react";
import styled from "styled-components";


class ButtonsSocialLogoLinkedin extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <ButtonsSocialLogoLinkedin1 className={`buttons-social-logo-linkedin ${className || ""}`}>
        <Ln className="ln" src="/img/ln@2x.svg" />
      </ButtonsSocialLogoLinkedin1>
    );
  }
}

const ButtonsSocialLogoLinkedin1 = styled.div`
  height: 16px;
  display: flex;
  padding: 1px;
  align-items: flex-start;
  min-width: 16px;

  &.buttons-social-logo-linkedin.buttons-social-logo-linkedin-1 {
    padding: 1px 1px;
  }

  &.buttons-social-logo-linkedin.buttons-social-logo-linkedin-3 {
    padding: 1px 1px;
  }
`;

const Ln = styled.img`
  width: 14px;
  height: 14px;
`;

export default ButtonsSocialLogoLinkedin;
