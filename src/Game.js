import React,{useState} from 'react';
import Board from './Board';
import { calculateWinner } from './Helpers';

function Game(){
    
    const [board,setBoard] = useState(Array(9).fill(null))
    const [xIsNext,setxIsNext] = useState(true)
    const winner = calculateWinner(board);
    //const [toggle,setToggle] = useState(false);
    const handleClick = (i) => {
        const boardCopy = [...board];
        
        if(winner||boardCopy[i]) return;

        boardCopy[i] =xIsNext? 'X':'O';
        setxIsNext(!xIsNext);
        setBoard(boardCopy);
        }

    

    const renderMoves= ()=>{
        return <button className="start"onClick={(i)=>{
            
            setBoard(Array(9).fill(null))
            setxIsNext(true);
        
        }}> Start Game</button>
    }
    
    
    
    return(
        <div>
            <Board squares={board} onClick={handleClick}/>
            <p className="next-player">{winner?"Winner: " + winner : "Next Player: " + (xIsNext?'X':'O')}</p>
            {renderMoves()}
        </div>
        )
}

export default Game;