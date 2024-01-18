import React, { useState } from "react";
import Select, { components } from "react-select";

const ApplyCouponSelect = ({ onChange, value }) => {
  const [search, setSearch] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const products = [
    { id: 1, img: "/product-img.png", name: "Shoes 001", price: 5 },
    { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
    { id: 3, img: "/product-img.png", name: "Shoes 003", price: 15 },
    { id: 1, img: "/product-img.png", name: "Shoes 001", price: 5 },
    { id: 2, img: "/product-img.png", name: "Shoes 002", price: 10 },
    { id: 3, img: "/product-img.png", name: "Shoes 003", price: 15 },
    // Add more products as needed
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: "100%",
      backgroundColor: "transparent",
      width: "100%",
      color: "#4B5563",
      fontSize: "13px",
      border: "1.5px solid #E5E7EB",
      borderRadius: "10px",
      cursor: "pointer",
    }),
    option: (provided) => ({
      ...provided,
      color: "#4B4B4B",
      fontWeight: "400",
      fontSize: "14px",
      cursor: "pointer",
    }),
    input: (provided) => ({
      ...provided,
      color: "#4B5563",
      fontSize: "12px",
      fontWeight: "400",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#CACACA",
      fontSize: "14px",
      paddingLeft: "10px",
      width: "100%",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "12px",
      border: "1px solid #EDEDED",
      background: "#FFF",
      boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
    }),
  };

  const { Menu, Option, ValueContainer } = components;

  const DropdownMenu = (props) => {
    return (
      <Menu {...props}>
        <div className="flex flex-col mx-2">
          <div className="relative text-gray-600 mt-2">
            <img
              style={{ position: "absolute", top: 12, left: 0 }}
              src={"/search.png"}
              className="w-4 h-4 flex items-center pl-3 "
            />
            <input
              style={{
                borderRadius: "8px",
                border: "1px solid #D0D5DD",
                fontSize: "13px",
              }}
              type="search"
              name="search"
              placeholder="Search Products...."
              className="w-full pl-9 py-3 focus:outline-none focus:border-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div
            className="flex-1 overflow-y-auto"
            style={{ maxHeight: "200px", overflowY: "scroll" }}
          >
            {products
              .filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((product) => (
                <Option key={product.id} {...props}>
                  <div
                    style={{ borderBottom: "1px solid #EAECF0" }}
                    className="flex flex-row items-center justify-between p-1.5"
                  >
                    <div className="flex items-center">
                      <img
                        className="h-11 w-11"
                        src={product.img}
                        alt="product"
                      />
                      <div className="ml-2 flex flex-col w-full ">
                        <span
                          className="font-freesans mb-2"
                          style={{ color: "#4B4B4B", fontSize: "12px" }}
                        >
                          {product.name}
                        </span>
                        <span
                          className="font-freesans"
                          style={{ color: "#8E8E8E", fontSize: "10px" }}
                        >
                          ₹{product.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center flex-row">
                      <input
                        style={{
                          appearance: "none",
                          display: "none",
                        }}
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                      />
                      <label
                        style={{
                          color: "#8E8E8E",
                          fontSize: "14px",
                          fontStyle: 500,
                          display: "inline-flex",
                          alignItems: "center",
                          position: "relative",
                        }}
                        htmlFor="checked-checkbox"
                        className="ml-1.5 text-sm font-medium cursor-pointer"
                      >
                        <span
                          style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "4px",
                            border: isChecked
                              ? "2px solid #3B82F6"
                              : "2px solid #D1D5DB",
                            backgroundColor: isChecked
                              ? "white"
                              : "transparent",
                            marginRight: "8px",
                            display: "inline-block",
                          }}
                        ></span>
                        {isChecked && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="absolute text-blue-600 w-4 h-4"
                            style={{
                              left: "1px",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </label>
                    </div>
                  </div>
                </Option>
              ))}
          </div>
        </div>
      </Menu>
    );
  };

  return (
    <div className="px-0.5">
      <span
        className="font-freesans"
        style={{
          color: "#4B4B4B",
          fontWeight: 500,
          fontSize: "13px",
        }}
      >
        Apply Coupon on{" "}
        <span
          style={{
            color: "#FF3A3A",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          *
        </span>
      </span>
      <Select
        className="mt-1"
        options={[]}
        styles={customStyles}
        isSearchable={true}
        onChange={onChange}
        value={value}
        placeholder="Specific Products"
        formatOptionLabel={(data) => (
          <ValueContainer {...data}>
            <img
              className="h-11 w-11"
              src={data.data.img}
              alt="product"
              style={{ marginRight: "8px" }}
            />
            {data.data.name}
          </ValueContainer>
        )}
        components={{ Menu: DropdownMenu }}
      />
    </div>
  );
};

export default ApplyCouponSelect;
