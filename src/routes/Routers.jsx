import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about/AboutUs";
import WebDevelopment from "../pages/services/WebDevelopment";
import MobileApps from "../pages/services/MobileApps";
import Blog from "../pages/blog/Blog";
import ContactsPage from "../pages/contact/ContactsPage";
import AISolutions from "../pages/services/AISolutions";
import UiDesign from "../pages/services/UiDesign";
import GraphicsDesign from "../pages/services/GraphicsDesign";
import DigitalMarketing from "../pages/services/DigitalMarketing";

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
                path: "/services/aisolutions",
                element: <AISolutions />,
            },
            {
                path: "/services/UI/UXDesign",
                element: <UiDesign />,
            },
            {
                path: "/services/GraphicsDesign",
                element: <GraphicsDesign />,
            },
            {
                path: "/services/DigitalMarketing",
                element: <DigitalMarketing />,
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