import React from "react";
import { Box10vw } from "./styled/Containers";
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

export default ListHeader;
