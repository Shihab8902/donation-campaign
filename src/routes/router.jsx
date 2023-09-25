import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Donation from "../components/Donation/Donation";
import Statistics from "../components/Statistics/Statistics";
import Error from "../components/Error/Error";
import CardDetails from "../components/Cards/CardDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/donation",
                element: <Donation />
            },
            {
                path: "/statistics",
                element: <Statistics />,
                loader: () => fetch("../data.json")
            },
            {
                path: "/card/:id",
                element: <CardDetails />,
                loader: () => fetch("../data.json")
            }
        ]
    }
])