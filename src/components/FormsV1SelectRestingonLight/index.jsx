import React from "react";
import styled from "styled-components";
import { TextLabels12pxMedium, ButtonLabels14px, Border1pxCfdbd5OutlineOnlight, Icons18px } from "../../styledMixins";


class FormsV1SelectRestingonLight extends React.Component {
  render() {
    const { fieldTitle, placeholder, icon, className } = this.props;

    return (
      <FormsV1SelectRestingonLight1 className={`forms-v1-select-restingon-light ${className || ""}`}>
        <FieldTitle className="field-title">{fieldTitle}</FieldTitle>
        <OverlapGroup className="overlap-group-10">
          <Placeholder className="placeholder">{placeholder}</Placeholder>
          <Icon className="icon-8">{icon}</Icon>
        </OverlapGroup>
      </FormsV1SelectRestingonLight1>
    );
  }
}

const FormsV1SelectRestingonLight1 = styled.div`
  position: absolute;
  width: 301px;
  top: 18px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 72px;

  &.forms-v1-select-restingon-light.forms-v1-select-restingon-light-2 {
    width: 469px;
    margin-top: 14px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.forms-v1-select-restingon-light.forms-v1-select-restingon-light-3 {
    width: 469px;
    margin-top: 16px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy-2 {
    width: 469px;
    margin-top: 16px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy-3 {
    width: 469px;
    margin-top: 16px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy {
    width: 469px;
    margin-top: 16px;
    position: unset;
    top: unset;
    left: unset;
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
  min-width: 303px;
  border-radius: 24px;
`;

const Placeholder = styled.div`
  ${ButtonLabels14px}
  min-height: 21px;
  min-width: 118px;
  font-weight: 700;
  color: var(--x5d5d5b);
  line-height: 21px;
  white-space: nowrap;
`;

const Icon = styled.div`
  ${Icons18px}
  min-height: 22px;
  align-self: center;
  margin-left: 133px;
  margin-top: 2px;
  min-width: 7px;
  font-weight: 400;
  color: var(--x5d5d5b);
  text-align: center;
`;

const OverlapGroup1 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-2  & {
    min-width: 471px;
  }
`;

const Placeholder1 = styled.div`
  ${ButtonLabels14px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-2  & {
    min-width: 142px;
  }
`;

const Icon1 = styled.div`
  ${Icons18px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-2  & {
    min-height: 18px;
    margin-left: 271px;
    margin-bottom: 2px;
    min-width: 18px;
    margin-top: unset;
  }
`;

const OverlapGroup11 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-3  & {
    min-width: 471px;
  }
`;

const Placeholder2 = styled.div`
  ${ButtonLabels14px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-3  & {
    min-width: 112px;
  }
`;

const Icon2 = styled.div`
  ${Icons18px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-3  & {
    min-height: 18px;
    margin-left: 301px;
    margin-bottom: 2px;
    min-width: 18px;
    margin-top: unset;
  }
`;

const OverlapGroup2 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy-2  & {
    min-width: 471px;
  }
`;

const Placeholder3 = styled.div`
  ${ButtonLabels14px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy-2  & {
    min-width: 153px;
  }
`;

const Icon3 = styled.div`
  ${Icons18px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy-2  & {
    min-height: 18px;
    margin-left: 260px;
    margin-bottom: 2px;
    min-width: 18px;
    margin-top: unset;
  }
`;

const OverlapGroup3 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy-3  & {
    min-width: 471px;
  }
`;

const Placeholder4 = styled.div`
  ${ButtonLabels14px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy-3  & {
    min-width: 142px;
  }
`;

const Icon4 = styled.div`
  ${Icons18px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy-3  & {
    min-height: 18px;
    margin-left: 271px;
    margin-bottom: 2px;
    min-width: 18px;
    margin-top: unset;
  }
`;

const OverlapGroup4 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy  & {
    min-width: 471px;
  }
`;

const Placeholder5 = styled.div`
  ${ButtonLabels14px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy  & {
    min-width: 161px;
  }
`;

const Icon5 = styled.div`
  ${Icons18px}

  .forms-v1-select-restingon-light.forms-v1-select-restingon-light-copy  & {
    min-height: 18px;
    margin-left: 252px;
    margin-bottom: 2px;
    min-width: 18px;
    margin-top: unset;
  }
`;

export default FormsV1SelectRestingonLight;
