import { applyMiddleware, createStore } from "redux";
import Reducer from "./reducer";
import Thunk from "redux-thunk";

const store = createStore(Reducer, applyMiddleware(Thunk));

export default store;
