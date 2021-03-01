export const getItems = (data) => ({ type: 'fetch_items', payload: data });

export const addItems = (name, cost, created_at) => async (dispatch) => {
  const res = await fetch('http://localhost:5000/items', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, cost, created_at }),
  });

  const data = await res.json();

  dispatch({ type: 'add_items', payload: data });
};

export const openModal = () => ({ type: 'open_modal' });

export const closeModal = () => ({ type: 'close_modal' });
