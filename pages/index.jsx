import Head from 'next/head'
import styled from 'styled-components'
import { CircleButton } from '../components/styled/Button'
import { GridChild, GridContainer, MainWrapper } from '../components/styled/GridContainer'
import Link from 'next/link'

const Title = styled.h1`  
  font-family: bagnard;
  text-align: center;
  font-weight: bolder;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roca de Oso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapper border="grey" >
        <GridContainer bgImg fullH>
          <GridChild column={3} columnSpan={5} row={4} rowSpan={5} bgColor={'white'} border="grey" borderWidth="1">
            <div className="full-h d-flex justify-center align-center">
              <Title>Roca <br/> de <br/>Oso</Title>
            </div>          
          </GridChild>
          <GridChild column={4} columnSpan={3} row={11} rowSpan={3} bgColor={'white'} border="grey" borderWidth="1">
            <Link href="/partidas">
              <CircleButton border="grey" borderWidth="2">
                <h2 className="bagnard">Jugar</h2>                    
              </CircleButton>
            </Link>
          </GridChild>
        </GridContainer>
      </MainWrapper>      
    </div>
  )
}