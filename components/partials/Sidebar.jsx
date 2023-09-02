import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import SidebarLinkGroup from "./SidebarLinkGroup";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const pathname = "dashboard";
  // const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // useEffect(() => {
  //   localStorage.setItem('sidebar-expanded', sidebarExpanded);
  //   if (sidebarExpanded) {
  //     document.querySelector('body').classList.add('sidebar-expanded');
  //   } else {
  //     document.querySelector('body').classList.remove('sidebar-expanded');
  //   }
  // }, [sidebarExpanded]);

  return (
    <div className="font-freesans">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-[#1F1D2B] bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex  flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#1F1D2B] transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0 rounded-r-lg" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <div className="h-12 flex justify-center items-center ">
            <p>areeb </p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="mt-4 list-none m-4 p-0 ">
              {/* Dashboard */}
              <SidebarLinkGroup
                activecondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`no-underline  block text-[#1F1D2B] truncate transition duration-150 ${
                          pathname === "/" || pathname.includes("dashboard")
                            ? " text-[#1F1D2B]"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img src="/logos/dashboard/SideMenuIcons.png"></img>
                            <span className=" text-base font-normal leading-5 tracking-tight ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Dashboard
                            </span>
                          </div>
                        </div>
                      </a>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* E-Commerce */}
              <SidebarLinkGroup
                activecondition={pathname.includes("ecommerce")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`no-underline  block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("ecommerce")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img src="/logos/dashboard/orders.png"></img>
                            <span className=" text-base font-normal leading-5 tracking-tight ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Orders
                            </span>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <a
                              end
                              to="/ecommerce/customers"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-indigo-500"
                                  : "text-slate-400 hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Customers
                              </span>
                            </a>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <a
                              end
                              to="/ecommerce/orders"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-indigo-500"
                                  : "text-slate-400 hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Orders
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
      </div>
    </div>
  );
};

export default Sidebar;
