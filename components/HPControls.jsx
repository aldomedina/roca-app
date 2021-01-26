import React from "react";
import styled from "styled-components";
import { GameButton } from "./styled/Button";
import { Box10vw, PatternBox } from "./styled/Containers";
import { Icon } from "./styled/Icon";

const Wrapper = styled(Box10vw)`
  box-shadow: ${({ isOpen }) => !!isOpen && "0px 12px 20px 8px"};
`;

const HPControls = ({
  isOpen,
  color,
  handleCloseButton,
  handleAdd,
  handleSubstract,
  handleMax,
}) => (
  <Wrapper
    isOpen={isOpen}
    h={3}
    className="full-w"
    color={color}
    borderWidth="2px 1px 1px 1px"
  >
    <Box10vw h={1} className="full-w d-flex align-center justify-end">
      <PatternBox className="full-h grow-1" color={color} />
      <Box10vw
        w={1}
        onClick={handleCloseButton}
        className="d-flex full-h align-center justify-center"
        borderWidth="0 0 0 2px"
      >
        <Icon icon="close" size="12px" color={color} />
      </Box10vw>
    </Box10vw>

    <Box10vw h={2} className="full-w d-flex">
      <GameButton
        className="d-flex justify-center align-center full grow-1"
        borderWidth={"2px  2px 0 0 "}
        color={color}
        onClick={handleSubstract}
      >
        <Icon icon="less" color={color} />
      </GameButton>
      <GameButton
        borderWidth={"2px 0 0 0 "}
        className="d-flex justify-center align-center full grow-1"
        color={color}
        onClick={handleAdd}
      >
        <Icon icon="plus" color={color} />
      </GameButton>
      <GameButton
        borderWidth={"2px 0 0 2px "}
        className="d-flex justify-center align-center full text-align-center bagnard grow-1"
        color={color}
        onClick={handleMax}
      >
        <h5>
          MAX
          <br /> HP
        </h5>
      </GameButton>
    </Box10vw>
  </Wrapper>
);

export default HPControls;
