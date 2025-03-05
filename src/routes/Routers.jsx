import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about/AboutUs";
import WebDevelopment from "../pages/services/WebDevelopment";
import MobileApps from "../pages/services/MobileApps";
import Blog from "../pages/blog/Blog";
import ContactsPage from "../pages/contact/ContactsPage";

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
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <ContactsPage />,
            },
        ],
    },
]);

export default router