// Search
const selectSearch = state => state.search;
export const selectQuery = state => selectSearch(state).query;
export const selectLocationName = state => selectSearch(state).locationName;
export const selectCoords = state => selectSearch(state).coords;

// Venues
const selectVenues = state => state.venues;
export const selectVenuesItems = state => selectVenues(state).items;
export const selectVenuesLoading = state => selectVenues(state).loading;

// Errors
export const selectErrors = state => state.errors;
