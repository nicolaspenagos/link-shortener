import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Pages/Root";
import RedirectPage from "./components/Pages/Redirect";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: ":backHalf",
    element: <RedirectPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
