import React, { useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Icon, RotatePlus } from "./styled/Icon";

const VisibleSection = styled.div`
  min-height: 13vw;
  color: ${({ theme, color }) => theme.colors[color]};
`;

const ExpandableSection = styled.div`
  transition: height 0.3s ease-in-out;
  height: ${({ isOpen, height }) => (isOpen ? `${height}px` : 0)};
  overflow: hidden;
`;

const ExpandableItem = ({ item, color }) => {
  if (!item) return "";
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
      <VisibleSection
        className="full d-flex align-center justify-between"
        color={color}
      >
        <div className="d-flex align-center">
          {!!item.icon && (
            <Icon icon={item.icon} color={color} className="mr" />
          )}
          <p className="mr">
            <strong>{item.name}</strong>
          </p>
        </div>
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
          {((!!item.attributes && !!item.attributes.length) ||
            (!!item.combat && !!item.combat.length) ||
            (!!item.resistances && !!item.resistances.length)) && (
            <>
              <div className="d-flex justify-start full">
                {item.attributes && !!item.attributes.length && (
                  <ul className="mt mr">
                    {item.attributes.map((att, i) => (
                      <li key={`${item.name}-attribute-${i}`} className="mb-3">
                        <strong className="mr-7">{att.type}:</strong>
                        {att.points}
                      </li>
                    ))}
                  </ul>
                )}
                {item.combat && !!item.combat.length && (
                  <ul className="mt mr">
                    {item.combat.map((att, i) => (
                      <li key={`${item.name}-combat-${i}`} className="mb-3">
                        <strong className="mr-7">{att.type}:</strong>
                        {att.points}
                      </li>
                    ))}
                  </ul>
                )}
                {item.resistances && !!item.resistances.length && (
                  <div className="mt">
                    <div className="mb-3">
                      <span>
                        <strong>Resist:</strong>
                      </span>
                    </div>

                    <ul className=" ml bullets">
                      {item.resistances.map((att, i) => (
                        <li
                          key={`${item.name}-resistance-${i}`}
                          className="mb-3 "
                        >
                          {att.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </ExpandableSection>
    </div>
  );
};

export default ExpandableItem;
