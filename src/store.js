import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
});

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.value };
    case "DECREMENT":
      return { ...state, count: state.count - action.value };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger));

export default store;
