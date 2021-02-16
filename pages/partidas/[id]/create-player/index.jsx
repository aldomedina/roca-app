import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { CircleButton } from "../../../../components/styled/Button";
import {
  GridChild,
  GridContainer,
  MainWrapper,
} from "../../../../components/styled/GridContainer";
import { Icon } from "../../../../components/styled/Icon";
import { TextInput } from "../../../../components/styled/Inputs";

const StyledForm = styled.form`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`;

export default function CreatePlayer() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Roca de Oso - Crear Personaje</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainWrapper border="grey" borderWidth="2" scroll>
        <GridContainer>
          <GridChild
            column={1}
            columnSpan={2}
            row={1}
            rowSpan={2}
            bgColor={"white"}
            border="grey"
            borderWidth="2px 0 2px 2px"
          >
            <div className="full-h">
              <CircleButton border="grey" onClick={() => router.back()}>
                <Icon color="grey" icon="arrow-left" size="12px" />
              </CircleButton>
            </div>
          </GridChild>
          <GridChild
            column={3}
            columnSpan={"end"}
            row={1}
            rowSpan={2}
            bgColor={"white"}
            border="grey"
            borderWidth="2px"
          >
            <div className="full d-flex align-center justify-between pl">
              <h2 className="bagnard">Nuevo Personaje</h2>
            </div>
          </GridChild>
        </GridContainer>
        <StyledForm className="p full-w">
          <TextInput
            name="name"
            id="name"
            column={1}
            columnSpan={4}
            onChange={e => console.log(e.target.value)}
          />
          <TextInput
            name="name"
            id="name"
            onChange={e => console.log(e.target.value)}
          />
          <TextInput
            name="name"
            id="name"
            onChange={e => console.log(e.target.value)}
          />
          <TextInput
            name="name"
            id="name"
            onChange={e => console.log(e.target.value)}
          />
        </StyledForm>
      </MainWrapper>
    </div>
  );
}
//
