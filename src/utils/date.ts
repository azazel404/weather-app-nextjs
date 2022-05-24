import { fromUnixTime, format } from "date-fns";

const standardFormat = "";

export const unixToDay = (unix: number) => {
  const day = fromUnixTime(unix);
  return format(day, "EEEE");
};

export const unixToTime = (unix: number) => {
  const time = fromUnixTime(unix);
  return format(time, "h:mm bbbb");
};

export const unixToDate = (unix: number) => {
  const date = fromUnixTime(unix);
  return format(date, "MMM d yyyy");
};

export const unixToTableDate = (unix: number) => {
  const tableDate = fromUnixTime(unix);
  return format(tableDate, "E (MM/dd)");
};
