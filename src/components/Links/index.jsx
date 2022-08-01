import React from "react";
import styled from "styled-components";
import { TextLabels12pxMedium, TextLabels12pxBold } from "../../styledMixins";


class Links extends React.Component {
  render() {
    const { x2021AllRightsRe, className } = this.props;

    return (
      <Links1 className={`links-1 ${className || ""}`}>
        <PrivacyPolicy className="privacy-policy">Privacy Policy</PrivacyPolicy>
        <License className="license">License</License>
        <API className="api">API</API>
        <X2021AllRightsRe className="x2021-all-rights-re">{x2021AllRightsRe}</X2021AllRightsRe>
      </Links1>
    );
  }
}

const Links1 = styled.div`
  display: flex;
  align-self: center;
  width: min-content;
  height: min-content;
  align-items: flex-start;
  gap: 22px;

  &.links-1.links-3 {
    width: 367px;
    height: 18px;
    margin-top: 1px;
    overflow: hidden;
    gap: unset;
  }

  &.links-1.links-4 {
    width: 367px;
    height: 18px;
    margin-top: 1px;
    overflow: hidden;
    gap: unset;
  }

  &.links-1.links-5 {
    width: 367px;
    height: 18px;
    margin-top: 1px;
    overflow: hidden;
    gap: unset;
  }

  &.links-1.links-6 {
    width: 367px;
    height: 18px;
    margin-top: 1px;
    overflow: hidden;
    gap: unset;
  }
`;

const PrivacyPolicy = styled.div`
  ${TextLabels12pxBold}
  min-width: 83px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 18px;
  white-space: nowrap;
`;

const License = styled.div`
  ${TextLabels12pxBold}
  min-width: 46px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 18px;
  white-space: nowrap;
`;

const API = styled.div`
  ${TextLabels12pxBold}
  min-width: 21px;
  font-weight: 700;
  color: var(--x000000primary);
  line-height: 18px;
  white-space: nowrap;
`;

const X2021AllRightsRe = styled.p`
  ${TextLabels12pxMedium}
  min-width: 151px;
  font-weight: 500;
  color: var(--x5d5d5b);
  line-height: 18px;
  white-space: nowrap;
`;

const PrivacyPolicy1 = styled.div`
  ${TextLabels12pxBold}

  .links-1.links-3  & {
    min-height: 18px;
  }
`;

const License1 = styled.div`
  ${TextLabels12pxBold}

  .links-1.links-3  & {
    min-height: 18px;
    margin-left: 22px;
  }
`;

const X2021AllRightsRe1 = styled.p`
  ${TextLabels12pxMedium}

  .links-1.links-3  & {
    min-height: 18px;
    margin-left: 22px;
    min-width: unset;
  }
`;

const PrivacyPolicy2 = styled.div`
  ${TextLabels12pxBold}

  .links-1.links-4  & {
    min-height: 18px;
  }
`;

const License2 = styled.div`
  ${TextLabels12pxBold}

  .links-1.links-4  & {
    min-height: 18px;
    margin-left: 22px;
  }
`;

const X2021AllRightsRe2 = styled.p`
  ${TextLabels12pxMedium}

  .links-1.links-4  & {
    min-height: 18px;
    margin-left: 22px;
    min-width: unset;
  }
`;

const PrivacyPolicy3 = styled.div`
  ${TextLabels12pxBold}

  .links-1.links-5  & {
    min-height: 18px;
  }
`;

const License3 = styled.div`
  ${TextLabels12pxBold}

  .links-1.links-5  & {
    min-height: 18px;
    margin-left: 22px;
  }
`;

const X2021AllRightsRe3 = styled.p`
  ${TextLabels12pxMedium}

  .links-1.links-5  & {
    min-height: 18px;
    margin-left: 22px;
    min-width: unset;
  }
`;

const PrivacyPolicy4 = styled.div`
  ${TextLabels12pxBold}

  .links-1.links-6  & {
    min-height: 18px;
  }
`;

const License4 = styled.div`
  ${TextLabels12pxBold}

  .links-1.links-6  & {
    min-height: 18px;
    margin-left: 22px;
  }
`;

const X2021AllRightsRe4 = styled.p`
  ${TextLabels12pxMedium}

  .links-1.links-6  & {
    min-height: 18px;
    margin-left: 22px;
    min-width: unset;
  }
`;

export default Links;
