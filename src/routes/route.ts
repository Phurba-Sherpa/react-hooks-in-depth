import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout";
import MainPage from "../pages/Main";

export const router = createBrowserRouter([
  {
    element: <AppLayout />
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);
