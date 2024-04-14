import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Register from "../Components/Register/Register";
import Layout from "../Layout/Layout";
import Sahifa from "../Page/Bosh sahifa/Sahifa";
import Kurslarim from "../Page/Kurslarim/Kurslarim";
import Kurslarimiz from "../Page/Barcha kurslar/Kurslar";
import Video from "../Page/Videolar/Video";
import Sertifikat from "../Page/Sertifikat/Sertifikat";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Register/>
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/kirish",
                element: <Sahifa />,
            },
            {
                path: "/mening-kurslarim",
                element: <Kurslarim />,
            },
            {
                path: "/barcha-kurslar",
                element: <Kurslarimiz />
            },
            {
                path: "/videolar",
                element: <Video />
            },
            {
                path: "/sertifikat",
                element: <Sertifikat />
            },    
        ]
        }

]);

export default router;