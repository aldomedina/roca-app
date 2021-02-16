import Head from "next/head";
import Link from "next/link";

import { CircleButton } from "../../components/styled/Button";
import {
  GridChild,
  GridContainer,
  MainWrapper,
} from "../../components/styled/GridContainer";
import { Icon } from "../../components/styled/Icon";
import { Box2x2 } from "../../components/styled/Containers";

const mock_partidas = [
  {
    name: "Misterios de los iliadis",
    slug: "misterios-de-los-iliadis",
    id: 10,
  },
];

export default function Partidas() {
  return (
    <div>
      <Head>
        <title>Roca de Oso - Partidas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapper border="grey" scroll>
        <GridContainer bgImg fullH>
          <GridChild
            column={1}
            columnSpan={"end"}
            row={1}
            rowSpan={2}
            bgColor={"white"}
            borderWidth="2px"
            border="grey"
            bbnone
          >
            <div className="full d-flex align-center justify-between pl">
              <h2 className="bagnard">Partidas</h2>
              <Box2x2 borderLeft="grey">
                <CircleButton border="grey">
                  <Icon icon="plus" size="12px" />
                </CircleButton>
              </Box2x2>
            </div>
          </GridChild>
          {!!mock_partidas &&
            !!mock_partidas.length &&
            mock_partidas.map((p, i) => (
              <GridChild
                key={`party-${i}`}
                column={1}
                columnSpan={"end"}
                row={"auto"}
                rowSpan={2}
                bgColor={"white"}
                borderWidth="2px"
                border="grey"
                bbnone={mock_partidas.length !== i + 1}
              >
                <Link href={`/partidas/${p.slug}`}>
                  <div className="full d-flex align-center justify-between px">
                    <p>{p.name}</p>
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
