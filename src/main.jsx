import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/main";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./pages/form";
import Complete from "./pages/complete";
import Edit from "./pages/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/complete",
    element: <Complete />,
  },
  {
    path: "/edit/:id",
    element: <Edit/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
