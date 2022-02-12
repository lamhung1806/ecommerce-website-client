const userOderInitialState = {
  oderList: [],
  detailOderList: [],
};
const userOder = (state = userOderInitialState, action) => {
  switch (action.type) {
    case "GET_USER_ODER":
      return {
        ...state,
        oderList: action.payload,
      };
    case "GET_DETAIL_USER_ODER":
      return {
        ...state,
        detailOderList: action.payload,
      };
    default:
      return state;
  }
};

export default userOder;
