import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 100%;
  text-align: center;
  transition: ${({ theme }) => theme.transition03};
`;

export const CircleButton = styled(Button)`
  border-radius: 50%;
  border: ${({ theme, border, borderWidth = 1 }) =>
    border ? `${borderWidth}px solid ${theme.colors[border]}` : "none"};
  box-shadow: 0 0 0 0 inset
    ${({ theme, border }) => theme.colors[border] || "black"};
  &:active {
    box-shadow: ${({ theme, border }) =>
      border ? `0 0 10px 1px inset ${theme.colors[border]}` : "none"};
  }
`;

export const GameButton = styled.button`
  border: solid ${({ theme, color }) => theme.colors[color]};
  border-width: ${({ borderWidth }) => (borderWidth ? borderWidth : 0)};
  transition: ${({ theme }) => theme.transition03};
  &:active {
    box-shadow: ${({ theme, color }) =>
      color ? `0 0 18px 1px inset ${theme.colors[color]}` : "none"};
  }
  ${({ w }) => `width: ${10 * w}vw`};
`;
