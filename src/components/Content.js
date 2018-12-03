import * as React from "react";
import { NotificationContainer } from "react-notifications";
import { Venues } from "./venue/Venues";
import { SearchBarComponent } from "./search/SearchBar";

export class ContentComponent extends React.PureComponent {
    render() {
        return (
            <>
                <SearchBarComponent />
                <Venues />
                <NotificationContainer />
            </>
        );
    }
}
