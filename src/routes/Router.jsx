import { createBrowserRouter } from "react-router";
import { Add } from "../pages/Add";
import Update from "../pages/UpdateBook";
import Home from "../pages/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);
export default router;
