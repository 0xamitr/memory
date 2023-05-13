import './Main.css'

const PlayAgain = (props) => {
    const mystyle = {
        height: "10vh",
        width: "20vw",
        position: "absolute",
        borderRadius: "10px",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50%, -50%)",
    }
    document.body.style.backgroundColor = "black";
    return(
        <button className="button" onClick={()=>props.setGame(true)} style = {mystyle}><h1 className='h1'>PLAY AGAIN</h1></button>
    )
}

 export default PlayAgain