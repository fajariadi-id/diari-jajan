import { getItemCreated } from '../functions';

const getAllCost = (receipt) => {
  // "2021-03-01 17:00:27" -> ["2021-03-01", "17:00:27"] -> ["2021", "03", "01"] -> "03"
  const month = getItemCreated().split(' ')[0].split('-')[1];
  const getRecentlyMonth = receipt.filter(
    // "2021-03-01 17:00:27" -> ["2021-03-01", "17:00:27"] -> ["2021", "03", "01"] -> "03" === "03"
    (item) => item.created_at.split(' ')[0].split('-')[1] === month
  );

  const sumAllCost = getRecentlyMonth
    .map((item) => item.cost)
    .reduce((acc, value) => {
      return acc + value;
    }, 0);
  // 0 -> initState

  return sumAllCost;
};

export default getAllCost;
