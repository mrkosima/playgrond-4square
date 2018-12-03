import * as React from "react";
import { AddressComponent } from "./Address";
import { DistanceComponent } from "./Distance";
import { CategoryComponent } from "./Category";

export class VenueComponent extends React.Component {
    render() {
        const { name, location, categories } = this.props.venue;
        const { formattedAddress, distance } = location;
        return (
            <>
                <div className="venue">
                    <p data-role="name">{name}</p>
                    <AddressComponent formattedAddress={formattedAddress} />
                    <CategoryComponent categories={categories} />
                    <DistanceComponent meters={distance} />
                </div>
            </>
        );
    }
}
