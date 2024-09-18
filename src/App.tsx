import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout";
import MainPage from "./pages/Main";
import IntersectionObserver from "./examples/use-effect/IntersectionObserver";
import Clock from "./examples/clock";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/intersection-observer",
        element: <IntersectionObserver />,
      },
      {
        path: "/clock-timer",
        element: <Clock />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
