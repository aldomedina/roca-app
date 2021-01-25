import styled from "styled-components";

export const Icon = styled.div`
  display: inline-block;

  height: ${props => (props.size ? props.size : "20px")};
  width: ${props => (props.size ? props.size : "20px")};

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: ${({ color, theme }) =>
    color ? theme.colors[color] : "black"};

  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  ${props => `mask-image: url("/icons/${props.icon}.svg")`};
`;

export const RotatePlus = styled(Icon)`
  transition: ${({ theme }) => theme.transition03};
  transform: ${({ isOpen }) => !!isOpen && "rotate(45deg)"};
`;
