import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      {/* dihapus aja bagian min-h-screen kalau gaperlu */}
      <div className="mt-[112px] text-white min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
