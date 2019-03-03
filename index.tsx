import * as React from "react";
import ReactDOM from "react-dom";
import App from "./src/components/App";

const Index = () => {
    return <App />;
};

var mountNode = document.getElementById("app");
ReactDOM.render(<Index />, mountNode);
