import './Main.css'

const One = (props) => {
    const elements = [<div className="box 1st" onClick={()=>props.changeTemp(props.First, props.setFirst)}>First</div>,
                    <div className="box 2nd" onClick={()=>props.changeTemp(props.Second, props.setSecond)}>Second</div>,
                    <div className="box 3th" onClick={()=>props.changeTemp(props.Third, props.setThird)}>Third</div>,
                    <div className="box 4th" onClick={()=>props.changeTemp(props.Fourth, props.setFourth)}>Four</div>,
                    <div className="box 5th" onClick={()=>props.changeTemp(props.Fifth, props.setFifth)}>Five</div>,
                    <div className="box 6th" onClick={()=>props.changeTemp(props.Sixth, props.setSixth)}>Six</div>,
                    <div className="box 7th" onClick={()=>props.changeTemp(props.Seventh, props.setSeventh)}>Seven</div>,
                    <div className="box 8th" onClick={()=>props.changeTemp(props.Eigth, props.setEigth)}>Eight</div>,
                    <div className="box 9th" onClick={()=>props.changeTemp(props.Ninth, props.setNinth)}>Nine</div>,
                    <div className="box 10th" onClick={()=>props.changeTemp(props.Tenth, props.setTenth)}>Ten</div>,
                    <div className="box 11th" onClick={()=>props.changeTemp(props.Eleventh, props.setEleventh)}>Eleven</div>,
                    <div className="box 12th" onClick={()=>props.changeTemp(props.Twelth, props.setTwelth)}>Twelve</div>,]
    
    const shuffled = [...elements];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    

    return(
        <div className="one">
            {shuffled[0]}
            {shuffled[1]}
            {shuffled[2]}
            {shuffled[3]}
            {shuffled[4]}
            {shuffled[5]}
            {shuffled[6]}
            {shuffled[7]}
            {shuffled[8]}
            {shuffled[9]}
            {shuffled[10]}
            {shuffled[11]}
        </div>
    )
}

export default One