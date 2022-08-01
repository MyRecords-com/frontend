import React from "react";
import ButtonsLabelFilledActiveOnLight from "../ButtonsLabelFilledActiveOnLight";
import ElementLogoHidden from "../ElementLogoHidden";
import FormsV1SelectActiveonLight from "../FormsV1SelectActiveonLight";
import FormsV1SelectRestingonLight from "../FormsV1SelectRestingonLight";
import FormsGeneralRadioRestingonLight from "../FormsGeneralRadioRestingonLight";
import ButtonsSocialWLableOnLight from "../ButtonsSocialWLableOnLight";
import styled from "styled-components";
import { ButtonLabels16px, HeadingH1, TextLabels14pxRegular, TextLabels12pxBold } from "../../styledMixins";
import "./RegistrationSignInBasic.css";

class RegistrationSignInBasic extends React.Component {
  render() {
    const {
      aHighlyCuratedPla,
      youDontHaveAnAc,
      signIn,
      takeTheNextStepA,
      recoverPassword,
      or,
      buttonsLabelFilledActiveOnLight1Props,
      elementLogoHiddenProps,
      formsV1SelectActiveonLightProps,
      formsV1SelectRestingonLightProps,
      formsGeneralRadioRestingonLightProps,
      buttonsLabelFilledActiveOnLight2Props,
      buttonsSocialWLableOnLight1Props,
      buttonsSocialWLableOnLight2Props,
      buttonsSocialWLableOnLight3Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="registration-sign-in-basic screen">
          <OverlapGroup3>
            <AHighlyCuratedPla>{aHighlyCuratedPla}</AHighlyCuratedPla>
            <OverlapGroup>
              <YouDontHaveAnAc>{youDontHaveAnAc}</YouDontHaveAnAc>
              <ButtonsLabelFilledActiveOnLight className={buttonsLabelFilledActiveOnLight1Props.className}>
                {buttonsLabelFilledActiveOnLight1Props.children}
              </ButtonsLabelFilledActiveOnLight>
            </OverlapGroup>
          </OverlapGroup3>
          <Form>
            <ElementLogoHidden className={elementLogoHiddenProps.className} />
            <Title>
              <SignIn>{signIn}</SignIn>
              <TakeTheNextStepA>{takeTheNextStepA}</TakeTheNextStepA>
            </Title>
            <Forms>
              <FormsV1SelectActiveonLight
                fieldTitle={formsV1SelectActiveonLightProps.fieldTitle}
                placeholder={formsV1SelectActiveonLightProps.placeholder}
                icon={formsV1SelectActiveonLightProps.icon}
              />
              <FormsV1SelectRestingonLight
                fieldTitle={formsV1SelectRestingonLightProps.fieldTitle}
                placeholder={formsV1SelectRestingonLightProps.placeholder}
                icon={formsV1SelectRestingonLightProps.icon}
                className={formsV1SelectRestingonLightProps.className}
              />
              <FlexRow>
                <FormsGeneralRadioRestingonLight>
                  {formsGeneralRadioRestingonLightProps.children}
                </FormsGeneralRadioRestingonLight>
                <RecoverPassword>{recoverPassword}</RecoverPassword>
              </FlexRow>
              <ButtonsLabelFilledActiveOnLight className={buttonsLabelFilledActiveOnLight2Props.className}>
                {buttonsLabelFilledActiveOnLight2Props.children}
              </ButtonsLabelFilledActiveOnLight>
            </Forms>
            <Or>
              <Line src="/img/line@2x.svg" />
              <Or1>{or}</Or1>
              <Line1 src="/img/line-1@2x.svg" />
            </Or>
            <SocialButtons>
              <ButtonsSocialWLableOnLight lable={buttonsSocialWLableOnLight1Props.lable} />
              <ButtonsSocialWLableOnLight
                lable={buttonsSocialWLableOnLight2Props.lable}
                className={buttonsSocialWLableOnLight2Props.className}
              />
              <ButtonsSocialWLableOnLight
                lable={buttonsSocialWLableOnLight3Props.lable}
                className={buttonsSocialWLableOnLight3Props.className}
              />
            </SocialButtons>
          </Form>
        </div>
      </div>
    );
  }
}

const OverlapGroup3 = styled.div`
  width: 706px;
  margin-top: -0.05px;
  display: flex;
  flex-direction: column;
  padding: 89.9px 36.9px;
  align-items: flex-end;
  min-height: 900px;
  background-image: url(/img/bg@1x.svg);
  background-size: 100% 100%;
`;

const AHighlyCuratedPla = styled.div`
  ${HeadingH1}
  width: 552px;
  min-height: 204px;
  margin-top: 10px;
  font-weight: 800;
  color: var(--ffffff);
`;

const OverlapGroup = styled.div`
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

const YouDontHaveAnAc = styled.p`
  ${ButtonLabels16px}
  min-height: 24px;
  align-self: center;
  margin-top: 0.09px;
  min-width: 215px;
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
  min-height: 715px;
`;

const Title = styled.div`
  width: 343px;
  margin-top: 30px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 78px;
`;

const SignIn = styled.div`
  ${HeadingH1}
  width: 157px;
  min-height: 51px;
  font-weight: 800;
  color: var(--x000000primary);
  text-align: center;
`;

const TakeTheNextStepA = styled.p`
  ${TextLabels14pxRegular}
  width: 343px;
  min-height: 21px;
  margin-top: 6px;
  font-weight: 400;
  color: var(--x5d5d5b);
  text-align: center;
  line-height: 21px;
  white-space: nowrap;
`;

const Forms = styled.div`
  width: 469px;
  position: relative;
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 272px;
`;

const FlexRow = styled.div`
  height: 20px;
  position: relative;
  margin-top: 24px;
  display: flex;
  align-items: flex-end;
  min-width: 467px;
`;

const RecoverPassword = styled.div`
  ${TextLabels12pxBold}
  width: 123px;
  min-height: 18px;
  margin-left: 159px;
  font-weight: 700;
  color: var(--x000000primary);
  text-align: right;
  line-height: 18px;
  white-space: nowrap;
`;

const Or = styled.div`
  height: 21px;
  margin-top: 34px;
  margin-right: 1px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 466px;
`;

const Line = styled.img`
  width: 207px;
  height: 1px;
  margin-top: 4px;
`;

const Or1 = styled.div`
  ${TextLabels14pxRegular}
  width: 16px;
  min-height: 21px;
  margin-left: 20px;
  font-weight: 400;
  color: var(--x5d5d5b);
  text-align: center;
  line-height: 21px;
  white-space: nowrap;
`;

const Line1 = styled.img`
  width: 207px;
  height: 1px;
  margin-left: 18px;
  margin-top: 4px;
`;

const SocialButtons = styled.div`
  width: 469px;
  position: relative;
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 154px;
`;

export default RegistrationSignInBasic;
