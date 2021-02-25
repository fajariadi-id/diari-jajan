const receiptReducer = (state = [], action) => {
  switch (action.type) {
    case 'fetch_items':
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default receiptReducer;
