import {useState} from "react"
import One from "./One.js"
import Score from "./Score.js"
import PlayAgain from "./PlayAgain.js"

const Main = () => {
    const [score, setScore] = useState(0)
    const [highscore, setHighscore] = useState(0)
    const [First, setFirst] = useState(0)
    const [Second, setSecond] = useState(0)
    const [Third, setThird] = useState(0)
    const [Fourth, setFourth] = useState(0)
    const [Fifth, setFifth] = useState(0)
    const [Sixth, setSixth] = useState(0)
    const [Seventh, setSeventh] = useState(0)
    const [Eigth, setEigth] = useState(0)
    const [Ninth, setNinth] = useState(0)
    const [Tenth, setTenth] = useState(0)
    const [Eleventh, setEleventh] = useState(0)
    const [Twelth, setTwelth] = useState(0)
    const [randnum, setRandnum] = useState(Math.random())
    const [game, setGame] = useState(true)
    const changeTemp = (seq, setseq) =>{
        if(game){
            setseq(seq + 1)
            setScore(score + 1)
            setRandnum(Math.random())
        }
    }
    if(First === 2 || Second === 2 || Third === 2 
        || Fourth === 2 || Fifth === 2 || Sixth === 2
        || Seventh === 2 || Eigth === 2 || Ninth === 2
        || Tenth === 2 || Eleventh === 2 || Twelth === 2){
        if (game){
            if(score > highscore){
                setHighscore(score - 1)
            }
            console.log("gameover");
            setScore(0)
            setFirst(0)
            setSecond(0)
            setThird(0)
            setFourth(0)
            setFifth(0)
            setSixth(0)
            setSeventh(0)
            setEigth(0)
            setNinth(0)
            setTenth(0)
            setEleventh(0)
            setTwelth(0)
            setGame(false)
        }
    }
    
    if(game){
        document.body.style.backgroundColor = "white";
    }
    return(
        <>
            <Score score={score} highscore={highscore}/>
            <One randnum = {randnum} First = {First} Second = {Second} Third = {Third} Fourth = {Fourth} Fifth = {Fifth} 
                Sixth = {Sixth} Seventh = {Seventh} Eigth = {Eigth} Ninth = {Ninth} 
                    Tenth = {Tenth} Eleventh = {Eleventh} Twelth = {Twelth} setFirst = {setFirst} 
                        setSecond = {setSecond} setThird = {setThird} setFourth = {setFourth} setFifth = {setFifth} 
                            setSixth = {setSixth} setSeventh = {setSeventh} setEigth = {setEigth} setNinth = {setNinth} 
                                setTenth = {setTenth} setEleventh = {setEleventh} setTwelth = {setTwelth} score = {score} 
                                    setScore = {setScore} changeTemp = {changeTemp}/> 
            {(game === false) ? <PlayAgain setGame = {setGame}/> : false}
        </>
    )      
}

export default Main