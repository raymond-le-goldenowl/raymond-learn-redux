const { createStore } = require("redux");

const initialState = {
  speed: 0,
  lastSpeed: 1,
};
const TURN_ON = "TURN_ON"
const TURN_OFF = "TURN_OFF"
const CHANGE_SPEED = "CHANGE_SPEED"

const turnOn = () => ({
  type: TURN_ON
});
const turnOff = () => ( {
  type: TURN_OFF
});
const changeSpeed = (speed) => ({
  type: CHANGE_SPEED,
  payload: speed
});

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_SPEED: {
      return {
        ...state,
        speed: action.payload,
      };
    }
    case TURN_OFF: {
      return {
        ...state,
        lastSpeed: state.speed,
        speed: 0,
      };
    }
    case TURN_ON: {
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
store.dispatch(changeSpeed(3));
console.log(store.getState());
