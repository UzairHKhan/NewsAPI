import { combineReducers } from '@reduxjs/toolkit';
import News from "./state";

const reducer = combineReducers({
    News : News.reducer
})

export default reducer