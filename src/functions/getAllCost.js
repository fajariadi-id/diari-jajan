import { getItemCreated } from '../functions';

const getAllCost = (receipt) => {
  const month = getItemCreated().split(' ')[0].split('-')[1];
  const getRecentlyMonth = receipt.filter(
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
