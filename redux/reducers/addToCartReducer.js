const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state = action.payload;

      return state;

    default:
      return state;
  }
};

export default reducer;
