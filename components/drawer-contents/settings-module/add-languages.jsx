import React from "react";
import { languagesOptions } from "../../constants/languagesOptions";
import { useState } from "react";

export default function AddLanguages({ setShowSidebar, onAddLanguages }) {
  const [checkedStates, setCheckedStates] = useState(
    languagesOptions.reduce((acc, language) => {
      acc[language.code] = false;
      return acc;
    }, {})
  );
  const handleCheckboxChange = (code) => {
    setCheckedStates((prev) => ({
      ...prev,
      [code]: !prev[code],
    }));
  };

  const handleAddLanguages = () => {
    const selectedLanguages = languagesOptions.filter(
      (language) => checkedStates[language.code]
    );
    onAddLanguages(selectedLanguages);
    setShowSidebar(false); // Close the drawer after adding languages
  };

  return (
    <div className="flex flex-col h-screen">
      {" "}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start mt-4">
          <h3
            className="m-0"
            style={{ fontSize: "17px", fontWeight: "normal" }}
          >
            Add Languages{" "}
          </h3>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto pb-[30px] mt-6"
        style={{ overflowY: "scroll" }}
      >
        {" "}
        {languagesOptions.map((language) => (
          <div
            key={language.code}
            className="p-3 px-2 flex flex-row justify-between items-center"
          >
            <span className="font-lato text-[14px] text-[#4B4B4B]">
              {language.name}
            </span>

            <div className="flex items-center flex-row">
              <input
                style={{
                  appearance: "none",
                  display: "none",
                }}
                checked={checkedStates[language.code]}
                onChange={() => handleCheckboxChange(language.code)}
                id={`checked-checkbox-${language.code}`}
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
                htmlFor={`checked-checkbox-${language.code}`}
                className="ml-1.5 text-sm font-medium cursor-pointer"
              >
                <span
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "4px",
                    border: checkedStates[language.code]
                      ? "2px solid #3B82F6"
                      : "2px solid #D1D5DB",
                    backgroundColor: checkedStates[language.code]
                      ? "white"
                      : "transparent",
                    marginRight: "8px",
                    display: "inline-block",
                  }}
                ></span>
                {checkedStates[language.code] && (
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
        ))}
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
        <button
          onClick={handleAddLanguages}
          className="bg-blue-600 text-white px-9 py-2.5 rounded cursor-pointer"
        >
          Add{" "}
        </button>
      </div>
    </div>
  );
}
