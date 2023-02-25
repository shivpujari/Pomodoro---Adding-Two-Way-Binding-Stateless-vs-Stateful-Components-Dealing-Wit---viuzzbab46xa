import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';

const App = () => {

  const [start, setStart] = useState(false)
  const [time, setTime] = useState(60)
  const [min, setMin] = useState(25)
  const [numMin, setNumMin] = useState(25)
  const [seconds, setSeconds] = useState(5);


  const startFn = () => {

    setStart(true)
    if(time === 60)
    {
      setMin(min => min - 1)
    }

  }

  const displayTime = () => {
    
    if(start)
    {
      if(time === 0)
      {
        setTime(60)
        if(!min === 0 && time === 60)
        {
          setMin(min => min - 1)
        }
        else{
          alert("time up");
        }
      }
    
      setTime(time => time - 1)
    }
    
  }

  const setFn = () => {

    setMin(numMin)
  }


  const TimeSec = (abc) => {

    if(abc === 60)
    {
      return "00";
    }
    else if(abc < 10)
    {
      return "0"+abc;
    }
    else
    {
      return abc;
    }
  }

  useEffect( () => {

    setTimeout( () => {
      displayTime()
    }, 100)

  }, [start, time])

  return (
    <div id="main">
      <h1>{TimeSec(min)} : {TimeSec(time)}</h1>
      <h2>Work-Time</h2>
      <button data-testid='start-btn' onClick={startFn}>start</button>
      <button data-testid='stop-btn'>stop</button>
      <button data-testid='reset-btn'>reset</button><br></br><br></br>
      <input type="number" value={numMin} onChange={(e) => setNumMin(e.target.value)} />
      <input type="number"  value={seconds} onChange={(e) => setSeconds(e.target.value)} />
      <button data-testid='set-btn' onClick={setFn}>set</button>
    </div>
  )
}


export default App;
