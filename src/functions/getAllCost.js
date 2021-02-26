const getAllCost = (cost) => {
  const sumAllCost = cost
    .map((item) => item.cost)
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  return sumAllCost;
};

export default getAllCost;
