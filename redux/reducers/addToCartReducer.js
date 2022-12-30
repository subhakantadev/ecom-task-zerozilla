const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state = action.payload;
      
      return state;
    case "REMOVE_FROM_CART":
      state = state - action.payload;
      return state;

    case "EMPTY_CART":
      state = action.payload;
    default:
      return state;
  }
};

export default reducer;
