import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Carrer from "../pages/Carrer/Carrer";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetail from "../pages/serviceDetail/ServiceDetail";


const router = createBrowserRouter([

    {
        path:"/",
        element: <MainLayouts></MainLayouts>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch('/corporate-event.json')
            },
            {
                path:'corporate-event/:id',
                element:<ServiceDetail></ServiceDetail>,
                loader: () => fetch('/corporate-event.json')
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/career",
                element:<Carrer></Carrer>
            },

            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }


        ]
    },
]);

export default router;