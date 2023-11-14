"use client";

import React, { useState, useEffect, useRef, useMemo, use } from "react";
import { signOut } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/router";
import { useNavigation } from "../../hooks/useNavigation";
import Cookies from "js-cookie";
import useAxios from "../../hooks/useAxios";
import { useSelector, useDispatch } from 'react-redux';
import { fetchBusiness } from '../../redux/slices/getBusiness';

const Sidebar = ({ sidebarOpen, setSidebarOpen, setHeaderValue }) => {
  const { resdata, error, loading, postData: postRequest } = useAxios();
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();
  const { pathname } = router;
  const curPath = pathname.split("/")[1];
  const curSubPath = pathname.split("/")[2];
  const { navItems } = useNavigation();
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const ID = Cookies.get("id");
  const inputFile = useRef(null);
  const businessNam = useRef();
  const dispatch = useDispatch(); 
  const id = Cookies.get("id");
  const business = useSelector((state) => state?.getBusiness?.business?.business
  );

  const activeItemIndex = navItems.findIndex(
    (item) => item.section === curPath
  );
  const initialActiveIndex = curPath.length === 0 ? 0 : activeItemIndex;

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [showLoading, setShowLoading] = useState(false);

  const activeSubItemIndex = navItems[activeIndex]?.subItems
    ? navItems[activeIndex]?.subItems?.findIndex(
        (item) => item.subSection === curSubPath
      )
    : 0;
  const initialSubActiveIndex =
    curSubPath?.length === 0 ? 0 : activeSubItemIndex;
  const [activeSubIndex, setActiveSubIndex] = useState(initialSubActiveIndex);

  useEffect(() => {
    setActiveSubIndex(initialSubActiveIndex);
  }, [initialSubActiveIndex]);

  useEffect(() => {
    setActiveIndex(initialActiveIndex);
  }, [initialActiveIndex]);

  useEffect(()=>{
    dispatch(fetchBusiness(id));
  },[id])

  


  
  const storedValue = businessNam.current;
  const handleSignout = () =>{
    localStorage.removeItem('signupCurrentStep');
    Cookies.remove('token');
    Cookies.remove('id');
    signOut();
  }

  const handleFile = (event) =>{
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    postRequest(`/media`, event.target.files[0]); 
    
  }

  const handleBusinessImage = () =>{
    inputFile.current.click();
    
  }


  
  // useEffect(()=>{
  //   if(selectedImage){
  //     const formData = new FormData();
  //     console.log( selectedImage, "<=----formDathha")
  //     console.log(formData, "<=----formData")
  //     formData.append('file', selectedImage);
  //     postRequest(`/media`, selectedImage); 
  //   }
  // },[selectedImage]);
  
    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (!sidebar.current || !trigger.current) return;
        if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
        setSidebarOpen(false);
      };
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    });

  return (
    <>
      <div className="font-freesans">
        {/* Sidebar backdrop (mobile only) */}
        <div
          className={`fixed inset-0 bg-[#1F1D2B] bg-opacity-30 z-40 xl:hidden xl:z-auto transition-opacity duration-200 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
        ></div>

        {/* Sidebar */}
        <div
          id="sidebar"
          ref={sidebar}
          className={`flex flex-col absolute z-40 left-0 top-0 xl:static xl:left-auto xl:top-auto xl:translate-x-0 h-screen 
        overflow-y-scroll xl:overflow-y-auto no-scrollbar w-64 xl:w-64 xl:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#1F1D2B] 
        transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0 rounded-r-xl" : "-translate-x-64"
        }`}
        >
          {/* Sidebar header */}
          <div className="flex fixed justify-center items-center h-[67px] md:h-[70px] mt-2 mb-8 pr-3 sm:px-2">
            {/* Child flex container */}
            <div
              style={{ margin: "0px 20px" }}
              className="h-12 flex items-center justify-between w-full"
            >
              {/* Close button on the left */}
              <button
                ref={trigger}
                className="hidden text-slate-500 hover:text-slate-400 "
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
              >
                {/* <span className="sr-only">Close sidebar</span>
                <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                </svg> */}
              </button>

              {/* Logo in the center */}
              <div className="flex flex-row items-center justify-center xl:flex xl:items-center xl:justify-center ">
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
                  <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                    onChange={handleFile}
                  />
                  <img
                    src={"/logo.png"}
                    onClick={handleBusinessImage}
                    alt="Your Image Description"
                    className="cursor-pointer"
                  />
                </div>

                {/* <div className="flex flex-col items-center justify-center ml-3">
                  <span
                    className="mb-2"
                    style={{ color: "#FAFAFA", fontWeight: 600 }}
                  >
                    <img
                      src={"/logo.png"}
                      onClick={handleBusinessImage}
                      alt="Your Image Description"
                      className="cursor-pointer"
                    />
                  </span>{" "}
                </div> */}

                <div className="flex flex-col items-center justify-center ml-3">
                  <span
                    className="mb-2"
                    style={{ color: "#FAFAFA", fontWeight: 600 }}
                  >
                    {business}
                  </span>{" "}
                  <a style={{ color: "#FAFAFA", fontSize: "12px" }} href="#">
                    Visit Store
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="xl:mt-[90px] mt-[90px] xl:mt-[]"> */}
          <div className="xl:mt-[90px] mt-[90px] ">
            {/* Links */}
            {navItems.map((item, index) => {
              return (
                <div className="space-y-80" key={index}>
                  {/* Pages group */}
                  <div>
                    <ul className="mt-1 xl:mt-2 list-none m-2 p-0 ">
                      <div
                        style={
                          activeIndex === index
                            ? { backgroundColor: "white", borderRadius: 12 }
                            : { backgroundColor: "transparent" }
                        }
                        className=" p-[8px] xl:p-[12px]  w-[180px] font-freesans last:mb-0 "
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                          href={item.href}
                        >
                          <div
                            className={`no-underline block truncate transition duration-150 `}
                          >
                            <div className="flex flex-row items-center">
                              {item.icon}
                              <span
                                style={{
                                  color:
                                    activeIndex === index
                                      ? "#1F1D2B"
                                      : "#FAFAFA",
                                  fontWeight: activeIndex === index ? 500 : 400,
                                  marginLeft: 14,
                                }}
                              >
                                {item.label}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {item.subItems && activeIndex === index && (
                        <ul
                          style={
                            {
                              // display: ordersSubLinksVisible ? "block" : "none",
                            }
                          }
                          className={`list-none text-sm font-medium px-10 mb-4 transition-max-height duration-300"`}
                        >
                          {item.subItems.map((itm, idx) => {
                            return (
                              <li
                                className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-xl dark:border-gray-600 ${
                                  activeSubIndex === idx ? "font-bold" : ""
                                }`}
                              >
                                {" "}
                                <Link
                                  style={{
                                    textDecoration: "none",
                                    color: "#FAFAFA",
                                  }}
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
                            );
                          })}
                        </ul>
                      )}
                    </ul>
                  </div>
                </div>
              );
            })}
            <div className="space-y-80">
              <div>
                <ul className="mt-8 xl:mt-8 list-none m-2 p-0 ">
                  <div
                    style={
                      curPath === "settings"
                        ? { backgroundColor: "white", borderRadius: 12 }
                        : { backgroundColor: "transparent" }
                    }
                    className="px-[7px] py-[9px] xl:px-[12px] xl:py-[11px] w-[180px] font-freesans last:mb-0 "
                  >
                    <Link style={{ textDecoration: "none" }} href="/settings">
                      <div
                        className={`no-underline block truncate transition duration-150 `}
                      >
                        <div className="flex flex-row items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_341_938)">
                              <path
                                d="M11.665 8C9.62307 8 8 9.62307 8 11.665C8 13.7069 9.62307 15.33 11.665 15.33C13.7069 15.33 15.33 13.7069 15.33 11.665C15.33 9.62307 13.7069 8 11.665 8ZM11.665 14.2829C10.199 14.2829 9.04714 13.131 9.04714 11.665C9.04714 10.199 10.199 9.04714 11.665 9.04714C13.131 9.04714 14.2829 10.199 14.2829 11.665C14.2829 13.131 13.131 14.2829 11.665 14.2829Z"
                                fill={
                                  curPath === "settings" ? "#1F1D2B" : "#FAFAFA"
                                }
                              />
                              <path
                                d="M20.6051 9.67159L18.9137 9.12794L18.5513 8.22184L19.397 6.65128C19.5782 6.28884 19.5178 5.80559 19.2158 5.50356L17.766 4.05381C17.464 3.75178 16.9808 3.69137 16.6183 3.87259L15.0478 4.71828L14.1417 4.35584L13.598 2.66447C13.4772 2.30203 13.1148 2 12.6919 2H10.6381C10.2152 2 9.85281 2.30203 9.79241 2.72488L9.24875 4.41625C8.88631 4.47666 8.58428 4.59747 8.28225 4.77869L6.71169 3.933C6.34925 3.75178 5.866 3.81219 5.56397 4.11422L4.11422 5.56397C3.81219 5.866 3.75178 6.34925 3.933 6.71169L4.71828 8.22184C4.59747 8.52388 4.47666 8.88631 4.35584 9.18834L2.66447 9.732C2.30203 9.85281 2 10.2152 2 10.6381V12.6919C2 13.1148 2.30203 13.4772 2.72488 13.598L4.41625 14.1417L4.77869 15.0478L3.933 16.6183C3.75178 16.9808 3.81219 17.464 4.11422 17.766L5.56397 19.2158C5.866 19.5178 6.34925 19.5782 6.71169 19.397L8.28225 18.5513L9.18834 18.9137L9.732 20.6655C9.85281 21.028 10.2152 21.33 10.6381 21.33H12.6919C13.1148 21.33 13.4772 21.028 13.598 20.6655L14.1417 18.9137L15.0478 18.5513L16.6183 19.397C16.9808 19.5782 17.464 19.5178 17.766 19.2158L19.2158 17.766C19.5178 17.464 19.5782 16.9808 19.397 16.6183L18.5513 15.0478L18.9137 14.1417L20.6655 13.598C21.028 13.4772 21.33 13.1148 21.33 12.6919V10.6381C21.33 10.2152 21.028 9.79241 20.6051 9.67159ZM20.1219 12.5107L17.9472 13.1752L17.8868 13.4772L17.3432 14.7457L17.162 15.0478L18.2493 17.0412L17.0412 18.2493L15.0478 17.162L14.7457 17.3432C14.3229 17.5848 13.9 17.766 13.4772 17.8868L13.1752 17.9472L12.5107 20.1219H10.8193L10.1548 17.9472L9.85281 17.8868L8.58428 17.3432L8.28225 17.162L6.28884 18.2493L5.08072 17.0412L6.16803 15.0478L5.98681 14.7457C5.74519 14.3229 5.56397 13.9 5.44316 13.4772L5.38275 13.1752L3.20812 12.5107V10.8193L5.26194 10.2153L5.38275 9.91322C5.50356 9.42997 5.68478 9.00712 5.92641 8.58428L6.10763 8.28225L5.08072 6.28884L6.28884 5.08072L8.22184 6.16803L8.52388 5.98681C8.94672 5.74519 9.36956 5.56397 9.85281 5.44316L10.1548 5.32234L10.8193 3.20812H12.5107L13.1752 5.32234L13.4772 5.44316C13.9 5.56397 14.3229 5.74519 14.7457 5.98681L15.0478 6.16803L17.0412 5.08072L18.2493 6.28884L17.162 8.28225L17.3432 8.58428C17.5848 9.00712 17.766 9.42997 17.8868 9.85281L17.9472 10.1548L20.1219 10.8193V12.5107Z"
                                fill={
                                  curPath === "settings" ? "#1F1D2B" : "#FAFAFA"
                                }
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_341_938">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span
                            style={{
                              color:
                                curPath === "settings" ? "#1F1D2B" : "#FAFAFA",
                              fontWeight: curPath === "settings" ? 500 : 400,
                              marginLeft: 14,
                            }}
                          >
                            Settings
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div
                    style={
                      curPath === "sign-out"
                        ? { backgroundColor: "white", borderRadius: 12 }
                        : { backgroundColor: "transparent" }
                    }
                    className="px-[7px] py-[9px] xl:px-[12px] xl:py-[11px] w-[180px] font-freesans last:mb-0 "
                  >
                    <Link href="" style={{ textDecoration: "none" }}>
                      <div
                        className={`no-underline block truncate transition duration-150 `}
                        onClick={handleSignout}
                      >
                        <div className="flex flex-row items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M11 12H2M2 12L5.333 7.99997M2 12L5.333 16M10 6.99997V5.17397C10 4.89735 10.0574 4.62373 10.1686 4.37042C10.2797 4.11711 10.4422 3.88961 10.6458 3.70231C10.8493 3.515 11.0896 3.37196 11.3512 3.28222C11.6129 3.19249 11.8903 3.15801 12.166 3.18097L20.166 3.84697C20.6659 3.88861 21.132 4.11662 21.4717 4.48578C21.8114 4.85494 22 5.33829 22 5.83997V18.16C22 18.6617 21.8114 19.145 21.4717 19.5142C21.132 19.8833 20.6659 20.1113 20.166 20.153L12.166 20.82C11.8902 20.8429 11.6127 20.8084 11.351 20.7186C11.0893 20.6288 10.849 20.4857 10.6454 20.2983C10.4418 20.1109 10.2794 19.8833 10.1683 19.6298C10.0572 19.3764 9.99988 19.1027 10 18.826V17"
                              stroke={
                                curPath === "sign-out" ? "#1F1D2B" : "#FAFAFA"
                              }
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span
                            style={{
                              color:
                                curPath === "sign-out" ? "#1F1D2B" : "#FAFAFA",
                              fontWeight: curPath === "sign-out" ? 500 : 400,
                              marginLeft: 14,
                            }}
                          >
                            Sign Out
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          {/* Expand / collapse button */}
        </div>
      </div>

      {showLoading && (
        <Loading url="/login" message="Signing out..." duration={5000} />
      )}
    </>
  );
};

export default Sidebar;
