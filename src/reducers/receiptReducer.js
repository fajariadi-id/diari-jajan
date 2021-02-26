const receiptReducer = (state = [], action) => {
  switch (action.type) {
    case 'fetch_items':
      return [...state, ...action.payload];

    case 'add_items':
      return [
        ...state,
        {
          id: action.payload.id + 1,
          name: action.payload.name,
          cost: action.payload.cost,
          created_at: action.payload.created_at,
        },
      ];

    default:
      return state;
  }
};

export default receiptReducer;
