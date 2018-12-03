import { HANDLE_ERROR, CLEANUP_ERRORS } from "./consts";

export const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case HANDLE_ERROR:
            return [...state, payload];
        case CLEANUP_ERRORS:
            return [];
        default:
            return state;
    }
};
