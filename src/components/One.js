import './Main.css'

const One = (props) => {
    const elements = [<div className="box 1st" onClick={()=>props.changeTemp(props.First, props.setFirst)}>
                        <img src={require('./modi.png')} alt=""></img>
                        <h2>Modi</h2>
                    </div>,
                    <div className="box 2nd" onClick={()=>props.changeTemp(props.Second, props.setSecond)}>
                        <img src={require('./rahul.png')} alt=""></img>
                        <h2>Rahul</h2>
                    </div>,
                    <div className="box 3th" onClick={()=>props.changeTemp(props.Third, props.setThird)}>
                        <img src={require('./homelander.png')} alt=""></img>
                        <h2>Homelander</h2>
                    </div>,
                    <div className="box 4th" onClick={()=>props.changeTemp(props.Fourth, props.setFourth)}>
                        <img src={require('./tom.png')} alt=""></img>
                        <h2>Joker</h2>
                    </div>,
                    <div className="box 5th" onClick={()=>props.changeTemp(props.Fifth, props.setFifth)}>
                        <img src={require('./jerry.png')} alt=""></img>
                        <h2>Bully</h2>
                    </div>,
                    <div className="box 6th" onClick={()=>props.changeTemp(props.Sixth, props.setSixth)}>
                        <img src={require('./rob.png')} alt=""></img>
                        <h2>Stark</h2>
                    </div>,
                    <div className="box 7th" onClick={()=>props.changeTemp(props.Seventh, props.setSeventh)}>
                        <img src={require('./michael.png')} alt=""></img>
                        <h2>Superman</h2> 
                    </div>,
                    <div className="box 8th" onClick={()=>props.changeTemp(props.Eigth, props.setEigth)}>
                        <img src={require('./dwight.png')} alt=""></img>
                        <h2>Dwight</h2>
                    </div>,
                    <div className="box 9th" onClick={()=>props.changeTemp(props.Ninth, props.setNinth)}>
                        <img src={require('./monke.png')} alt=""></img>
                        <h2>Bruce</h2>
                    </div>,
                    <div className="box 10th" onClick={()=>props.changeTemp(props.Tenth, props.setTenth)}>
                        <img src={require('./trump.png')} alt=""></img>
                        <h2>Trump</h2>
                    </div>,
                    <div className="box 11th" onClick={()=>props.changeTemp(props.Eleventh, props.setEleventh)}>
                        <img src={require('./walter.png')} alt=""></img>
                        <h2>Walter</h2>
                    </div>,
                    <div className="box 12th" onClick={()=>props.changeTemp(props.Twelth, props.setTwelth)}>
                        <img src={require('./saul.png')} alt=""></img>
                        <h2>Ironman</h2>
                    </div>,]
    
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