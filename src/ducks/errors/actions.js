import { HANDLE_ERROR, CLEANUP_ERRORS } from "./consts";

export const handleWarning = (title, message) => ({
    type: HANDLE_ERROR,
    payload: {
        title: title,
        message: message,
        type: "warning"
    }
});

export const handleError = (title, message) => ({
    type: HANDLE_ERROR,
    payload: {
        title: title,
        message: message,
        type: "error"
    }
});

export const cleanupErrors = () => ({
    type: CLEANUP_ERRORS
});
