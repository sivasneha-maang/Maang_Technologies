import React, { useState, ChangeEvent } from 'react';
import './main.css';

export default function Timer(): JSX.Element {
  const [time, setTime] = useState<number>(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTime(Number(e.target.value));
  };

  const handleStart = (): void => {
    const id: NodeJS.Timeout = setInterval(() => {
      setTime((prevTime: number) => prevTime - 1);
    }, 1000);

    setTimerId(id);
  };

  const handleStop = (): void => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  const handleReset = (): void => {
    setTime(0);
  };

  return (
    <div className='container' id='timer'>
      <input type="number" value={time} onChange={handleChange} />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <h2>Time Remaining: {time} seconds</h2>
    </div>
  );
}