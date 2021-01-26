import React from "react";
import styled from "styled-components";

import ExpandableItem from "./ExpandableItem";
import { Box10vw, PatternBox } from "./styled/Containers";
import { Icon } from "./styled/Icon";

const ItemLi = styled.li`
  border-bottom: 2px dashed ${({ color, theme }) => theme.colors[color]};
  font-size: 0.8rem;
  &:last-child {
    border-bottom: none;
  }
`;

const ListHeader = ({ color, handleCloseButton, title, handleAddItem }) => (
  <Box10vw
    h={1}
    className="full-w d-flex align-center justify-end"
    borderWidth="0 0 2px 0"
  >
    <div className="d-flex align-center px full-h grow-1">
      <h5 className="bagnard">{title}</h5>
    </div>
    {!!handleCloseButton && (
      <Box10vw
        w={1}
        onClick={handleCloseButton}
        className="d-flex full-h align-center justify-center"
        borderWidth="0 0 0 2px"
      >
        <Icon icon="close" size="12px" color={color} />
      </Box10vw>
    )}
    {!!handleAddItem && (
      <Box10vw
        w={1}
        onClick={handleAddItem}
        className="d-flex full-h align-center justify-center"
        borderWidth="0 0 0 2px"
      >
        <Icon icon="plus" size="12px" color={color} />
      </Box10vw>
    )}
  </Box10vw>
);
const Inventory = ({
  color,
  handleCloseButton,
  equiped,
  backpack,
  handleAddItem,
}) => {
  console.log(equiped);
  return (
    <div className="full-h">
      <Box10vw
        h={1}
        className="full-w d-flex align-center justify-end"
        borderWidth="0 0 2px 0"
      >
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
      <div className="full-h overflowY-scroll">
        <div>
          <ListHeader color={color} title="Equipado" />
          <Box10vw className="full" borderWidth="0 0 2px 0">
            <ul className="px">
              {!!equiped && !!equiped.length ? (
                equiped.map(item => (
                  <ItemLi
                    key={"equiped-" + item.name}
                    color={color}
                    className="full-w"
                  >
                    <ExpandableItem item={item} color={color} />
                  </ItemLi>
                ))
              ) : (
                <li>empty</li>
              )}
            </ul>
          </Box10vw>
        </div>
        <div>
          <ListHeader
            handleAddItem={handleAddItem}
            color={color}
            title="Mochila"
          />
          <ul className="px full-h">
            {!!backpack && !!backpack.length ? (
              backpack.map(item => (
                <ItemLi
                  key={"bp-" + item.name}
                  color={color}
                  className="full-w"
                >
                  <ExpandableItem item={item} color={color} />
                </ItemLi>
              ))
            ) : (
              <li className="full mt flex-center">vacía</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
