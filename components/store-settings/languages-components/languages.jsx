import React from "react";
import CustomDrawer from "../../drawer-contents/custom-drawer";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import DeleteLanguageDropdown from "../../dropdowns/delete-language-dropdown";
import DeleteLanguageModal from "../../modals/delete-language-modal";

export default function Languages() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [contentType, setContentType] = useState("");
  const [showDeleteLanguageModal, setShowDeleteLanguageModal] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);
  const [languageToDeleteIndex, setLanguageToDeleteIndex] = useState(null);
  const dropdownRef = useRef([]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        dropdownOpenIndex !== null &&
        dropdownRef.current[dropdownOpenIndex] &&
        !dropdownRef.current[dropdownOpenIndex].contains(event.target)
      ) {
        setDropdownOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownOpenIndex]);

  const handleAddLanguages = (selected) => {
    setSelectedLanguages(selected);
  };

  const handleDeleteLanguage = (index) => {
    setLanguageToDeleteIndex(index);
    setShowDeleteLanguageModal(true);
    setDropdownOpenIndex(null);
  };

  const handleConfirmDelete = () => {
    if (languageToDeleteIndex !== null) {
      const updatedLanguages = [...selectedLanguages];
      updatedLanguages.splice(languageToDeleteIndex, 1);
      setSelectedLanguages(updatedLanguages);
      setDropdownOpenIndex(null);
    }
    setShowDeleteLanguageModal(false);
  };

  return (
    <>
      <div
        className="ml-3 w-[65%] h-auto text-blue-600 p-4"
        style={{
          borderRadius: "10px",
          backgroundColor: "var(--white-color, #FFF)",
          border: "1px solid #e3e3e3",
        }}
      >
        <div className="flex flex-row items-center">
          <h3
            className="m-0 mr-4"
            style={{
              color: "#4B4B4B",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Languages
          </h3>

          <div className="flex flex-row items-center">
            {" "}
            <img
              style={{
                color: "#8E8E8E",
              }}
              src={"/question-circle.png"}
              className="mr-1 w-4 h-4"
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
        </div>

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
          <div className="font-freesans flex flex-col items-start justify-start">
            <span
              className="font-freesans mb-2"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Languages{" "}
            </span>
            <span
              className="m-0 font-freesans"
              style={{
                color: "#8E8E8E",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              These will be the languages in which your online store will be
              translated.{" "}
            </span>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="font-freesans flex flex-col items-start justify-start">
              <span
                className="font-freesans mb-2"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                English{" "}
              </span>
              <div
                className="flex items-center p-1.5"
                style={{ borderRadius: "16px", background: "#ECFDF3" }}
              >
                <img
                  style={{
                    color: "#8E8E8E",
                  }}
                  src={"/dot.png"}
                  className="mr-1 w-2 h-2"
                />

                <span
                  style={{
                    color: "#47B263",
                    fontSize: "12px",
                  }}
                >
                  Primary{" "}
                </span>
              </div>
            </div>
            <span
              style={{
                color: "#4162FF",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              Preview{" "}
            </span>
          </div>

          {selectedLanguages.map((selectedLang, index) => (
            <div
              key={selectedLang.code}
              className="flex justify-between items-center mt-6"
            >
              <span
                className="font-freesans mb-2"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                {selectedLang.name}{" "}
              </span>
              <div className="relative">
                <img
                  style={{
                    color: "#8E8E8E",
                  }}
                  src={"/menu-dots.png"}
                  className="mr-1 w-5 h-5 cursor-pointer"
                  onClick={() =>
                    setDropdownOpenIndex(
                      dropdownOpenIndex !== index ? index : null
                    )
                  }
                />
                <div ref={(el) => (dropdownRef.current[index] = el)}>
                  <DeleteLanguageDropdown
                    onDeleteClick={() => handleDeleteLanguage(index)}
                    isOpen={dropdownOpenIndex === index}
                  />
                </div>{" "}
              </div>
            </div>
          ))}

          <div className="flex justify-center w-full mt-4 ">
            <button
              onClick={() => {
                setShowSidebar(true);
                setContentType("add-languages");
              }}
              className="cursor-pointer"
              style={{
                backgroundColor: "#ffffff",
                color: "#4B4B4B",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px dashed #8E8E8E",
              }}
            >
              Add More Languages{" "}
            </button>
          </div>
        </div>
      </div>

      <DeleteLanguageModal
        isOpen={showDeleteLanguageModal}
        onClose={() => setShowDeleteLanguageModal(false)}
        onConfirmDelete={handleConfirmDelete}
        languageToDeleteIndex={languageToDeleteIndex}
      />
      <CustomDrawer
        key={contentType}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        contentType={contentType}
        setContentType={setContentType}
        onAddLanguages={handleAddLanguages}
      />
    </>
  );
}
