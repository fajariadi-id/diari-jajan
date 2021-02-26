export const getItems = (data) => {
  return { type: 'fetch_items', payload: data };
};

export const addItems = (id, name, cost, created_at) => {
  return { type: 'add_items', payload: { id, name, cost, created_at } };
};

export const openModal = () => {
  return { type: 'open_modal' };
};

export const closeModal = () => {
  return { type: 'close_modal' };
};
