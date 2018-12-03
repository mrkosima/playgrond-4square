import * as React from "react";

export const AddressComponent = ({ formattedAddress }) => {
    if (formattedAddress) {
        return (
            <div data-role="addess">
                {formattedAddress.map(a => (
                    <p key={a}>{a}</p>
                ))}
            </div>
        );
    }
    return null;
};
