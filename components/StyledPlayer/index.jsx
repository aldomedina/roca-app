import styled from "styled-components";
import { PatternBox } from "../styled/Containers";

export const MainWrapper = styled.div`
  padding: 5vw calc(5vw - 1px);
  width: 100vw;
  height: ${({ theme }) => theme.vh * 100 + "px"};
  background: ${({ theme, color }) => theme.colors["light" + color]};
  color: ${({ theme, color }) => theme.colors[color]};
`;

export const Wrapper = styled.div`
  border: ${({ theme, color }) => "1px solid" + theme.colors[color]};
  ${({ position }) => !!position && "position: " + position};
  ${({ minHeight }) => !!minHeight && "min-height: calc(10vw + 2px)"};
`;

export const ListWrapper = styled.div`
  border-right: ${({ theme, color, border }) =>
    !!border && "2px solid" + theme.colors[color]};
  width: ${({ size }) => size * 10 + "vw"};
  height: max-content;
`;

export const StyledName = styled.h2`
  color: ${({ theme, color }) => theme.colors[color]};
`;

export const ListContainer = styled(PatternBox)`
  border: ${({ theme, color }) => "1px solid" + theme.colors[color]};
`;

export const Panel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  border: ${({ theme, color }) => "solid" + theme.colors[color]};
  border-width: ${({ borderWidth }) => borderWidth};
  background: ${({ theme, color, noBg }) =>
    !noBg && theme.colors["light" + color]};
  transition: ${({ theme }) => theme.transition03};
`;

export const SidePanel = styled(Panel)`
  position: absolute;
  top: 0;
  left: ${({ isOpen }) => (!!isOpen ? "0" : "90vw")};
`;
export const LowPanel = styled(Panel)`
  transform: ${({ isOpen }) =>
    !!isOpen ? "translateY(0)" : "translateY(100%)"};
`;
