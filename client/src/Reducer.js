const Reducer = (state, action) => {
    switch (action.type) {
      case "SET_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.payload,
        };
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
};

export default Reducer;