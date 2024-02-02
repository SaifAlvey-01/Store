import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import useAxios from "../../../hooks/useAxios";
import { countryOptions } from "../../../components/constants/countryOptions";
import CountrySelect from "../../../components/dropdown-selects/CountrySelect";

import Cookie from "js-cookie";
import pageload from "/public/logoutLoader.json";
import Lottie from "lottie-react";

const dashboard5 = ({ setCurrentStep, currentStep }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [isActive, setIsactive] = useState(false);
  const [defaultCountry, setDefault] = useState(null);

  const { status, data: session } = useSession();
  const token = Cookie.get("token");
  const [headerValue, setHeaderValue] = useState(
    router.pathname === "/partner/dashboard" ? "Dashboard" : ""
  );
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const [opc, setOpc] = useState(0);

  const [note, setNote] = useState(0);
  const [data, setData] = useState(" ");
  const { resdata, error, loading, putData: putRequest } = useAxios();
  const [customError, setCustomError] = useState(null);

  useEffect(() => {
    if (
      resdata.message &&
      resdata.message === "OTP has been send on provided email"
    ) {
      setCurrentStep(3);
    }

    if (resdata.message && resdata.state === "success") {
      setCustomError(error);
    }

    if (defaultCountry && !isSelect) {
      const country = countryOptions.filter(
        (opt) => opt.label === defaultCountry
      );
      setSelectedCountry(country[0]);
    }
    if (resdata.state && resdata.state === "success") {
      setloading(true);
      setCurrentStep(6);
    }

    if (Object.keys(selectedCountry).length > 0) {
      setIsactive(true);
    } else {
      setIsactive(false);
    }
  }, [loading, selectedCountry, resdata, isActive, defaultCountry, resdata]);
  const getCode = () => {
    navigator.clipboard.writeText(code);
    setNote(1);
    if (note == 1) {
      setData("Code copied successfully.");
    }
    if (note == 2) {
      setData("Thank You mail sent successfully.");
    }
    const [note, setNote] = useState(0);
    const [data, setData] = useState(" ");
    if (note == 0) {
      setData(" ");
    }
    setTimeout(() => {
      setNote(0);
    }, 4000);
  };

  const sendMail = () => {
    setNote(2);
    if (note == 1) {
      setData("Code copied successfully.");
    }
    if (note == 2) {
      setData("Thank You mail sent successfully.");
    }
    if (note == 0) {
      setData(" ");
    }
    setTimeout(() => {
      setNote(0);
    }, 4000);
  };
  const handleCountryChange = (selectedOption) => {
    if (selectedOption) {
      setIsSelect(true);
      setSelectedCountry(selectedOption);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/partner");
    }
  }, []);

  if (!token) {
    return (
      <div
        style={{ backgroundColor: "#F7F9FB" }}
        className="bg-[url('/partner_assets/bg-gradient.svg')] flex h-screen overflow-hidden"
      >
        <div className=" overflow-y-auto flex flex-col items-center justify-center w-full">
          <div className="h-1/2 w-96 mx-auto my-auto">
            <Lottie animationData={pageload} loop={true} autoplay={true} />;
          </div>
        </div>
      </div>
    );
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div
      style={{ backgroundColor: "#F7F9FB" }}
      className="flex h-screen overflow-hidden "
    >
      <Sidebar setCurrentStep={setCurrentStep} currentStep={currentStep} />
      <div className="relative flex flex-col flex-1 overflow-x-hidden h-full">
        <>
          <header className="sticky m-6 items-center rounded-lg top-0 shadow flex bg-white border-b border-slate-200 h-[52px]">
            <div>
              <p className="text-[20px] font-freesans font-semibold ml-5 content-center">
                Settings
              </p>
            </div>
            <div className="absolute flex justify-center items-center right-0">
              {note > 0 && (
                <div
                  className={`${
                    data == " " ? "hidden" : "visible"
                  } h-[40px] px-[10px] text-[14px] flex justify-center items-center rounded-md font-[400] font-freesans bg-[#e5f5ec]`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9993 2.6665C6.85668 2.6665 2.66602 6.85717 2.66602 11.9998C2.66602 17.1425 6.85668 21.3332 11.9993 21.3332C17.142 21.3332 21.3327 17.1425 21.3327 11.9998C21.3327 6.85717 17.142 2.6665 11.9993 2.6665ZM16.4607 9.85317L11.1687 15.1452C11.038 15.2758 10.8607 15.3505 10.674 15.3505C10.4873 15.3505 10.31 15.2758 10.1793 15.1452L7.53802 12.5038C7.26735 12.2332 7.26735 11.7852 7.53802 11.5145C7.80868 11.2438 8.25668 11.2438 8.52735 11.5145L10.674 13.6612L15.4713 8.86384C15.742 8.59317 16.19 8.59317 16.4607 8.86384C16.7313 9.1345 16.7313 9.57317 16.4607 9.85317Z"
                      fill="#0C9D61"
                    />
                  </svg>
                  <p className="m-1">{data}</p>
                </div>
              )}
              <img
                className="w-[28px] h-[28px] mx-5"
                src="/partner_assets/profile.svg"
              />
            </div>
          </header>
        </>
        <main className="flex-grow">
          <div
            style={{ backgroundColor: "#F7F9FB" }}
            className=" py-5 ml-1 mr-11"
          >
            <div>
              <div className="mt-[-25px]">
                <div className="flex ml-5">
                  <svg
                    className="cursor-pointer"
                    onClick={() => router.back()}
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.77217 5.93555L3.20801 11.4997L8.77217 17.0639"
                      stroke="#374151"
                      stroke-width="1.3"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.7918 11.5H3.36426"
                      stroke="#374151"
                      stroke-width="1.375"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-[20px] font-freesans ml-3 mt-[-1px] content-center">
                    Overview
                  </p>
                </div>
                <div className="flex-col shadow font-freesans bg-white border-b mx-5 border-slate-200 rounded-lg h-full w-full">
                  <div className=" flex items-center py-5 pl-6">
                    <svg
                      className="pr-2"
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="42"
                        height="42"
                        rx="12"
                        fill="#E9F2FF"
                      />
                      <path
                        d="M19.4299 11.92C20.3999 11.36 21.5999 11.36 22.5799 11.92L28.5199 15.35C29.4899 15.91 30.0899 16.95 30.0899 18.08V24.92C30.0899 26.04 29.4899 27.08 28.5199 27.65L22.5799 31.08C21.6099 31.64 20.4099 31.64 19.4299 31.08L13.4899 27.65C12.5199 27.09 11.9199 26.05 11.9199 24.92V18.08C11.9199 16.96 12.5199 15.92 13.4899 15.35L15.3899 14.25"
                        stroke="#4162FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.9999 20.4998C22.2867 20.4998 23.3299 19.4566 23.3299 18.1698C23.3299 16.883 22.2867 15.8398 20.9999 15.8398C19.7131 15.8398 18.6699 16.883 18.6699 18.1698C18.6699 19.4566 19.7131 20.4998 20.9999 20.4998Z"
                        stroke="#4162FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25 26.1594C25 24.3594 23.21 22.8994 21 22.8994C18.79 22.8994 17 24.3594 17 26.1594"
                        stroke="#4162FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-[16px] font-freesans font-[500]">
                      Profile
                    </p>
                  </div>
                  <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="flex justify-start items-center">
                    <div className="ml-10">
                      <p className="text-[#374151] text-[14px] pt-5">
                        Your Name
                      </p>
                      <input
                        type="text"
                        style={{
                          fontSize: "16px",
                          color: "#9CA3AF",
                          "::placeholder": { color: "#9CA3AF" },
                        }}
                        placeholder="Enter Your Name"
                        className="'h-[20px] w-[400px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro"
                      />
                    </div>
                    <div className="ml-10">
                      <p className="text-[#374151] text-[14px] pt-5">Email</p>
                      <input
                        type="text"
                        style={{
                          fontSize: "16px",
                          color: "#9CA3AF",
                          "::placeholder": { color: "#9CA3AF" },
                        }}
                        placeholder="Enter your email "
                        {...register("email", {
                          required: "Enter A Valid Email Address !",
                          pattern: {
                            value:
                              /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|^\+[0-9]{10,15}$)/i,
                            message: "Invalid email ",
                          },
                        })}
                        className={`'h-[20px] w-[400px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <div className="flex flex-col w-full items-start">
                          <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                            {errors.email.message}
                          </p>
                        </div>
                      )}

                      {!errors.email && error && (
                        <div className="flex flex-col w-full items-start">
                          <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                            {error}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="ml-10">
                      <p className="text-[#374151] text-[14px] pt-5">
                        Phone Number
                      </p>
                      <input
                        type="number"
                        style={{
                          fontSize: "16px",
                          color: "#9CA3AF",
                          "::placeholder": { color: "#9CA3AF" },
                        }}
                        placeholder="Enter Phone Number"
                        className="mr-3 ml-[-8px] relative cursor-default h-[20px] w-[400px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro"
                      />
                    </div>
                    <div className="ml-10">
                      <p className="text-[#374151] text-[14px]">Country</p>
                      <div className="h-[20px] w-[430px] border-2 mt-[-12px] text-[#9CA3AF] rounded-[12px] px-3 mr-3 ml-[-8px] focus:border-blue-500 relative cursor-default ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4162FF]">
                        <CountrySelect
                          value={selectedCountry}
                          onChange={handleCountryChange}
                          options={countryOptions}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ml-7">
                      <p className="text-[#374151] text-[14px] pt-5">
                        Password
                      </p>
                      <div className="relative mx-auto">
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="Enter your password"
                          className={`h-[20px] w-[400px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro ${
                            errors.password ? "border-red-500" : ""
                          }`}
                          {...register("password", {
                            required: "Password is required",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&#]{8,}$/,
                              message:
                                "Password must be at least 8 characters, 1 uppercase, 1 lowercase & 1 number",
                            },
                          })}
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-12 text-gray-600"
                          onClick={togglePasswordVisibility}
                        >
                          {isPasswordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                          {customError ? customError : errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default dashboard5;
