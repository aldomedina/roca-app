import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

import ExpandableItem from "./ExpandableItem";

const ItemLi = styled.li`
  ${({ color, theme, isDragging }) =>
    !isDragging && "border-bottom: 2px dashed" + theme.colors[color]};
  font-size: 0.8rem;
  &:last-child {
    border-bottom: none;
  }

  ${({ theme, color, isDragging }) =>
    !!isDragging &&
    `
    box-shadow: 0px 6px 15px 5px rgba(0,0,0,0.42); 
    background-color: ${theme.colors["light" + color]};   
    
      `};
`;

const InventoryItem = ({ item, i, color }) => {
  return (
    <Draggable draggableId={item.id.toString()} index={i}>
      {(provided, snapshot) => (
        <ItemLi
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          color={color}
          isDragging={snapshot.isDragging}
          className="full-w px"
        >
          <ExpandableItem item={item} color={color} />
        </ItemLi>
      )}
    </Draggable>
  );
};

export default InventoryItem;
