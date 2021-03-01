const getAllCost = (receipt) => {
  const sumAllCost = receipt
    .map((item) => item.cost)
    .reduce((acc, value) => {
      return acc + value;
    }, 0);
  // 0 -> initState

  return sumAllCost;
};

export default getAllCost;
