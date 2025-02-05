import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/root.jsx";
import "./css/style.css";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
