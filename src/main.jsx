import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/main";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./pages/form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
