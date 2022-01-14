const categoryInitialState = {
  dataCategory: [],
};
const category = (state = categoryInitialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        state,
        dataCategory: action.payload,
      };
    default:
      return state;
  }
};
export default category;
