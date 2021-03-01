const getItemCreated = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const monthFormat = month < 10 ? `0${month}` : month;
  const dateFormat = date < 10 ? `0${date}` : date;

  const hourFormat = hour < 10 ? `0${hour}` : hour;
  const minFormat = min < 10 ? `0${min}` : min;
  const secFormat = sec < 10 ? `0${sec}` : sec;

  return `${year}-${monthFormat}-${dateFormat} ${hourFormat}:${minFormat}:${secFormat}`;
};

export default getItemCreated;
