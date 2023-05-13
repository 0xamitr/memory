import './Main.css'

const Score = (props) =>{
    return(
        <div className="score">
            <h2>Score: {props.score}</h2>
            <h2>High Score: {props.highscore}</h2>
        </div>
    )
}

export default Score