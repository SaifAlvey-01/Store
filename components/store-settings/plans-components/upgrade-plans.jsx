import React, { useState } from "react";

export default function UpgradePlans() {
  return (
    <div
      className="min-h-[calc(106vh-160px)] sm:min-h-[calc(100% - 100px)] p-5 overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
      }}
    >
      <div
        className="w-full"
        style={{
          border: "1px solid #EAECF0",
          backgroundColor: "var(--white-color, #FFF)",
          borderRadius: "10px",
          boxSizing: "border-box",
        }}
      >
        <div className="flex flex-col items-center justify-between ">
          <h3 className="font-freesans font-[400] text-[18px] text-[#4B4B4B] my-4">
            Upgrade to a plan that best suits your business requirements
          </h3>

          <div
            className="px-2 py-1 mt-2"
            style={{
              borderRadius: "6px",
              border: "1px solid #F3F4F6",
              background: "#F9FAFB",
              boxShadow: "0px 9px 16px 0px rgba(245, 250, 255, 0.04)",
            }}
          >
            <ul className="p-0 m-0 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 list-none">
              <li class="me-1.5">
                <a
                  href="#"
                  class="inline-block px-4 py-1.5 rounded-[6px] text-[#9CA3AF] hover:bg-[#ECEFFF] no-underline"
                  aria-current="page"
                >
                  Quarterly{" "}
                </a>
              </li>
              <li class="me-1.5">
                <a
                  href="#"
                  class="inline-block px-4 py-1.5 rounded-[6px] text-[#9CA3AF] hover:bg-[#ECEFFF] no-underline"
                >
                  Yearly (Save up to 25%){" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
