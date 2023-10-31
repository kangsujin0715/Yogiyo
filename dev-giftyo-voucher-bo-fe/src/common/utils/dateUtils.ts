const divisors = {
  days: 86400000,
  hours: 3600000,
  minutes: 60000,
  seconds: 1000,
};

const round = (value: number): number => {
  return parseFloat(value.toFixed(1));
};

type DateType = Date | string | number;

const zero = (
  value: number | string,
  padLength: number = value.toString().length,
) =>
  value.toString().length === 1
    ? `0${value}`
    : value.toString().padStart(padLength, '0');

type dateParam = {
  year?: number;
  month?: number;
  day?: number;
  hours?: number;
  minutes?: number;
};

export const diffDays = (from: string, to: string): number => {
  let fromDate = new Date(from);
  let toDate = new Date(to);
  const difference = Math.floor(toDate.getTime() - fromDate.getTime());

  return round(difference / divisors.days);
};

export const beforeDate = ({
  year = 0,
  month = 0,
  day = 0,
}: dateParam): string => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - year);
  date.setMonth(date.getMonth() - month);
  date.setDate(date.getDate() - day);
  return date.toString();
};

export const afterDate = ({
  year = 0,
  month = 0,
  day = 0,
  hours = 0,
  minutes = 0,
}: dateParam): string => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + year);
  date.setMonth(date.getMonth() + month);
  date.setDate(date.getDate() + day);
  date.setHours(date.getHours() + hours);
  date.setMinutes(date.getMinutes() + minutes);

  return date.toString();
};

export const dateFormatter = (
  format: string,
  date: DateType = new Date(),
): string => {
  const _date = new Date(date);
  return format.replace(/(yyyy|MM|dd|HH|mm|ss|SSS)/g, (t: string): any => {
    switch (t) {
      case 'yyyy':
        return _date.getFullYear();
      case 'MM':
        return zero(_date.getMonth() + 1);
      case 'dd':
        return zero(_date.getDate());
      case 'HH':
        return zero(_date.getHours());
      case 'mm':
        return zero(_date.getMinutes());
      case 'ss':
        return zero(_date.getSeconds());
      case 'SSS':
        return zero(_date.getMilliseconds(), 3);
      default:
        return '';
    }
  });
};

export const secondToMMSS = (second: number): string => {
  const minutes = Math.floor(second / 60);
  const seconds = second % 60;

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
};

export const secondToMSS = (second: number): string => {
  const minutes = Math.floor(second / 60);
  const seconds = second % 60;

  return `${padTo1Digits(minutes)}:${padTo2Digits(seconds)}`;
};

const padTo2Digits = (number: number) => number.toString().padStart(2, '0');
const padTo1Digits = (number: number) => number.toString().padStart(1, '0');
