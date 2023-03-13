import React from "react";
import { createRoot } from "react-dom/client";
import { DragEle } from "./DragEle";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<DragEle />);
