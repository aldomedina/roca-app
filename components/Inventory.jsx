import React from "react";
import { Box10vw, PatternBox } from "./styled/Containers";
import { Icon } from "./styled/Icon";

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
    <div>
      <div>
        <ListHeader
          handleCloseButton={handleCloseButton}
          color={color}
          title="Equipado"
        />
        <Box10vw className="full" borderWidth="0 0 2px 0">
          <ul>
            {!!equiped && !!equiped.length ? (
              equiped.map(item => <li key={item.name}>{item.name}</li>)
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
        <ul>
          {!!backpack && !!backpack.length ? (
            backpack.map(item => <li key={item.name}>{item.name}</li>)
          ) : (
            <li>empty backpack</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Inventory;
