import { createBrowserRouter } from "react-router";
import { FirstStepForm } from "./pages/firststepform";
import { SecondStepForm } from "./pages/secondstepform";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <p>404|not found</p>,
  },
  {
    path:'pages/firststepform.tsx',
    element : <FirstStepForm/>
  },
  {
    path:'pages/secondstepform.tsx',
    element : <SecondStepForm/>
  },

]);