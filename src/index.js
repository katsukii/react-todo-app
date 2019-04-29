import React from "react";
import { render } from "react-dom";
import { TodoApp } from "./TodoApp";

const rootElement = document.getElementById("root");
render(<TodoApp />, rootElement);
