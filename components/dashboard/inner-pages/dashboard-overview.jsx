import React, { useEffect, useRef, useState } from "react";
import TotalSalesChart from "../../bar-charts/dashboard/total-sales";
import StoreConversionRateChart from "../../area-charts/dashboard/store-conversion-rate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDrawer from "../../drawer-contents/custom-drawer";
import TotalOnlineStoreVisitorsChart from "../../bar-charts/dashboard/total-online-store-visitors";
import TotalOrdersChart from "../../multiaxis-line-chart/dashboard/total-orders";
import Link from "next/link";

export default function DashboardOverview() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");
  const refMonthDropdown = useRef(null);
  const refDatePicker = useRef(null);

  const MonthFilter = [
    "Lifetime",
    "Today",
    "Yesterday",
    "This Week",
    "Last 7 Days",
    "Last Week",
    "This Month",
    "Last Month",
    "Custom Range",
  ];

  const data = [{}, {}, {}, {}, {}, {}];

  const productsByUnitSold = [
    { name: "Product 001", sold: 87, ratings: "9.6%", image: "/fold-up.png" },
    {
      name: "Product 002",
      sold: 65,
      ratings: "9.6%",
      image: "/fold-up.png",
    },
    {
      name: "Product 003",
      sold: 84,
      ratings: "8.2%",
      image: "/fold-down.png",
    },
    {
      name: "Product 004",
      sold: 90,
      ratings: "9.6%",
      image: "/fold-up.png",
    },
    {
      name: "Product 005",
      sold: 66,
      ratings: "9.6%",
      image: "/fold-up.png",
    },
  ];

  const salesBySocialSource = [
    { name: "Facebook", sold: 87, ratings: "9.6%" },
    {
      name: "Instagram",
      sold: 65,
      ratings: "9.6%",
    },
    {
      name: "Twitter",
      sold: 84,
      ratings: "8.2%",
    },
    {
      name: "Snapchat",
      sold: 90,
      ratings: "9.6%",
    },
    {
      name: "Tiktok",
      sold: 66,
      ratings: "9.6%",
    },
  ];

  const storeVisitByTrafficSource = [
    { name: "Direct", sold: 87, ratings: "9.6%", image: "/fold-up.png" },
    {
      name: "Search",
      sold: 65,
      ratings: "9.6%",
      image: "/fold-up.png",
    },
    {
      name: "Enternal",
      sold: 84,
      ratings: "8.2%",
      image: "/fold-up.png",
    },
    {
      name: "Ads",
      sold: 90,
      ratings: "9.6%",
      image: "/fold-down.png",
    },
    {
      name: "Links",
      sold: 66,
      ratings: "9.6%",
      image: "/fold-down.png",
    },
  ];

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        refMonthDropdown.current &&
        !refMonthDropdown.current.contains(event.target) &&
        openDropdown
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        refDatePicker.current &&
        !refDatePicker.current.contains(event.target) &&
        startDate &&
        openDropdown === "Custom Range"
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [startDate, openDropdown]);

  const handleMonthFilterClick = (filter) => {
    setOpenDropdown(filter === openDropdown ? null : filter);
  };

  return (
    <>
      <div
        className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col py-4 px-4"
        style={{
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
          boxShadow: `#00000011 0px 2px 4px 2px`,
        }}
      >
        {" "}
        <div className="flex flex-row justify-between items-center w-full mt-2 mb-6">
          <div className="self-stretch font-freesans flex flex-row items-start justify-start">
            <h3 style={{ color: "var(--Neutral-600, #4B4B4B)", margin: 0 }}>
              Overview{" "}
            </h3>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <button
                onClick={() => handleMonthFilterClick("month")}
                style={{
                  borderRadius: "6px",
                  border: "1px solid #D0D5DD",
                  fontSize: "14px",
                  color: "#8E8E8E",
                  backgroundColor: "#fff",
                }}
                className="flex items-center px-3 py-2 hover:bg-gray-300 cursor-pointer"
              >
                This Month
                <img
                  src={"/arrow-down.png"}
                  className="ml-2 w-4 h-4"
                  alt="arrow"
                />
              </button>

              {/* Month Dropdown */}
              {openDropdown === "month" && (
                <div
                  className="mt-2 w-64 p-3 bg-white rounded-md shadow-lg overflow-hidden z-50"
                  style={{
                    position: "absolute",
                    top: 32,
                    right: -1,
                    border: "1px solid #EDEDED",
                    boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
                    borderRadius: "12px",
                    width: "120px",
                    backgroundColor: "#fff",
                    height: "auto",
                  }}
                  ref={refMonthDropdown}
                >
                  {/* Text items */}
                  {MonthFilter.map((text, index) => (
                    <div
                      onClick={() => handleMonthFilterClick(text)}
                      key={index}
                      className="px-2 py-3 font-freesans cursor-pointer"
                      style={{
                        color: text === "Custom Range" ? "#4B4B4B" : "#000",
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "left",
                      }}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              )}

              {/* Render date picker for "Custom Range" */}
              {openDropdown === "Custom Range" && (
                <div
                  className="mt-2 ml-2 z-50"
                  style={{
                    position: "absolute",
                    top: 32,
                    right: -1,
                  }}
                  ref={refDatePicker}
                >
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    inline
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full box-border">
          <div
            className="w-[49%] p-4 mb-8"
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex justify-between items-center my-2">
              <div className="font-freesans flex items-center">
                <h2
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "18px",
                    margin: 0,
                  }}
                >
                  Total Sales{" "}
                </h2>
                <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
              </div>
              <button
                className="cursor-pointer p-0"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  borderRadius: "4px",
                  fontSize: "13px",
                }}
                onClick={() => {
                  setShowSidebar(true);
                  setContentType("sales-breakdown");
                }}
              >
                View Breakdown{" "}
              </button>
            </div>
            <div className="flex flex-row justify-between items-center my-6">
              {" "}
              <span
                className="px-5 py-0 font-roboto text-center"
                style={{
                  color: "#8E8E8E",
                  backgroundColor: "#FAFAFA",
                  fontSize: "24px",
                  fontWeight: 500,
                  borderRadius: "10px",
                }}
              >
                ₹55{" "}
              </span>
              <h3
                className="my-0"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                01 Order{" "}
              </h3>
            </div>
            <TotalSalesChart />
          </div>

          <div
            className="w-[49%] p-4 mb-8"
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="font-freesans flex items-center my-2">
              <h2
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                Store Conversion Rate{" "}
              </h2>
              <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
            </div>
            <div className="flex flex-row items-center my-6">
              {" "}
              <span
                className="px-5 py-0 font-roboto text-center"
                style={{
                  color: "#8E8E8E",
                  backgroundColor: "#FAFAFA",
                  fontSize: "24px",
                  fontWeight: 500,
                  borderRadius: "10px",
                }}
              >
                28.57%{" "}
              </span>
              <h3
                className="my-0"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                (Total sessions 7){" "}
              </h3>
            </div>

            <StoreConversionRateChart />
          </div>
        </div>
        <div className="flex justify-between w-full box-border">
          <div
            className="w-[49%] p-4 mb-8"
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex justify-between items-center my-2">
              <div className="font-freesans flex items-center">
                <h2
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "18px",
                    margin: 0,
                  }}
                >
                  Total Online Store Visitors{" "}
                </h2>
                <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
              </div>
              <button
                className="cursor-pointer p-0"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  borderRadius: "4px",
                  fontSize: "13px",
                }}
                onClick={() => {
                  setShowSidebar(true);
                  setContentType("online-store-visitors");
                }}
              >
                View Report{" "}
              </button>
            </div>
            <div className="flex flex-row justify-between items-center my-6">
              {" "}
              <span
                className="px-5 py-0 font-roboto text-center"
                style={{
                  color: "#8E8E8E",
                  backgroundColor: "#FAFAFA",
                  fontSize: "24px",
                  fontWeight: 500,
                  borderRadius: "10px",
                }}
              >
                4022{" "}
              </span>
              <div className="flex flex-row items-center">
                <img src={"/fold-up.png"} className="mr-1.5 w-4 h-4" />

                <h3
                  className="my-0"
                  style={{
                    color: "#00CD08",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  9.6%{" "}
                </h3>
              </div>
            </div>
            <TotalOrdersChart />
          </div>

          <div
            className="w-[49%] p-4 mb-8"
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="flex justify-between items-center my-2">
              <div className="font-freesans flex items-center">
                <h2
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "18px",
                    margin: 0,
                  }}
                >
                  Total Orders{" "}
                </h2>
                <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
              </div>
              <button
                className="cursor-pointer p-0"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#4162FF",
                  borderRadius: "4px",
                  fontSize: "13px",
                }}
                onClick={() => {
                  setShowSidebar(true);
                  setContentType("total-orders");
                }}
              >
                View Report{" "}
              </button>
            </div>
            <div className="flex flex-row justify-between items-center my-6">
              {" "}
              <span
                className="px-5 py-0 font-roboto text-center"
                style={{
                  color: "#8E8E8E",
                  backgroundColor: "#FAFAFA",
                  fontSize: "24px",
                  fontWeight: 500,
                  borderRadius: "10px",
                }}
              >
                06{" "}
              </span>
              <div className="flex flex-row items-center">
                <img src={"/fold-up.png"} className="mr-1.5 w-4 h-4" />

                <h3
                  className="my-0"
                  style={{
                    color: "#00CD08",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  9.6%{" "}
                </h3>
              </div>
            </div>

            <TotalOnlineStoreVisitorsChart />
          </div>
        </div>
        <div className="flex justify-between w-full box-border">
          <div
            className="w-[49%] p-4 mb-8"
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="font-freesans flex items-center my-2">
              <h2
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                Top Product By Units Sold{" "}
              </h2>
              <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
            </div>

            <div className="mt-6">
              {productsByUnitSold.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-between items-center mb-4"
                >
                  <span
                    className="font-roboto text-center"
                    style={{
                      color: "#4B4B4B",
                      fontSize: "15px",
                      fontWeight: 400,
                    }}
                  >
                    {product.name}
                  </span>
                  <div className="flex flex-row items-center">
                    <h3
                      className="my-0 mr-10"
                      style={{
                        color: "#8E8E8E",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {product.sold} Sold
                    </h3>
                    <h3
                      className="my-0"
                      style={{
                        color: "#8E8E8E",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {product.ratings}
                    </h3>
                    <img
                      src={product.image}
                      className="ml-1.5 w-4 h-4"
                      alt="Product"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="w-[49%] p-4 mb-8"
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="font-freesans flex flex-row justify-between items-center my-2">
              <h2
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                Orders{" "}
              </h2>
              <Link href="/orders/all-orders">
                <button
                  className="cursor-pointer p-0"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#4162FF",
                    borderRadius: "4px",
                    fontSize: "13px",
                  }}
                >
                  View All{" "}
                </button>{" "}
              </Link>
            </div>

            <div
              className="px-3 py-2 box-border mt-6"
              style={{
                borderRadius: "12px",
                backgroundColor: "#FFF",
                border: "1px solid #EAECF0",
              }}
            >
              <div className="flex justify-between items-center">
                <div className="self-stretch font-freesans flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center">
                    <div
                      style={{ backgroundColor: "#F3F5FF" }}
                      className="rounded-[50px] mr-2 w-8 h-8 flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center p-1">
                        <img
                          src={"/solar.png"}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <h3
                      style={{
                        color: "#4B4B4B",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      Pending Order (00){" "}
                    </h3>
                  </div>
                </div>

                <img src={"/arrow-right.png"} className="mr-1.5 w-6 h-6" />
              </div>
            </div>
            <div
              className="px-3 py-2 box-border mt-5"
              style={{
                borderRadius: "12px",
                backgroundColor: "#FFF",
                border: "1px solid #EAECF0",
              }}
            >
              <div className="flex justify-between items-center">
                <div className="self-stretch font-freesans flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center">
                    <div
                      style={{ backgroundColor: "#F3F5FF" }}
                      className="rounded-[50px] mr-2 w-8 h-8 flex justify-center items-center"
                    >
                      <div className="flex justify-center items-center p-1">
                        <img
                          src={"/solar.png"}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <h3
                      style={{
                        color: "#4B4B4B",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      Orders to Ship (00){" "}
                    </h3>
                  </div>
                </div>

                <img src={"/arrow-right.png"} className="mr-1.5 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full box-border">
          <div
            className="w-[49%] p-4 mb-8"
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="font-freesans flex items-center my-2">
              <h2
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                Sales By Social Source{" "}
              </h2>
              <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
            </div>

            <div className="mt-6">
              {salesBySocialSource.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-between items-center mb-4"
                >
                  <span
                    className="font-roboto text-center"
                    style={{
                      color: "#4B4B4B",
                      fontSize: "15px",
                      fontWeight: 400,
                    }}
                  >
                    {product.name}
                  </span>
                  <div className="flex flex-row items-center">
                    <h3
                      className="my-0 mr-10"
                      style={{
                        color: "#8E8E8E",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {product.sold} Sold
                    </h3>
                    <h3
                      className="my-0"
                      style={{
                        color: "#8E8E8E",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {product.ratings}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="w-[49%] p-4 mb-8"
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div className="font-freesans flex items-center my-2">
              <h2
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                Online Store Visit By Traffic Source{" "}
              </h2>
              <img src={"/info-dark.png"} className="ml-2 w-4 h-4" />
            </div>

            <div className="mt-6">
              {storeVisitByTrafficSource.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-between items-center mb-4"
                >
                  <span
                    className="font-roboto text-center"
                    style={{
                      color: "#4B4B4B",
                      fontSize: "15px",
                      fontWeight: 400,
                    }}
                  >
                    {product.name}
                  </span>
                  <div className="flex flex-row items-center">
                    <h3
                      className="my-0 mr-10"
                      style={{
                        color: "#8E8E8E",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {product.sold} Sold
                    </h3>
                    <h3
                      className="my-0"
                      style={{
                        color: "#8E8E8E",
                        fontWeight: 500,
                        fontSize: "15px",
                      }}
                    >
                      {product.ratings}
                    </h3>
                    <img
                      src={product.image}
                      className="ml-1.5 w-4 h-4"
                      alt="Product"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
          className="flex flex-col justify-between w-full box-border p-4 mb-8"
        >
          <h2
            className="mb-4 mt-0"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "18px",
            }}
          >
            What’s New{" "}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "60px",
              maxWidth: "2000px",
            }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="px-4 py-6 "
                style={{
                  border: "1px solid #e3e3e3",
                  backgroundColor: "var(--white-color, #FFF)",
                  borderRadius: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <img
                    className="w-full"
                    src={"/tinker-theme.png"}
                    alt="arrow"
                  />
                  <h2
                    style={{
                      color: "#4B4B4B",
                      fontWeight: 500,
                      fontSize: "18px",
                    }}
                  >
                    Tinker Theme: Available on web{" "}
                  </h2>
                  <p
                    className="w-full max-w-[18rem]"
                    style={{
                      color: "#8E8E8E",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: 1.3,
                    }}
                  >
                    A stylish theme to Highlight featured products, customer
                    testimonials and multiple brand story sections to showcase
                    products and build trust.{" "}
                  </p>
                  <div
                    className="mt-8"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        borderRadius: "4px",
                        border: "1px solid #4162FF",
                      }}
                      className="bg-white text-[#4162FF] px-4 py-1.5 rounded cursor-pointer"
                    >
                      Explore{" "}
                    </button>
                    <button className="bg-white text-[#4162FF] px-4 py-1.5 rounded cursor-pointer">
                      Learn More{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            border: "1px solid #e3e3e3",
            backgroundColor: "var(--white-color, #FFF)",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
          className="flex flex-col justify-between w-full box-border p-4 mb-8"
        >
          <h2
            className="mb-4 mt-0"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "18px",
            }}
          >
            Recommendations{" "}
          </h2>

          <div
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
            className="flex flex-col justify-between w-full box-border p-4 mb-5"
          >
            {" "}
            <div className="flex justify-between items-center">
              {" "}
              <div className="flex flex-col w-full">
                {" "}
                <span
                  className="mb-3"
                  style={{ color: "#4B4B4B", fontSize: "17px" }}
                >
                  It's time to spice things up{" "}
                </span>
                <p
                  style={{ color: "#4B4B4B", fontSize: "14px" }}
                  className="m-0"
                >
                  Use the promotional designs tool and create new banners for
                  your store. Explore now!
                </p>
              </div>
              <img src={"/cross-1.png"} className="w-8 h-8 mb-4" />
            </div>
            <div
              className="mt-5"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
                className="bg-white text-[#4162FF] px-4 py-1.5 rounded cursor-pointer"
              >
                Explore{" "}
              </button>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #e3e3e3",
              backgroundColor: "var(--white-color, #FFF)",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
            className="flex flex-col justify-between w-full box-border p-4 mb-8"
          >
            {" "}
            <div className="flex justify-between items-center">
              {" "}
              <div className="flex items-center">
                <img
                  src={"/privy.png"}
                  className="max-w-full max-h-full h-14 w-14 object-contain mr-3"
                />
                <div className="flex flex-col w-full">
                  {" "}
                  <span
                    className="mb-2"
                    style={{ color: "#4B4B4B", fontSize: "17px" }}
                  >
                    It's time to spice things up{" "}
                  </span>
                  <p
                    style={{ color: "#4B4B4B", fontSize: "14px" }}
                    className="m-0"
                  >
                    Use the promotional designs tool and create new banners for
                    your store. Explore now!
                  </p>
                </div>
              </div>
              <img src={"/cross-1.png"} className="w-8 h-8 mb-4" />
            </div>
            <div
              className="mt-5"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  borderRadius: "4px",
                  border: "1px solid #4162FF",
                }}
                className="bg-white text-[#4162FF] px-5 py-1.5 rounded cursor-pointer"
              >
                Install{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

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
