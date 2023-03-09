import React from "react";
import { createRoot } from "react-dom/client";
import { AnimateUse } from "./AnimateUse";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<AnimateUse />);
