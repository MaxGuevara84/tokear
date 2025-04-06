import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { Welcome } from "../Welcome";
import {
  CertificatesListPage,
  Contact,
  PortfolioLayout,
  ProyectsPage,
} from "../products";
import { Inicio } from "../products/pages/Inicio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "store",
    element: <PortfolioLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "inicio",
        element: <Inicio />,
      },
      //cambiar routes
      {
        path: "certificates",
        element: <CertificatesListPage />,
      },
      {
        path: "proyectos",
        element: <ProyectsPage />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
