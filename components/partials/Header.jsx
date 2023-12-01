import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { useRouter } from "next/router";
import NotificationDropdown from "../dropdowns/notification-dropdown";
import ReportsDropdown from "../dropdowns/reports-dropdown";
import StoreMenuDropdown from "../dropdowns/store-menu-dropdown";
import { emitCustomEvent } from "../../utils/custom_events";
import CustomDrawer from "../drawer-contents/custom-drawer";
import { useDispatch, useSelector } from "react-redux";
import { setShowDeliveredButtons } from "../../redux/slices/ordersSlices/showDeliveredButtons";
import cogoToast from "cogo-toast";

function Header({
  sidebarOpen,
  setSidebarOpen,
  backText,
  backImageUrl,
  backUrl,
  showAddNewProduct,
  showAddNewCategory,
  showCreateOrder,
  showOrderDetails,
  isEditingProduct,
  isEditingCategory,
  showAddNewSubCategory,
  showConfirmDelivery,
  showUpgradePlan,
  showConnectExistingDomain,
  showSetupCustomDomain,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [reportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [storeMenuDropdownOpen, setStoreMenuDropdownOpen] = useState(false);
  const [orderAccepted, setOrderAccepted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");
  const [hideButtons, setHideButtons] = useState(false);
  const showDeliveredButtons = useSelector(
    (state) => state.showDeliveredButtons
  );

  const notificationDropdownRef = useRef(null);
  const reportsDropdownRef = useRef(null);
  const storeMenuDropdownRef = useRef(null);

  //redux states
  const { loading, category } = useSelector((state) => state.categories);

  let header = router.pathname.slice(1);

  const isShowStateActive =
    showAddNewProduct ||
    showAddNewCategory ||
    showCreateOrder ||
    showOrderDetails ||
    showConfirmDelivery ||
    showConnectExistingDomain ||
    showSetupCustomDomain;

  useEffect(() => {
    function handleOutsideClick(event) {
      const notificationDropdown = notificationDropdownRef.current;
      const reportsDropdown = reportsDropdownRef.current;
      const storeMenuDropdown = storeMenuDropdownRef.current;

      if (
        notificationDropdown &&
        !notificationDropdown.contains(event.target)
      ) {
        setNotificationDropdownOpen(false);
      }

      if (reportsDropdown && !reportsDropdown.contains(event.target)) {
        setReportsDropdownOpen(false);
      }

      if (storeMenuDropdown && !storeMenuDropdown.contains(event.target)) {
        setStoreMenuDropdownOpen(false);
      }
    }

    function handleDropdownToggle(dropdown, setOpenState) {
      if (!dropdown) return;
      const isDropdownOpen = isOpen(dropdown);
      if (isDropdownOpen) {
        setOpenState(false);
      } else {
        closeOtherDropdowns(dropdown);
        setOpenState(true);
      }
    }

    function isOpen(dropdown) {
      return (
        dropdown &&
        (dropdown === notificationDropdownRef.current
          ? notificationDropdownOpen
          : dropdown === reportsDropdownRef.current
          ? reportsDropdownOpen
          : dropdown === storeMenuDropdownRef.current
          ? storeMenuDropdownOpen
          : false)
      );
    }

    function closeOtherDropdowns(currentDropdown) {
      const allDropdowns = [
        notificationDropdownRef.current,
        reportsDropdownRef.current,
        storeMenuDropdownRef.current,
      ];

      allDropdowns
        .filter((dropdown) => dropdown !== currentDropdown)
        .forEach((dropdown) => {
          if (isOpen(dropdown)) {
            handleDropdownToggle(dropdown, () => {});
          }
        });
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [notificationDropdownOpen, reportsDropdownOpen, storeMenuDropdownOpen]);

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

  const handleAcceptOrder = () => {
    setOrderAccepted(true);
    dispatch(setShowDeliveredButtons(false));
  };

  const handleCancelOrder = () => {
    setOrderAccepted(false);
    dispatch(setShowDeliveredButtons(false));
  };

  const handleDeliveredOrder = () => {
    setHideButtons(true);
    setOrderAccepted(false);
    dispatch(setShowDeliveredButtons(false));
  };

  const handleSubCategory = () => {
    emitCustomEvent("add-new-subcategory");
    handleBackClick();
    cogoToast.success("Sub Categorry added successfully");
  };

  const handleCategory = () =>{
    emitCustomEvent("add-category")
    handleBackClick();
    // cogoToast.success("Categorry added successfully");

  }

  return (
    <>
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
                  {!showOrderDetails && !showConfirmDelivery && (
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
                  )}
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
                {showUpgradePlan ? null : (
                  <div className="order-1 w-full sm:order-none sm:w-auto">
                    <Search />
                  </div>
                )}

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

            {hideButtons ? null : (
              <>
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
                {showAddNewProduct &&
                  !isEditingCategory &&
                  !isEditingProduct && (
                    <button
                      onClick={() => emitCustomEvent("add-product")}
                      type="submit"
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
                      onClick={handleCategory}
                      className="cursor-pointer"
                      style={{
                        backgroundColor: "#4162FF",
                        color: "#ffffff",
                        padding: "9px 24px",
                        borderRadius: "4px",
                        // width: loading ? "50px" : ""
                      }}
                    >
                      {loading ? (
                        <svg
                          aria-hidden="true"
                          role="status"
                          class="inline mr-3 w-6 h-5 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          ></path>
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      ) : (
                        "Add Category"
                      )}
                    </button>
                  )}
                {showAddNewSubCategory &&
                  !isEditingCategory &&
                  !isEditingProduct && (
                    <button
                      className="cursor-pointer"
                      onClick={handleSubCategory}
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
                {showSetupCustomDomain && (
                  <button
                    className="cursor-pointer"
                    style={{
                      backgroundColor: "#4162FF",
                      color: "#ffffff",
                      padding: "10px 20px",
                      borderRadius: "4px",
                    }}
                  >
                    Buy This Domain
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
                {!orderAccepted && showOrderDetails && !showConfirmDelivery && (
                  <div className="flex gap-4">
                    <button
                      onClick={handleCancelOrder}
                      className="cursor-pointer font-freesans"
                      style={{
                        backgroundColor: "#fff",
                        color: "#FF2323",
                        padding: "9px 20px",
                        borderRadius: "4px",
                        fontWeight: 500,
                        fontSize: 16,
                      }}
                    >
                      Reject Order
                    </button>
                    <button
                      onClick={handleAcceptOrder}
                      className="cursor-pointer"
                      style={{
                        backgroundColor: "#009821",
                        color: "#ffffff",
                        padding: "9px 24px",
                        borderRadius: "4px",
                        fontSize: 15,
                      }}
                    >
                      Accept Order
                    </button>
                  </div>
                )}
                {!showDeliveredButtons &&
                  orderAccepted &&
                  showOrderDetails &&
                  !showConfirmDelivery && (
                    <div className="flex gap-4">
                      <button
                        onClick={handleCancelOrder}
                        className="cursor-pointer"
                        style={{
                          backgroundColor: "#fff",
                          color: "#FF2323",
                          padding: "9px 16px",
                          borderRadius: "4px",
                          fontWeight: 500,
                          fontSize: 16,
                        }}
                      >
                        Cancel Order
                      </button>
                      <button
                        onClick={() => {
                          setShowSidebar(true);
                          setContentType("ship-order");
                        }}
                        className="cursor-pointer font-freesans"
                        style={{
                          backgroundColor: "#FF5353",
                          color: "#ffffff",
                          padding: "9px 30px",
                          borderRadius: "4px",
                          fontSize: 15,
                        }}
                      >
                        Ship Order
                      </button>
                    </div>
                  )}
                {showDeliveredButtons && showOrderDetails && (
                  <div className="flex gap-4">
                    <button
                      className="cursor-pointer"
                      style={{
                        backgroundColor: "#fff",
                        color: "#FF2323",
                        padding: "9px 30px",
                        borderRadius: "4px",
                        fontWeight: 500,
                        fontSize: 16,
                      }}
                    >
                      Failed
                    </button>
                    <button
                      onClick={handleDeliveredOrder}
                      className="cursor-pointer font-freesans"
                      style={{
                        backgroundColor: "#FF9141",
                        color: "#ffffff",
                        padding: "9px 36px",
                        borderRadius: "4px",
                        fontSize: 15,
                      }}
                    >
                      Delivered
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </header>
      <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
        setContentType={setContentType}
      />
    </>
  );
}

export default Header;
