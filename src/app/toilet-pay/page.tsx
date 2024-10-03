'use client';

import { useState, useEffect } from 'react';
import {
  clearStartTime,
  getSalary,
  getStartTime,
  persistSalary,
  persistStartTime,
} from './storage';
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
  const [salary, setSalary] = useState<number | null>(4000000);
  const [isTimerOn, setIsTimerOn] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    const salaryFromStorage = getSalary();
    if (salaryFromStorage != null) {
      setSalary(salaryFromStorage);
    }

    const startTimeFromStorage = getStartTime();
    if (startTimeFromStorage != null) {
      setStartTime(startTimeFromStorage);
    }
  }, []);

  const handleStartStop = () => {
    const newIsTimerOn = !isTimerOn;
    setIsTimerOn(newIsTimerOn);

    if (newIsTimerOn) {
      persistStartTime(Date.now());
      setStartTime(Date.now());
    }
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '' || value == null) {
      setSalary(null);
      return;
    }

    const newSalary = Number(value);
    setSalary(newSalary);
    persistSalary(newSalary);
  };

  const handleReset = () => {
    setIsTimerOn(false);
    setStartTime(null);
    clearStartTime()
  };

  const calculatePay = (): string => {
    if (!salary) return (0).toFixed(4);
    if (!startTime) return (0).toFixed(4);

    const elapsedTimeMs = Date.now() - startTime;
    const value = elapsedTimeMs * milliSalary(salary);

    return value.toFixed(4);
  };

  return (
    <div className="bg h-screen pt-8">
      <div className="container mx-auto px-8">
        {getStartTime()}
        <h1 className="mb-4 text-6xl font-bold">Toilet Pay 🚽</h1>
        <p className="mb-2 text-sm">
          Calculate earned money while on the toilet.
        </p>

        <label className="text-sm font-semibold">Salary (SEK)</label>
        <br />
        <input
          type="number"
          value={salary == null ? '' : salary}
          onChange={handleSalaryChange}
          className="w-full rounded-lg border-gray-300 p-2 text-xl"
        />

        <div className="mb-8 mt-8">
          <p>
            <span className="break-all text-5xl">{calculatePay()}</span>
            <span className="text-4xl"> kr</span>
          </p>

          <div>Time: {msToTimeStr(0)}</div>
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
