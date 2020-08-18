import React from 'react'
import styled from 'styled-components'
import {StyledScreen, StyledImg} from './styles';
import {StyledClock} from '../Clock/styles'
import img from '../../assets/img/relogio.jpg'
import Clock from '../Clock/Clock'

function Screen() {
    return (

        <StyledScreen>
            
            <Clock></Clock>
        </StyledScreen>
    )
}

export default Screen