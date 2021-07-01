import React, {useState} from "react";
import answers from './answers.jsx';
import './EightBall.css'

const EightBall = () => {
   const getRandom = () => Math.floor(Math.random()
 * answers.length - 1) + 1;
   const [message, setMessage] = useState("Think of a Question") ;
   const [color, setColor ] = useState("black")
   const [current, setCurrent] = useState(0)
    const shake = () => {
        setCurrent(getRandom);
        console.log(current)
        setMessage(answers[current]['msg'])
        setColor(answers[current]['color'])
    }
    const restart = () =>
    {
        setMessage("Think of a Question")
        setColor("black")
    }

   return(
        <div className="Eightball">
            <div className="circle"
            onClick={shake}
            style={{backgroundColor: color}}>
                <p>{message}</p>

            </div>
            <button onClick={restart}>Restart</button>



        </div>


   )

}
  export default EightBall;
  