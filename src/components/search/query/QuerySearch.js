import * as React from "react";
import { connect } from "react-redux";
import { TextInputComponent } from "../TextInput";
import { searchQueryChanged } from "../../../ducks/search/actions";
import { selectQuery } from "./../../../ducks/storeSelectors";

export const QuerySearchComponent = props => (
    <div className="query-search">
        <TextInputComponent {...props} />
    </div>
);

const mapStateToProps = state => ({
    text: selectQuery(state)
});

const mapDispatchToProps = {
    onChange: searchQueryChanged
};

export const QuerySearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuerySearchComponent);
