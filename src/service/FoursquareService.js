import { throwError } from "rxjs";
import { ajax } from "rxjs/observable/dom/ajax";
import buildUrl from "build-url";

const BASE_URL = "https://api.foursquare.com/v2";
const SEARCH_PATH = "/venues/search";
const CATEGORIES_PATH = "/venues/categories";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SERCET;
const v = process.env.API_VERSION;

function getUrl(path, params) {
    return buildUrl(BASE_URL, {
        path,
        queryParams: params
    });
}

function baseRequest(path, params) {
    return ajax.getJSON(
        getUrl(path, {
            ...params,
            client_id,
            client_secret,
            v
        })
    );
}

const getVenueSearchParams = ({ query, locationCoords, locationName }) => {
    const params = {};
    if (locationCoords) {
        params["ll"] = locationCoords;
    } else if (locationName) {
        params["near"] = locationName;
    } else {
        params["intent"] = "global";
    }
    if (query) {
        params["query"] = query;
    }
    return params;
};

export function getVenues(settings) {
    return baseRequest(SEARCH_PATH, getVenueSearchParams(settings))
        .map(({ response }) => {
            return response.venues})
        .catch(error => {
            if (error.response) {
                const meta = error.response.meta;
                return throwError(`Error ${meta.code}. ${meta.errorDetail}`);
            }
            return throwError("Unknown error");
        });
}

export function getCategories() {
    return baseRequest(CATEGORIES_PATH);
}
