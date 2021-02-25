export const getItems = (data) => {
  return { type: 'fetch_items', payload: data };
};
