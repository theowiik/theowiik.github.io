const SALARY_KEY = 'salary';
const TIMER_MS_KEY = 'timerMs';

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

const persistNumber = (key: string, value: number): void => {
  if (isValidNumber(value.toString())) {
    writeKey(key, value.toString());
  }
};

export const getSalary = (): number | null => readAsNumber(SALARY_KEY);

export const getTimerMs = (): number | null => readAsNumber(TIMER_MS_KEY);

export const persistSalary = (salary: number): void =>
  persistNumber(SALARY_KEY, salary);

export const persistTimerMs = (timerMs: number): void =>
  persistNumber(TIMER_MS_KEY, timerMs);
