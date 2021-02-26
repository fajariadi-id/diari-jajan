const receiptReducer = (state = [], action) => {
  switch (action.type) {
    case 'fetch_items':
      return [...state, ...action.payload];

    case 'add_items':
      return [...state, action.payload];

    default:
      return state;
  }
};

export default receiptReducer;
