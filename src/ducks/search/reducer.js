import { QUERY_CHANGED, LOCATION_NAME_CHANGED, USE_COORDS } from "./consts";

const initialState = {
    query: "",
    locationName: "Amsterdam, Netherlands",
    coords: ""
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case QUERY_CHANGED:
            return { ...state, query: payload };
        case LOCATION_NAME_CHANGED:
            return { ...state, locationName: payload, coords: "" };
        case USE_COORDS:
            return { ...state, coords: payload, locationName: "" };
        default:
            return state;
    }
};
