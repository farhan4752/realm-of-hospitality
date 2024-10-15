import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Root from "./Root.jsx";
import DetailsProperty from "./DetailsProperty.jsx";
import UpdatedProfile from "./UpdatedProfile.jsx";
import Blogs from "./Blogs.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import AuthProvider from "./AuthProvider.jsx";
import TermsAndConditions from "./TermsAndConditions.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import About from "./About.jsx";
import ChangedPassword from "./ChangedPassword.jsx";
import { HelmetProvider } from "react-helmet-async";
import Contact from "./Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/PropertiesData.json"),
      },
      {
        path: "/detailsProperty/:id",
        element: (
          <PrivateRouter>
            <DetailsProperty></DetailsProperty>
          </PrivateRouter>
        ),
        loader: () => fetch("/PropertiesData.json"),
      },
      {
        path: "/updatedProfile",
        element: (
          <PrivateRouter>
            <UpdatedProfile></UpdatedProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/terms&conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/changedPassword",
        element: <ChangedPassword></ChangedPassword>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRouter>
            <Contact></Contact>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
