const timeFormat = (created) => {
  // "2021-02-26 12:58:56" -> ["2021-02-26", "12:58:56"] -> ["12", "58", "56"]
  const getNumberOfTime = created.split(' ')[1].split(':');
  // "12"
  const getHour = getNumberOfTime[0];
  // "58"
  const getMinutes = getNumberOfTime[1];

  return `${getHour}:${getMinutes}`;
};

export default timeFormat;
