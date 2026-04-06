import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      
      {/* Fixed across all pages */}
      <Navbar />

      {/* Dynamic content renders here */}
      <main className="p-5">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;