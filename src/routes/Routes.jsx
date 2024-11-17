import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllTreatment from "../pages/AllTreatment";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:async()=> {
            const services=await fetch('/service.json');
            const serviceData=await services.json()

            const feedback=await fetch('/happyClients.json');
            const feedbackData=await feedback.json()
            return {serviceData,feedbackData}
            }
            
        },
        {
            path:'/allTreatment',
            element:<AllTreatment></AllTreatment>,
            loader:()=>fetch('/service.json')

        },
        {
            path:'/profile',
            element:<Profile></Profile>
        },
      ]
    },
  ]);
  export default router