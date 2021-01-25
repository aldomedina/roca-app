import React, { useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { RotatePlus } from "./styled/Icon";

const VisibleSection = styled.div`
  min-height: 13vw;
`;

const ExpandableSection = styled.div`
  transition: ${({ theme }) => theme.transition03};
  height: ${({ isOpen, height }) => (isOpen ? `${height}px` : 0)};
  overflow: hidden;
`;

const ExpandableItem = ({ item, color }) => {
  const targetRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [expandHeight, setExpandHeight] = useState(0);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setExpandHeight(targetRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="d-flex flex-column">
      <VisibleSection className="full d-flex align-center justify-between">
        <p className="mr">
          <strong>{item.name}</strong>
        </p>
        <div className="d-flex align-center">
          {!!item && !!item.dice && (
            <span className="mr mt-3">{`${item.dice}D/${item.dices}`}</span>
          )}
          <RotatePlus
            onClick={() => setIsOpen(isOpen => !isOpen)}
            icon="plus"
            size=".8rem"
            color={color}
            isOpen={isOpen}
          />
        </div>
      </VisibleSection>
      <ExpandableSection isOpen={isOpen} height={expandHeight}>
        <div className="p-5 pb" ref={targetRef}>
          <p>{item.description}</p>
        </div>
      </ExpandableSection>
    </div>
  );
};

export default ExpandableItem;
