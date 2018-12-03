import { of } from "rxjs";
import { mergeMap, filter, withLatestFrom } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";
import { QUERY_CHANGED, LOCATION_NAME_CHANGED, USE_COORDS } from "./consts";
import { loadVenues } from "../venues/actions";
import { selectQuery } from "../storeSelectors";

export const searchQueryChangedEpic = action$ =>
    action$.pipe(
        ofType(QUERY_CHANGED),
        mergeMap(action => {
            return of(loadVenues(action.payload.length > 3 ? 500 : 0));
        })
    );

export const locationChangedEpic = action$ =>
    action$.pipe(
        ofType(LOCATION_NAME_CHANGED),
        mergeMap(action => of(loadVenues(300)))
    );

export const useCurrentLocationEpic = (action$, state$) =>
    action$.pipe(
        ofType(USE_COORDS),
        withLatestFrom(state$),
        filter(([action, state]) => selectQuery(state).length > 0),
        mergeMap(() => of(loadVenues()))
    );

export const searchEpics = combineEpics(
    searchQueryChangedEpic,
    locationChangedEpic,
    useCurrentLocationEpic
);
