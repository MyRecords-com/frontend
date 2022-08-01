import React from "react";
import styled from "styled-components";
import { TextLabels12pxMedium, ButtonLabels14px } from "../../styledMixins";


class SettingsFieldTextOnLight extends React.Component {
  render() {
    const { subtitle, title, className } = this.props;

    return (
      <SettingsFieldText className={`settings-field-text ${className || ""}`}>
        <Subtitle className="subtitle">{subtitle}</Subtitle>
        <Title className="title">{title}</Title>
        <Line className="line" src="/img/line@1x.svg" />
      </SettingsFieldText>
    );
  }
}

const SettingsFieldText = styled.div`
  width: 796px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;

  &.settings-field-text.settings-field-text-1 {
    margin-top: 16px;
  }

  &.settings-field-text.settings-field-text-2 {
    margin-top: 16px;
  }

  &.settings-field-text.settings-field-text-4 {
    margin-top: 16px;
  }

  &.settings-field-text.settings-field-text-5 {
    margin-top: 16px;
  }
`;

const Subtitle = styled.div`
  ${TextLabels12pxMedium}
  min-height: 18px;
  font-weight: 500;
  color: var(--x5d5d5b);
  line-height: 18px;
  white-space: nowrap;
`;

const Title = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  margin-top: 4px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const Line = styled.img`
  width: 796px;
  height: 1px;
  margin-top: 16px;
  margin-left: 0.53px;
  object-fit: cover;
`;

const Line1 = styled.img`
  .settings-field-text.settings-field-text-2 & {
    width: 795px;
  }
`;

const Line2 = styled.img`
  .settings-field-text.settings-field-text-5 & {
    width: 795px;
  }
`;

export default SettingsFieldTextOnLight;
