import React, { Component } from "react";

import { ResourceFeeder } from "../../resources_feeder";
const R = new ResourceFeeder(require("./resources/strings"), require("./resources/messages"));

import Window from "../../components/Window/index.js";

class Manual extends Component {
    state = { open: true };
    render() {
        if (!this.state.open) return null;
        return (
            <Window
                key="Manual"
                _key="Manual"
                width={"40vmin"}
                height={"60vmin"}
                appKey={this.props.appKey}
                titlebar="Manual"
                onClose={e => this.setState({ open: false })}
            >
                <div className="app-template-fill">
                    <img src={this.constructor.manifest.icon} />
                    <h1>Manual</h1>
                    <h2>Guiding user through using this system, as well as internal apps.</h2>
                </div>
            </Window>
        );
    }
}

Manual.manifest = {
    appKey: "manual",
    appName: ["Manual", "使用手册"],
    icon: "/assets/apps/brochure.svg"
};

export default Manual;
