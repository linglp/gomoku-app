import { useState } from 'react';

function Square({value, clickSquare}) {
    return(
        <button onClick={clickSquare} className="square">{value}</button>
    )
  }

export default Square