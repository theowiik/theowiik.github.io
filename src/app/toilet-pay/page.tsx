'use client';

import { useState, useEffect } from 'react';
import './style.css';

/**
 * Convert salary/month to salary/ms.
 *
 * @param monthlySalary monthly salary in SEK.
 * @returns salary per millisecond.
 */
const milliSalary = (monthlySalary: number) => {
  const workHoursPerMonth = 168;
  const millisPerHour = 60 * 60 * 1000;
  const perHour = monthlySalary / workHoursPerMonth;
  return perHour / millisPerHour;
};

const msToTimeStr = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formatUnit = (value: number, unit: string) =>
    `${value} ${unit}${value !== 1 ? 's' : ''}`;

  const parts: string[] = [];
  if (hours > 0) parts.push(formatUnit(hours, 'hour'));
  if (minutes > 0) parts.push(formatUnit(minutes, 'minute'));
  if (seconds > 0 || parts.length === 0)
    parts.push(formatUnit(seconds, 'second'));

  return parts.join(' ');
};

const pollRateMs = 10;

export default function ToiletPay() {
  const [salary, setSalary] = useState<number | undefined>(40_000);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [elapsedTimeMs, setElapsedTimeMs] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isTimerOn) {
      interval = setInterval(() => {
        setElapsedTimeMs((prevTime) => prevTime + pollRateMs);
      }, pollRateMs);
    }

    if (!isTimerOn && elapsedTimeMs !== 0) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerOn, elapsedTimeMs]);

  const handleStartStop = () => {
    setIsTimerOn(!isTimerOn);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSalary(value === '' ? undefined : Number(value)); // Allow empty input
  };

  const handleReset = () => {
    setIsTimerOn(false);
    setElapsedTimeMs(0);
  };

  return (
    <div className="bg h-screen pt-8">
      <div className="container mx-auto px-8">
        <h1 className="mb-4 text-6xl font-bold">Toilet Pay 🚽</h1>
        <p className="mb-2 text-sm">
          Calculate earned money while on the toilet.
        </p>

        <label className="text-sm font-semibold">Salary (SEK)</label>
        <br />
        <input
          type="number"
          value={salary !== undefined ? salary : ''} // Handle undefined case for input
          onChange={handleSalaryChange}
          className="w-full rounded-lg border-gray-300 p-2 text-xl"
        />

        <div className="mb-8 mt-8">
          <div className="text-5xl">
            {(salary ? elapsedTimeMs * milliSalary(salary) : 0).toFixed(4)} kr{' '}
          </div>

          <div>Time: {msToTimeStr(elapsedTimeMs)}</div>
        </div>

        <button
          onClick={handleStartStop}
          className={`mb-3 w-full rounded-md py-6 text-white ${isTimerOn ? 'bg-yellow-800' : 'bg-amber-600'}`}
        >
          {isTimerOn ? 'Stop Timer' : 'Start Timer'}
        </button>

        <button
          onClick={handleReset}
          className="w-full rounded-md bg-stone-600 py-3 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
