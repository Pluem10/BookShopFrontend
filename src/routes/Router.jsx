import { createBrowserRouter } from "react-router";
import AddBook from "../pages/AddBook"; 
import Update from "../pages/UpdateBook";
import Home from "../pages/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddBook />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);
export default router;