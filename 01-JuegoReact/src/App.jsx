import { useState } from 'react'
import { Square } from './components/Square'
import { Turns } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/boar'
import { WinnerModal } from './components/WinnerModal'
import './index.css'
import confetti from "canvas-confetti"


// aqui inicia el componente padre
function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(Turns.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    const newBoard = [...board]
    if (newBoard[index] === Turns.O || newBoard[index] === Turns.X || winner) {
      newBoard[index]
    }else{
      newBoard[index] = turn
      setBoard(newBoard)
      const newTurn = turn === Turns.X ? Turns.O : Turns.X
      setTurn(newTurn)
      const newWinner = checkWinnerFrom(newBoard)
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

      <WinnerModal reset={reset} winner={winner}/>

    </main>
  )
}
// aqui finaliza el componente padre

export default App
