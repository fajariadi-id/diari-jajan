const getItemCreated = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  return `${year}-${month}-${date} ${hour}:${min}:${sec}`;
};

export default getItemCreated;
