import React from "react";
import { createRoot } from "react-dom/client";
import { MultiEle } from "./MultiEle";
import './index.less';

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container!);
root.render(<MultiEle rootEle={container} />);