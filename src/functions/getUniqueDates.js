const getUniqueDates = (items) => {
  const uniqueDate = items
    // "2021-02-26 12:58:56" -> ["2021-02-26", "12:58:56"] -> ["2021-02-26"]
    .map((item) => item.created_at.split(' ')[0])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return (
    uniqueDate
      // ["2021, "02", "26"]
      // sort by date
      .sort((a, b) => b.split('-')[2] - a.split('-')[2])
      // sort by month
      .sort((a, b) => b.split('-')[1] - a.split('-')[1])
  );
};

export default getUniqueDates;
