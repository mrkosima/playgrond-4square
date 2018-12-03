import { VENUES_LOAD, VENUES_FULFILLED } from "./consts";

export const loadVenues = (debounceTime = 0) => ({
    type: VENUES_LOAD,
    payload: debounceTime
});

export const venuesFilfilled = venues => ({
    type: VENUES_FULFILLED,
    payload: venues
});
