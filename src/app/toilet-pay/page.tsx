'use client';

import { useState, useEffect } from 'react';
import './style.css';

export const monthlyToSeconds = (monthlySalary: number) => {
  const workHours = 168;
  return monthlySalary / (workHours * 60 * 60);
};

export default function ToiletPay() {
  const [salary, setSalary] = useState(40000);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isTimerOn) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 0.1);
      }, 100);
    } else if (!isTimerOn && elapsedTime !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerOn, salary]);

  const handleStartStop = () => {
    setIsTimerOn(!isTimerOn);
  };

  const handleSalaryChange = (e) => {
    setSalary(Number(e.target.value));
  };

  return (
    <div className="bg h-screen pt-16">
      <div className="container mx-auto px-8">
        <h1 className="mb-4 text-5xl font-bold">Toilet Pay</h1>
        <p>Calculate your salary while on the toilet.</p>

        <label className="font-semibold">Salary (SEK)</label>
        <br />
        <input
          type="number"
          value={salary}
          onChange={handleSalaryChange}
          className="w-full rounded-lg border-gray-300 p-2 text-xl"
        />

        <div className="my-16">
          <div className="text-5xl font-mono">
            {(elapsedTime * monthlyToSeconds(salary)).toFixed(5)} SEK
          </div>

          <div>Time: {elapsedTime.toFixed(1)} seconds</div>
        </div>

        <button
          onClick={handleStartStop}
          className="mb-3 w-full rounded bg-green-500 py-8 text-white"
        >
          {isTimerOn ? 'Stop Timer' : 'Start Timer'}
        </button>

        <button className="w-full rounded bg-red-500 py-8 text-white">
          Reset
        </button>
      </div>
    </div>
  );
}
