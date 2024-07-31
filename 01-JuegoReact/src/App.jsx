import { useState } from 'react';
import { Square } from './components/Square';
import { Turns } from './constants';
import { checkWinnerFrom, checkEndGame } from './logic/boar.js'; // Asegúrate de que el nombre del archivo sea correcto
import { WinnerModal } from './components/WinnerModal';
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js';
import './index.css';
import confetti from 'canvas-confetti';

// Aquí inicia el componente padre
function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const Turn = window.localStorage.getItem('turn');
    if (Turn) return JSON.parse(Turn);
    return Turns.X;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    const newBoard = [...board];
    if (newBoard[index] === Turns.O || newBoard[index] === Turns.X || winner) {
      return; // Si ya hay una marca en la posición o hay un ganador, no hacer nada
    }

    // Actualizar el tablero
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar el turno
    const newTurn = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurn);

    // Guardar la partida en el localStorage
    saveGameToStorage({board: newBoard, turn: newTurn});

    // Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const reset = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setTurn(Turns.X);
    // Elimina el localStorage
    resetGameStorage();
  };

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={reset}>Reset Game</button>
      <section className='game'>
        {board.map((_, index) => (
          <Square key={index} updateBoard={updateBoard} index={index}>
            {board[index]}
          </Square>
        ))}
      </section>
      <section className='turn'>
        <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
        <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
      </section>

      <WinnerModal reset={reset} winner={winner} />
    </main>
  );
}

// Aquí finaliza el componente padre

export default App;
