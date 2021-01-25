import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Box10vw, PatternBox } from "./styled/Containers";
import { GridChild } from "./styled/GridContainer";

const Bar = styled.div`
  background: ${({ theme, color }) => theme.colors["light" + color]};
  width: ${({ size }) => size + "%"};
  border-right: solid ${({ theme, color, size }) => theme.colors[color]};
  border-width: ${({ size }) => (size === 100 ? "0px" : "1px")};
  transition: ${({ theme }) => theme.transition03};
`;

const HP = ({ color, handleOpenControls, totalHP, activeHP }) => {
  const [BarSize, setBarSize] = useState(0);

  useLayoutEffect(() => {
    setBarSize((activeHP * 100) / totalHP);
  }, [totalHP, activeHP]);
  return (
    <GridChild
      column={4}
      columnSpan={"end"}
      row={1}
      rowSpan={1}
      bgColor={`light${color}`}
      margin={1}
      onClick={handleOpenControls}
    >
      <div className="full d-flex">
        <PatternBox className="full grow-1" color={color}>
          {!!totalHP && !!activeHP && (
            <Bar
              className="full-h d-flex justify-end align-center"
              color={color}
              size={BarSize}
            >
              <span className="mr-7">{activeHP}</span>
            </Bar>
          )}
        </PatternBox>
        <Box10vw
          className="full-h d-flex justify-center align-center"
          borderWidth="0 0 0 2px"
          w={1}
        >
          <h5 className="bagnard">HP</h5>
        </Box10vw>
      </div>
    </GridChild>
  );
};

export default HP;
