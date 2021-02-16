import styled from "styled-components";

const StyledInput = styled.div`
  width: 100%;
  ${props =>
    (!!props.column || !!props.columnSpan) &&
    "grid-column:" + props.column + " / span " + props.columnSpan};
  ${props =>
    (!!props.row || !!props.rowSpan) &&
    "grid-row:" + props.row + " / span " + props.rowSpan};
  display: flex;
  flex-direction: column;

    input {
      transition: box-shadow 0.05s ease-in;
      width: 100%;
      padding: 1rem;
      border: none;            
      background-color:${({ theme, color }) =>
        color ? theme.colors["light" + color] : theme.colors["lightgrey"]};
      &:focus {
        outline: none;
        box-shadow:0 0 10px 1px inset  ${({ theme, color }) =>
          color ? theme.colors[color] : theme.colors["grey"]};
      }  
    }

    label {
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: .8rem;
    }

  }
`;

export const TextInput = ({
  name,
  id,
  onChange,
  value,
  column,
  columnSpan,
  row,
  rowSpan,
}) => (
  <StyledInput
    column={column}
    columnSpan={columnSpan}
    row={row}
    rowSpan={rowSpan}
  >
    <label htmlFor={id}>{name}</label>
    <input id={id} type="text" onChange={onChange} value={value} />
  </StyledInput>
);
