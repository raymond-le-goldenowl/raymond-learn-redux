const { createStore } = require("redux");

const initialState = {
  speed: 0,
  lastSpeed: 1,
};

const reducer = function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "CHANGE_SPEED": {
      return {
        ...state,
        speed: action.payload,
      };
    }
    case "TURN_OFF": {
      return {
        ...state,
        lastSpeed: state.speed,
        speed: 0,
      };
    }
    case "TURN_ON": {
      return {
        ...state,
        speed: state.lastSpeed,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log(store.getState());
store.dispatch({ type: "CHANGE_SPEED", payload: 3 });
console.log(store.getState());
