import React, {useState} from 'react';


const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}
const Statistics = (props) => {
    const total = props.good + props.bad + props.neutral
    const average = ((props.good+(-1*props.bad)) / total).toFixed(1);
    const positive = ((props.good/total) * 100).toFixed(1);
    if(total===0){
      return (
          <p>No feedbacks given</p>
      )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><Statistic text="Good" value={props.good} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Neutral" value={props.neutral} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Bad" value={props.bad} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="All" value={total} /></td>
                    </tr>
                    <tr>
                        <td><Statistic text="Average" value={average} /></td>
                    </tr>
                        <tr>
                        <td>positive</td>
                        <td>{positive}%</td>
                      </tr>
                </tbody>
            </table>
        </div>
    )
}
const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    
    return (
        <div>
            <h1> Give your feedback </h1>
            <div>
                <Button event={()=> setGood(good+1)} text="Good" />
                <Button event={()=> setNeutral(neutral+1)} text="Neutral" />
                <Button event={()=> setBad(bad+1)} text="Bad" />
                                
            </div>
            <h2>statistics</h2>
            <Statistics good={good} bad ={bad} neutral={neutral} />
        </div>
    )
}



export default App