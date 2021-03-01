import { getItemCreated } from '../functions';

const headerDateFormat = (months) => {
  // "2021-03-01 17:00:27" -> ["2021-03-01", "17:00:27"] -> ["2021", "03", "01"] -> "03"
  const month = getItemCreated().split(' ')[0].split('-')[1];
  const getMonthNumber = month[0] === '0' ? month.slice(-1) : month;

  // "2021-03-01 17:00:27" -> ["2021-03-01", "17:00:27"] -> ["2021", "03", "01"] -> "2021"
  const getYear = getItemCreated().split(' ')[0].split('-')[0];

  // months[2] -> "Maret"
  return `${months[getMonthNumber - 1]} ${getYear}`;
};

export default headerDateFormat;
