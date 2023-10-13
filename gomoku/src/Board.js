import Square from './Square.js'
import { useState, useEffect } from 'react';

function Board() {
    const [useX, setX] = useState(true);
    const [squares, setSquares] = useState(Array(80).fill(null));

    function handleClick(index){
        // get a shallow copy of the original array
        const copySquares = squares.slice();
        // if the square is already filled, return it early
        if (copySquares[index]) {
            return;
          }

        //if the square is not filled, check to see if using X or O will be more appropriate
        if (useX){
            copySquares[index] = 'X'
        } else{
            copySquares[index] = 'O'
        }

        setX(!useX)
        // save the shallow array
        setSquares(copySquares)
    }

    return (
      <>
        <div className="row-board">
          <Square value={squares[0]} clickSquare={()=>handleClick(0)}/>
          <Square value={squares[1]} clickSquare={()=>handleClick(1)}/>
          <Square value={squares[2]} clickSquare={()=>handleClick(2)}/>
          <Square value={squares[3]} clickSquare={()=>handleClick(3)}/>
          <Square value={squares[4]} clickSquare={()=>handleClick(4)}/>
          <Square value={squares[5]} clickSquare={()=>handleClick(5)}/>
          <Square value={squares[6]} clickSquare={()=>handleClick(6)}/>
          <Square value={squares[7]} clickSquare={()=>handleClick(7)}/>
          <Square value={squares[8]} clickSquare={()=>handleClick(8)}/>
          <Square value={squares[9]} clickSquare={()=>handleClick(9)}/>
        </div>
        <div className="row-board">
          <Square value={squares[10]} clickSquare={()=>handleClick(10)}/>
          <Square value={squares[11]} clickSquare={()=>handleClick(11)}/>
          <Square value={squares[12]} clickSquare={()=>handleClick(12)}/>
          <Square value={squares[13]} clickSquare={()=>handleClick(13)}/>
          <Square value={squares[14]} clickSquare={()=>handleClick(14)}/>
          <Square value={squares[15]} clickSquare={()=>handleClick(15)}/>
          <Square value={squares[16]} clickSquare={()=>handleClick(16)}/>
          <Square value={squares[17]} clickSquare={()=>handleClick(17)}/>
          <Square value={squares[18]} clickSquare={()=>handleClick(18)}/>
          <Square value={squares[19]} clickSquare={()=>handleClick(19)}/>
        </div>
        <div className="row-board">
          <Square value={squares[20]} clickSquare={()=>handleClick(20)}/>
          <Square value={squares[21]} clickSquare={()=>handleClick(21)}/>
          <Square value={squares[22]} clickSquare={()=>handleClick(22)}/>
          <Square value={squares[23]} clickSquare={()=>handleClick(23)}/>
          <Square value={squares[24]} clickSquare={()=>handleClick(24)}/>
          <Square value={squares[25]} clickSquare={()=>handleClick(25)}/>
          <Square value={squares[26]} clickSquare={()=>handleClick(26)}/>
          <Square value={squares[27]} clickSquare={()=>handleClick(27)}/>
          <Square value={squares[28]} clickSquare={()=>handleClick(28)}/>
          <Square value={squares[29]} clickSquare={()=>handleClick(29)}/>
        </div>
        <div className="row-board">
          <Square value={squares[30]} clickSquare={()=>handleClick(30)}/>
          <Square value={squares[31]} clickSquare={()=>handleClick(31)}/>
          <Square value={squares[32]} clickSquare={()=>handleClick(32)}/>
          <Square value={squares[33]} clickSquare={()=>handleClick(33)}/>
          <Square value={squares[34]} clickSquare={()=>handleClick(34)}/>
          <Square value={squares[35]} clickSquare={()=>handleClick(35)}/>
          <Square value={squares[36]} clickSquare={()=>handleClick(36)}/>
          <Square value={squares[37]} clickSquare={()=>handleClick(37)}/>
          <Square value={squares[38]} clickSquare={()=>handleClick(38)}/>
          <Square value={squares[39]} clickSquare={()=>handleClick(39)}/>
        </div>
        <div className="row-board">
          <Square value={squares[40]} clickSquare={()=>handleClick(40)}/>
          <Square value={squares[41]} clickSquare={()=>handleClick(41)}/>
          <Square value={squares[42]} clickSquare={()=>handleClick(42)}/>
          <Square value={squares[43]} clickSquare={()=>handleClick(43)}/>
          <Square value={squares[44]} clickSquare={()=>handleClick(44)}/>
          <Square value={squares[45]} clickSquare={()=>handleClick(45)}/>
          <Square value={squares[46]} clickSquare={()=>handleClick(46)}/>
          <Square value={squares[47]} clickSquare={()=>handleClick(47)}/>
          <Square value={squares[48]} clickSquare={()=>handleClick(48)}/>
          <Square value={squares[49]} clickSquare={()=>handleClick(49)}/>
        </div>
        <div className="row-board">
          <Square value={squares[50]} clickSquare={()=>handleClick(50)}/>
          <Square value={squares[51]} clickSquare={()=>handleClick(51)}/>
          <Square value={squares[52]} clickSquare={()=>handleClick(52)}/>
          <Square value={squares[53]} clickSquare={()=>handleClick(53)}/>
          <Square value={squares[54]} clickSquare={()=>handleClick(54)}/>
          <Square value={squares[55]} clickSquare={()=>handleClick(55)}/>
          <Square value={squares[56]} clickSquare={()=>handleClick(56)}/>
          <Square value={squares[57]} clickSquare={()=>handleClick(57)}/>
          <Square value={squares[58]} clickSquare={()=>handleClick(58)}/>
          <Square value={squares[59]} clickSquare={()=>handleClick(59)}/>
        </div>
        <div className="row-board">
          <Square value={squares[60]} clickSquare={()=>handleClick(60)}/>
          <Square value={squares[61]} clickSquare={()=>handleClick(61)}/>
          <Square value={squares[62]} clickSquare={()=>handleClick(62)}/>
          <Square value={squares[63]} clickSquare={()=>handleClick(63)}/>
          <Square value={squares[64]} clickSquare={()=>handleClick(64)}/>
          <Square value={squares[65]} clickSquare={()=>handleClick(65)}/>
          <Square value={squares[66]} clickSquare={()=>handleClick(66)}/>
          <Square value={squares[67]} clickSquare={()=>handleClick(67)}/>
          <Square value={squares[68]} clickSquare={()=>handleClick(68)}/>
          <Square value={squares[69]} clickSquare={()=>handleClick(69)}/>
        </div>
        <div className="row-board">
          <Square value={squares[70]} clickSquare={()=>handleClick(70)}/>
          <Square value={squares[71]} clickSquare={()=>handleClick(71)}/>
          <Square value={squares[72]} clickSquare={()=>handleClick(72)}/>
          <Square value={squares[73]} clickSquare={()=>handleClick(73)}/>
          <Square value={squares[74]} clickSquare={()=>handleClick(74)}/>
          <Square value={squares[75]} clickSquare={()=>handleClick(75)}/>
          <Square value={squares[76]} clickSquare={()=>handleClick(76)}/>
          <Square value={squares[77]} clickSquare={()=>handleClick(77)}/>
          <Square value={squares[78]} clickSquare={()=>handleClick(78)}/>
          <Square value={squares[79]} clickSquare={()=>handleClick(79)}/>
        </div>
      </>
    );
  }

export default Board