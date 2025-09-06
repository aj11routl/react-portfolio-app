import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProjectsPage from "./Pages/ProjectsPage.js";
import reportWebVitals from "./reportWebVitals";

import NotFoundPage from "./Pages/NotFoundPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFoundPage /> },
  {
    path: "/Projects",
    element: <ProjectsPage />,
    errorElement: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
