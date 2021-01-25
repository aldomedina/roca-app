import React from 'react'
import styled from 'styled-components'

const TS = styled.span`
  border-radius: 50%;
  height: 1.2rem;
  width: 1.2rem;
  color: ${({theme, color}) => theme.colors['light'+color]};
  background-color: ${({theme, color}) => theme.colors[color]};
  font-size: .8rem;
  text-align: center;
  padding-top: 4px;  
  font-weight: bold;
`
const Atribute = ({name, ts, points, color}) => {
    return (        
        <div className="d-flex flex-column justify-between full p-7">
            <p><strong>{name}</strong></p>
            <div className={`d-flex full-w align-center ${!!ts ? 'justify-between':'justify-end'}`}>
                { !!ts && <TS color={color}>ts</TS> }
                <span>{points}</span>
            </div>
        </div>        
    )
}

export default Atribute
