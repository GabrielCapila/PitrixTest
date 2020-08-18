import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { DivClock, ClockP, DivButton } from './styles'
import ButtonStart from '../ButtonStart/ButtonStart'
import ButtonStop from '../ButtonStop/ButtonStop'




function Clock() {
  

  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [intervalId, setIntervalId] = useState()
  const startClock  = () => {
    setIntervalId(setInterval(
      () => tick(),
      1000
    ))
  }


  const tick = () => {
    setTime(
      new Date().toLocaleTimeString()
    );
  }
  useEffect(() => {
    startClock()
    return () => {
      clearInterval(intervalId);
    }
  }, [])


  return (
    <>
    <DivClock>
      <ClockP>
        {time}
      </ClockP>
    </DivClock>
    <DivButton>
      <ButtonStart onStart={() => startClock()} ></ButtonStart>
      <ButtonStop id={intervalId} ></ButtonStop>
    </DivButton> 
    </>
  )
}
export default Clock