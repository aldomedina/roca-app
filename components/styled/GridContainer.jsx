import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5vw;
  width: 90vw;
  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "hidden")};
  box-shadow: ${({ theme, border, borderWidth = 2 }) =>
    border ? `0 0 0 ${borderWidth}px inset ${theme.colors[border]}` : "none"};
`;

export const MainWrapper = styled(Wrapper)`
  height: ${({ theme }) => `calc(${100 * theme.vh}px - 10vw)`};
`;

export const GridContainer = styled.div`
  background-color: ${({ theme, bgColor }) =>
    bgColor ? theme.colors[bgColor] : "transparent"};
  ${({ gap }) => gap && `grid-gap: ${gap}px;`}
  ${props =>
    !!props.bgImg &&
    `
        background-image: url(/images/grey-grid-background.svg);
        background-size: 100%;
        background-repeat: repeat-y;
        `};
  width: 90vw;
  min-height: ${({ theme, fullH }) =>
    !!fullH && `calc(${100 * theme.vh}px - 10vw)`};
  display: grid;
  grid-template-columns: repeat(9, 10vw);
  grid-auto-rows: 10vw;
`;

export const GridChild = styled.div`
  grid-column: ${props => props.column + " / span " + props.columnSpan};
  grid-row: ${props => props.row + " / span " + props.rowSpan};
  background-color: ${({ theme, bgColor }) =>
    bgColor ? theme.colors[bgColor] : "transparent"};
  border: ${({ theme, border, borderWidth = 2 }) =>
    border ? `solid ${theme.colors[border]}` : "none"};
  border-width: ${({ theme, border, borderWidth = 2 }) =>
    !!border && borderWidth};
  ${props => !!props.bbnone && "border-bottom: none"};
  ${props => !!props.margin && "margin: " + props.margin + "px"};
`;
