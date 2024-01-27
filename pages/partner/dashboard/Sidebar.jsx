"use client";
import Cookies from "js-cookie";

const Sidebar = ({ setCurrentStep, currentStep }) => {

  return (
    <>
      <div className="h-screen relative w-[192px] lg:w-[240px] flex-col bg-white">
        <div>
          <img
            src="/partner_assets/launch-logo.svg"
            className="p-[10px] lg:p-[20px] w-[170px] lg:w-[200px] h-[40px]"
          />
        </div>
        <div
          onClick={() => setCurrentStep(1)}
          className={`${
            currentStep == 1
              ? "bg-[url('/partner_assets/bd.svg')] text-white"
              : "text-[#6B7280] "
          } cursor-pointer hover:bg-[url('/partner_assets/hover.svg')] hover:text-[#6B7280] m-[10px] flex items-center mb-[-10px] lg:m-[20px] bg-no-repeat w-[170px] lg:w-[200px] rounded-r-3xl h-[46px]`}
        >
          <svg
            className={`pl-[18px] pr-2 ${
              currentStep == 1 ? " text-white" : "text-[#6B7280]"
            }`}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4192 1.83325C12.9617 1.83325 12.375 2.38325 12.375 3.75825V9.99159C12.375 11.3666 12.9617 11.9166 14.4192 11.9166H18.1225C19.58 11.9166 20.1667 11.3666 20.1667 9.99159V3.75825C20.1667 2.38325 19.58 1.83325 18.1225 1.83325"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.1667 18.2417V16.5917C20.1667 15.2167 19.58 14.6667 18.1225 14.6667H14.4192C12.9617 14.6667 12.375 15.2167 12.375 16.5917V18.2417C12.375 19.6167 12.9617 20.1667 14.4192 20.1667H18.1225C19.58 20.1667 20.1667 19.6167 20.1667 18.2417Z"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.87717 20.1666C2.41967 20.1666 1.83301 19.6166 1.83301 18.2416V12.0083C1.83301 10.6333 2.41967 10.0833 3.87717 10.0833H7.58051C9.03801 10.0833 9.62467 10.6333 9.62467 12.0083V18.2416C9.62467 19.6166 9.03801 20.1666 7.58051 20.1666"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.62467 3.75825V5.40825C9.62467 6.78325 9.03801 7.33325 7.58051 7.33325H3.87717C2.41967 7.33325 1.83301 6.78325 1.83301 5.40825V3.75825C1.83301 2.38325 2.41967 1.83325 3.87717 1.83325H7.58051C9.03801 1.83325 9.62467 2.38325 9.62467 3.75825Z"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Dashboard</p>
        </div>
        <div
          onClick={() => setCurrentStep(2)}
          className={` mb-[-10px] cursor-pointer flex items-center ${
            currentStep == 2
              ? "bg-[url('/partner_assets/bd.svg')] text-white"
              : "text-[#6B7280] "
          } hover:bg-[url('/partner_assets/hover.svg')] hover:text-[#6B7280] m-[10px] flex items-center mb-[-10px] lg:m-[20px] bg-no-repeat w-[170px] lg:w-[200px] rounded-r-3xl h-[46px]`}
        >
          <svg
            className={`pl-[18px] pr-2 ${
              currentStep == 2 ? " text-white" : "text-[#6B7280]"
            }`}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.083 17.875H19.2497"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.333 11.4583H19.2497"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.083 11.4583H15.1155"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.083 5.04175H19.2497"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.75 5.04159L3.66667 5.95825L6.41667 3.20825"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.75 11.4583L3.66667 12.375L6.41667 9.625"
              stroke="currentColor"
              stroke-width="1.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.75 17.8751L3.66667 18.7917L6.41667 16.0417"
              stroke="currentColor"
              stroke-width="1.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Refferal List</p>
        </div>
        <div
          onClick={() => setCurrentStep(3)}
          className={`mb-[-10px] cursor-pointer flex items-center ${
            currentStep == 3
              ? "bg-[url('/partner_assets/bd.svg')] text-white"
              : "text-[#6B7280] "
          } hover:bg-[url('/partner_assets/hover.svg')] hover:text-[#6B7280] m-[10px] lg:m-[20px] bg-no-repeat w-[170px] lg:w-[200px] rounded-r-3xl h-[46px]`}
        >
          <svg
            className={`pl-[18px] pr-2 ${
              currentStep == 3 ? " text-white" : "text-[#6B7280]"
            }`}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.83301 11.0001C1.83301 8.50675 3.33634 6.76508 5.67384 6.47175C5.91217 6.43508 6.15967 6.41675 6.41634 6.41675H15.583C15.8213 6.41675 16.0505 6.4259 16.2705 6.46257C18.6355 6.73757 20.1663 8.48841 20.1663 11.0001V15.5834C20.1663 18.3334 18.333 20.1667 15.583 20.1667H6.41634C3.66634 20.1667 1.83301 18.3334 1.83301 15.5834V14.6759"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.2715 6.46242C16.0515 6.42575 15.8223 6.4166 15.584 6.4166H6.4173C6.16064 6.4166 5.91314 6.43493 5.6748 6.47159C5.80314 6.21493 5.98647 5.97659 6.20647 5.75659L9.18564 2.76825C10.4415 1.52159 12.4765 1.52159 13.7323 2.76825L15.3365 4.39077C15.9231 4.96827 16.2348 5.70158 16.2715 6.46242Z"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.1663 11.4583H17.4163C16.408 11.4583 15.583 12.2833 15.583 13.2916C15.583 14.2999 16.408 15.1249 17.4163 15.1249H20.1663"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Income</p>
        </div>
        <div
          onClick={() => setCurrentStep(4)}
          className={` mb-[-10px] cursor-pointer flex items-center hover:bg-[url('/partner_assets/hover.svg')] ${
            currentStep == 4
              ? "bg-[url('/partner_assets/bd.svg')] text-white"
              : "text-[#6B7280] "
          } hover:text-[#6B7280] m-[10px] lg:m-[20px] bg-no-repeat w-[170px] lg:w-[200px] rounded-r-3xl h-[46px]`}
        >
          <svg
            className={`pl-[18px] pr-2 ${
              currentStep == 4 ? " text-white" : "text-[#6B7280]"
            }`}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.83301 10.5967V12.3109C1.83301 15.0609 3.66634 16.8943 6.41634 16.8943H10.083L14.1622 19.6076C14.7672 20.0109 15.583 19.5801 15.583 18.8468V16.8943C18.333 16.8943 20.1663 15.0609 20.1663 12.3109V6.81087C20.1663 4.06087 18.333 2.22754 15.583 2.22754H6.41634C3.66634 2.22754 1.83301 4.06087 1.83301 6.81087"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.0002 10.4131V10.2206C11.0002 9.59729 11.3852 9.26727 11.7702 9.00144C12.146 8.74477 12.5218 8.41478 12.5218 7.80978C12.5218 6.96645 11.8435 6.28809 11.0002 6.28809C10.1568 6.28809 9.47852 6.96645 9.47852 7.80978"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9962 12.6043H11.0045"
              stroke="currentColor"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p>FAQs</p>
        </div>
        <div className="absolute bottom-0">
          <div
            onClick={() => setCurrentStep(5)}
            className={`mb-[-10px] cursor-pointer flex items-center ${
              currentStep == 5
                ? "bg-[url('/partner_assets/bd.svg')] text-white"
                : "text-[#6B7280] "
            } hover:bg-[url('/partner_assets/hover.svg')] hover:text-[#6B7280] m-[10px] lg:m-[20px] bg-no-repeat w-[170px] lg:w-[200px] rounded-r-3xl h-[46px]`}
          >
            <svg
              className={`pl-[18px] pr-2 ${
                currentStep == 5 ? " text-white" : "text-[#6B7280]"
              }`}
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.75 11.5C13.75 9.97833 12.5217 8.75 11 8.75C9.47833 8.75 8.25 9.97833 8.25 11.5C8.25 13.0217 9.47833 14.25 11 14.25C11.3758 14.25 11.7425 14.1767 12.0725 14.03"
                stroke="currentColor"
                stroke-width="1.1"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.30664 19.3646L7.30581 19.9421C8.02997 20.373 8.96497 20.1163 9.39581 19.3921L9.49664 19.218C10.3216 17.7788 11.6783 17.7788 12.5125 19.218L12.6133 19.3921C13.0441 20.1163 13.9791 20.373 14.7033 19.9421L16.2891 19.0346C17.1233 18.558 17.4075 17.4855 16.9308 16.6605C16.0966 15.2213 16.775 14.048 18.4341 14.048C19.3875 14.048 20.1758 13.2688 20.1758 12.3063V10.693C20.1758 9.73964 19.3966 8.9513 18.4341 8.9513C17.5083 8.9513 16.885 8.58464 16.665 8.00714C16.4908 7.55797 16.5641 6.9713 16.9308 6.3388C17.4075 5.50464 17.1233 4.4413 16.2891 3.96464L15.5466 3.54297"
                stroke="currentColor"
                stroke-width="1.1"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.503 3.78165C11.678 5.22082 10.3213 5.22082 9.48717 3.78165L9.38634 3.60748C8.96467 2.88332 8.02967 2.62665 7.30551 3.05748L5.71967 3.96498C4.88551 4.44165 4.60134 5.51415 5.07801 6.34832C5.91217 7.77832 5.23384 8.95165 3.57467 8.95165C2.62134 8.95165 1.83301 9.73082 1.83301 10.6933V12.3066C1.83301 13.26 2.61217 14.0483 3.57467 14.0483C5.23384 14.0483 5.91217 15.2216 5.07801 16.6608"
                stroke="currentColor"
                stroke-width="1.1"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Settings</p>
          </div>
          <div
            onClick={() => {setCurrentStep(6)}}
            className={`mb-[18px] cursor-pointer flex items-center text-[#6B7280] hover:bg-[url('/partner_assets/hover.svg')] hover:text-[#6B7280] m-[10px] lg:m-[20px] bg-no-repeat w-[170px] lg:w-[200px] rounded-r-3xl h-[46px]`}
          >
            <svg
              className="pl-[18px] pr-2"
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7088 12.4165V14.4882C19.7088 18.5857 18.068 20.2265 13.9705 20.2265H13.8513C10.1663 20.2265 8.47047 18.8973 8.16797 15.6523"
                stroke="currentColor"
                stroke-width="1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.1582 7.43021C8.44237 4.13021 10.1382 2.78271 13.8507 2.78271H13.9699C18.0674 2.78271 19.7082 4.42355 19.7082 8.52105"
                stroke="currentColor"
                stroke-width="1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.75 11.5H3.31836"
                stroke="currentColor"
                stroke-width="1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.36283 8.4292L2.29199 11.5L5.36283 14.5709"
                stroke="currentColor"
                stroke-width="1.1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
