import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import { useRouter } from "next/router";

const Layout = ({ children, backText, backImageUrl, backUrl }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [headerValue, setHeaderValue] = useState(
    router.pathname === "/dashboard" ? "Dashboard" : ""
  );

  return (
    <div
      style={{ backgroundColor: "#F7F9FB" }}
      className="flex h-screen overflow-hidden "
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setHeaderValue={setHeaderValue}
      />
      <div className="relative flex flex-col flex-1  overflow-x-hidden">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          headerValue={headerValue}
          backText={backText}
          backImageUrl={backImageUrl}
          backUrl={backUrl}
        />
        <main>
          <div
            style={{ backgroundColor: "#F7F9FB" }}
            className="mt-4 sm:mt-0 px-4 sm:px-6 lg:px-8 py-6 max-w-9xl mx-auto min-h-[calc(98vh-180px)] sm:min-h-[calc(100% - 100px)]"
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
