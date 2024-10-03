const SALARY_KEY = 'salary';
const TIMER_MS_KEY = 'timerMs';
const START_TIME_KEY = 'startTime';

const readKey = (key: string): string | null => {
  const item = localStorage.getItem(key);
  return item ? item : null;
};

const writeKey = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

const isValidNumber = (value: string): boolean => {
  const asNumber = Number(value);
  return !isNaN(asNumber);
};

const readAsNumber = (key: string): number | null => {
  const salary = readKey(key);

  if (salary === null || !isValidNumber(salary)) return null;

  return Number(salary);
};

export const getSalary = (): number | null => readAsNumber(SALARY_KEY);
export const getTimerMs = (): number | null => readAsNumber(TIMER_MS_KEY);
export const getStartTime = (): number | null => readAsNumber(START_TIME_KEY);

export const persistSalary = (salary: number): void =>
  writeKey(SALARY_KEY, salary.toString());

export const persistTimerMs = (timerMs: number): void =>
  writeKey(TIMER_MS_KEY, timerMs.toString());

export const persistStartTime = (startTime: number): void =>
  writeKey(START_TIME_KEY, startTime.toString());

export const clearStartTime = (): void => localStorage.removeItem(START_TIME_KEY);
