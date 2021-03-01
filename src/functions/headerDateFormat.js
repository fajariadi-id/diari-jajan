import { getItemCreated } from '../functions';

const headerDateFormat = (months) => {
  const month = getItemCreated().split(' ')[0].split('-')[1];
  const getMonthNumber = month[0] === '0' ? month.slice(-1) : month;

  const getYear = getItemCreated().split(' ')[0].split('-')[0];

  return `${months[getMonthNumber - 1]} ${getYear}`;
};

export default headerDateFormat;
