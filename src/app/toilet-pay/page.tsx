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
  const [time, setTime] = useState(0);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTimerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.1);

        const salaryPerSecond = salary / (30 * 24 * 60 * 60);
        const salaryPerTenthSecond = salaryPerSecond / 10;
        setEarnings((prevEarnings) => prevEarnings + salaryPerTenthSecond);
      }, 100);
    } else if (!isTimerOn && time !== 0) {
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
        <h1 className="text-5xl font-bold">Toilet Pay</h1>
        <label>Salary (SEK):</label>
        <input
          type="number"
          value={salary}
          onChange={handleSalaryChange}
          className="border-4"
        />
        <div>Time: {time.toFixed(1)} seconds</div>{' '}
        <div className="mb-8 text-5xl text-xl">{earnings.toFixed(5)} SEK</div>
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
