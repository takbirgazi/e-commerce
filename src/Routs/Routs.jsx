import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/abc",
                element: <div>This is world!</div>,
            }
        ]
    },
]);

export default router;