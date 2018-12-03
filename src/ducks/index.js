import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { reducer as venuesReducer } from "./venues/reducer";
import { reducer as searchReducer } from "./search/reducer";
import { reducer as errorsReducer } from "./errors/reducer";

import { loadVenuesEpic } from "./venues/epics";
import { searchEpics } from "./search/epics";
import { errorHandleEpic } from "./errors/epics";

export const rootReducer = combineReducers({
    venues: venuesReducer,
    search: searchReducer,
    errors: errorsReducer
});

export const rootEpic = combineEpics(
    loadVenuesEpic,
    searchEpics,
    errorHandleEpic
);
