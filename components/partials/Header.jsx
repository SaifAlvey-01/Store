import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { useRouter } from "next/router";
import NotificationDropdown from "./notification-dropdown";

function Header({
  sidebarOpen,
  setSidebarOpen,
  headerValue,
  backText,
  backImageUrl,
  backUrl,
}) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let header = router.pathname.slice(1);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function capitalizeAndSpace(str) {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const val = header.split("/");
  let lastElement = val[val.length - 1];

  const handleBackClick = () => {
    if (backUrl) {
      if (typeof backUrl === "function") {
        backUrl();
      } else {
        router.push(backUrl);
      }
    }
  };

  return (
    <header className="sticky top-0 lg:shadow bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-2 lg:px-8 ">
        <div className="flex flex-wrap flow-col items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className=" lg:hidden bg-white"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <img
                src="/burgerIcon.png"
                className="w-[24px] h-[24px] bg-white "
              />
            </button>
            {backText ? (
              <div className="flex items-center">
                <img
                  onClick={handleBackClick}
                  src={backImageUrl}
                  alt="Back"
                  className="mr-1.5 cursor-pointer"
                />
                <span
                  style={{ fontSize: "18px" }}
                  className="text-[#4B5563] font-bold leading-18 font-freesans"
                >
                  {backText}
                </span>
              </div>
            ) : (
              <p
                style={{ fontSize: "18px" }}
                className="text-[#4B5563] font-bold leading-18 font-freesans"
              >
                {capitalizeAndSpace(lastElement)}
              </p>
            )}
          </div>

          {/* Header: Right side */}
          <div className="order-1 w-full sm:order-none sm:w-auto">
            <Search />
          </div>
          {/* third div */}
          <div className="flex items-center sw-[256px] h-12 top-24 left-920 gap-[6px] lg:gap-2">
            <img
              src="/nav/needhelp.png"
              className="hidden sm:block w-[112px] h-[32px] cursor-pointer "
            />
            <img
              src="/nav/download.png"
              className="w-[32px] h-[32px] cursor-pointer"
            />

            <div className="relative">
              {" "}
              {/* New wrapper for the bell icon and dropdown */}
              <img
                src="/nav/bell.png"
                className="w-[32px] h-[32px] cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && <NotificationDropdown ref={dropdownRef} />}
            </div>

            <img
              src="/nav/open.png"
              className="w-[32px] h-[32px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
