import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { CircleButton } from "../../../components/styled/Button";
import {
  GridChild,
  GridContainer,
  MainWrapper,
} from "../../../components/styled/GridContainer";
import { Icon } from "../../../components/styled/Icon";
import { Box2x2 } from "../../../components/styled/Containers";

import mock_personajes from "../../../assets/mock_players";

const ColorBox = styled.div`
  width: 10vw;
  background-color: ${({ color, theme }) =>
    color ? theme.colors[color] : "transparent"};
`;

export default function Partida() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Roca de Oso - Personajes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapper border="grey" borderWidth="2" scroll>
        <GridContainer bgImg fullH>
          <GridChild
            column={1}
            columnSpan={"end"}
            row={1}
            rowSpan={2}
            bgColor={"white"}
            border="grey"
            borderWidth="2px"
            bbnone
          >
            <div className="full d-flex align-center justify-between pl">
              <h2 className="bagnard">Personajes</h2>
              <Link href={`${router.asPath}/create-player`}>
                <Box2x2 borderLeft="grey">
                  <CircleButton border="grey" borderWidth="2">
                    <Icon icon="plus" size="12px" />
                  </CircleButton>
                </Box2x2>
              </Link>
            </div>
          </GridChild>
          {!!mock_personajes &&
            !!mock_personajes.length &&
            mock_personajes.map((p, i) => (
              <GridChild
                key={`player-${i}`}
                column={1}
                columnSpan={"end"}
                row={"auto"}
                rowSpan={2}
                bgColor={"white"}
                border="grey"
                borderWidth="2px"
                bbnone={mock_personajes.length !== i + 1}
              >
                <Link href={`/partidas/${p.party}/${p.slug}`}>
                  <div className="full d-flex align-center justify-between pr">
                    <div className="d-flex align-center full-h">
                      <ColorBox className="full-h" color={p.color} />
                      <p className="ml">
                        <strong>{p.name}</strong>
                        <br />
                        {p.class} - nvl {p.level}
                      </p>
                    </div>
                    <Icon icon="arrow-right" size="12px" />
                  </div>
                </Link>
              </GridChild>
            ))}
        </GridContainer>
      </MainWrapper>
    </div>
  );
}
