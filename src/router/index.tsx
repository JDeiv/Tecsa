import { createBrowserRouter } from "react-router-dom";
import { ABOUT, CONTACT, LOGIN, PRIVATE, SERVICES } from "./paths";
import PrivateRoute from "../components/router/PrivateRoute";
import PublicRoute from "../components/router/PublicRoute";
import Home from "../components/home/Home";
import Login from "../components/auth/Login";
import About from "../components/Nosotros/About";
import Services from "../components/Services/Services";
import Contact from "../contactos/Contact";



export const ListRoutes = createBrowserRouter([
    {
      path: PRIVATE,
      element: <PrivateRoute />,
      children: [
        // {
        //   index: true,
        //   element: <Private />
        // },
        /*
        {
          path: LOGOUT,
          element: <Logout />
        }
        */
      ]
    },
    {
      path: '/',
      element: <PublicRoute />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: ABOUT,
          element: <About />
        },
        {
          path: LOGIN,
          element: <Login />
        },
        {
          path: SERVICES,
          element: <Services />
        },
        {
          path: CONTACT,
          element: <Contact />
        }

      ]
    }
  ]);