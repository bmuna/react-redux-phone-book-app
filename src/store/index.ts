import { combineReducers } from "redux";
import { phoneBookReducer } from "./addReducer";
import { filtersReducer } from "./filterReducer";

const reducer = combineReducers({
    add : phoneBookReducer,
    filters: filtersReducer
})

export type RootState = ReturnType<typeof reducer>;
export default reducer;
