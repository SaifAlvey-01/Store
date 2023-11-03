import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { useRouter } from "next/router";
import NotificationDropdown from "../dropdowns/notification-dropdown";
import ReportsDropdown from "../dropdowns/reports-dropdown";
import StoreMenuDropdown from "../dropdowns/store-menu-dropdown";

function Header({
  sidebarOpen,
  setSidebarOpen,
  headerValue,
  backText,
  backImageUrl,
  backUrl,
  showAddNewProduct,
  showAddNewCategory,
  showCreateOrder,
  isEditingProduct,
  isEditingCategory,
  showAddNewSubCategory,
}) {
  const router = useRouter();
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [reportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [storeMenuDropdownOpen, setStoreMenuDropdownOpen] = useState(false);

  const notificationDropdownRef = useRef(null);
  const reportsDropdownRef = useRef(null);
  const storeMenuDropdownRef = useRef(null);

  let header = router.pathname.slice(1);

  const isShowStateActive =
    showAddNewProduct || showAddNewCategory || showCreateOrder;

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target)
      ) {
        setNotificationDropdownOpen(false);
      }

      if (
        reportsDropdownRef.current &&
        !reportsDropdownRef.current.contains(event.target)
      ) {
        setReportsDropdownOpen(false);
      }

      if (
        storeMenuDropdownRef.current &&
        !storeMenuDropdownRef.current.contains(event.target)
      ) {
        setStoreMenuDropdownOpen(false);
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
              <>
                <div className="flex items-center mr-2">
                  <img
                    onClick={handleBackClick}
                    src={backImageUrl}
                    alt="Back"
                    className="mr-1.5 cursor-pointer h-6 w-6"
                  />
                  <span
                    style={{ fontSize: "16px" }}
                    className="text-[#4B5563] font-bold leading-18 font-freesans"
                  >
                    {backText}
                  </span>
                </div>{" "}
                <div className="flex flex-row items-center">
                  {" "}
                  <img
                    style={{
                      color: "#8E8E8E",
                    }}
                    src={"/question-circle.png"}
                    className="mr-1 w-3 h-3"
                  />
                  <span
                    style={{
                      color: "#8E8E8E",
                      fontSize: "12px",
                    }}
                  >
                    {" "}
                    How it works{" "}
                  </span>
                </div>
              </>
            ) : (
              <p
                style={{ fontSize: "18px" }}
                className="text-[#4B5563] font-bold leading-18 font-freesans"
              >
                {capitalizeAndSpace(lastElement)}
              </p>
            )}
          </div>
          {!isShowStateActive && (
            <>
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
                  onClick={() => setReportsDropdownOpen(!reportsDropdownOpen)}
                />
                {reportsDropdownOpen && (
                  <ReportsDropdown ref={reportsDropdownRef} />
                )}

                <div className="relative">
                  {" "}
                  {/* New wrapper for the bell icon and dropdown */}
                  <img
                    src="/nav/bell.png"
                    className="w-[32px] h-[32px] cursor-pointer"
                    onClick={() =>
                      setNotificationDropdownOpen(!notificationDropdownOpen)
                    }
                  />
                  {notificationDropdownOpen && (
                    <NotificationDropdown ref={notificationDropdownRef} />
                  )}
                </div>

                <img
                  src="/nav/open.png"
                  className="w-[32px] h-[32px] cursor-pointer"
                  onClick={() =>
                    setStoreMenuDropdownOpen(!storeMenuDropdownOpen)
                  }
                />
                {storeMenuDropdownOpen && (
                  <StoreMenuDropdown ref={storeMenuDropdownRef} />
                )}
              </div>
            </>
          )}
          {showCreateOrder && !isEditingProduct && !isEditingCategory && (
            <button
              // onClick={handleCreateOrderClick}
              className="cursor-pointer"
              style={{
                backgroundColor: "#4162FF",
                color: "#ffffff",
                padding: "9px 24px",
                borderRadius: "4px",
              }}
            >
              Create Order
            </button>
          )}
          {showAddNewProduct && !isEditingCategory && !isEditingProduct && (
            <button
              // onClick={handleAddProductClick}
              className="cursor-pointer"
              style={{
                backgroundColor: "#4162FF",
                color: "#ffffff",
                padding: "9px 24px",
                borderRadius: "4px",
              }}
            >
              Add Product
            </button>
          )}
          {showAddNewCategory &&
            !isEditingCategory &&
            !isEditingProduct &&
            !showAddNewSubCategory && (
              <button
                // onClick={handleAddCategory}
                className="cursor-pointer"
                style={{
                  backgroundColor: "#4162FF",
                  color: "#ffffff",
                  padding: "9px 24px",
                  borderRadius: "4px",
                }}
              >
                Add Category
              </button>
            )}
          {showAddNewSubCategory && !isEditingCategory && !isEditingProduct && (
            <button
              className="cursor-pointer"
              style={{
                backgroundColor: "#4162FF",
                color: "#ffffff",
                padding: "9px 24px",
                borderRadius: "4px",
              }}
            >
              Add SubCategory
            </button>
          )}
          {(isEditingProduct || isEditingCategory) && (
            <div className="flex gap-4">
              <button
                // onClick={handleDeleteClick}
                className="cursor-pointer"
                style={{
                  backgroundColor: "#fff",
                  border: "1px dashed #FF5353",
                  color: "#FF5353",
                  padding: "9px 24px",
                  borderRadius: "4px",
                }}
              >
                Delete
              </button>
              <button
                // onClick={handlePreviewClick}
                className="cursor-pointer"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #4162FF",
                  color: "#4162FF",
                  padding: "9px 24px",
                  borderRadius: "4px",
                }}
              >
                Preview
              </button>
              <button
                // onClick={handleUpdateClick}
                className="cursor-pointer"
                style={{
                  backgroundColor: "#4162FF",
                  color: "#ffffff",
                  padding: "9px 24px",
                  borderRadius: "4px",
                }}
              >
                Update
              </button>
            </div>
          )}{" "}
        </div>
      </div>
    </header>
  );
}

export default Header;
