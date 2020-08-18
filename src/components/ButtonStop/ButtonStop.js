import React from 'react'
import { StyledButtonStop } from './styles';

function ButtonStop({id}) {
    return (
        <StyledButtonStop onClick={()=>{clearInterval(id)}} >
            Parar
            </StyledButtonStop>
        )
    }

export default ButtonStop