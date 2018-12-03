import * as React from "react";
import { TextInputComponent } from "../TextInput";
import { ReactComponent as LocationSVG } from "./../../../assets/location.svg";

export const LocationSearchComponent = ({
    text,
    placeholder,
    onTextChange,
    locationIconClicked
}) => (
    <div className="location-search">
        <TextInputComponent text={text} onChange={onTextChange} placeholder={placeholder} />
        <span className="location-icon" onClick={locationIconClicked}>
            <LocationSVG />{" "}
        </span>
    </div>
);
