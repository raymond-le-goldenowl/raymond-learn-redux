const { createStore } = require("redux");
const reducer = require("./reducers");

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART": {
//     }
//     case "REMOVE_FROM_CART": {
//     }
//     case "FETCH_PRODUCTS_SUCCESS": {
//     }
//     case "FETCH_PRODUCTS_FAIL": {
//     }
//     default: {
//       return state;
//     }
//   }
// };
const store = createStore(reducer);
console.log(store.getState());
