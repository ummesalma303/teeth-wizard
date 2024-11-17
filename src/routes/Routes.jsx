import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllTreatment from "../pages/AllTreatment";
import Profile from "../pages/Profile";
import Details from "../pages/Details";
import Appointment from "../pages/Appointment";

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
          path: '/details/:id',
          element: <Details></Details>,
          loader: async ({params}) => {
            const detailsData = await fetch('/service.json');
            const details = await detailsData.json()
            
            const singleData = details.find(detail =>detail.id.toString() === params.id);
            // console.log(singleData)
            return singleData
          }
        },
        {
            path:'/appointment',
            element:<Appointment></Appointment>
        },
        {
            path:'/profile',
            element:<Profile></Profile>
        },
      ]
    },
  ]);
  export default router