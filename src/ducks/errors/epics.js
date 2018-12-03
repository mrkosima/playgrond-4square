import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { HANDLE_ERROR } from "./consts";
import { cleanupErrors } from "./actions";
import { NotificationManager } from "react-notifications";

export const errorHandleEpic = action$ =>
    action$.pipe(
        ofType(HANDLE_ERROR),
        mergeMap(({ payload }) => {
            switch (payload.type) {
                case "error":
                    NotificationManager.error(payload.message, payload.title, 5000);
                    break;
                default:
                    NotificationManager.warning(payload.message, payload.title, 3000);
            }
            return of(cleanupErrors());
        })
    );
