const reduce = (array, cb, initValue) => {
  if (initValue === undefined) {
    initValue = array[0];
    array = array.slice(1, initValue.length);
  }

  for (const item of array) {
    initValue = cb(initValue, item);
  }

  return initValue;
};

const actions = [
  { type: "CHANGE_SPEED", payload: 3 },
    { type: "TURN_OFF" },
  { type: "TURN_ON" },
];

const initialState = {
  speed: 0,
  lastSpeed: 1,
};

const result = reduce(
  actions,
  function (state, action) {
    if (action.type === "CHANGE_SPEED") {
      return {
        ...state,
        speed: action.payload,
      };
    }
    if (action.type === "TURN_OFF") {
      return {
        ...state,
        lastSpeed: state.speed,
        speed: 0,
      };
    }
    if (action.type === "TURN_ON") {
      return {
        ...state,
        speed: state.lastSpeed,
      };
    }
    return state;
  },
  initialState
);


console.log(result)