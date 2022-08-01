import React from "react";
import ButtonsLabelFilledActiveOnLight from "../ButtonsLabelFilledActiveOnLight";
import ElementLogoHidden from "../ElementLogoHidden";
import FormsV1SelectActiveonLight from "../FormsV1SelectActiveonLight";
import FormsV1SelectRestingonLight from "../FormsV1SelectRestingonLight";
import styled from "styled-components";
import { ButtonLabels16px, TextLabels14pxRegular, HeadingH1 } from "../../styledMixins";
import "./RegistrationSignInBasicDetails.css";

class RegistrationSignInBasicDetails extends React.Component {
  render() {
    const {
      aHighlyCuratedPla,
      youAlreadyHaveAn,
      signUp,
      takeTheNextStepA,
      buttonsLabelFilledActiveOnLight1Props,
      elementLogoHiddenProps,
      formsV1SelectActiveonLightProps,
      formsV1SelectRestingonLight1Props,
      formsV1SelectRestingonLight2Props,
      formsV1SelectRestingonLight3Props,
      formsV1SelectRestingonLight4Props,
      buttonsLabelFilledActiveOnLight2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="registration-sign-in-basic-details screen">
          <OverlapGroup6>
            <AHighlyCuratedPla>{aHighlyCuratedPla}</AHighlyCuratedPla>
            <OverlapGroup5>
              <YouAlreadyHaveAn>{youAlreadyHaveAn}</YouAlreadyHaveAn>
              <ButtonsLabelFilledActiveOnLight className={buttonsLabelFilledActiveOnLight1Props.className}>
                {buttonsLabelFilledActiveOnLight1Props.children}
              </ButtonsLabelFilledActiveOnLight>
            </OverlapGroup5>
          </OverlapGroup6>
          <Form>
            <ElementLogoHidden className={elementLogoHiddenProps.className} />
            <Title>
              <SignUp>{signUp}</SignUp>
              <TakeTheNextStepA>{takeTheNextStepA}</TakeTheNextStepA>
            </Title>
            <FormsV1SelectActiveonLight
              fieldTitle={formsV1SelectActiveonLightProps.fieldTitle}
              placeholder={formsV1SelectActiveonLightProps.placeholder}
              icon={formsV1SelectActiveonLightProps.icon}
              className={formsV1SelectActiveonLightProps.className}
            />
            <FormsV1SelectRestingonLight
              fieldTitle={formsV1SelectRestingonLight1Props.fieldTitle}
              placeholder={formsV1SelectRestingonLight1Props.placeholder}
              icon={formsV1SelectRestingonLight1Props.icon}
              className={formsV1SelectRestingonLight1Props.className}
            />
            <FormsV1SelectRestingonLight
              fieldTitle={formsV1SelectRestingonLight2Props.fieldTitle}
              placeholder={formsV1SelectRestingonLight2Props.placeholder}
              icon={formsV1SelectRestingonLight2Props.icon}
              className={formsV1SelectRestingonLight2Props.className}
            />
            <FormsV1SelectRestingonLight
              fieldTitle={formsV1SelectRestingonLight3Props.fieldTitle}
              placeholder={formsV1SelectRestingonLight3Props.placeholder}
              icon={formsV1SelectRestingonLight3Props.icon}
              className={formsV1SelectRestingonLight3Props.className}
            />
            <FormsV1SelectRestingonLight
              fieldTitle={formsV1SelectRestingonLight4Props.fieldTitle}
              placeholder={formsV1SelectRestingonLight4Props.placeholder}
              icon={formsV1SelectRestingonLight4Props.icon}
              className={formsV1SelectRestingonLight4Props.className}
            />
            <ButtonsLabelFilledActiveOnLight className={buttonsLabelFilledActiveOnLight2Props.className}>
              {buttonsLabelFilledActiveOnLight2Props.children}
            </ButtonsLabelFilledActiveOnLight>
          </Form>
        </div>
      </div>
    );
  }
}

const OverlapGroup6 = styled.div`
  width: 706px;
  display: flex;
  flex-direction: column;
  padding: 90px 29.9px;
  align-items: flex-end;
  min-height: 900px;
  background-image: url(/img/bg@1x.svg);
  background-size: 100% 100%;
`;

const AHighlyCuratedPla = styled.div`
  ${HeadingH1}
  width: 559px;
  min-height: 204px;
  margin-top: 10px;
  font-weight: 800;
  color: var(--ffffff);
`;

const OverlapGroup5 = styled.div`
  height: 64px;
  position: relative;
  align-self: center;
  margin-top: 442px;
  margin-left: 29.13px;
  display: flex;
  padding: 8px 14px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 503px;
  background-color: var(--white-2);
  border-radius: 45px;
  box-shadow: 0px 20px 90px #0000001d;
  backdrop-filter: blur(62.52048110961914px) brightness(100%);
  -webkit-backdrop-filter: blur(62.52048110961914px) brightness(100%);
`;

const YouAlreadyHaveAn = styled.p`
  ${ButtonLabels16px}
  min-height: 24px;
  align-self: center;
  margin-top: 0.09px;
  min-width: 233px;
  font-weight: 700;
  color: var(--ffffff);
  line-height: 24px;
  white-space: nowrap;
`;

const Form = styled.div`
  width: 469px;
  position: relative;
  margin-left: 147px;
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 721px;
`;

const Title = styled.div`
  width: 313px;
  margin-top: 30px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 78px;
`;

const SignUp = styled.div`
  ${HeadingH1}
  min-height: 51px;
  min-width: 160px;
  font-weight: 800;
  color: var(--x000000primary);
  text-align: center;
`;

const TakeTheNextStepA = styled.p`
  ${TextLabels14pxRegular}
  min-height: 21px;
  margin-top: 6px;
  min-width: 311px;
  font-weight: 400;
  color: var(--x5d5d5b);
  text-align: center;
  line-height: 21px;
  white-space: nowrap;
`;

export default RegistrationSignInBasicDetails;
