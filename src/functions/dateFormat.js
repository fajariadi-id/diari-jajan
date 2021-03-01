import { months } from '../constant';

const dateFormat = (date) => {
  // "2021-02-26" -> ["2021, "02", "26"] -> "02"
  const getNumberOfMonth = date.split('-')[1];
  const getMonth =
    getNumberOfMonth[0] === '0'
      ? months[getNumberOfMonth.slice(-1) - 1] // "02" -> "2" -> 2 - 1
      : months[getNumberOfMonth];

  // "2021-02-26" -> ["2021, "02", "26"] -> "26"
  const getDate = date.split('-')[2];

  return `${getDate} ${getMonth}`;
};

export default dateFormat;
