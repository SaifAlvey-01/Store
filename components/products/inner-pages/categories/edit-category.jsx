import React, { useState, useRef } from "react";
import QuillNoSSRWrapper from "../../../RichTextEditor";
import { useDispatch, useSelector } from "react-redux";
import SubCategoryEditDropdown from "../../../dropdowns/subcategory-edit-dropdown";

const modules = {
  toolbar: [
    [{ size: [] }],
    ["bold", "italic", "background", "link", "image", "blockquote"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
const containerStyle = {
  borderRadius: "10px",
  border: "1px solid #e3e3e3",
  backgroundColor: "white",
  height: "300px",
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function EditCategory({ categoryId }) {
  const [isChecked, setIsChecked] = useState(false);
  const categories = useSelector(
    (state) => state?.categories?.category?.data?.data || []
  );
  const SingleCategory = categories.filter(
    (category) => category.categoryId == categoryId
  );
  console.log(SingleCategory, "<---SingleCategory");
  const [content, setContent] = useState(SingleCategory[0]?.description);

  const handleQuillChange = (value) => {
    setContent(value);
  };

  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between p-3"
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div className="flex flex-col md:flex-row w-full items-stretch justify-between">
        <div
          className="w-full md:w-[60%] h-auto  p-1 md:p-3 mr-0 md:mr-2 mb-4 md:mb-0"
          style={{
            borderRadius: "10px",
            backgroundColor: "var(--white-color, #FFF)",
            boxSizing: "border-box",
          }}
        >
          {" "}
          <div
            className="px-4 py-5"
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            <div
              className="pb-3"
              style={{
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <span
                className="font-roboto"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 400,
                  fontSize: "13px",
                }}
              >
                Category Information{" "}
              </span>
            </div>
            <div className="flex items-center mt-6">
              {" "}
              <div className="bg-[#E1E1E1] rounded-[8px] mr-4 w-14 h-14 flex items-center justify-center p-2.5">
                <img
                  src={SingleCategory[0]?.mainImageUrl}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div className="flex flex-col">
                {" "}
                <button
                  className="cursor-pointer"
                  style={{
                    backgroundColor: "#4162FF",
                    color: "#ffffff",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    width: "70%",
                    fontSize: "12px",
                  }}
                >
                  Add Image{" "}
                </button>
                <p
                  style={{ color: "#8E8E8E", fontSize: "12px" }}
                  className="m-0 mt-2"
                >
                  Recommended size (1000 * 1248 px){" "}
                </p>
              </div>
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
                Category Name{" "}
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
              <input
                className="bg-[#FFF] text-gray-900 text-sm rounded-[10px] block w-full px-4 py-2.5 mt-1 placeholder-gray-300  focus:outline-none"
                style={{
                  border: "1.5px solid #E5E7EB",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#bdbfc0")}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                placeholder="Enter Category Name"
                required
                value={SingleCategory[0]?.name}
              />
            </div>

            <div className="px-0 py-4 mt-3 ">
              <div className="mb-2">
                <span
                  className="font-freesans "
                  style={{
                    color: "#4B4B4B",
                    fontWeight: 500,
                    fontSize: "13px",
                  }}
                >
                  Content{" "}
                </span>
              </div>
              <QuillNoSSRWrapper
                modules={modules}
                style={containerStyle}
                formats={formats}
                value={content}
                onChange={handleQuillChange}
              />
            </div>

            {subCategories.length === 0 && (
              <div
                className="p-4 mt-2"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "var(--white-color, #FFF)",
                  border: "1px solid #e3e3e3",
                }}
              >
                {" "}
                <div className="font-freesans flex flex-col items-start justify-start  mb-6">
                  <span
                    className="font-freesans mb-2"
                    style={{
                      color: "#4B4B4B",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Add Subcategory{" "}
                  </span>
                  <span
                    className="m-0 font-freesans"
                    style={{
                      color: "#8E8E8E",
                      fontWeight: 400,
                      fontSize: "12px",
                    }}
                  >
                    Add subcategories if you have any.{" "}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-center">
                  {" "}
                  <button
                    className=" cursor-pointer"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#4162FF",
                      padding: "8px 24px",
                      borderRadius: "4px",
                      border: "1px dashed #4162FF",
                    }}
                    onClick={handleShowSubCategory}
                  >
                    Add Subcategory{" "}
                  </button>
                </div>
              </div>
            )}

            {subCategories.length > 0 && (
              <div className="mt-4">
                <div
                  className="pb-3"
                  style={{
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <span
                    className="font-freesans mb-2"
                    style={{
                      color: "#4B4B4B",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Add Subcategory{" "}
                  </span>
                  <span
                    className="m-0 font-freesans"
                    style={{
                      color: "#8E8E8E",
                      fontWeight: 400,
                      fontSize: "12px",
                    }}
                  >
                    Add subcategories if you have any.{" "}
                  </span>
                </div>
                {subCategories.map((subcategory) => {
                  return (
                    <div
                      style={{
                        borderBottom: "1px solid #E5E7EB",
                      }}
                      className="flex flex-row justify-between items-center py-3 mt-6"
                    >
                      <div className="flex items-center">
                        <img
                          className="h-10 w-10"
                          src={
                            subcategory.mainImageUrl
                              ? subcategory.mainImageUrl
                              : "/product-img.png"
                          }
                        />
                        <span
                          className="font-freesans ml-2.5"
                          style={{ color: "#4B4B4B", fontSize: "12px" }}
                        >
                          {subcategory.name}
                        </span>
                      </div>
                      <div className="relative">
                        <img
                          onClick={handleOpenDropdown}
                          src={"/menu-dots-round.png"}
                          className="w-6 h-6 object-contain cursor-pointer"
                        />
                        <SubCategoryEditDropdown
                          isOpen={showDropdown}
                          onClose={handleCloseDropdown}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="flex flex-row items-center justify-center mt-6">
                  {" "}
                  <button
                    className=" cursor-pointer"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#4162FF",
                      padding: "8px 24px",
                      borderRadius: "4px",
                      border: "1px dashed #4162FF",
                    }}
                    onClick={handleShowSubCategory}
                  >
                    Add Subcategory{" "}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="w-full md:w-[40%] h-auto text-white p-1 md:p-3"
          style={{
            borderRadius: "10px",
            backgroundColor: "var(--white-color, #FFF)",
          }}
        >
          {" "}
          <div
            className="p-4"
            style={{
              borderRadius: "10px",
              backgroundColor: "var(--white-color, #FFF)",
              border: "1px solid #e3e3e3",
            }}
          >
            {" "}
            <div className="font-freesans flex flex-col items-start justify-start">
              <span
                className="font-freesans mb-1"
                style={{
                  color: "#4B4B4B",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Banners{" "}
              </span>
              <span
                className="m-0 font-freesans"
                style={{
                  color: "#8E8E8E",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                Add a category banner at the top of product listing.{" "}
              </span>
            </div>
            <div className="flex items-center mt-6">
              {" "}
              <div className="bg-[#E1E1E1] rounded-[8px] mr-4 w-14 h-14 flex items-center justify-center p-2.5">
                <img
                  src={SingleCategory[0]?.mobileBannerUrl}
                  className="w-7 h-7 object-contain"
                />
              </div>{" "}
              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#4162FF",
                  color: "#ffffff",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  width: "40%",
                  fontSize: "12px",
                }}
              >
                Add Mobile Banner{" "}
              </button>
            </div>
            <div className="flex items-center mt-6">
              {" "}
              <div className="bg-[#E1E1E1] rounded-[8px] mr-4 w-14 h-14 flex items-center justify-center p-2.5">
                <img
                  src={SingleCategory[0]?.desktopBannerUrl}
                  className="w-7 h-7 object-contain"
                />
              </div>{" "}
              <button
                className="cursor-pointer"
                style={{
                  backgroundColor: "#4162FF",
                  color: "#ffffff",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  width: "40%",
                  fontSize: "12px",
                }}
              >
                Add Desktop Banner{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
