import { QUERY_CHANGED, LOCATION_NAME_CHANGED, USE_COORDS } from "./consts";

export const searchQueryChanged = query => ({
    type: QUERY_CHANGED,
    payload: query
});

export const locationChanged = locationName => ({
    type: LOCATION_NAME_CHANGED,
    payload: locationName
});

export const useCoords = coords => ({
    type: USE_COORDS,
    payload: coords
});
