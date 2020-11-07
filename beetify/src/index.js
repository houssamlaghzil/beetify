import React from "react";
import ReactDOM from "react-dom";
import "./asset/css/index.css";
import App from "./asset/js/App";
import * as serviceWorker from "./asset/js/serviceWorker";
import {StateProvider} from "./asset/js/StateProvider";
import reducer, {initialState} from "./asset/js/reducer";

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App/>
        </StateProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
