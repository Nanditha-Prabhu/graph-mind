import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import Dashboard from "./components/Dashboard";
import TrackingModule from "./components/TrackingModule";

const router = createBrowserRouter([
  {
    path: "/chatbot",
    element: (
      <Chatbot/>
    ),
  },
  {
    path: "/",
    element: (
      <Dashboard/>
    ),
  },
  {
    path: "/tracking",
    element: (
      <TrackingModule/>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// function App() {
//   return (
//     <>
      
//     </>
//   );
// }

// export default App;
