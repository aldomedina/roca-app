import Head from "next/head";
import styled from "styled-components";

import { CircleButton, GameButton } from "../../../components/styled/Button";
import {
  GridChild,
  GridContainer,
} from "../../../components/styled/GridContainer";
import { Icon } from "../../../components/styled/Icon";
import { PatternBox } from "../../../components/styled/Containers";
import { useEffect, useState } from "react";
import Atribute from "../../../components/Atribute";
import Inventory from "../../../components/Inventory";
import ExpandableList from "../../../components/ExpandableList";
import HP from "../../../components/HP";
import HPControls from "../../../components/HPControls";
import {
  MainWrapper,
  Wrapper,
  ListWrapper,
  StyledName,
  ListContainer,
  Panel,
  SidePanel,
  LowPanel,
} from "./styled";
import fetchedPlayer from "./mock";

export default function Player() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isLowPanelOpen, setIsLowPanelOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [stats, setStats] = useState({});
  const [activeStats, setActiveStats] = useState({
    attributes: {},
    combat: {},
    resistances: [],
    hp: {},
    equiped: [],
  });
  const [activeItems, setActiveItems] = useState([]);
  const [backpack, setBackpack] = useState([]);

  useEffect(() => {
    setDetails(fetchedPlayer);
    setStats(fetchedPlayer.stats);
    setActiveStats({ ...fetchedPlayer.stats, equiped: [] });
    setActiveItems(fetchedPlayer.items.active);
    setBackpack(fetchedPlayer.items.backpack);
  }, []);

  useEffect(() => {
    setActiveStats(state => ({ ...state, equiped: [] }));
    activeItems.map(item => {
      if (!activeStats.equiped.find(el => el === item.name)) {
        if (!!item.attributes && !!item.attributes.length) {
          item.attributes.map(att =>
            setActiveStats(state => ({
              ...state,
              attributes: {
                ...state.attributes,
                [att.type]: {
                  ...state.attributes[att.type],
                  points: stats.attributes[att.type].points + att.points,
                },
              },
            }))
          );
        }
        if (!!item.combat && !!item.combat.length) {
          item.combat.map(att =>
            setActiveStats(state => ({
              ...state,
              combat: {
                ...state.combat,
                [att.type]: stats.combat[att.type] + att.points,
              },
            }))
          );
        }
        if (!!item.resistances && !!item.resistances.length) {
          item.resistances.map(resist => {
            if (!activeStats.resistances.find(el => el.name === resist.name)) {
              setActiveStats(state => ({
                ...state,
                resistances: [...state.resistances, resist],
              }));
            }
          });
        }
        setActiveStats(state => ({
          ...state,
          equiped: [...state.equiped, item.name],
        }));
      }
    });
  }, [activeItems]);

  const handleMax = () =>
    setStats(stats => ({
      ...stats,
      hp: { ...stats.hp, active: stats.hp.total },
    }));

  const handleAddHP = () =>
    stats.hp.active < stats.hp.total &&
    setStats(stats => ({
      ...stats,
      hp: { ...stats.hp, active: stats.hp.active + 1 },
    }));

  const handleSubstractHP = () =>
    stats.hp.active > 0 &&
    setStats(stats => ({
      ...stats,
      hp: { ...stats.hp, active: stats.hp.active - 1 },
    }));

  const getActivePanel = (panel, color) =>
    ({
      inventory: (
        <Inventory
          color={color}
          handleCloseButton={() => setIsSidePanelOpen(false)}
          handleAddItem={addItemToBackpack}
          equiped={activeItems}
          backpack={backpack}
        />
      ),
      level: <div>level</div>,
    }[panel]);

  const addItemToBackpack = () => console.log("add item to backpack");

  if (stats.attributes === undefined) return "";

  return (
    <div>
      <Head>
        <title>Roca de Oso - Personajes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainWrapper color={details.color}>
        <div className="full d-flex flex-column">
          {/* MAIN */}
          <Wrapper
            color={details.color}
            position={"relative"}
            isSidePanelOpen={isSidePanelOpen}
            className="full-w grow-1 mb-5vw  overflow-hidden"
            overflow={"scroll"}
          >
            {/* MAIN GRID */}
            <div className="full d-flex flex-column overflowY-scroll">
              <GridContainer bgColor={details.color}>
                {/* PLAYER DETAILS */}
                <GridChild
                  column={1}
                  columnSpan={3}
                  row={1}
                  rowSpan={3}
                  bgColor={`light${details.color}`}
                  margin={1}
                >
                  <CircleButton
                    border={details.color}
                    borderWidth={2}
                  ></CircleButton>
                </GridChild>
                <HP
                  handleOpenControls={() => setIsLowPanelOpen("level")}
                  color={details.color}
                  totalHP={stats.hp.total}
                  activeHP={stats.hp.active}
                />
                <GridChild
                  column={4}
                  columnSpan={"end"}
                  row={2}
                  rowSpan={1}
                  bgColor={details.color}
                  margin={1}
                >
                  <div className="full d-flex align-center">
                    <StyledName
                      color={`light${details.color}`}
                      className="bagnard full-w text-align-center"
                    >
                      {details.name}
                    </StyledName>
                  </div>
                </GridChild>
                <GridChild
                  column={4}
                  columnSpan={4}
                  row={3}
                  rowSpan={2}
                  margin={1}
                >
                  <PatternBox className="full" color={details.color} />
                </GridChild>
                <GridChild
                  column={8}
                  columnSpan={"end"}
                  row={3}
                  rowSpan={2}
                  bgColor={`light${details.color}`}
                  margin={1}
                >
                  <CircleButton
                    border={details.color}
                    borderWidth={2}
                    onClick={() => setIsSidePanelOpen("level")}
                  >
                    <div className="full d-flex flex-column justify-center">
                      <p>
                        <strong>nivel</strong>
                      </p>
                      <span>12</span>
                    </div>
                  </CircleButton>
                </GridChild>
                <GridChild
                  column={1}
                  columnSpan={3}
                  row={4}
                  rowSpan={1}
                  bgColor={`light${details.color}`}
                  margin={1}
                >
                  <div className="full flex-center uppercase">
                    <h5 className="bagnard">Druida</h5>
                  </div>
                </GridChild>

                {/* ATTRIBUTES */}
                {Object.keys(activeStats.attributes).map((a, i) => (
                  <GridChild
                    key={`atribute-${i}`}
                    column={i === 0 || i === 3 ? 1 : i === 1 || i === 4 ? 4 : 7}
                    columnSpan={3}
                    row={i < 3 ? 5 : 7}
                    rowSpan={2}
                    bgColor={`light${details.color}`}
                    margin={1}
                  >
                    <Atribute
                      name={a}
                      ts={activeStats.attributes[a].ts}
                      points={activeStats.attributes[a].points}
                      color={details.color}
                    />
                  </GridChild>
                ))}

                {/* COMBAT STATS */}
                {Object.keys(activeStats.combat).map((c, i) => (
                  <GridChild
                    key={`combat-${i}`}
                    column={1}
                    columnSpan={5}
                    row={i + 9}
                    rowSpan={1}
                    bgColor={`light${details.color}`}
                    margin={1}
                  >
                    <div className="d-flex justify-between align-center p-7 full">
                      <p>
                        <strong>{c}</strong>
                      </p>
                      <span>{activeStats.combat[c]}</span>
                    </div>
                  </GridChild>
                ))}
                <GridChild
                  column={6}
                  columnSpan={"end"}
                  row={9}
                  rowSpan={2}
                  margin={1}
                >
                  <PatternBox className="full" color={details.color} />
                </GridChild>
                <GridChild
                  column={6}
                  columnSpan={"end"}
                  row={11}
                  rowSpan={4}
                  bgColor={`light${details.color}`}
                  margin={1}
                >
                  <GameButton
                    onClick={() => setIsSidePanelOpen("inventory")}
                    color={details.color}
                    className="full flex-center flex-column"
                  >
                    <div className="d-flex align-center mb-7">
                      <h5 className="bagnard mt-3">EQUIPAMIENTO</h5>
                      <Icon
                        icon="arrow-right"
                        size=".8rem"
                        color={details.color}
                      />
                    </div>
                    <Icon icon="armor" size="24vw" color={details.color} />
                  </GameButton>
                </GridChild>
                <GridChild
                  column={1}
                  columnSpan={5}
                  row={13}
                  rowSpan={2}
                  margin={1}
                >
                  <PatternBox className="full" color={details.color} />
                </GridChild>
              </GridContainer>
              <ListContainer
                className="d-flex full-w grow-1"
                color={details.color}
              >
                <ListWrapper size={4} color={details.color} border>
                  <ExpandableList
                    title="RESIST."
                    color={details.color}
                    list={activeStats.resistances}
                    addItem={() => console.log("add item")}
                  />
                </ListWrapper>
                <ListWrapper color={details.color} size={5}>
                  <ExpandableList
                    title="HABILIDADES"
                    color={details.color}
                    list={stats.skills}
                    addItem={() => console.log("add item")}
                  />
                </ListWrapper>
              </ListContainer>
            </div>

            {/* PANELS */}
            <SidePanel
              isOpen={isSidePanelOpen}
              color={details.color}
              className="full"
              borderWidth="1px 1px 1px 1px"
            >
              {!!isSidePanelOpen &&
                getActivePanel(
                  isSidePanelOpen,
                  details.color,
                  activeItems,
                  backpack
                )}
              {/* <div onClick={() => setIsSidePanelOpen(isOpen => !isOpen)}>X</div> */}
            </SidePanel>
            <LowPanel
              isOpen={isLowPanelOpen}
              color={details.color}
              className="d-flex full flex-column"
              borderWidth={"0"}
              noBg
            >
              <div
                className="grow-1 full transparent"
                onClick={() => setIsLowPanelOpen(false)}
              />
              <HPControls
                isOpen={isLowPanelOpen}
                handleCloseButton={() => setIsLowPanelOpen(false)}
                color={details.color}
                handleAdd={handleAddHP}
                handleSubstract={handleSubstractHP}
                handleMax={handleMax}
              />
            </LowPanel>
          </Wrapper>

          {/* SAVE & EXIT CONTROLS */}
          <Wrapper color={details.color} className="full-w" minHeight>
            <GridContainer bgColor={details.color}>
              <GridChild
                column={1}
                columnSpan={7}
                row={1}
                rowSpan={1}
                bgColor={`light${details.color}`}
                margin={1}
              >
                <div className="full flex-center">
                  <Icon icon="save" size="22px" color={details.color} />
                </div>
              </GridChild>
              <GridChild
                column={8}
                columnSpan={2}
                row={1}
                rowSpan={1}
                bgColor={`light${details.color}`}
                margin={1}
              >
                <div className="full flex-center">
                  <Icon icon="exit" size="22px" color={details.color} />
                </div>
              </GridChild>
            </GridContainer>
          </Wrapper>
        </div>
      </MainWrapper>
    </div>
  );
}
