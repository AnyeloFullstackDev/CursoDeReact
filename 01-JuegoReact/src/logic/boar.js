import { COMBOS_WINNER } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
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

 export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

 