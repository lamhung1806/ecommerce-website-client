const loginInitialState = {
  dataUser: {},
  status: false,
};
const login = (state = loginInitialState, action) => {
  switch (action.type) {
    case "CHECK_LOGIN":
      return {
        ...state,
      };
    case "GET_USER":
      return {
        ...state,
        dataUser: action.payload,
      };
    default:
      return state;
  }
};
export default login;
