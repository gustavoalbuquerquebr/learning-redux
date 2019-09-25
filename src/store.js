import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
});

const initialState = {
  count: 0,
  color: "#ff00ff",
};

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + action.value };
//     case "DECREMENT":
//       return { ...state, count: state.count - action.value };
//     case "CHANGE_COLOR":
//       return { ...state, color: action.value };
//     default:
//       return state;
//   }
// }

function countReducer(state = initialState.count, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state - action.value;
    default:
      return state;
  }
}

function colorReducer(state = initialState.color, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return action.value;
    default:
      return state;
  }
}

const reducers = combineReducers({
  count: countReducer,
  color: colorReducer,
});

const store = createStore(reducers, applyMiddleware(logger));

console.log(store.getState());

export default store;
