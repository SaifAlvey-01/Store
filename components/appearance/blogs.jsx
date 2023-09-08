import React from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function Blogs() {
  return (
    <div
      className="h-auto overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
        marginBottom: "10px",
      }}
    >
      <div
        className="my-8 mx-4 sm:my-8 sm:mx-4 lg:my-16 lg:mx-24 lg:my-16 lg:mx-24 lg:w-[70%] w-[90%]"
        style={{
          border: "1px solid #e3e3e3",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <img
            src={"/dashboard_images/blog.png"}
            // alt={label}
            className="w-600 h-600 "
          />

          <div className="flex flex-col items-center justify-between ">
            <h2
              style={{ color: "#4B4B4B" }}
              className="mt-0 mb-4 font-bold font-freesans"
            >
              Add blog to your online store{" "}
            </h2>
            <p
              style={{
                color: "#8E8E8E",
                // width: "100%",
                // maxWidth: "80%",
                textAlign: "center",
              }}
              className="mt-0 mb-2 my-0 font-thin text-base w-[100%] lg:max-w-[80%] max-w-[100%]"
            >
              Engage with your customers by sharing your expertise and building
              a story around your brand.
            </p>
          </div>

          <button
            className="mt-4 mb-8 cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 30px",
              borderRadius: "4px",
            }}
          >
            Add Blog Post{" "}
          </button>
        </div>
      </div>

      <div className=" w-[90%] mx-4 mb-8 mt-4   flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
