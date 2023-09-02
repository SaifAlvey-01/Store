import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden ">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div
            style={{ backgroundColor: "#F7F9FB" }}
            className="py-6 px-2 lg:px-6 max-w-9xl mx-auto  "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
