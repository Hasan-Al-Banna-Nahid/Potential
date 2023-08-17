import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OurService from "./Components/Our Service/OurService.jsx";
import Home from "./Components/Home/Home.jsx";
import Portfolios from "./Components/Porfolios/Portfolios.jsx";
import OurTeam from "./Components/Our Team/OurTeam.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import BlogDetails from "./Components/BlogDetails/BlogDetails.jsx";
import ContactUs from "./Components/Contact US/ContactUs.jsx";
import AuthProvider from "./Components/Authentication/AuthProvider.jsx";
import Login from "./Components/Authentication/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourService",
        element: <OurService />,
      },
      {
        path: "/portfolios",
        element: <Portfolios />,
      },
      {
        path: "/team",
        element: <OurTeam />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`blog.json/${params.id}`),
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
