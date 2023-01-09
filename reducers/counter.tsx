const counterReducer = (state = {counter :0}, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {counter: state.counter + 1};
    case "DECREMENT":
      return {counter:state.counter - 1};
    case "RESET":
      return (state = {counter: 0});
    default:
      return state;
  }
};
export default counterReducer;