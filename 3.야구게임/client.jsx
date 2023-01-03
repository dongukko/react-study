import React from "react";
import { createRoot } from "react-dom/client";
import NumberBaseBallClass from "./NumberBaseBallClass";
import NumberBaseBallFunctional from "./NumberBaseBallFunctional";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<NumberBaseBallFunctional />);
