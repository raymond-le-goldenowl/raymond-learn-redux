const { combineReducers } = require("redux");
const cartReducer = require("./cart");
const productReducer = require("./product");

const reducer = combineReducers({ product: productReducer, cart: cartReducer });
module.exports = reducer;
