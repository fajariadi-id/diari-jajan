const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'open_modal':
      return !state;

    case 'close_modal':
      return !state;

    default:
      return state;
  }
};

export default modalReducer;
