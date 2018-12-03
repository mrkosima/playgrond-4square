import { VENUES_LOAD, VENUES_FULFILLED } from "./consts";

export function reducer(
    state = {
        items: [],
        initialized: false,
        loading: false
    },
    action
) {
    const { type, payload } = action;
    switch (type) {
        case VENUES_LOAD:
            return { ...state, initialized: true, loading: true };
        case VENUES_FULFILLED:
            return { ...state, items: payload, loading: false };
        default:
            return state;
    }
}
