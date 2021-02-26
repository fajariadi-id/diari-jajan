export const getItems = (data) => {
  return { type: 'fetch_items', payload: data };
};

export const openModal = () => {
  return { type: 'open_modal' };
};

export const closeModal = () => {
  return { type: 'close_modal' };
};
