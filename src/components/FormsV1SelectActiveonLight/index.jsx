import React from "react";
import styled from "styled-components";
import { TextLabels12pxMedium, ButtonLabels14px, Border1pxCfdbd5OutlineOnlight, Icons18px } from "../../styledMixins";


class FormsV1SelectActiveonLight extends React.Component {
  render() {
    const { fieldTitle, placeholder, icon, className } = this.props;

    return (
      <FormsV1SelectActiveonLight1 className={`forms-v1-select-activeon-light ${className || ""}`}>
        <FieldTitle className="field-title-1">{fieldTitle}</FieldTitle>
        <OverlapGroup className="overlap-group-15">
          <Placeholder className="placeholder-1">{placeholder}</Placeholder>
          <Icon className="icon-9">{icon}</Icon>
        </OverlapGroup>
      </FormsV1SelectActiveonLight1>
    );
  }
}

const FormsV1SelectActiveonLight1 = styled.div`
  width: 469px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 72px;

  &.forms-v1-select-activeon-light.forms-v1-select-activeon-light-1 {
    margin-top: 42px;
  }
`;

const FieldTitle = styled.div`
  ${TextLabels12pxMedium}
  margin-top: -2px;
  min-height: 18px;
  font-weight: 500;
  color: var(--x000000primary);
  line-height: 18px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  height: 50px;
  margin-top: 7px;
  margin-left: -1px;
  display: flex;
  padding: 12px 20px;
  align-items: flex-start;
  min-width: 471px;
  border-radius: 23px;
`;

const Placeholder = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  min-width: 140px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 21px;
  white-space: nowrap;
`;

const Icon = styled.div`
  ${Icons18px}
  min-height: 18px;
  align-self: center;
  margin-left: 273px;
  margin-bottom: 2px;
  min-width: 18px;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: center;
`;

const Placeholder1 = styled.div`
  ${ButtonLabels14px}

  .forms-v1-select-activeon-light.forms-v1-select-activeon-light-1  & {
    min-width: 157px;
  }
`;

const Icon1 = styled.div`
  ${Icons18px}

  .forms-v1-select-activeon-light.forms-v1-select-activeon-light-1  & {
    margin-left: 256px;
  }
`;

export default FormsV1SelectActiveonLight;
