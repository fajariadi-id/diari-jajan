const timeFormat = (created) => {
  const getNumberOfTime = created.split(' ')[1].split(':');
  const getHour = getNumberOfTime[0];
  const getMinutes = getNumberOfTime[1];

  return `${getHour}:${getMinutes}`;
};

export default timeFormat;
