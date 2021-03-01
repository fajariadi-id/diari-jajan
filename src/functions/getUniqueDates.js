const getUniqueDates = (items) => {
  const uniqueDate = items
    .map((item) => item.created_at.split(' ')[0])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return uniqueDate
    .sort((a, b) => b.split('-')[2] - a.split('-')[2])
    .sort((a, b) => b.split('-')[1] - a.split('-')[1]);
};

export default getUniqueDates;
