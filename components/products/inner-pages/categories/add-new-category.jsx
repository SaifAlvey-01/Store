import React, { useState, useRef, useEffect } from "react";
import QuillNoSSRWrapper from "../../../RichTextEditor";
import { addCategory } from "../../../../redux/slices/categoriesSlices/addCategory";
import { useDispatch, useSelector } from "react-redux";
import cogoToast from "cogo-toast";
import AddNewSubCategory from "./add-new-sub-category";
import { useCustomEventListener } from "../../../../utils/custom_events";
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

export default function AddNewCategory({ setShowAddNewSubCategory }) {
  const [content, setContent] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [mobileImageUrl, setMobileImageUrl] = useState("");
  const [bannerImageUrl, setBannerImageUrl] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const showAddNewSubCategory = useSelector((state) => state.addNewSubCategory);
  const subCategories = useSelector(
    (state) => state.addSubCategory.subCategories
  );

  const { category } = useSelector((state) => state.categories);

  const handleQuillChange = (value) => {
    setContent(value);
  };

  const handleShowSubCategory = () => {
    const updatedValue = !showAddNewSubCategory;
    setShowAddNewSubCategory(updatedValue);
  };

  const handleImageButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleImageButtonClick2 = () => {
    fileInputRef2.current.click();
  };
  const handleImageButtonClick3 = () => {
    fileInputRef3.current.click();
  };

  const handleMainImageUrlChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setMainImageUrl(imageUrl);
    }
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };
  const handleOpenDropdown = () => {
    setShowDropdown(true);
  };

  const handleMobileImageUrlChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setMobileImageUrl(imageUrl);
    }
  };
  const handleDesktopImageUrlChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setBannerImageUrl(imageUrl);
    }
  };

  // useEffect(() => {
  //   if (category.state === "success") {
  //     cogoToast.success("Categorry added successfully");
  //     setName("");
  //   }
  // }, [category]);

  const handleSubmit = (data) => {
    if (name) {
      const body = {
        mainImageUrl: mainImageUrl,
        desktopBannerUrl: bannerImageUrl,
        mobileBannerUrl: mobileImageUrl,
        name: name,
        description: content,
        subCategories,
      };
      dispatch(addCategory(body));
      setName("");
      if (category.state === "success") {
        cogoToast.success("Categorry added successfully");
      }
    } else {
      cogoToast.error("Please enter the required field");
    }
  };

  useCustomEventListener("add-category", handleSubmit);

  return (
    <>
      {showAddNewSubCategory ? (
        <AddNewSubCategory
          subCategories={subCategories}
          goBack={() => setShowAddNewSubCategory(false)}
        />
      ) : (
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
                  <div
                    className={`bg-[#E1E1E1] rounded-[8px] mr-4 w-14 h-14 flex items-center justify-center overflow-hidden ${
                      mainImageUrl ? "p-0" : "p-2.5"
                    }`}
                  >
                    <img
                      src={mainImageUrl ? mainImageUrl : "/gallery.png"}
                      className={`${
                        mainImageUrl ? "w-full h-full " : "h-7 w-7"
                      } object-fill`}
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
                      onClick={handleImageButtonClick}
                    >
                      Add Image{" "}
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleMainImageUrlChange}
                    />
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
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Enter Category Name"
                    required
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
                <div className="font-freesans flex flex-col items-start justify-start mb-6">
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
                <div className="w-full">
                  <div className="flex justify-between w-[80%] border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab(0)}
                      className={`flex-grow text-center py-2 px-1 text-[14px] bg-white cursor-pointer ${
                        activeTab === 0
                          ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                          : "text-neutral-500 hover:bg-gray-100"
                      }`}
                    >
                      Desktop Banner{" "}
                    </button>
                    <button
                      onClick={() => setActiveTab(1)}
                      className={`flex-grow text-center py-2 px-1 text-[14px] bg-white cursor-pointer ${
                        activeTab === 1
                          ? "border-b-2 border-primary-300-main text-primary-300-main font-bold"
                          : "text-neutral-500 hover:bg-gray-100"
                      }`}
                    >
                      Mobile Banner{" "}
                    </button>
                  </div>
                  <div
                    style={{ borderTop: "2px solid #E5E7EB" }}
                    className="tab-content text-neutral-500 text-[14px] pt-8 mb-0 flex items-center justify-start"
                  >
                    {activeTab === 1 ? (
                      <div
                        style={{
                          borderRadius: "16px",
                          border: "2px dashed #E5E7EB",
                        }}
                        className=" w-full flex flex-row items-center justify-start  p-4"
                      >
                        {" "}
                        <div
                          className={`bg-[#E1E1E1] rounded-[8px] mr-4 w-14 h-14 flex items-center overflow-hidden justify-center ${
                            mobileImageUrl ? "p-0" : "p-2.5"
                          } `}
                        >
                          <img
                            mobileImageUrl
                            src={
                              mobileImageUrl ? mobileImageUrl : "/gallery.png"
                            }
                            className={`${
                              mobileImageUrl ? "w-full h-full " : "h-7 w-7"
                            } object-fill`}
                          />
                        </div>{" "}
                        <button
                          className="cursor-pointer w-[60%] lg:w-[40%]"
                          style={{
                            backgroundColor: "#4162FF",
                            color: "#ffffff",
                            padding: "8px 12px",
                            borderRadius: "4px",
                            fontSize: "12px",
                          }}
                          onClick={handleImageButtonClick2}
                        >
                          Add Banner{" "}
                        </button>
                        <input
                          ref={fileInputRef2}
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleMobileImageUrlChange}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          borderRadius: "16px",
                          border: "2px dashed #E5E7EB",
                        }}
                        className="w-full flex flex-row items-center justify-start  p-4"
                      >
                        {" "}
                        <div
                          className={`bg-[#E1E1E1] rounded-[8px] mr-4 w-14 h-14 flex items-center justify-center overflow-hidden ${
                            bannerImageUrl ? "p-0" : "p-2.5"
                          }`}
                        >
                          <img
                            src={
                              bannerImageUrl ? bannerImageUrl : "/gallery.png"
                            }
                            className={`${
                              bannerImageUrl ? "w-full h-full " : "h-7 w-7"
                            } object-fill`}
                          />
                        </div>{" "}
                        <button
                          className="cursor-pointer w-[60%] lg:w-[40%]"
                          style={{
                            backgroundColor: "#4162FF",
                            color: "#ffffff",
                            padding: "8px 12px",
                            borderRadius: "4px",

                            fontSize: "12px",
                          }}
                          onClick={handleImageButtonClick3}
                        >
                          Add Banner{" "}
                        </button>
                        <input
                          ref={fileInputRef3}
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleDesktopImageUrlChange}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
