import { timer, of } from "rxjs";
import { map, mergeMap, withLatestFrom, debounce, takeUntil, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { VENUES_LOAD } from "./consts";
import { venuesFilfilled } from "./actions";
import { getVenues } from "../../service/FoursquareService";
import { selectQuery, selectCoords, selectLocationName } from "../storeSelectors";
import { handleWarning } from "../errors/actions";


export const loadVenuesEpic = (action$, state$) =>
    action$.pipe(
        ofType(VENUES_LOAD),
        debounce(action => timer(action.payload || 0)),
        withLatestFrom(state$),
        mergeMap(
            ([action, state]) => {
                const params = {
                    query: selectQuery(state),
                    locationCoords: selectCoords(state),
                    locationName: selectLocationName(state),
                }
                return getVenues(params).pipe(
                    map(venues => venuesFilfilled(venues)),
                    takeUntil(action$.pipe(ofType(VENUES_LOAD))),
                    catchError(error => {
                        return of(handleWarning("Something went wrong.", error))
                    }
                  )
                );
            },
        )
    );
