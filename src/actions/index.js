export const getItems = (data) => {
  return { type: 'fetch_items', payload: data };
};

export const addItems = async (id, name, cost, created_at) => {
  const res = await fetch('http://localhost:5000/items', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id, name, cost, created_at }),
  });

  const data = await res.json();

  return { type: 'add_items', payload: data };
};

export const openModal = () => {
  return { type: 'open_modal' };
};

export const closeModal = () => {
  return { type: 'close_modal' };
};
