import React from "react";
import Next from "../Next";
import styled from "styled-components";
import { TextLabels12pxMedium, TextLabels12pxBold } from "../../styledMixins";


class ElementPaginationCenteredOnLight extends React.Component {
  render() {
    const { number1, number2, number3, number4, number5, next1Props, next2Props } = this.props;

    return (
      <ElementPaginationCenteredOnLight1>
        <Next>{next1Props.children}</Next>
        <Numbers>
          <Number>{number1}</Number>
          <OverlapGroup>
            <Number1>{number2}</Number1>
          </OverlapGroup>
          <Number2>{number3}</Number2>
          <Number3>{number4}</Number3>
          <Number3>{number5}</Number3>
        </Numbers>
        <Next className={next2Props.className}>{next2Props.children}</Next>
      </ElementPaginationCenteredOnLight1>
    );
  }
}

const ElementPaginationCenteredOnLight1 = styled.div`
  position: relative;
  margin-top: 38px;
  display: flex;
  align-items: flex-start;
  min-width: 364px;
`;

const Numbers = styled.div`
  width: 182px;
  height: 40px;
  margin-left: 52px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Number = styled.div`
  ${TextLabels12pxMedium}
  min-height: 18px;
  min-width: 6px;
  font-weight: 500;
  color: var(--x000000primary);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  height: 42px;
  align-self: flex-start;
  margin-left: 20px;
  margin-top: -1px;
  display: flex;
  padding: 0 16.7px;
  align-items: center;
  min-width: 42px;
  background-color: var(--x7a52f4--hover);
  border-radius: 20px;
`;

const Number1 = styled.div`
  ${TextLabels12pxBold}
  min-height: 18px;
  min-width: 8px;
  font-weight: 700;
  color: var(--ffffff);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

const Number2 = styled.div`
  ${TextLabels12pxMedium}
  min-height: 18px;
  margin-left: 18px;
  min-width: 8px;
  font-weight: 500;
  color: var(--x000000primary);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

const Number3 = styled.div`
  ${TextLabels12pxMedium}
  min-height: 18px;
  margin-left: 36px;
  min-width: 8px;
  font-weight: 500;
  color: var(--x000000primary);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

export default ElementPaginationCenteredOnLight;
