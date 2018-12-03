import * as React from "react";
import { connect } from "react-redux";
import { geolocated } from "react-geolocated";
import { LocationSearchComponent } from "./LocationSearch";
import { locationChanged, useCoords } from "../../../ducks/search/actions";
import { selectLocationName, selectCoords } from "./../../../ducks/storeSelectors";
import { handleError } from "../../../ducks/errors/actions";

export class GeolocationSearchComponent extends React.PureComponent {
    componentWillReceiveProps;
    render() {
        const { locationName, usingCurrentLocation, onLocationNameChange } = this.props;
        const placeholder = usingCurrentLocation ? "Current location" : "Location...";
        return (
            <LocationSearchComponent
                text={locationName}
                placeholder={placeholder}
                onTextChange={onLocationNameChange}
                locationIconClicked={this.onCurrentLocation}
            />
        );
    }

    onCurrentLocation = () => {
        const {
            coords,
            isGeolocationEnabled,
            useCurrentCoords,
            handleError,
            positionError
        } = this.props;
        if (isGeolocationEnabled && coords) {
            useCurrentCoords(`${coords.latitude},${coords.longitude}`);
        } else {
            handleError(
                "Current location is not available",
                positionError ? positionError.message : ""
            );
        }
    };
}

const GeolocatedSearchComponent = geolocated({
    positionOptions: {
        enableHighAccuracy: false
    }
})(GeolocationSearchComponent);

const mapStateToProps = state => ({
    usingCurrentLocation: !!selectCoords(state),
    locationName: selectLocationName(state)
});

const mapDispatchToProps = {
    onLocationNameChange: locationChanged,
    useCurrentCoords: useCoords,
    handleError: handleError
};

export const GeolocatedSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(GeolocatedSearchComponent);
