import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import SidebarLinkGroup from "./SidebarLinkGroup";
import { useRouter } from "next/router";

const Sidebar = ({ sidebarOpen, setSidebarOpen, setHeaderValue }) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const router = useRouter();
  const [shouldScroll, setShouldScroll] = useState(false);
  const [activeGroup, setActiveGroup] = useState("");

  useEffect(() => {
    const storedGroup = sessionStorage.getItem("activeGroup");
    if (storedGroup) {
      setActiveGroup(storedGroup);
    }
  }, []);

  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const ordersSubLinksVisible = activeGroup === "orders";
  const productsSubLinksVisible = activeGroup === "products";
  const analyticsSubLinksVisible = activeGroup === "analytics";
  const appearanceSubLinksVisible = activeGroup === "appearance";
  const appstoreSubLinksVisible = activeGroup === "appstore";
  const dashboardRef = useRef(null);
  const ordersRef = useRef(null);
  const deliveryRef = useRef(null);
  const productsRef = useRef(null);
  const analyticsRef = useRef(null);
  const paymentsRef = useRef(null);
  const discountsRef = useRef(null);
  const audienceRef = useRef(null);
  const builderRef = useRef(null);
  const appearanceRef = useRef(null);
  const toolsRef = useRef(null);
  const appStoreRef = useRef(null);
  const settingsRef = useRef(null);
  const scrollTargetRef = useRef(null);

  const intendedHeaderValue = useRef("");

  const handleLinkClick = (e, headerValue, path, ref, group) => {
    e.preventDefault();
    setActiveGroup(group);
    sessionStorage.setItem("activeGroup", group);
    intendedHeaderValue.current = headerValue;

    if (ref && ref.current) {
      scrollTargetRef.current = ref.current;
      setShouldScroll(true);
    }

    router.push(path);
  };

  useEffect(() => {
    if (
      shouldScroll &&
      scrollTargetRef.current &&
      document.body.contains(scrollTargetRef.current)
    ) {
      const timeout = setTimeout(() => {
        scrollTargetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        setShouldScroll(false);
        scrollTargetRef.current = null;
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [scrollTargetRef.current, shouldScroll]);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        sidebar.current?.contains(target) ||
        trigger.current?.contains(target)
      ) {
        return;
      }

      setTimeout(() => {
        setSidebarOpen(false);
      }, 200);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

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
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="mt-4 list-none m-4 p-0 ">
              {/* Dashboard */}
              <SidebarLinkGroup
                activecondition={activeGroup === "dashboard"}
                onClick={() => {
                  if (!sidebarExpanded) {
                    setSidebarExpanded(true);
                  }
                }}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Dashboard",
                            "/dashboard",
                            dashboardRef,
                            "dashboard"
                          )
                        }
                        style={{ textDecoration: "none" }}
                        href="/dashboard"
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          className={`no-underline block truncate transition duration-150 ${
                            activeGroup === "dashboard"
                              ? "text-[#1F1D2B]"
                              : "hover:text-white"
                          }`}
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
                                d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z"
                                stroke={
                                  activeGroup === "dashboard"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                              />
                              <path
                                d="M11 13.1V19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9V13.1C2.5 11.6 3.14 11 4.73 11H8.77C10.36 11 11 11.6 11 13.1Z"
                                stroke={
                                  activeGroup === "dashboard"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                              />
                              <path
                                d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z"
                                stroke={
                                  activeGroup === "dashboard"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                              />
                              <path
                                d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z"
                                stroke={
                                  activeGroup === "dashboard"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                              />
                            </svg>
                            <span
                              style={{
                                color:
                                  activeGroup === "dashboard"
                                    ? "#1F1D2B"
                                    : "#FAFAFA",
                                fontWeight:
                                  activeGroup === "dashboard" ? 500 : 400,
                                marginLeft: 14,
                              }}
                            >
                              Dashboard
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Orders */}
              <div className="mb-2" ref={ordersRef}>
                <SidebarLinkGroup
                  activecondition={activeGroup === "orders"}
                  onClick={() => {
                    if (!sidebarExpanded) {
                      setSidebarExpanded(true);
                    }
                  }}
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <Link
                          onClick={(e) =>
                            handleLinkClick(
                              e,
                              "All Orders",
                              "/orders/all-orders",
                              ordersRef,
                              "orders"
                            )
                          }
                          style={{ textDecoration: "none" }}
                          href="/orders/all-orders"
                        >
                          <div
                            className={`no-underline block truncate transition duration-150 ${
                              activeGroup === "orders"
                                ? "text-[#1F1D2B]"
                                : "hover:text-white"
                            }`}
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
                                  d="M3 17.1499C3 16.3084 3 15.8881 3.1809 15.5749C3.29938 15.3697 3.46979 15.1993 3.675 15.0808C3.9882 14.8999 4.4085 14.8999 5.25 14.8999C6.0915 14.8999 6.5118 14.8999 6.825 15.0808C7.03021 15.1993 7.20062 15.3697 7.3191 15.5749C7.5 15.8881 7.5 16.3084 7.5 17.1499C7.5 17.9914 7.5 18.4117 7.3191 18.7249C7.20062 18.9301 7.03021 19.1005 6.825 19.219C6.5118 19.3999 6.0915 19.3999 5.25 19.3999C4.4085 19.3999 3.9882 19.3999 3.675 19.219C3.46979 19.1005 3.29938 18.9301 3.1809 18.7249C3 18.4117 3 17.9914 3 17.1499ZM9.75 17.1499C9.75 16.3084 9.75 15.8881 9.9309 15.5749C10.0494 15.3697 10.2198 15.1993 10.425 15.0808C10.7382 14.8999 11.1585 14.8999 12 14.8999C12.8415 14.8999 13.2618 14.8999 13.575 15.0808C13.7802 15.1993 13.9506 15.3697 14.0691 15.5749C14.25 15.8881 14.25 16.3084 14.25 17.1499C14.25 17.9914 14.25 18.4117 14.0691 18.7249C13.9506 18.9301 13.7802 19.1005 13.575 19.219C13.2618 19.3999 12.8415 19.3999 12 19.3999C11.1585 19.3999 10.7382 19.3999 10.425 19.219C10.2198 19.1005 10.0494 18.9301 9.9309 18.7249C9.75 18.4117 9.75 17.9914 9.75 17.1499ZM16.5 17.1499C16.5 16.3084 16.5 15.8881 16.6809 15.5749C16.7994 15.3697 16.9698 15.1993 17.175 15.0808C17.4882 14.8999 17.9085 14.8999 18.75 14.8999C19.5915 14.8999 20.0118 14.8999 20.325 15.0808C20.5302 15.1993 20.7006 15.3697 20.8191 15.5749C21 15.8881 21 16.3084 21 17.1499C21 17.9914 21 18.4117 20.8191 18.7249C20.7006 18.9301 20.5302 19.1005 20.325 19.219C20.0118 19.3999 19.5915 19.3999 18.75 19.3999C17.9085 19.3999 17.4882 19.3999 17.175 19.219C16.9698 19.1005 16.7994 18.9301 16.6809 18.7249C16.5 18.4117 16.5 17.9914 16.5 17.1499Z"
                                  stroke={
                                    activeGroup === "orders"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="M5.25 14.9V9.5C5.25 7.3787 5.25 6.3176 5.9088 5.6588C6.5676 5 7.6287 5 9.75 5H10.65M14.25 5C16.3713 5 17.4315 5 18.0912 5.6588C18.75 6.3176 18.75 7.3787 18.75 9.5V12.2M18.75 12.2L20.55 10.4M18.75 12.2L16.95 10.4"
                                  stroke={
                                    activeGroup === "orders"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span
                                style={{
                                  color:
                                    activeGroup === "orders"
                                      ? "#1F1D2B"
                                      : "#FAFAFA",
                                  fontWeight:
                                    activeGroup === "orders" ? 500 : 400,
                                  marginLeft: 14,
                                }}
                              >
                                Orders
                              </span>
                            </div>
                          </div>
                        </Link>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>

                {ordersSubLinksVisible && (
                  <ul
                    style={{
                      display: ordersSubLinksVisible ? "block" : "none",
                    }}
                    className={`list-none text-sm font-medium px-10 mb-4 transition-max-height duration-300"`}
                  >
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/orders/all-orders"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      {" "}
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "All Orders",
                            "/orders/all-orders",
                            ordersRef,
                            "orders"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/orders/all-orders"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          All Orders
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/orders/abandoned-carts"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "All Orders",
                            "/orders/abandoned-carts",
                            ordersRef,
                            "orders"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/orders/abandoned-carts"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Abandoned Carts{" "}
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Delivery */}
              <SidebarLinkGroup
                activecondition={activeGroup === "delivery"}
                onClick={() => {
                  if (!sidebarExpanded) {
                    setSidebarExpanded(true);
                  }
                }}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Delivery",
                            "/delivery",
                            deliveryRef,
                            "delivery"
                          )
                        }
                        style={{ textDecoration: "none" }}
                        href="/delivery"
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          className={`no-underline block truncate transition duration-150 ${
                            activeGroup === "delivery"
                              ? "text-[#1F1D2B]"
                              : "hover:text-white"
                          }`}
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
                                d="M7.50554 15.2649C7.5318 15.3599 7.57651 15.4487 7.63711 15.5264C7.69771 15.604 7.77301 15.669 7.85872 15.7176C7.94443 15.7661 8.03886 15.7973 8.13663 15.8094C8.2344 15.8215 8.33359 15.8142 8.42854 15.7879C8.52348 15.7616 8.61233 15.7169 8.68999 15.6563C8.76766 15.5957 8.83263 15.5204 8.8812 15.4347C8.92976 15.349 8.96097 15.2546 8.97304 15.1568C8.98511 15.059 8.9778 14.9599 8.95154 14.8649L7.50554 15.2649ZM3.19954 4.72491C3.10422 4.69706 3.00432 4.68843 2.90564 4.6995C2.80695 4.71057 2.71145 4.74113 2.62467 4.7894C2.53789 4.83768 2.46156 4.9027 2.40011 4.9807C2.33866 5.05871 2.29331 5.14814 2.2667 5.24381C2.24008 5.33948 2.23273 5.43948 2.24507 5.53801C2.25741 5.63654 2.28919 5.73164 2.33857 5.8178C2.38795 5.90395 2.45395 5.97944 2.53274 6.03988C2.61153 6.10032 2.70153 6.14452 2.79754 6.16991L3.19954 4.72491ZM20.1875 15.7249C20.2852 15.7023 20.3773 15.6604 20.4585 15.6016C20.5397 15.5428 20.6083 15.4683 20.6602 15.3826C20.7121 15.2968 20.7463 15.2016 20.7607 15.1024C20.7752 15.0032 20.7696 14.9021 20.7444 14.8051C20.7191 14.7081 20.6746 14.6172 20.6136 14.5376C20.5526 14.4581 20.4763 14.3916 20.3891 14.3421C20.302 14.2926 20.2058 14.261 20.1062 14.2493C20.0067 14.2376 19.9058 14.246 19.8095 14.2739L20.1875 15.7249ZM10.1965 17.5589C10.5065 18.6789 9.82654 19.8619 8.62254 20.1749L8.99954 21.6259C10.9765 21.1129 12.1845 19.1239 11.6425 17.1589L10.1965 17.5589ZM8.62254 20.1749C7.41054 20.4899 6.19454 19.7859 5.88254 18.6559L4.43654 19.0559C4.97654 21.0109 7.03054 22.1379 8.99954 21.6259L8.62254 20.1749ZM5.88254 18.6559C5.57254 17.5359 6.25254 16.3529 7.45654 16.0399L7.07954 14.5899C5.10254 15.1029 3.89354 17.0909 4.43654 19.0559L5.88254 18.6559ZM7.45654 16.0399C8.66854 15.7249 9.88454 16.4289 10.1965 17.5589L11.6425 17.1589C11.1025 15.2039 9.04854 14.0769 7.07954 14.5889L7.45654 16.0399ZM8.95154 14.8649L6.79954 7.07491L5.35354 7.47491L7.50554 15.2649L8.95154 14.8649ZM4.90354 5.19691L3.19954 4.72491L2.79754 6.16991L4.50254 6.64291L4.90354 5.19691ZM6.79954 7.07491C6.67266 6.62476 6.43132 6.21516 6.09904 5.88603C5.76676 5.55691 5.35488 5.31948 4.90354 5.19691L4.50454 6.64291C4.92954 6.76091 5.24554 7.08391 5.35354 7.47491L6.79954 7.07491ZM11.1095 18.0849L20.1875 15.7249L19.8105 14.2739L10.7315 16.6339L11.1095 18.0849Z"
                                fill={
                                  activeGroup === "delivery"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                              />
                              <path
                                d="M19.1649 6.236C18.6799 4.48 18.4369 3.602 17.7249 3.203C17.0109 2.803 16.1059 3.039 14.2959 3.51L12.3759 4.008C10.5659 4.478 9.66095 4.714 9.24995 5.406C8.83795 6.097 9.07995 6.975 9.56495 8.73L10.0799 10.593C10.5649 12.348 10.8069 13.226 11.5199 13.625C12.2329 14.025 13.1379 13.789 14.9479 13.319L16.8679 12.819C18.6779 12.349 19.5829 12.114 19.9949 11.423C20.2209 11.043 20.2499 10.607 20.1489 10"
                                stroke={
                                  activeGroup === "delivery"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                            <span
                              style={{
                                color:
                                  activeGroup === "delivery"
                                    ? "#1F1D2B"
                                    : "#FAFAFA",
                                fontWeight:
                                  activeGroup === "delivery" ? 500 : 400,
                                marginLeft: 14,
                              }}
                            >
                              Delivery
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Products */}
              <div className="mb-2" ref={productsRef}>
                <SidebarLinkGroup
                  activecondition={activeGroup === "products"}
                  onClick={() => {
                    if (!sidebarExpanded) {
                      setSidebarExpanded(true);
                    }
                  }}
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <Link
                          onClick={(e) =>
                            handleLinkClick(
                              e,
                              "All Products",
                              "/products/all-products",
                              productsRef,
                              "products"
                            )
                          }
                          style={{ textDecoration: "none" }}
                          href="/products/all-products"
                        >
                          <div
                            role="button"
                            tabIndex={0}
                            className={`no-underline block truncate transition duration-150 ${
                              activeGroup === "products"
                                ? "text-[#1F1D2B]"
                                : "hover:text-white"
                            }`}
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
                                  d="M21 10.2058C20.9667 9.02492 20.855 8.27192 20.4767 7.6297C19.9381 6.71547 18.9689 6.20657 17.0314 5.19055L15.23 4.2448C13.6483 3.41523 12.8575 3 12.0072 3C11.1569 3 10.3661 3.41433 8.78443 4.2448L6.98299 5.19055C5.04554 6.20657 4.07636 6.71547 3.53773 7.6297C3 8.54303 3 9.68064 3 11.9532V12.0585C3 14.3329 3 15.4705 3.53773 16.3838C4.07636 17.298 5.04554 17.8069 6.98299 18.8239L8.78443 19.7687C10.3661 20.5992 11.1569 21.0144 12.0072 21.0144C12.8575 21.0144 13.6483 20.6001 15.23 19.7696L17.0314 18.8239C18.9689 17.8069 19.9381 17.2989 20.4767 16.3847C20.855 15.7425 20.9667 14.9895 21 13.8086M20.1137 7.95396L16.5108 9.7554M16.5108 9.7554L16.0604 9.98058L12.0072 12.0072M16.5108 9.7554V12.9079M16.5108 9.7554L7.95396 5.2518M12.0072 12.0072L3.90072 7.95396M12.0072 12.0072V20.5641"
                                  stroke={
                                    activeGroup === "products"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span
                                style={{
                                  color:
                                    activeGroup === "products"
                                      ? "#1F1D2B"
                                      : "#FAFAFA",
                                  fontWeight:
                                    activeGroup === "products" ? 500 : 400,
                                  marginLeft: 14,
                                }}
                              >
                                Products
                              </span>
                            </div>
                          </div>
                        </Link>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>

                {productsSubLinksVisible && (
                  <ul
                    style={{
                      display: productsSubLinksVisible ? "block" : "none",
                    }}
                    className={`list-none text-sm font-medium px-10 mb-4 transition-max-height duration-300"`}
                  >
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/products/all-products"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      {" "}
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "All Products",
                            "/products/all-products",
                            productsRef,
                            "products"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/products/all-products"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          All Products{" "}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/products/categories"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Categories",
                            "/products/categories",
                            productsRef,
                            "products"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/products/categories"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Categories{" "}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/products/inventory"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Inventory",
                            "/products/inventory",
                            productsRef,
                            "products"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/products/inventory"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Inventory{" "}
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Analytics */}
              <div className="mb-2" ref={analyticsRef}>
                <SidebarLinkGroup
                  activecondition={activeGroup === "analytics"}
                  onClick={() => {
                    if (!sidebarExpanded) {
                      setSidebarExpanded(true);
                    }
                  }}
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <Link
                          onClick={(e) =>
                            handleLinkClick(
                              e,
                              "Sales",
                              "/analytics/sales",
                              analyticsRef,
                              "analytics"
                            )
                          }
                          style={{ textDecoration: "none", color: "#FAFAFA" }}
                          href="/analytics/sales"
                        >
                          <div
                            role="button"
                            tabIndex={0}
                            className={`no-underline block truncate transition duration-150 ${
                              activeGroup === "analytics"
                                ? "text-[#1F1D2B]"
                                : "hover:text-white"
                            }`}
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
                                  d="M10 2C9.4 2 9 2.4 9 3V21C9 21.6 9.4 22 10 22C10.6 22 11 21.6 11 21V3C11 2.4 10.6 2 10 2ZM5 12C4.4 12 4 12.4 4 13V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V13C6 12.4 5.6 12 5 12ZM15 8C14.4 8 14 8.4 14 9V21C14 21.6 14.4 22 15 22C15.6 22 16 21.6 16 21V9C16 8.4 15.6 8 15 8ZM20 16C19.4 16 19 16.4 19 17V21C19 21.6 19.4 22 20 22C20.6 22 21 21.6 21 21V17C21 16.4 20.6 16 20 16Z"
                                  fill={
                                    activeGroup === "analytics"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                />
                              </svg>
                              <span
                                style={{
                                  color:
                                    activeGroup === "analytics"
                                      ? "#1F1D2B"
                                      : "#FAFAFA",
                                  fontWeight:
                                    activeGroup === "analytics" ? 500 : 400,
                                  marginLeft: 14,
                                }}
                              >
                                Analytics
                              </span>
                            </div>
                          </div>
                        </Link>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>

                {analyticsSubLinksVisible && (
                  <ul
                    style={{
                      display: analyticsSubLinksVisible ? "block" : "none",
                    }}
                    className={`list-none text-sm font-medium px-10 mb-4 transition-max-height duration-300"`}
                  >
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/analytics/sales"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      {" "}
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Sales",
                            "/analytics/sales",
                            analyticsRef,
                            "analytics"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/analytics/sales"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Sales
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/analytics/traffic"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Traffic",
                            "/analytics/traffic",
                            analyticsRef,
                            "analytics"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/analytics/traffic"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Traffic{" "}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/analytics/products"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Products",
                            "/analytics/products",
                            analyticsRef,
                            "analytics"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/analytics/products"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Products{" "}
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Payments */}
              <SidebarLinkGroup
                activecondition={activeGroup === "payments"}
                onClick={() => {
                  if (!sidebarExpanded) {
                    setSidebarExpanded(true);
                  }
                }}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Payouts",
                            "/payments",
                            paymentsRef,
                            "payments"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/payments"
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          className={`no-underline block truncate transition duration-150 ${
                            activeGroup === "payments"
                              ? "text-[#1F1D2B]"
                              : "hover:text-white"
                          }`}
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
                                d="M18.9231 12.69V9.92081C18.9231 9.55359 18.7772 9.20141 18.5175 8.94174C18.2579 8.68207 17.9057 8.5362 17.5385 8.5362H4.38462C4.01739 8.5362 3.66521 8.68207 3.40554 8.94174C3.14588 9.20141 3 9.55359 3 9.92081V19.6131C3 19.9803 3.14588 20.3325 3.40554 20.5922C3.66521 20.8519 4.01739 20.9977 4.38462 20.9977H17.5385C17.9057 20.9977 18.2579 20.8519 18.5175 20.5922C18.7772 20.3325 18.9231 19.9803 18.9231 19.6131V16.1516M7.62461 5.07466L15.4754 3.02543C15.5636 3.00057 15.6559 2.99385 15.7468 3.00566C15.8377 3.01747 15.9253 3.04758 16.0042 3.09417C16.0831 3.14075 16.1518 3.20284 16.2061 3.2767C16.2604 3.35056 16.2991 3.43464 16.32 3.52389L16.7077 5.07466"
                                stroke={
                                  activeGroup === "payments"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M20.3081 12.6901H16.8466C16.4643 12.6901 16.1543 13 16.1543 13.3824V15.4593C16.1543 15.8416 16.4643 16.1516 16.8466 16.1516H20.3081C20.6905 16.1516 21.0005 15.8416 21.0005 15.4593V13.3824C21.0005 13 20.6905 12.6901 20.3081 12.6901Z"
                                stroke={
                                  activeGroup === "payments"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span
                              style={{
                                color:
                                  activeGroup === "payments"
                                    ? "#1F1D2B"
                                    : "#FAFAFA",
                                fontWeight:
                                  activeGroup === "payments" ? 500 : 400,
                                marginLeft: 14,
                              }}
                            >
                              Payments
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Discounts */}
              <SidebarLinkGroup
                activecondition={activeGroup === "discounts"}
                onClick={() => {
                  if (!sidebarExpanded) {
                    setSidebarExpanded(true);
                  }
                }}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Discounts",
                            "/discounts",
                            discountsRef,
                            "discounts"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/discounts"
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          className={`no-underline block truncate transition duration-150 ${
                            activeGroup === "discounts"
                              ? "text-[#1F1D2B]"
                              : "hover:text-white"
                          }`}
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
                                d="M10.5105 3.66489C10.698 3.45539 10.9277 3.2878 11.1844 3.17306C11.4412 3.05833 11.7192 2.99902 12.0005 2.99902C12.2817 2.99902 12.5597 3.05833 12.8165 3.17306C13.0732 3.2878 13.3029 3.45539 13.4905 3.66489L14.1905 4.44689C14.3905 4.67039 14.6383 4.84602 14.9154 4.96079C15.1926 5.07556 15.492 5.12652 15.7915 5.10989L16.8415 5.05189C17.1223 5.03641 17.4032 5.08034 17.666 5.18082C17.9287 5.28129 18.1672 5.43605 18.3661 5.63498C18.5649 5.83392 18.7196 6.07256 18.8199 6.33532C18.9203 6.59808 18.9641 6.87906 18.9485 7.15989L18.8905 8.20889C18.874 8.50823 18.925 8.80743 19.0398 9.08438C19.1545 9.36133 19.3301 9.60894 19.5535 9.80889L20.3355 10.5089C20.5451 10.6965 20.7129 10.9262 20.8277 11.183C20.9425 11.4399 21.0019 11.7181 21.0019 11.9994C21.0019 12.2807 20.9425 12.5589 20.8277 12.8157C20.7129 13.0726 20.5451 13.3023 20.3355 13.4899L19.5535 14.1899C19.33 14.39 19.1543 14.6377 19.0396 14.9149C18.9248 15.192 18.8738 15.4914 18.8905 15.7909L18.9485 16.8409C18.9639 17.1217 18.92 17.4027 18.8195 17.6654C18.7191 17.9281 18.5643 18.1667 18.3654 18.3655C18.1664 18.5644 17.9278 18.719 17.665 18.8194C17.4023 18.9197 17.1213 18.9635 16.8405 18.9479L15.7915 18.8899C15.4921 18.8734 15.1929 18.9245 14.916 19.0392C14.639 19.154 14.3914 19.3295 14.1915 19.5529L13.4915 20.3349C13.3039 20.5446 13.0741 20.7123 12.8173 20.8271C12.5605 20.942 12.2823 21.0013 12.001 21.0013C11.7196 21.0013 11.4414 20.942 11.1846 20.8271C10.9278 20.7123 10.698 20.5446 10.5105 20.3349L9.81045 19.5529C9.61039 19.3294 9.36262 19.1538 9.08549 19.039C8.80835 18.9242 8.50895 18.8733 8.20945 18.8899L7.15945 18.9479C6.87861 18.9634 6.59766 18.9194 6.33494 18.819C6.07223 18.7185 5.83366 18.5637 5.63482 18.3648C5.43598 18.1659 5.28133 17.9272 5.18098 17.6645C5.08064 17.4017 5.03684 17.1207 5.05245 16.8399L5.11045 15.7909C5.12692 15.4916 5.07589 15.1924 4.96113 14.9154C4.84637 14.6385 4.67081 14.3908 4.44745 14.1909L3.66545 13.4909C3.45578 13.3033 3.28805 13.0736 3.17322 12.8167C3.05838 12.5599 2.99902 12.2817 2.99902 12.0004C2.99902 11.7191 3.05838 11.4409 3.17322 11.184C3.28805 10.9272 3.45578 10.6975 3.66545 10.5099L4.44745 9.8099C4.67095 9.60983 4.84658 9.36206 4.96135 9.08493C5.07611 8.80779 5.12707 8.50839 5.11045 8.20889L5.05245 7.15889C5.03712 6.87813 5.08116 6.59729 5.1817 6.3347C5.28223 6.0721 5.43701 5.83366 5.63593 5.63493C5.83485 5.4362 6.07344 5.28164 6.33613 5.18135C6.59882 5.08106 6.8797 5.03729 7.16045 5.05289L8.20945 5.11089C8.50879 5.12736 8.80799 5.07633 9.08494 4.96157C9.36189 4.84681 9.6095 4.67125 9.80945 4.44789L10.5095 3.66589L10.5105 3.66489Z"
                                stroke={
                                  activeGroup === "discounts"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.5"
                              />
                              <path
                                d="M9.5 9.5H9.51V9.51H9.5V9.5ZM14.5 14.5H14.51V14.51H14.5V14.5Z"
                                stroke={
                                  activeGroup === "discounts"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 9L9 15"
                                stroke={
                                  activeGroup === "discounts"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span
                              style={{
                                color:
                                  activeGroup === "discounts"
                                    ? "#1F1D2B"
                                    : "#FAFAFA",
                                fontWeight:
                                  activeGroup === "discounts" ? 500 : 400,
                                marginLeft: 14,
                              }}
                            >
                              Discounts
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Audience */}
              <SidebarLinkGroup
                activecondition={activeGroup === "audience"}
                onClick={() => {
                  if (!sidebarExpanded) {
                    setSidebarExpanded(true);
                  }
                }}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Audience",
                            "/audience",
                            audienceRef,
                            "audience"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/audience"
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          className={`no-underline block truncate transition duration-150 ${
                            activeGroup === "audience"
                              ? "text-[#1F1D2B]"
                              : "hover:text-white"
                          }`}
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
                                d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
                                stroke={
                                  activeGroup === "audience"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.9704 14.4399C18.3404 14.6699 19.8504 14.4299 20.9104 13.7199C22.3204 12.7799 22.3204 11.2399 20.9104 10.2999C19.8404 9.58992 18.3104 9.34991 16.9404 9.58991"
                                stroke={
                                  activeGroup === "audience"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z"
                                stroke={
                                  activeGroup === "audience"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.00043 14.4399C5.63043 14.6699 4.12043 14.4299 3.06043 13.7199C1.65043 12.7799 1.65043 11.2399 3.06043 10.2999C4.13043 9.58992 5.66043 9.34991 7.03043 9.58991"
                                stroke={
                                  activeGroup === "audience"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z"
                                stroke={
                                  activeGroup === "audience"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14.9097 17.7799C13.3197 16.7199 10.6897 16.7199 9.08973 17.7799C7.67973 18.7199 7.67973 20.2599 9.08973 21.1999C10.6897 22.2699 13.3097 22.2699 14.9097 21.1999"
                                stroke={
                                  activeGroup === "audience"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>{" "}
                            <span
                              style={{
                                color:
                                  activeGroup === "audience"
                                    ? "#1F1D2B"
                                    : "#FAFAFA",
                                fontWeight:
                                  activeGroup === "audience" ? 500 : 400,
                                marginLeft: 14,
                              }}
                            >
                              Audience
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Builder */}
              <SidebarLinkGroup
                activecondition={activeGroup === "builder"}
                onClick={() => {
                  if (!sidebarExpanded) {
                    setSidebarExpanded(true);
                  }
                }}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Page Builder",
                            "/builder",
                            builderRef,
                            "builder"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/builder"
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          className={`no-underline block truncate transition duration-150 ${
                            activeGroup === "builder"
                              ? "text-[#1F1D2B]"
                              : "hover:text-white"
                          }`}
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
                                d="M18.6703 18.67L20.8904 17.56V14.78M14.2204 9.78L12.0004 10.89L14.2204 9.78ZM12.0004 10.89L9.78035 9.78L12.0004 10.89ZM12.0004 10.89V13.67V10.89ZM20.8904 6.44L18.6703 7.55L20.8904 6.44ZM20.8904 6.44L18.6703 5.33L20.8904 6.44ZM20.8904 6.44V9.22V6.44ZM14.2204 3.11L12.0004 2L9.78035 3.11H14.2204ZM3.11035 6.44L5.33035 5.33L3.11035 6.44ZM3.11035 6.44L5.33035 7.55L3.11035 6.44ZM3.11035 6.44V9.22V6.44ZM12.0004 22L9.78035 20.89L12.0004 22ZM12.0004 22L14.2204 20.89L12.0004 22ZM12.0004 22V19.22V22ZM5.33035 18.67L3.11035 17.56V14.78L5.33035 18.67Z"
                                stroke={
                                  activeGroup === "builder"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>{" "}
                            <span
                              style={{
                                color:
                                  activeGroup === "builder"
                                    ? "#1F1D2B"
                                    : "#FAFAFA",
                                fontWeight:
                                  activeGroup === "builder" ? 500 : 400,
                                marginLeft: 14,
                              }}
                            >
                              Builder
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Appearance */}
              <div className="mb-2" ref={appearanceRef}>
                <SidebarLinkGroup
                  activecondition={activeGroup === "appearance"}
                  onClick={() => {
                    if (!sidebarExpanded) {
                      setSidebarExpanded(true);
                    }
                  }}
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <Link
                          onClick={(e) =>
                            handleLinkClick(
                              e,
                              "Themes",
                              "/appearance/themes",
                              appearanceRef,
                              "appearance"
                            )
                          }
                          style={{ textDecoration: "none", color: "#FAFAFA" }}
                          href="/appearance/themes"
                        >
                          <div
                            role="button"
                            tabIndex={0}
                            className={`no-underline block truncate transition duration-150 ${
                              activeGroup === "appearance"
                                ? "text-[#1F1D2B]"
                                : "hover:text-white"
                            }`}
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
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.0496 16.3698C19.2019 12.066 16.4625 7.60654 11.9496 6.39724C6.88081 5.03827 -0.303695 8.56281 1.20377 12.825C1.65874 14.1127 2.55086 14.418 4.38976 14.4442L4.51805 14.4466C5.82476 14.462 6.26547 14.5653 6.51137 14.9645C6.76559 15.3779 6.76796 15.8625 6.57552 17.0885C6.49593 17.5898 6.47098 17.7644 6.44129 18.0317C6.26904 19.576 6.52088 20.733 7.49853 21.7855C10.5681 25.0926 16.75 21.2165 18.0496 16.3698ZM2.32278 12.4295C1.24416 9.37653 7.33222 6.39011 11.642 7.54477C15.5348 8.58776 17.8809 12.4069 16.9021 16.0621C15.8044 20.1557 10.6216 23.4046 8.36927 20.9801C7.66365 20.2198 7.48428 19.3966 7.62089 18.1647C7.6494 17.9212 7.67315 17.7561 7.74918 17.2738C7.98676 15.7592 7.9832 15.0928 7.52348 14.3432C6.9711 13.4451 6.26547 13.2812 4.53349 13.2598L4.40639 13.2574C3.02959 13.2384 2.55086 13.0745 2.32278 12.4295Z"
                                  fill={
                                    activeGroup === "appearance"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                />
                                <path
                                  d="M6.20071 11.8152C5.8069 11.8152 5.42921 11.6588 5.15074 11.3803C4.87226 11.1018 4.71582 10.7241 4.71582 10.3303C4.71582 9.93649 4.87226 9.5588 5.15074 9.28033C5.42921 9.00186 5.8069 8.84541 6.20071 8.84541C6.59453 8.84541 6.97222 9.00186 7.25069 9.28033C7.52916 9.5588 7.68561 9.93649 7.68561 10.3303C7.68561 10.7241 7.52916 11.1018 7.25069 11.3803C6.97222 11.6588 6.59453 11.8152 6.20071 11.8152ZM10.9524 11.8152C10.5586 11.8152 10.1809 11.6588 9.90239 11.3803C9.62392 11.1018 9.46748 10.7241 9.46748 10.3303C9.46748 9.93649 9.62392 9.5588 9.90239 9.28033C10.1809 9.00186 10.5586 8.84541 10.9524 8.84541C11.3462 8.84541 11.7239 9.00186 12.0024 9.28033C12.2808 9.5588 12.4373 9.93649 12.4373 10.3303C12.4373 10.7241 12.2808 11.1018 12.0024 11.3803C11.7239 11.6588 11.3462 11.8152 10.9524 11.8152ZM13.9222 15.3789C13.5283 15.3789 13.1507 15.2225 12.8722 14.944C12.5937 14.6656 12.4373 14.2879 12.4373 13.894C12.4373 13.5002 12.5937 13.1225 12.8722 12.8441C13.1507 12.5656 13.5283 12.4092 13.9222 12.4092C14.316 12.4092 14.6937 12.5656 14.9721 12.8441C15.2506 13.1225 15.4071 13.5002 15.4071 13.894C15.4071 14.2879 15.2506 14.6656 14.9721 14.944C14.6937 15.2225 14.316 15.3789 13.9222 15.3789ZM12.1403 19.5366C11.7465 19.5366 11.3688 19.3802 11.0903 19.1017C10.8118 18.8233 10.6554 18.4456 10.6554 18.0518C10.6554 17.6579 10.8118 17.2802 11.0903 17.0018C11.3688 16.7233 11.7465 16.5669 12.1403 16.5669C12.5341 16.5669 12.9118 16.7233 13.1903 17.0018C13.4687 17.2802 13.6252 17.6579 13.6252 18.0518C13.6252 18.4456 13.4687 18.8233 13.1903 19.1017C12.9118 19.3802 12.5341 19.5366 12.1403 19.5366ZM16.4405 4.81244C16.5814 4.73698 16.736 4.69071 16.8952 4.6764C17.0543 4.66209 17.2147 4.68004 17.3668 4.72918C17.5188 4.77831 17.6594 4.85761 17.7801 4.96234C17.9008 5.06707 17.9991 5.19507 18.0692 5.33869L22.9313 15.3172C23.0125 15.4965 23.0223 15.7001 22.9588 15.8864C22.8953 16.0728 22.7632 16.2279 22.5893 16.3204C22.4155 16.4128 22.213 16.4356 22.023 16.3841C21.833 16.3325 21.6697 16.2106 21.5664 16.043L15.9737 6.45652C15.8933 6.31861 15.8416 6.16589 15.8216 6.00751C15.8017 5.84913 15.8139 5.68835 15.8577 5.53483C15.9014 5.3813 15.9756 5.23817 16.076 5.11404C16.1764 4.98991 16.3008 4.88733 16.4417 4.81244H16.4405Z"
                                  fill={
                                    activeGroup === "appearance"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.2615 4.66864C14.84 5.75558 15.8129 6.05969 16.7538 5.55958C17.6934 5.06065 17.9868 4.083 17.4083 2.99606C16.7478 1.75112 15.3318 0.622604 14.3934 1.12034C13.4549 1.61926 13.5999 3.42371 14.2627 4.66864H14.2615ZM15.3104 4.11032C15.1001 3.68794 14.9711 3.22975 14.9303 2.75966C14.9126 2.56314 14.9198 2.36518 14.9517 2.17046L14.9731 2.18115C15.0325 2.20966 15.2166 2.29519 15.4518 2.48288C15.8106 2.76917 16.1669 3.19088 16.3594 3.55319C16.6314 4.06399 16.5542 4.32058 16.1954 4.51184C15.8391 4.7019 15.5825 4.62113 15.3104 4.11151V4.11032Z"
                                  fill={
                                    activeGroup === "appearance"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                />
                              </svg>{" "}
                              <span
                                style={{
                                  color:
                                    activeGroup === "appearance"
                                      ? "#1F1D2B"
                                      : "#FAFAFA",
                                  fontWeight:
                                    activeGroup === "appearance" ? 500 : 400,
                                  marginLeft: 14,
                                }}
                              >
                                Appearance
                              </span>
                            </div>
                          </div>
                        </Link>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>

                {appearanceSubLinksVisible && (
                  <ul
                    style={{
                      display: appearanceSubLinksVisible ? "block" : "none",
                    }}
                    className={`list-none text-sm font-medium px-10 mb-4 transition-max-height duration-300"`}
                  >
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/appearance/themes"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      {" "}
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Themes",
                            "/appearance/themes",
                            appearanceRef,
                            "appearance"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/appearance/themes"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Themes{" "}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/appearance/pages"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Pages",
                            "/appearance/pages",
                            appearanceRef,
                            "appearance"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/appearance/pages"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Pages{" "}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/appearance/menu"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Menu",
                            "/appearance/menu",
                            appearanceRef,
                            "appearance"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/appearance/menu"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Menu{" "}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/appearance/blogs"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Blogs",
                            "/appearance/blogs",
                            appearanceRef,
                            "appearance"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/appearance/blogs"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Blogs{" "}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/appearance/media"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Media",
                            "/appearance/media",
                            appearanceRef,
                            "appearance"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/appearance/media"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Media{" "}
                        </div>
                      </Link>
                    </li>
                    <li
                      className={`w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600 ${
                        router.pathname === "/appearance/customize-theme"
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Customize Theme",
                            "/appearance/customize-theme",
                            appearanceRef,
                            "appearance"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/appearance/customize-theme"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Customize Theme{" "}
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Tools */}
              <SidebarLinkGroup
                activecondition={activeGroup === "tools"}
                onClick={() => {
                  if (!sidebarExpanded) {
                    setSidebarExpanded(true);
                  }
                }}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Tools",
                            "/tools-page",
                            toolsRef,
                            "tools"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/tools"
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          className={`no-underline block truncate transition duration-150 ${
                            activeGroup === "tools"
                              ? "text-[#1F1D2B]"
                              : "hover:text-white"
                          }`}
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
                                d="M8.20858 3.3665C8.19805 3.37035 8.18821 3.37588 8.17946 3.38288C7.30969 3.99056 6.59959 4.79934 6.10956 5.74042C5.61953 6.68151 5.36408 7.72703 5.36495 8.78805C5.36449 9.95156 5.67184 11.0945 6.2558 12.1008C6.83976 13.1072 7.67955 13.9411 8.68995 14.5181C9.20862 14.8156 9.58353 15.3871 9.54622 16.0486V16.0505L9.25776 21.563C9.24835 21.7438 9.16752 21.9134 9.03304 22.0345C8.89857 22.1557 8.72147 22.2185 8.54071 22.2091C8.35995 22.1997 8.19033 22.1188 8.06917 21.9844C7.94801 21.8499 7.88523 21.6728 7.89464 21.492L8.1831 15.9758V15.9722C8.18856 15.8903 8.14033 15.7766 8.01202 15.7028C6.79295 15.0064 5.77974 13.9999 5.07514 12.7855C4.37055 11.5712 3.99963 10.192 4 8.78805C3.99896 7.5076 4.30717 6.24583 4.89843 5.11006C5.48968 3.97429 6.34649 2.99811 7.39598 2.26454C7.62076 2.10302 7.88816 2.01134 8.16476 2.00099C8.44136 1.99063 8.71488 2.06204 8.9511 2.2063C9.39153 2.47201 9.68726 2.96612 9.68726 3.53484V7.8244C9.68725 7.86327 9.6972 7.90149 9.71616 7.93542C9.73511 7.96935 9.76245 7.99786 9.79555 8.01822L11.843 9.27852C11.9158 9.32402 12.0086 9.32402 12.0814 9.27852L14.1288 8.01822C14.1619 7.99786 14.1892 7.96935 14.2082 7.93542C14.2271 7.90149 14.2371 7.86327 14.2371 7.8244V3.53575C14.2371 2.96612 14.5328 2.47201 14.9741 2.2063C15.2103 2.06224 15.4836 1.99093 15.76 2.00129C16.0364 2.01165 16.3037 2.10321 16.5284 2.26454C17.5778 2.99836 18.4346 3.97472 19.0258 5.11063C19.6171 6.24653 19.9253 7.5084 19.9243 8.78896C19.9246 10.1929 19.5536 11.572 18.8488 12.7862C18.144 14.0005 17.1306 15.0067 15.9114 15.7028C15.784 15.7766 15.7358 15.8903 15.7403 15.9722V15.9758L16.0297 21.492C16.0344 21.5815 16.0213 21.6711 15.9914 21.7555C15.9614 21.84 15.9152 21.9178 15.8552 21.9844C15.7952 22.0509 15.7227 22.1051 15.6417 22.1436C15.5608 22.1822 15.4731 22.2044 15.3836 22.2091C15.2941 22.2137 15.2046 22.2007 15.1201 22.1708C15.0356 22.1408 14.9579 22.0945 14.8913 22.0345C14.8247 21.9746 14.7706 21.902 14.732 21.8211C14.6935 21.7402 14.6712 21.6525 14.6666 21.563L14.3781 16.0505V16.0486C14.3408 15.3871 14.7148 14.8156 15.2335 14.5181C16.2441 13.9413 17.0841 13.1074 17.6683 12.1011C18.2524 11.0947 18.5598 9.95167 18.5594 8.78805C18.5603 7.72703 18.3048 6.68151 17.8148 5.74042C17.3247 4.79934 16.6146 3.99056 15.7449 3.38288C15.7361 3.37588 15.7263 3.37035 15.7158 3.3665L15.7067 3.36559C15.7039 3.36559 15.6939 3.36559 15.6784 3.37469C15.6457 3.39471 15.602 3.44658 15.602 3.53575V7.82349C15.602 8.37675 15.3154 8.88997 14.844 9.17934L12.7966 10.4396C12.5457 10.594 12.2568 10.6758 11.9622 10.6758C11.6675 10.6758 11.3787 10.594 11.1277 10.4396L9.08032 9.18024C8.84898 9.03771 8.6579 8.83842 8.52524 8.60128C8.39258 8.36415 8.32273 8.09703 8.32232 7.82531V3.53484C8.32232 3.44567 8.27864 3.3938 8.24588 3.37469C8.23744 3.3691 8.22776 3.36566 8.21768 3.36468L8.20858 3.36559V3.3665Z"
                                fill={
                                  activeGroup === "tools"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                              />
                            </svg>
                            <span
                              style={{
                                color:
                                  activeGroup === "tools"
                                    ? "#1F1D2B"
                                    : "#FAFAFA",
                                fontWeight: activeGroup === "tools" ? 500 : 400,
                                marginLeft: 14,
                              }}
                            >
                              Tools
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* App Store */}
              <div className="mb-2" ref={appStoreRef}>
                <SidebarLinkGroup
                  activecondition={activeGroup === "appstore"}
                  onClick={() => {
                    if (!sidebarExpanded) {
                      setSidebarExpanded(true);
                    }
                  }}
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <Link
                          onClick={(e) =>
                            handleLinkClick(
                              e,
                              "All Plugins",
                              "/appstore/all-apps",
                              appStoreRef,
                              "appstore"
                            )
                          }
                          style={{ textDecoration: "none", color: "#FAFAFA" }}
                          href="/appstore/all-apps"
                        >
                          <div
                            role="button"
                            tabIndex={0}
                            className={`no-underline block truncate transition duration-150 ${
                              activeGroup === "appstore"
                                ? "text-[#1F1D2B]"
                                : "hover:text-white"
                            }`}
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
                                  d="M9.57703 13.731H3.69232C3.30996 13.731 3 14.0409 3 14.4233V20.308C3 20.6903 3.30996 21.0003 3.69232 21.0003H9.57703C9.95939 21.0003 10.2694 20.6903 10.2694 20.308V14.4233C10.2694 14.0409 9.95939 13.731 9.57703 13.731Z"
                                  stroke={
                                    activeGroup === "appstore"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M20.3075 13.731H14.4228C14.0404 13.731 13.7305 14.0409 13.7305 14.4233V20.308C13.7305 20.6903 14.0404 21.0003 14.4228 21.0003H20.3075C20.6899 21.0003 20.9998 20.6903 20.9998 20.308V14.4233C20.9998 14.0409 20.6899 13.731 20.3075 13.731Z"
                                  stroke={
                                    activeGroup === "appstore"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.9481 3H9.06341C8.68106 3 8.37109 3.30996 8.37109 3.69232V9.57703C8.37109 9.95939 8.68106 10.2694 9.06341 10.2694H14.9481C15.3305 10.2694 15.6404 9.95939 15.6404 9.57703V3.69232C15.6404 3.30996 15.3305 3 14.9481 3Z"
                                  stroke={
                                    activeGroup === "appstore"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>{" "}
                              <span
                                style={{
                                  color:
                                    activeGroup === "appstore"
                                      ? "#1F1D2B"
                                      : "#FAFAFA",
                                  fontWeight:
                                    activeGroup === "appstore" ? 500 : 400,
                                  marginLeft: 14,
                                }}
                              >
                                App Store
                              </span>
                            </div>
                          </div>
                        </Link>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>

                {appstoreSubLinksVisible && (
                  <ul
                    style={{
                      display: appstoreSubLinksVisible ? "block" : "none",
                    }}
                    className={`list-none text-sm font-medium px-10 mb-4 transition-max-height duration-300"`}
                  >
                    <li className="w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      {" "}
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "All Plugins",
                            "/appstore/all-apps",
                            appStoreRef,
                            "appstore"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/appstore/all-apps"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          All Apps
                        </div>
                      </Link>
                    </li>
                    <li className="w-full px-4 py-2 mb-1 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "All Plugins",
                            "/appstore/installed-apps",
                            appStoreRef,
                            "appstore"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="/appstore/installed-apps"
                      >
                        <div
                          role="button"
                          className="block w-full h-full cursor-pointer"
                        >
                          Installed Apps{" "}
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </ul>

            <ul className="mt-14 list-none m-4 p-0 ">
              {/* Settings */}
              <SidebarLinkGroup
                activecondition={activeGroup === "settings"}
                onClick={() => {
                  if (!sidebarExpanded) {
                    setSidebarExpanded(true);
                  }
                }}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            "Settings",
                            "#",
                            settingsRef,
                            "settings"
                          )
                        }
                        style={{ textDecoration: "none", color: "#FAFAFA" }}
                        href="#"
                      >
                        <div
                          role="button"
                          tabIndex={0}
                          className={`no-underline block truncate transition duration-150 ${
                            activeGroup === "settings"
                              ? "text-[#1F1D2B]"
                              : "hover:text-white"
                          }`}
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
                                    activeGroup === "settings"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
                                  }
                                />
                                <path
                                  d="M20.6051 9.67159L18.9137 9.12794L18.5513 8.22184L19.397 6.65128C19.5782 6.28884 19.5178 5.80559 19.2158 5.50356L17.766 4.05381C17.464 3.75178 16.9808 3.69137 16.6183 3.87259L15.0478 4.71828L14.1417 4.35584L13.598 2.66447C13.4772 2.30203 13.1148 2 12.6919 2H10.6381C10.2152 2 9.85281 2.30203 9.79241 2.72488L9.24875 4.41625C8.88631 4.47666 8.58428 4.59747 8.28225 4.77869L6.71169 3.933C6.34925 3.75178 5.866 3.81219 5.56397 4.11422L4.11422 5.56397C3.81219 5.866 3.75178 6.34925 3.933 6.71169L4.71828 8.22184C4.59747 8.52388 4.47666 8.88631 4.35584 9.18834L2.66447 9.732C2.30203 9.85281 2 10.2152 2 10.6381V12.6919C2 13.1148 2.30203 13.4772 2.72488 13.598L4.41625 14.1417L4.77869 15.0478L3.933 16.6183C3.75178 16.9808 3.81219 17.464 4.11422 17.766L5.56397 19.2158C5.866 19.5178 6.34925 19.5782 6.71169 19.397L8.28225 18.5513L9.18834 18.9137L9.732 20.6655C9.85281 21.028 10.2152 21.33 10.6381 21.33H12.6919C13.1148 21.33 13.4772 21.028 13.598 20.6655L14.1417 18.9137L15.0478 18.5513L16.6183 19.397C16.9808 19.5782 17.464 19.5178 17.766 19.2158L19.2158 17.766C19.5178 17.464 19.5782 16.9808 19.397 16.6183L18.5513 15.0478L18.9137 14.1417L20.6655 13.598C21.028 13.4772 21.33 13.1148 21.33 12.6919V10.6381C21.33 10.2152 21.028 9.79241 20.6051 9.67159ZM20.1219 12.5107L17.9472 13.1752L17.8868 13.4772L17.3432 14.7457L17.162 15.0478L18.2493 17.0412L17.0412 18.2493L15.0478 17.162L14.7457 17.3432C14.3229 17.5848 13.9 17.766 13.4772 17.8868L13.1752 17.9472L12.5107 20.1219H10.8193L10.1548 17.9472L9.85281 17.8868L8.58428 17.3432L8.28225 17.162L6.28884 18.2493L5.08072 17.0412L6.16803 15.0478L5.98681 14.7457C5.74519 14.3229 5.56397 13.9 5.44316 13.4772L5.38275 13.1752L3.20812 12.5107V10.8193L5.26194 10.2153L5.38275 9.91322C5.50356 9.42997 5.68478 9.00712 5.92641 8.58428L6.10763 8.28225L5.08072 6.28884L6.28884 5.08072L8.22184 6.16803L8.52388 5.98681C8.94672 5.74519 9.36956 5.56397 9.85281 5.44316L10.1548 5.32234L10.8193 3.20812H12.5107L13.1752 5.32234L13.4772 5.44316C13.9 5.56397 14.3229 5.74519 14.7457 5.98681L15.0478 6.16803L17.0412 5.08072L18.2493 6.28884L17.162 8.28225L17.3432 8.58428C17.5848 9.00712 17.766 9.42997 17.8868 9.85281L17.9472 10.1548L20.1219 10.8193V12.5107Z"
                                  fill={
                                    activeGroup === "settings"
                                      ? "#1F1D2B"
                                      : "#FAFAFA"
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
                                  activeGroup === "settings"
                                    ? "#1F1D2B"
                                    : "#FAFAFA",
                                fontWeight:
                                  activeGroup === "settings" ? 500 : 400,
                                marginLeft: 14,
                              }}
                            >
                              Settings
                            </span>
                          </div>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Sign Out */}
              <SidebarLinkGroup
                activecondition={activeGroup === "Signout"}
                onClick={() => {
                  if (!sidebarExpanded) {
                    setSidebarExpanded(true);
                  }
                }}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link style={{ textDecoration: "none" }} href="#0">
                        <div
                          role="button"
                          tabIndex={0}
                          className={`no-underline block truncate transition duration-150 ${
                            activeGroup === "sign-out"
                              ? "text-[#1F1D2B]"
                              : "hover:text-white"
                          }`}
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
                                  activeGroup === "sign-out"
                                    ? "#1F1D2B"
                                    : "#FAFAFA"
                                }
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>{" "}
                            <span
                              style={{
                                color:
                                  activeGroup === "sign-out"
                                    ? "#1F1D2B"
                                    : "#FAFAFA",
                                fontWeight:
                                  activeGroup === "sign-out" ? 500 : 400,
                                marginLeft: 14,
                              }}
                            >
                              Sign Out
                            </span>
                          </div>
                        </div>
                      </Link>
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
