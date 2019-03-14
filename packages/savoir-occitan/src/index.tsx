import * as React from "react";
import * as ReactDOM from "react-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import amber from "@material-ui/core/colors/amber";

import { App } from "./components";

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: amber,
        error: red,
        background: { default: "" }
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById("root") as HTMLElement
);
