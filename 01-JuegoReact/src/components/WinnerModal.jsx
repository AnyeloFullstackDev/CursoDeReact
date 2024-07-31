import { Square } from "./Square"

export function WinnerModal ({winner, reset}) {
    if (winner === null) return null 
    const textWinner = winner === false ? 'Empate' : 'Ganó'
    return (
     
          <section className='winner'>
            <div> 
                <h2>{textWinner}</h2>
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