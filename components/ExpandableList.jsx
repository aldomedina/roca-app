import React from "react";
import styled from "styled-components";
import ExpandableItem from "./ExpandableItem";

import { CircleButton } from "./styled/Button";
import { Icon } from "./styled/Icon";

const Wrapper = styled.div`
  border-bottom: 2px solid ${({ color, theme }) => theme.colors[color]};
  background-color: ${({ theme, color }) => theme.colors["light" + color]};
`;

const Title = styled.div`
  height: 10vw;
  border-bottom: 2px solid ${({ color, theme }) => theme.colors[color]};
`;

const AddItemWrapper = styled.div`
  height: 10vw;
  width: 10vw;
  border-left: 2px solid ${({ color, theme }) => theme.colors[color]};
`;

const ItemLi = styled.li`
  border-bottom: 2px dashed ${({ color, theme }) => theme.colors[color]};
  font-size: 0.8rem;
  &:last-child {
    border-bottom: none;
  }
`;

const ExpandableList = ({ addItem, title, color, list }) => {
  return (
    <Wrapper color={color}>
      <Title className="d-flex align-center justify-between ">
        <h5 className="bagnard p-7">{title}</h5>
        {addItem && (
          <AddItemWrapper color={color}>
            <CircleButton border={color} borderWidth={2}>
              {" "}
              <Icon icon="plus" size="12px" color={color} />{" "}
            </CircleButton>
          </AddItemWrapper>
        )}
      </Title>
      <ul className="px-7">
        {!!list &&
          !!list.length &&
          list.map(item => (
            <ItemLi key={item.name} color={color} className="full-w">
              <ExpandableItem item={item} color={color} />
            </ItemLi>
          ))}
      </ul>
    </Wrapper>
  );
};

export default ExpandableList;
