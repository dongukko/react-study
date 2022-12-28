const React = require("react");
const { createRoot } = require("react-dom/client");
// import { createRoot } from "react-dom/client";
const WordRelay = require("./WordRelay");

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<WordRelay />);
