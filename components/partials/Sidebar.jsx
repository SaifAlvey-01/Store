'use client'

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
// import { navItems } from "./items";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { useRouter } from "next/router";
import { useNavigation } from "../../hooks/useNavigation";


const Sidebar = ({ sidebarOpen, setSidebarOpen, setHeaderValue }) => {
  const router = useRouter();
  const { pathname } = router;
  const curPath = pathname.split('/')[1];
  const curSubPath = pathname.split('/')[2];
  const {navItems} = useNavigation()
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const activeItemIndex = navItems.findIndex(item => item.section === curPath);
  const initialActiveIndex = curPath.length === 0 ? 0 : activeItemIndex;

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

    
  const activeSubItemIndex = navItems[activeIndex]?.subItems ? navItems[activeIndex]?.subItems?.findIndex(item => item.subSection === curSubPath) : 0
  const initialSubActiveIndex = curSubPath?.length === 0 ? 0 : activeSubItemIndex;
  const [activeSubIndex, setActiveSubIndex] = useState(initialSubActiveIndex);
  

  useEffect(() => {
    setActiveSubIndex(initialSubActiveIndex);
  }, [initialSubActiveIndex]);


  useEffect(() => {
    setActiveIndex(initialActiveIndex);
}, [initialActiveIndex]);

  
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
        className={`flex  flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#1F1D2B] transition-transform duration-200 ease-in-out
        ${sidebarOpen ? "translate-x-0 rounded-r-lg" : "-translate-x-64"}`}
      >
        {/* Sidebar header */}
        <div className="flex justify-center items-center h-full mt-6 mb-8 pr-3 sm:px-2">
          {/* Child flex container */}
          <div
            style={{ margin: "0px 20px" }}
            className="h-12 flex items-center justify-between w-full"
          >
            {/* Close button on the left */}
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

            {/* Logo in the center */}
            <div className="flex flex-row items-center justify-center lg:flex lg:items-center lg:justify-center hidden">
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "6px",
                }}
              >
                <img src={"/logo.png"} alt="Your Image Description" />
              </div>

              <div className="flex flex-col items-center justify-center ml-3">
                <span
                  className="mb-2"
                  style={{ color: "#FAFAFA", fontWeight: 600 }}
                >
                  Ray Naz
                </span>{" "}
                <a style={{ color: "#FAFAFA", fontSize: "12px" }} href="#">
                  Visit Store
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        {navItems.map((item, index)=>{
          return(
            <div className="space-y-80" key={index}>
            {/* Pages group */}
              
              <div>
              <ul className="mt-4 list-none m-4 p-0 ">
                  <div
                    style={
                      activeIndex === index 
                        ? { backgroundColor: "white", borderRadius: 12 }
                        : { backgroundColor: "transparent" }
                    }
                    className="px-[12px] py-[11px] w-[180px] font-freesans  last:mb-0 "
                    >
                    <Link
                      style={{ textDecoration: "none" }}
                      href={item.href}
                    >
                      <div
                        className={`no-underline block truncate transition duration-150 `}>
                        <div className="flex flex-row items-center">
                          {item.icon}
                          <span
                            style={{
                              color:
                              activeIndex === index  
                                  ? "#1F1D2B"
                                  : "#FAFAFA",
                              fontWeight:
                              activeIndex === index ? 500 : 400,
                              marginLeft: 14,
                            }}
                          >
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </Link>

                  </div>

                  {item.subItems && activeIndex === index &&
                  <ul
                    style={{
                      // display: ordersSubLinksVisible ? "block" : "none",
                    }}
                    className={`list-none text-sm font-medium px-10 mb-4 transition-max-height duration-300"`}
                  >
                    {item.subItems.map((itm, idx)=> {
                      return(
                        <li
                        className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                          activeSubIndex === idx ? "font-bold" : ""
                        }`}
                      >
                        {" "}
                        <Link
                          style={{ textDecoration: "none", color: "#FAFAFA" }}
                          href={itm.href}
                        >
                          <div
                            role="button"
                            className="block w-full h-full cursor-pointer"
                          >
                            {itm.label}
                          </div>
                        </Link>
                      </li>
                      )})
                      }
                  
                  
                  </ul>
                  }

              </ul>
              </div>
            </div>
          )
        })
          
        }
        {/* Expand / collapse button */}
      </div>
    </div>
  );
};

export default Sidebar;
