import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";

const Layout = ({
  children,
  backText,
  backImageUrl,
  backUrl,
  showAddNewProduct,
  showAddNewCategory,
  showCreateOrder,
}) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { status, data: session } = useSession();
  const token = Cookie.get("token");
  const [headerValue, setHeaderValue] = useState(
    router.pathname === "/dashboard" ? "Dashboard" : ""
  );

  // useEffect(() => {
  //   if (!token) {
  //     router.push("/login");
  //   }
  // }, []);

  // if (!token) {
  //   return (
  //     <div></div>
  //   )
  // }

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
      <div className="relative flex flex-col flex-1 overflow-x-hidden h-full">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          headerValue={headerValue}
          backText={backText}
          backImageUrl={backImageUrl}
          backUrl={backUrl}
          showAddNewProduct={showAddNewProduct}
          showAddNewCategory={showAddNewCategory}
          showCreateOrder={showCreateOrder}
        />
        <main className="flex-grow ">
          <div
            style={{ backgroundColor: "#F7F9FB" }}
            className="mt-4 sm:mt-0 px-4 sm:px-6 lg:px-8 py-6 max-w-9xl mx-auto "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
