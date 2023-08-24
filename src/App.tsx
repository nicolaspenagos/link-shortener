import React, {useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Pages/Root";
import RedirectPage from "./components/Pages/Redirect";
import Header from "./components/Layout/Header";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
