import { combineReducers } from "redux";
//combineReducers = Reducerları bir araya getir/birletir demektir.
import counterReducer from "./counterReducer";

const reducers = combineReducers({
    counterReducer
});

export default reducers;