import React, { useState } from "react";

export default function accordian({ ques, ans }) {
  const [check, setCheck] = useState(0);

  return (
    <div className="flex-col relative">
      <div
        onClick={() => {
          check == 0 ? setCheck(1) : setCheck(0);
        }}
        className={`m-6 relative rounded-lg top-0 shadow ${check == 0? "h-[46px]":"h-[196px]"} bg-white border-b border-slate-200`}
      >
        <p className="text-[16px] font-freesans pt-3.5 ml-5 content-center">{ques}</p>
        {check == 0 ? (
          <svg
            className="w-[24px] h-[25px] absolute right-0 mr-3 mt-[-38px]"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16.5V8.5"
              stroke="#374151"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.9902 12.5H16.0002"
              stroke="#374151"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12.5H11.81"
              stroke="#374151"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 16.5V8.5"
              stroke="#374151"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 6.5C2.75 8.17 2 10.25 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5C10.57 2.5 9.2 2.8 7.97 3.35"
              stroke="#374151"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="w-[24px] h-[25px] absolute  mt-[-38px] right-0 mr-3"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9902 12.5H16.0002"
              stroke="#374151"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12.5H12"
              stroke="#374151"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 6.5C2.75 8.17 2 10.25 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5C10.57 2.5 9.2 2.8 7.97 3.35"
              stroke="#374151"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        <div
          className={`text-[14px] mr-16 transition-all ease-in-out bottom-0  font-freesans h-[110px] ml-5 content-center ${
            check == 0 ? "hidden" : "visible "
          }`}
        >
          <p className="w-full text-[#6B7280] pb-10">{ans}</p>
        </div>
      </div>
    </div>
  );
}
