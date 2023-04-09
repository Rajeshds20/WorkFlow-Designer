/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./css/button.css";
import "./css/extra.css"
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
  useHref,
} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import WorkFlowPage from './pages/WorkFlowPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/workflow/",
    element: <WorkFlowPage />,
  },
  {
    path: "/contact/",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <h2>Error 404 - Page Not Found</h2>,
  },

]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
