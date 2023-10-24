import { useState } from 'react';
import Square from './Square.js'

function BoardNew(){
    const [useX, setX] = useState(true);
    // use a two dimensional array to represent the board
    // create a board with 10 cols and 10 rows
    const numCols= 10
    const numRows = 10
    const matrix = new Array(numRows).fill(null).map(() => new Array(numCols).fill(null))
    const [squares, setSquares] = useState(matrix);
    const [result, setResult] = useState(null);

function fiveInRow(squareArr, myPlacement){
    // find five pieces in a row in a given array
    for (let i = 0; i < squareArr.length; i++) {
        if (squareArr[i] === myPlacement){
            //check the one next to it
            if (squareArr[i+1] === myPlacement){
                if (squareArr[i+2] === myPlacement){
                    if (squareArr[i+3] === myPlacement){
                        if (squareArr[i+4] === myPlacement){
                            return true
                        }
                    }
                }
            }
        }
    }

    return false

}

function winByRow(copySquares,rowIndex, myPlacement){
    var squareRow = copySquares[rowIndex]
    var fiveInRowResult = fiveInRow(squareRow, myPlacement)

    return fiveInRowResult
}

function winByColumn(copySquares, colIndex, myPlacement){
    //get all the columns that align with placement
    var colArr = []
    copySquares.forEach(row =>{
        colArr.push(row[colIndex])
    })
    
    var fiveInColResult = fiveInRow(colArr, myPlacement)
    return fiveInColResult

}


function findDiagnalNeighbors(rowIndex, colIndex){
    var upperRight = []
    var upperRightRow = rowIndex-1
    var upperRightCol = colIndex+1
    while ((upperRightRow >=0) && (upperRightCol <=9)){
        upperRight.push([upperRightRow, upperRightCol])
        upperRightRow = upperRightRow-1
        upperRightCol = upperRightCol+1
    }
    var lowerLeft = []
    var lowerLeftRow = rowIndex+1
    var lowerLeftCol = colIndex-1
    while ((lowerLeftRow <=9) && (lowerLeftCol >=0)){
        lowerLeft.push([lowerLeftRow, lowerLeftCol])
        lowerLeftRow = lowerLeftRow+1
        lowerLeftCol = lowerLeftCol-1
    }
    //added in the point being placed 
    lowerLeft.push([rowIndex, colIndex])
    const oneDiagnal = lowerLeft.concat(upperRight)

    var upperLeft = []
    var upperLeftRow = rowIndex-1
    var upperLeftCol = colIndex-1
    while((upperLeftRow >=0) && (upperLeftCol >=0)){
        upperLeft.push([upperLeftRow, upperLeftCol])
        upperLeftRow = upperLeftRow-1
        upperLeftCol = upperLeftCol-1
    }
    //added in the point being placed 
    var lowerRight = []
    var lowerRightRow = rowIndex+1
    var lowerRightCol = colIndex+1
    while ((lowerRightRow <=9) && (lowerRightCol <=9)){
        lowerRight.push([lowerRightRow, lowerRightCol])
        lowerRightRow = lowerRightRow+1
        lowerRightCol = lowerRightCol+1
    }
    lowerRight.push([rowIndex, colIndex])
    const twoDiagnal = lowerRight.concat(upperLeft)
    
    return [oneDiagnal, twoDiagnal]
}

function gatherNeighbors(copySquares, diagnalNeighborArr){
    var diagnalArr = []
    diagnalNeighborArr.forEach(elem =>{
        var rowIdx = elem[0]
        var colIdx = elem[1]
        diagnalArr.push(copySquares[rowIdx][colIdx])
    })
    return diagnalArr
}

function winByDiagnal(copySquares,rowIndex, colIndex, myPlacement){
    var ifWin = false
    //find all the diagnal neighbors of a given point
    var diagnalNeighbors = findDiagnalNeighbors(rowIndex, colIndex)

    //gather all the diagnal neighbors of a given point
    var oneDiagnalValArr = gatherNeighbors(copySquares, diagnalNeighbors[0])
    var twoDiagnalValArr = gatherNeighbors(copySquares, diagnalNeighbors[1])
    console.log('one diagnal val arr', oneDiagnalValArr)
    console.log('two diagnal val arr', twoDiagnalValArr)
    
    //check if five in a row in the first diagnal array
    ifWin = fiveInRow(oneDiagnalValArr, myPlacement)
    if (!ifWin){
        //check if five in a row in the second diagnal array
        ifWin = fiveInRow(twoDiagnalValArr, myPlacement)
    }
    return ifWin

}

function calculateWin(copySquares, rowIndex, colIndex){
    var myPlacement = copySquares[rowIndex][colIndex]
    
    // for winning by row
    var winningByRow = winByRow(copySquares,rowIndex, myPlacement)   

    //if not winning by row, check if winning by columns
    if (winningByRow){
        return `${myPlacement} wins by row`
    } 
    else{
        var winningByCol = winByColumn(copySquares, colIndex, myPlacement)
        if (winningByCol){
            return `${myPlacement} wins by column`
        } else{
            //if also not winning by row, check if winning diagnally
            var winningByDiag = winByDiagnal(copySquares,rowIndex, colIndex, myPlacement)
            if (winningByDiag){
                return `${myPlacement} wins by diagnal`
            }
        }
    }

}

function handleClick(rowIndex, colIndex){
    //get a shallow copy of the original two dimensional array
    const copySquares = [...squares.map(row => [...row])]
    
    // if the square has been filled, do nothing
    if (copySquares[rowIndex][colIndex]){
        return;
    }
    // if the square has not been filled, check to see if X or O should be return
    if (useX){
        copySquares[rowIndex][colIndex] = 'X'
    } else{
        copySquares[rowIndex][colIndex] = 'O'
    }
    setX(!useX)
    // save the copy
    setSquares(copySquares)

    //figure out if a user has won or not
    var result = calculateWin(copySquares, rowIndex, colIndex)
    setResult(result)
}

    return(
        <div>
            <div>{result}</div>
            {
                matrix.map((row, rowIndex)=>
                <div className="row-board" key={rowIndex}>
                    {row.map((col, colIndex) =>
                        <Square value={squares[rowIndex][colIndex]} clickSquare={()=>handleClick(rowIndex, colIndex)}/>
                    )}
                </div>
            )}
        </div>
    )
}

export default BoardNew