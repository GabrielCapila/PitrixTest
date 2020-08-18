import React from 'react';

import { StyledButtonStart } from './styles';

function ButtonStart({onStart}) {
  return (
      <StyledButtonStart onClick={()=> onStart()} >
          Iniciar
          </StyledButtonStart>
  )

}

export default ButtonStart;