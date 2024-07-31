import { useState } from 'react'
import './index.css'
import confetti from "canvas-confetti"

const Turns = {
  X: 'x',
  O: 'o'
}

const COMBOS_WINNER = [
  [0, 1, 2],  
  [3, 4, 5],  
  [6, 7, 8],  
  [0, 3, 6],  
  [1, 4, 7],  
  [2, 5, 8],  
  [0, 4, 8],  
  [2, 4, 6]   
];


// aqui comienza la funcion Square
const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : '' }`

  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
}
// aqui finaliza la funcion Square
//-------------------------------------------------------
// aqui inicia el componente padre
function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(Turns.X)
  const [winner, setWinner] = useState(null)
  
  const checkWinner = (boardToCheck) => {
    for (const combo of COMBOS_WINNER){
      const [a, b, c] = combo
        if (
          boardToCheck[a] && boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
        )
        return boardToCheck[a]
    }
    // si no hay ganador
    return null
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    const newBoard = [...board]
    if (newBoard[index] === Turns.O || newBoard[index] === Turns.X || winner) {
      newBoard[index]
    }else{
      newBoard[index] = turn
      setBoard(newBoard)
      const newTurn = turn === Turns.X ? Turns.O : Turns.X
      setTurn(newTurn)
      const newWinner = checkWinner(newBoard)
      if (newWinner){
        setWinner(newWinner)
        confetti()
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
      }
    }
  }

  const reset = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurn(Turns.X)
  }

  return (
    <main className='board'>
      <h1>Tic Tac toe</h1>
    <button onClick={reset}>Resset Game</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} updateBoard={updateBoard} index={index}> 
               {board[index]}
              </Square>
            )
          })
        
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
        <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
      </section>

      {
          winner !== null && (
            <section className='winner'>
              <div> 
                <h2>
                  {winner === false ? 'Empate' : 'Ganó'}
                </h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={() => reset()}>Empezar de Nuevo</button>
                </footer>
              </div>
            </section>
          )
        }

    </main>
  )
}
// aqui finaliza el componente padre

export default App
