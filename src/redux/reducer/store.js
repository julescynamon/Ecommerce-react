import { createStore } from "redux";
import carteReducer from "../cartReducer";

const store = createStore(carteReducer);

export default store;
