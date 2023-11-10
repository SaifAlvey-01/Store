import React from "react";
import UnitSelect from "../dropdown-selects/unit-select";

export default function EditProductVariant() {
  const handleUnitChange = (selectedOption) => {
    console.log(`Selected: ${selectedOption.value}`);
  };
  return (
    <div>
      {" "}
      <div className="h-[650px]">
        <div className="flex justify-between items-center">
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Edit Variants
          </h3>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center w-[calc(100%-210px)]">
            {" "}
            <div className="bg-[#E1E1E1] rounded-[8px] mr-2.5 w-10 h-10 flex items-center justify-center p-2.5">
              <img src={"/gallery.png"} className="w-7 h-7 object-contain" />
            </div>
            <div className="flex flex-col w-[60%]">
              {" "}
              <span
                className="mb-1"
                style={{ color: "#4B4B4B", fontSize: "14px" }}
              >
                Small{" "}
              </span>
              <p style={{ color: "#04B000", fontSize: "14px" }} className="m-0">
                In stock{" "}
              </p>
            </div>
          </div>

          <button
            className="cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: "4px",
              fontSize: "12px",
            }}
          >
            Upload Photo{" "}
          </button>
        </div>

        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Price{" "}
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Eg. 99"
            required
          />
        </div>
        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Discounted Price{" "}
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Eg. 99"
            required
          />
        </div>
        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            SKU ID{" "}
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Eg. 000010023002"
            required
          />
        </div>
        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Quantity{" "}
          </span>
          <input
            className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
            style={{
              border: "1.5px solid #E5E7EB",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            placeholder="Eg. 10"
            required
          />
        </div>
        <div className="mt-6">
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            Weight{" "}
          </span>

          <div className="flex mt-1 items-center">
            <div
              className="relative flex-grow flex items-center border rounded-[10px] focus-within:border-bdbfc0"
              style={{
                border: "1.5px solid #E5E7EB",
                boxSizing: "border-box",
              }}
            >
              <input
                className="bg-[#FFF] text-gray-900 text-sm flex-grow rounded-[10px] block pl-4 py-2.5 placeholder-gray-300 focus:outline-none"
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Eg. 1.2"
                required
                style={{
                  border: "none",
                  flex: "1",
                }}
              />

              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <UnitSelect onChange={handleUnitChange} />
              </div>
            </div>
          </div>
        </div>

        <button
          className=" cursor-pointer mt-5"
          style={{
            backgroundColor: "#ffffff",
            color: "#FF5353",
            padding: "8px 22px",
            borderRadius: "6px",
            border: "1px dashed #FF5353",
          }}
        >
          Delete Variant{" "}
        </button>
      </div>
      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          padding: "16px 0",
          position: "sticky",
          bottom: 16,
          background: "white",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
          Edit Variant{" "}
        </button>
      </div>
    </div>
  );
}
