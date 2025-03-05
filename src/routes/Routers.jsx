import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about/AboutUs";
import WebDevelopment from "../pages/services/WebDevelopment";
import MobileApps from "../pages/services/MobileApps";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/services/web-development",
                element: <WebDevelopment />,
            },
            {
                path: "/services/mobileapp",
                element: <MobileApps />,
            },
        ],
    },
]);

export default router