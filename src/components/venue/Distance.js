import * as React from "react";

const formatDistance = meters => {
    if (meters > 10000) {
        return `${Math.round(meters / 1000)}km`;
    }
    if (meters > 1000) {
        return `${Math.round(meters / 100) / 10}km`;
    }
    if (meters > 50) {
        return `${meters}m`;
    }
    return "< 50m";
};

export const DistanceComponent = ({ meters }) => {
    if (meters > 0) {
        return <p data-role="distance">{formatDistance(meters)}</p>;
    }
    return null;
};
