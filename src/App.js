import React, { Component } from "react";
import { ContentComponent } from "./components/Content";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <ContentComponent />
            </div>
        );
    }
}

export default App;
