import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import pageload from "../public/logoutLoader.json"
import Lottie from "lottie-react";

const Layout = (props) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { status, data: session } = useSession();
  const token = Cookie.get("token");
  const [headerValue, setHeaderValue] = useState(
    router.pathname === "/dashboard" ? "Dashboard" : ""
  );

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, []);


  if (!token) {

  if (!token && status !== "authenticated") {
    return <div
    style={{ backgroundColor: "#F7F9FB" }}
    className="flex h-screen overflow-hidden"
  >
    <div className="min-h-[calc(108vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-center w-full"
      >
        <div className="h-1/2 w-96">
        <Lottie
            animationData={pageload}
            loop={true}
            autoplay={true}
          />;
        </div>

    </div>
  </div>
  }

  

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
          {...props}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          headerValue={headerValue}
        />
        <main className="flex-grow ">
          <div
            style={{ backgroundColor: "#F7F9FB" }}
            className="mt-4 sm:mt-0 px-4 sm:px-6 lg:px-8 py-6 max-w-9xl mx-auto "
          >
            {props.children}
          </div>
        </main>
      </div>
    </div>
  );
};
}

export default Layout;
