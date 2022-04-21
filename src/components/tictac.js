import react from "react"
import '../App.css';


const Car = () =>{
    return(
        <>
         <section> 

        <h2 className= "header">Tic-Tac-Toe</h2>
            <div className="container">
                <div data-cell-index="0" class="cell"></div>
                <div data-cell-index="1" class="cell"></div>
                <div data-cell-index="2" class="cell"></div>
                <div data-cell-index="3" class="cell"></div>
                <div data-cell-index="4" class="cell"></div>
                <div data-cell-index="5" class="cell"></div>
                <div data-cell-index="6" class="cell"></div>
                <div data-cell-index="7" class="cell"></div>
                <div data-cell-index="8" class="cell"></div>
            </div>
            <h2 className="status"></h2>
            <button className="restart">Restart Game</button>
        </section>
        
        </>
    )
}

export default Car
