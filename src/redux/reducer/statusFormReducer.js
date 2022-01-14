const statusFormRuducerInitialState = {
  status: false,
};
const statusFormRuducer = (state = statusFormRuducerInitialState, action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return {
        ...state,
        status: !state.status,
      };
    default:
      return state;
  }
};
export default statusFormRuducer;
