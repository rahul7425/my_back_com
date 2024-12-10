import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.js';
import Home from "./component/home.js"
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './component/about.js'
import Contact from './component/Contact.js';
import Accessories from './component/Accessories/Accessories.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {path: "/", element: <Home/>},
      {path: "about", element: <About/>},
      {path: "contact", element: <Contact/>},
      {path: "accessories", element: <Accessories/>},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
