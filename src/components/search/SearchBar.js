import * as React from "react";
import { QuerySearch } from "./query/QuerySearch";
import { GeolocatedSearch } from "./location/GeolocationSearch";

export const SearchBarComponent = () => (
    <div className="search-bar">
        <QuerySearch placeholder="I'm looking for..." />
        <span className="search-in">in</span>
        <GeolocatedSearch />
    </div>
);
