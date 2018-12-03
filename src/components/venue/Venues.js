import * as React from "react";
import { connect } from "react-redux";
import { VenueComponent } from "./Venue";
import { StatusComponent } from "./Status";
import { selectVenuesItems, selectVenuesLoading, selectVenuesInitialized } from "../../ducks/storeSelectors";

export class VenuesComponent extends React.Component {
    render() {
        const { loading, venues, venuesInitialized } = this.props;
        if (!venuesInitialized) {
            return <StatusComponent text="Start typing in a search fields" />;
        }
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
    venuesInitialized: selectVenuesInitialized(state),
    loading: selectVenuesLoading(state),
    venues: selectVenuesItems(state),

});

export const Venues = connect(mapStateToProps)(VenuesComponent);
