import * as React from "react";
import { connect } from "react-redux";
import { VenueComponent } from "./Venue";
import { StatusComponent } from "./Status";
import { selectVenuesItems, selectVenuesLoading } from "../../ducks/storeSelectors";

export class VenuesComponent extends React.Component {
    render() {
        const { loading, venues } = this.props;
        if (loading) {
            return <StatusComponent text="Searching..." />;
        }
        if (venues.length === 0) {
            return <StatusComponent text="No venues found" />;
        }
        return (
            <div className="venues">
                {this.props.venues.map(venue => (
                    <VenueComponent key={venue.id} venue={venue} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    venues: selectVenuesItems(state),
    loading: selectVenuesLoading(state)
});

export const Venues = connect(mapStateToProps)(VenuesComponent);
