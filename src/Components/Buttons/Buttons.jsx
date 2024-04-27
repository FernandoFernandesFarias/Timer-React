import React, { useState } from 'react';
import "./Buttons.css"

const Buttons = () => {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');

  const handleStart = () => {
    console.log("Start clicked");
  };

  const handleStop = () => {
    console.log("Stop clicked");
  };

  const handleClear = () => {
    setHour('00');
    setMinute('00');
    setSecond('00');
    console.log("Clear clicked");
  };

  return (
    <div className="buttons">
      <button className='button start' onClick={handleStart}>Start</button>
      <button className='button stop' onClick={handleStop}>Stop</button>
      <button className='button clear' onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Buttons;
