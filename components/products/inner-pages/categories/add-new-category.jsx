import React, { useState, useRef } from "react";
import QuillNoSSRWrapper from "../../../RichTextEditor";
import { addCategory } from "../../../../redux/slices/addCategory";
import { useDispatch, useSelector } from "react-redux";
import cogoToast from "cogo-toast";
import AddNewSubCategory from "./add-new-sub-category";
import { useCustomEventListener } from "../../../../utils/custom_events";

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
  const [isChecked, setIsChecked] = useState(false);
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [mobileImageUrl, setMobileImageUrl] = useState("");
  const [bannerImageUrl, setBannerImageUrl] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const showAddNewSubCategory = useSelector((state) => state.addNewSubCategory);

  const handleQuillChange = (value) => {
    setContent(value);
  };

  const handleCheckboxChange = () => {
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

  const handleSubmit = (data) => {
    if (name) {
      const body = {
        mainImageUrl: data?.mainImageUrl,
        desktopBannerUrl: data?.bannerImageUrl,
        mobileBannerUrl: data?.mobileImageUrl,
        name: data?.name,
        description: data?.content,
        parentCategoryId: data?.categoryID ?? "12",
      };

      console.log(body, "<<<----")
      dispatch(addCategory(body));
    } else {
      cogoToast.error("Please enter the required field");
    }
  };

  useCustomEventListener("add-category", handleSubmit);

  return (
    <>
      {showAddNewSubCategory ? (
        <AddNewSubCategory goBack={() => setShowAddNewSubCategory(false)} />
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
                  <div className="bg-[#E1E1E1] rounded-[8px] mr-4 w-14 h-14 flex items-center justify-center p-2.5">
                    <img
                      src={"/gallery.png"}
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

                <div className="flex items-center mt-2">
                  <input
                    style={{
                      appearance: "none",
                      display: "none",
                    }}
                    checked={showAddNewSubCategory}
                    onChange={handleCheckboxChange}
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                  />
                  <label
                    style={{
                      color: "#4B5563",
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
                        width: "16px",
                        height: "16px",
                        borderRadius: "4px",
                        border: isChecked
                          ? "2px solid #3B82F6"
                          : "2px solid #D1D5DB",
                        backgroundColor: isChecked ? "white" : "transparent",
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
                          left: "2px",
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
                    Add as Subcategory{" "}
                  </label>
                </div>
                {showAddNewSubCategory ? <AddNewSubCategory /> : null}
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
                      src={"/gallery.png"}
                      className="w-7 h-7 object-contain"
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
                    Add Mobile Banner{" "}
                  </button>
                  <input
                    ref={fileInputRef2}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleMobileImageUrlChange}
                  />
                </div>
                <div className="flex items-center mt-6">
                  {" "}
                  <div className="bg-[#E1E1E1] rounded-[8px] mr-4 w-14 h-14 flex items-center justify-center p-2.5">
                    <img
                      src={"/gallery.png"}
                      className="w-7 h-7 object-contain"
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
                    Add Desktop Banner{" "}
                  </button>
                  <input
                    ref={fileInputRef3}
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleDesktopImageUrlChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
