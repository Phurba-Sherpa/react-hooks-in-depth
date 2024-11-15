import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout";
import MainPage from "./pages/Main";
import IntersectionObserver from "./examples/use-effect/IntersectionObserver";
import Clock from "./examples/clock";
import MousePosition from "./examples/use-effect/MousePosition";
import MediaPlayer from "./examples/MediaPlayer";
import BoxVisibility from './examples/BoxVisibility';

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
      {
        path: "/cursor-position",
        element: <MousePosition />,
      },
      {
        path: "/media-player",
        element: <MediaPlayer />,
      },
      {
        path: "/element-visibility",
        element: <BoxVisibility />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
