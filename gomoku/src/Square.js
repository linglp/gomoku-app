import { useState } from 'react';

function Square() {
    const [value, setValue] = useState(null);


    function handleClick(){
        setValue('X')
    }
    return(
        <button onClick={handleClick} className="square">{value}</button>
    )
    ;
  }

export default Square