import React from "react";
import styled from "styled-components";
import { Icons16px, Border1pxCfdbd5OutlineOnlight } from "../../styledMixins";


class Next extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Next1 className={`next ${className || ""}`}>
        <OverlapGroup1 className="overlap-group1-1">
          <Ico className="ico">{children}</Ico>
        </OverlapGroup1>
      </Next1>
    );
  }
}

const Next1 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;

  &.next.next-1 {
    margin-left: 51px;
  }
`;

const OverlapGroup1 = styled.div`
  ${Border1pxCfdbd5OutlineOnlight}
  height: 42px;
  margin-top: -1px;
  display: flex;
  padding: 12px;
  align-items: flex-start;
  min-width: 42px;
  border-radius: 20px;
`;

const Ico = styled.div`
  ${Icons16px}
  min-height: 16px;
  min-width: 16px;
  font-weight: 400;
  color: var(--x000000primary);
  text-align: center;
`;

export default Next;
