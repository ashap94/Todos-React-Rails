import React from "react";
import ReactDom from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDom.render(<h1>Todos App</h1>, root);
});
