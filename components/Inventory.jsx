import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { vibrate } from "../assets";
import { Box10vw, PatternBox } from "./styled/Containers";
import { Icon } from "./styled/Icon";
import InventoryItem from "./InventoryItem";
import ListHeader from "./ListHeader";

const Container = styled.div`
  height: calc(100% - 10vw);
`;

const DropList = styled.ul`
  min-height: 15vw;
  transition: box-shadow 0.2s ease;
  box-shadow: ${({ isDraggingOver, theme, color }) =>
    isDraggingOver ? `0px 0px 15px 5px rgba(0,0,0,0.42) inset` : "none"};
`;

const Inventory = ({
  color,
  handleCloseButton,
  equiped,
  backpack,
  handleAddItem,
  onDragEnd,
}) => {
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
      <Container className=" d-flex flex-column overflowY-scroll hide-scrollbar">
        <DragDropContext onDragEnd={onDragEnd} onDragStart={vibrate}>
          <div>
            <ListHeader color={color} title="Equipado" />
            <Box10vw borderWidth="0 0 2px 0">
              <Droppable droppableId="equiped">
                {(provided, snapshot) => (
                  <DropList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    color={color}
                  >
                    {!!equiped && !!equiped.length ? (
                      equiped.map((item, i) => (
                        <InventoryItem
                          key={"bp-" + item.id}
                          item={item}
                          i={i}
                          color={color}
                        />
                      ))
                    ) : (
                      <li className="flex-center full-w pt">Equipate!</li>
                    )}

                    {provided.placeholder /* add space when dragging into */}
                  </DropList>
                )}
              </Droppable>
            </Box10vw>
          </div>
          <div className="grow-1 d-flex flex-column">
            <ListHeader
              handleAddItem={handleAddItem}
              color={color}
              title="Mochila"
            />
            <Droppable droppableId="backpack">
              {(provided, snapshot) => (
                <DropList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="grow-1"
                  isDraggingOver={snapshot.isDraggingOver}
                  color={color}
                >
                  {!!backpack &&
                    !!backpack.length &&
                    backpack.map((item, i) => (
                      <InventoryItem
                        key={"bp-" + item.id}
                        item={item}
                        i={i}
                        color={color}
                      />
                    ))}

                  {provided.placeholder /* add space when dragging into */}
                </DropList>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </Container>
    </div>
  );
};

export default Inventory;
