import { months } from '../constant';

const dateFormat = (date) => {
  const getNumberOfMonth = date.split('-')[1];
  const getMonth =
    getNumberOfMonth[0] === '0'
      ? months[getNumberOfMonth.slice(-1) - 1]
      : months[getNumberOfMonth];

  const getDate = date.split('-')[2];

  return `${getDate} ${getMonth}`;
};

export default dateFormat;
