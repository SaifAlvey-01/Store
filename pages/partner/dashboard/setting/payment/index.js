import Sidebar from "../../Sidebar";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { countryOptions } from "../../../../../components/constants/countryOptions";
import { useEffect, useState } from "react";
import useAxios from "../../../../../hooks/useAxios";
import axios from "axios";
import Cookie from "js-cookie";
import pageload from "/public/logoutLoader.json";
import Lottie from "lottie-react";
import Verify from "./../Verify";

const dashboard6 = ({ setCurrentStep, currentStep, currStep, setCurrStep }) => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState({});
  const [isActive, setIsactive] = useState(false);
  const [defaultCountry, setDefault] = useState(null);
  const [isSelect, setIsSelect] = useState(false);
  const { status, data: session } = useSession();
  const token = Cookie.get("token");
  const [headerValue, setHeaderValue] = useState(
    router.pathname === "/partner/dashboard" ? "Dashboard" : ""
  );
  const { resdata, error, loading, putData: putRequest } = useAxios();
  const [business, setBusiness] = useState("");
  let id = Cookie.get("id");

  const handleCountryChange = (selectedOption) => {
    if (selectedOption) {
      setIsSelect(true);
      setSelectedCountry(selectedOption);
    }
  };

  useEffect(() => {
    axios.get("https://1.1.1.1/cdn-cgi/trace").then((response) => {
      var locRegex = /loc=([^\s]+)/;

      // Use the regular expression to extract the value of "loc"
      var match = response.data.match(locRegex);
      // Check if a match was found and extract the value
      var locValue = match ? match[1] : null;

      const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

      setDefault(regionNames.of(locValue));
    });
  }, []);

  useEffect(() => {
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
  }, [loading, selectedCountry, resdata, isActive, defaultCountry]);
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cnumber, setCnumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [note, setNote] = useState(0);
  const [data, setData] = useState(" ");
  const [errorMessageN, setErrorMessageN] = useState("");
  const [errorMessageE, setErrorMessageE] = useState("");
  const [errorMessageP, setErrorMessageP] = useState("");
  const [opc, setOpc] = useState(0);
  const [opcc, setOpcc] = useState(0);
  const [email, setEmail] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [accH, setAccH] = useState("");
  const [accN, setAccN] = useState("");
  const [accC, setAccC] = useState("");
  const [accS, setAccS] = useState("");
  const [bankN, setbankN] = useState("");
  const [bankH, setbankH] = useState("");
  const [erroraccH, setErrorAccH] = useState("");
  const [erroraccN, setErrorAccN] = useState("");
  const [erroraccC, setErrorAccC] = useState("");
  const [erroraccS, setErrorAccS] = useState("");
  const [errorbankN, setErrorbankN] = useState("");
  const [errorbankH, setErrorbankH] = useState("");

  useEffect(() => {
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

  const getAcc = () => {
    setNote(1);
    if (note == 1) {
      setData("Account Added successfully.");
    }
    if (note == 0) {
      setData(" ");
    }
    setTimeout(() => {
      setNote(0);
    }, 4000);
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

  const handleFormSubmit1 = (e) => {
    e.preventDefault();
    setErrorMessageEmail("");

    const emailPattern =
      /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|^\+[0-9]{10,15}$)/i;
    // api & condition
    if (!emailPattern.test(email) || !email) {
      setErrorMessageEmail("Please enter valid email.");
      return;
    }
    // postRequest("/auth/forget-password", data);
    getAcc();
    setOpc(0);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setErrorMessageN("");
    setErrorMessageE("");
    setErrorMessageP("");

    if (!name) {
      setErrorMessage("Please enter valid name.");
      return;
    }
    if (!number || !cnumber) {
      setErrorMessageN("Please fill out fields.");
      setErrorMessageE("Please fill out fields.");
      return;
    }

    if (!number || !cnumber) {
      setErrorMessageN("Account Numbers do not match.");
      setErrorMessageE("Account Numbers do not match.");
      return;
    }
    if (!ifsc) {
      setErrorMessageP("Enter Valid IFSC.");
      return;
    }

    // postRequest("/auth/forget-password", data);
    getAcc();
    setOpc(0);
  };

  const handleFormSubmitt = (e) => {
    e.preventDefault();
    setErrorAccH("");
    setErrorAccN("");
    setErrorAccC("");
    setErrorAccS("");
    setErrorbankN("");
    setErrorbankH("");

    if (!accN) {
      setErrorAccH("Please enter valid name.");
      return;
    }
    if (!accN || !accC) {
      setErrorAccN("Please fill out fields.");
      setErrorAccC("Please fill out fields.");
      return;
    }

    if (!accN || !accC) {
      setErrorMessageN("Account Numbers do not match.");
      setErrorMessageE("Account Numbers do not match.");
      return;
    }
    if (!accS) {
      setErrorAccS("Enter Valid Code.");
      return;
    }

    if (!bankN) {
      setErrorbankN("Enter Valid Bank Name.");
      return;
    }

    if (!bankH) {
      setErrorbankH("Enter Valid Address.");
      return;
    }

    // postRequest("/auth/forget-password", data);
    setOpcc(1);
  };

  const [OTP, setOTP] = useState("");
  const onTextFieldContainer1Click = async () => {
    setOpc(0);
    setOpcc(0);
    const data = { verificationCode: Number(OTP), email: email };
  };

  const handleresend = async () => {
    putRequest("/auth/resend-email-verification-code", { email: email });
  };
  return (
    <div
      style={{ backgroundColor: "#F7F9FB" }}
      className="flex h-screen overflow-hidden "
    >
      <div
        className={`w-full h-screen grid justify-center items-center place-items-center z-40  absolute ${
          opc == 5 ? "visible bg-black bg-opacity-60" : "hidden"
        }`}
      >
        <div
          className={`w-[408px] z-50 h-full visible object-center rounded-[24px] shadow border-slate-200 bg-white`}
        >
          <div className="p-[24px]">
            <div className="flex justify-between mx-2">
              <p className="text-[20px] font-semibold font-freesans mt-[-1px]">
                Add New Account
              </p>
              <svg
                className="cursor-pointer"
                onClick={() => setOpc(0)}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9998 6.49982C17.8123 6.31235 17.558 6.20703 17.2928 6.20703C17.0277 6.20703 16.7733 6.31235 16.5858 6.49982L11.9998 11.0858L7.41382 6.49982C7.22629 6.31235 6.97198 6.20703 6.70682 6.20703C6.44165 6.20703 6.18735 6.31235 5.99982 6.49982C5.81235 6.68735 5.70703 6.94165 5.70703 7.20682C5.70703 7.47198 5.81235 7.72629 5.99982 7.91382L10.5858 12.4998L5.99982 17.0858C5.81235 17.2733 5.70703 17.5277 5.70703 17.7928C5.70703 18.058 5.81235 18.3123 5.99982 18.4998C6.18735 18.6873 6.44165 18.7926 6.70682 18.7926C6.97198 18.7926 7.22629 18.6873 7.41382 18.4998L11.9998 13.9138L16.5858 18.4998C16.7733 18.6873 17.0277 18.7926 17.2928 18.7926C17.558 18.7926 17.8123 18.6873 17.9998 18.4998C18.1873 18.3123 18.2926 18.058 18.2926 17.7928C18.2926 17.5277 18.1873 17.2733 17.9998 17.0858L13.4138 12.4998L17.9998 7.91382C18.1873 7.72629 18.2926 7.47198 18.2926 7.20682C18.2926 6.94165 18.1873 6.68735 17.9998 6.49982Z"
                  fill="#374957"
                />
              </svg>
            </div>
            <div className="mx-[5px] border-t-[1px] border-solid border-slate-200"></div>
            <div className="mt-5">
              <p className="text-[#374151] text-[14px]">Account Holder Name</p>
              <div className="relative mx-auto">
                <input
                  placeholder="Type Accout Holder Name"
                  type="text"
                  value={accH}
                  onChange={(e) => setAccH(e.target.value)}
                  className={`h-[10px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[12px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25977 10H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 15H21"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.25977 20H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0498 5H20.9998"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H5.98"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {erroraccH && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {erroraccH}
                </span>
              )}
            </div>
            <div className="mt-5">
              <p className="text-[#374151] text-[14px] ">
                Account Number / Routing Number
              </p>
              <div className="relative mx-auto">
                <input
                  type="number"
                  placeholder="Type Account Number / Routing Number"
                  value={accN}
                  onChange={(e) => setAccN(e.target.value)}
                  className={`h-[10px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[12px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25977 10H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 15H21"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.25977 20H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0498 5H20.9998"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H5.98"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {erroraccN && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {erroraccN}
                </span>
              )}
            </div>
            <div className="mt-5">
              <p className="text-[#374151] text-[14px]">
                Confirm Account Number / Routing Number
              </p>
              <div className="relative mx-auto">
                <input
                  type="number"
                  placeholder="Confirm Account Number / Routing Number"
                  value={accC}
                  onChange={(e) => setAccC(e.target.value)}
                  className={`h-[10px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[12px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25977 10H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 15H21"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.25977 20H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0498 5H20.9998"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H5.98"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {erroraccC && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {erroraccC}
                </span>
              )}
            </div>
            <div className="mt-5">
              <p className="text-[#374151] text-[14px]">
                Swift Code / IBAN Number
              </p>
              <div className="relative mx-auto">
                <input
                  type="number"
                  value={accS}
                  onChange={(e) => setAccS(e.target.value)}
                  placeholder="Enter Swift Code / IBAN Number"
                  className={`h-[10px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[14px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.02992 14.4999C8.63992 13.9299 8.41992 13.2399 8.41992 12.4999C8.41992 10.5199 10.0199 8.91992 11.9999 8.91992C13.9799 8.91992 15.5799 10.5199 15.5799 12.4999C15.5799 14.4799 13.9799 16.0799 11.9999 16.0799"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5598 6.08047C15.8698 4.88047 13.9698 4.23047 11.9998 4.23047C8.46984 4.23047 5.17984 6.31047 2.88984 9.91047C1.98984 11.3205 1.98984 13.6905 2.88984 15.1005C5.17984 18.7005 8.46984 20.7805 11.9998 20.7805C15.5298 20.7805 18.8198 18.7005 21.1098 15.1005C22.0098 13.6905 22.0098 11.3205 21.1098 9.91047"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {erroraccS && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {erroraccS}
                </span>
              )}
            </div>
            <div className="mt-5">
              <p className="text-[#374151] text-[14px]">Bank Name</p>
              <div className="relative mx-auto">
                <input
                  type="text"
                  value={bankN}
                  onChange={(e) => setbankN(e.target.value)}
                  placeholder="Enter Bank Name"
                  className={`h-[10px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[14px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.02992 14.4999C8.63992 13.9299 8.41992 13.2399 8.41992 12.4999C8.41992 10.5199 10.0199 8.91992 11.9999 8.91992C13.9799 8.91992 15.5799 10.5199 15.5799 12.4999C15.5799 14.4799 13.9799 16.0799 11.9999 16.0799"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5598 6.08047C15.8698 4.88047 13.9698 4.23047 11.9998 4.23047C8.46984 4.23047 5.17984 6.31047 2.88984 9.91047C1.98984 11.3205 1.98984 13.6905 2.88984 15.1005C5.17984 18.7005 8.46984 20.7805 11.9998 20.7805C15.5298 20.7805 18.8198 18.7005 21.1098 15.1005C22.0098 13.6905 22.0098 11.3205 21.1098 9.91047"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {errorbankN && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {errorbankN}
                </span>
              )}
            </div>
            <div className="mt-5">
              <p className="text-[#374151] text-[14px]">Bank Address</p>
              <div className="relative mx-auto">
                <input
                  type="text"
                  value={bankH}
                  onChange={(e) => setbankH(e.target.value)}
                  placeholder="Enter Bank Address"
                  className={`h-[10px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[14px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.02992 14.4999C8.63992 13.9299 8.41992 13.2399 8.41992 12.4999C8.41992 10.5199 10.0199 8.91992 11.9999 8.91992C13.9799 8.91992 15.5799 10.5199 15.5799 12.4999C15.5799 14.4799 13.9799 16.0799 11.9999 16.0799"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5598 6.08047C15.8698 4.88047 13.9698 4.23047 11.9998 4.23047C8.46984 4.23047 5.17984 6.31047 2.88984 9.91047C1.98984 11.3205 1.98984 13.6905 2.88984 15.1005C5.17984 18.7005 8.46984 20.7805 11.9998 20.7805C15.5298 20.7805 18.8198 18.7005 21.1098 15.1005C22.0098 13.6905 22.0098 11.3205 21.1098 9.91047"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {errorbankH && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {errorbankH}
                </span>
              )}
            </div>
            <div className="mx-[5px] border-t-[1px] my-5 border-solid border-slate-200"></div>
            <div className={`${opcc == 1 ? "visible" : "hidden"}`}>
              <p className="text-[#9CA3AF] text-[14px]">
                Enter Code send to you at:
              </p>
              <p className="text-[14px] mt-[-10px] mb-4">
                <a
                  style={{
                    textDecoration: "none",
                    color: "#4162FF",
                    cursor: "pointer",
                  }}
                  // href={`mailto:${email}`}
                >
                  ({email})
                </a>
              </p>
              <div className="w-[340px] mt-[-12px] ml-[13px] flex flex-row items-center justify-center  gap-[4px] cursor-pointer text-sm text-dimgray">
                <Verify OTP={OTP} setOTP={setOTP} />
              </div>
              <div
                onClick={handleresend}
                className=" text-[12px] mb-5 ml-40 font-normal leading-[20px] font-roboto text-[#6B7280]"
              >
                Didn’t get the code?{" "}
                <a className="text-[#4162FF] ml-1">Resend OTP</a>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <div className="mx-2 justify-center cursor-pointer w-[132px] h-[36px] rounded-md flex items-center border-2 border-slate-200 border-solid text-white">
                <p
                  onClick={() => setOpc(0)}
                  className="text-[14px] text-black font-[400]"
                >
                  Cancel
                </p>
              </div>
              <div
                onClick={handleFormSubmitt}
                className={`${
                  opcc == 1 ? "hidden" : ""
                } mx-2 justify-center cursor-pointer w-[132px] h-[36px] rounded-md flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white`}
              >
                <p className="text-[14px] font-[400]">Send OTP</p>
              </div>
              <div
                onClick={onTextFieldContainer1Click}
                className={` ${
                  opcc == 1 ? "visible" : "hidden"
                } mx-2 justify-center cursor-pointer w-[132px] h-[36px] rounded-md flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white`}
              >
                <p className="text-[14px] font-[400]">Verify & Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full grid justify-center items-center place-items-center z-40  absolute ${
          opc == 4 ? "visible bg-black bg-opacity-60" : "hidden"
        }`}
      >
        <div
          className={`w-[408px] z-50 h-[305px] visible object-center rounded-[24px] shadow border-slate-200 bg-white`}
        >
          <div className="p-[24px]">
            <div className="flex justify-between mx-2">
              <p className="text-[20px] font-semibold font-freesans mt-[-1px]">
                Add New Account
              </p>
              <svg
                className="cursor-pointer"
                onClick={() => setOpc(0)}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9998 6.49982C17.8123 6.31235 17.558 6.20703 17.2928 6.20703C17.0277 6.20703 16.7733 6.31235 16.5858 6.49982L11.9998 11.0858L7.41382 6.49982C7.22629 6.31235 6.97198 6.20703 6.70682 6.20703C6.44165 6.20703 6.18735 6.31235 5.99982 6.49982C5.81235 6.68735 5.70703 6.94165 5.70703 7.20682C5.70703 7.47198 5.81235 7.72629 5.99982 7.91382L10.5858 12.4998L5.99982 17.0858C5.81235 17.2733 5.70703 17.5277 5.70703 17.7928C5.70703 18.058 5.81235 18.3123 5.99982 18.4998C6.18735 18.6873 6.44165 18.7926 6.70682 18.7926C6.97198 18.7926 7.22629 18.6873 7.41382 18.4998L11.9998 13.9138L16.5858 18.4998C16.7733 18.6873 17.0277 18.7926 17.2928 18.7926C17.558 18.7926 17.8123 18.6873 17.9998 18.4998C18.1873 18.3123 18.2926 18.058 18.2926 17.7928C18.2926 17.5277 18.1873 17.2733 17.9998 17.0858L13.4138 12.4998L17.9998 7.91382C18.1873 7.72629 18.2926 7.47198 18.2926 7.20682C18.2926 6.94165 18.1873 6.68735 17.9998 6.49982Z"
                  fill="#374957"
                />
              </svg>
            </div>
            <div className="mx-[5px] border-t-[1px] border-solid border-slate-200"></div>
            <div className="mt-5">
              <p className="text-[#374151] pt-3">Email</p>
              <div className="relative mx-auto">
                <input
                  type="email"
                  placeholder="Enter Paypal Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`h-[14px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[12px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25977 10H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 15H21"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.25977 20H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0498 5H20.9998"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H5.98"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {errorMessageEmail && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {errorMessageEmail}
                </span>
              )}
            </div>
            <div className="mx-[5px] border-t-[1px] my-5 border-solid border-slate-200"></div>
            <div className="flex justify-end items-end">
              <div className="mx-2 justify-center cursor-pointer w-[132px] h-[36px] rounded-md flex items-center border-2 border-slate-200 border-solid text-white">
                <p
                  onClick={() => setOpc(0)}
                  className="text-[14px] text-black font-[400]"
                >
                  Cancel
                </p>
              </div>
              <div
                onClick={handleFormSubmit1}
                className="ml-2 justify-center cursor-pointer w-[132px] h-[36px] rounded-md flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white"
              >
                <p className="text-[14px] font-[400]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full grid place-items-center z-40  absolute ${
          opc == 3 ? "visible bg-black bg-opacity-60" : "hidden"
        }`}
      >
        <div
          className={`w-[338px] z-50 h-[255px] visible object-center rounded-[24px] shadow border-slate-200 bg-white`}
        >
          <div className="p-[24px]">
            <div className="flex justify-between mx-2">
              <p className="text-[20px] font-semibold font-freesans mt-[1px]">
                Add New Account
              </p>
              <svg
                className="cursor-pointer"
                onClick={() => setOpc(0)}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9998 6.49982C17.8123 6.31235 17.558 6.20703 17.2928 6.20703C17.0277 6.20703 16.7733 6.31235 16.5858 6.49982L11.9998 11.0858L7.41382 6.49982C7.22629 6.31235 6.97198 6.20703 6.70682 6.20703C6.44165 6.20703 6.18735 6.31235 5.99982 6.49982C5.81235 6.68735 5.70703 6.94165 5.70703 7.20682C5.70703 7.47198 5.81235 7.72629 5.99982 7.91382L10.5858 12.4998L5.99982 17.0858C5.81235 17.2733 5.70703 17.5277 5.70703 17.7928C5.70703 18.058 5.81235 18.3123 5.99982 18.4998C6.18735 18.6873 6.44165 18.7926 6.70682 18.7926C6.97198 18.7926 7.22629 18.6873 7.41382 18.4998L11.9998 13.9138L16.5858 18.4998C16.7733 18.6873 17.0277 18.7926 17.2928 18.7926C17.558 18.7926 17.8123 18.6873 17.9998 18.4998C18.1873 18.3123 18.2926 18.058 18.2926 17.7928C18.2926 17.5277 18.1873 17.2733 17.9998 17.0858L13.4138 12.4998L17.9998 7.91382C18.1873 7.72629 18.2926 7.47198 18.2926 7.20682C18.2926 6.94165 18.1873 6.68735 17.9998 6.49982Z"
                  fill="#374957"
                />
              </svg>
            </div>
            <div className="mx-[5px] border-t-[1px] border-solid border-slate-200"></div>
            <div
              onClick={() => setOpc(4)}
              className="cursor-pointer items-center w-full h-[60px] flex mt-5 shadow bg-[#f7f9ff] border-solid rounded-[16px] border-[#9a6aff] justify-between ml-[-3px]"
            >
              <p className="ml-4 text-[14px]">PayPal</p>
              <svg
                width="42"
                className="mr-4"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="42" height="42" rx="8" fill="#E9F2FF" />
                <g clip-path="url(#clip0_2139_99227)">
                  <path
                    d="M28.6608 10.8775C27.4634 9.61533 25.2988 9.07422 22.5296 9.07422H14.4928C14.2188 9.07423 13.9538 9.16462 13.7454 9.32914C13.5371 9.49366 13.399 9.72152 13.3561 9.97175L10.0097 29.5983C9.94314 29.9853 10.2672 30.3357 10.6914 30.3357H15.6531L16.8992 23.0268L16.8605 23.2557C16.9493 22.739 17.4271 22.358 17.9929 22.358H20.3507C24.9825 22.358 28.6094 20.6182 29.6688 15.5854C29.7003 15.4366 29.7275 15.2917 29.751 15.1502C29.6173 15.0847 29.6173 15.0847 29.751 15.1502C30.0665 13.29 29.7489 12.0238 28.6608 10.8775Z"
                    fill="#27346A"
                  />
                  <path
                    d="M18.7977 14.4801C18.9334 14.4204 19.0817 14.3894 19.232 14.3895H25.5327C26.2788 14.3895 26.9748 14.4344 27.6107 14.5291C27.7886 14.5553 27.9657 14.5866 28.1415 14.623C28.3908 14.6738 28.6371 14.7361 28.8797 14.8095C29.1924 14.9061 29.4835 15.0185 29.7511 15.1502C30.0665 13.2893 29.7489 12.0238 28.6608 10.8775C27.4627 9.61533 25.2988 9.07422 22.5296 9.07422H14.4921C13.9262 9.07422 13.4448 9.4552 13.3561 9.97176L10.0097 29.5976C9.94315 29.9852 10.2672 30.3352 10.6907 30.3352H15.6531L18.2383 15.1747C18.2638 15.0257 18.328 14.8846 18.4254 14.7636C18.5228 14.6426 18.6506 14.5453 18.7977 14.4801Z"
                    fill="#27346A"
                  />
                  <path
                    d="M29.6643 15.5896C28.6049 20.6216 24.9781 22.3621 20.3462 22.3621H17.9877C17.4219 22.3621 16.944 22.7431 16.8561 23.2598L15.3059 32.3476C15.248 32.6863 15.5312 32.9932 15.9018 32.9932H20.0843C20.3239 32.9932 20.5556 32.914 20.7378 32.7701C20.92 32.6262 21.0406 32.4269 21.078 32.208L21.1188 32.011L21.9071 27.3909L21.9579 27.1355C21.9953 26.9167 22.1159 26.7174 22.2981 26.5735C22.4802 26.4296 22.7119 26.3505 22.9515 26.3504H23.5774C27.6291 26.3504 30.8017 24.8282 31.7288 20.4259C32.1158 18.5861 31.9155 17.0501 30.8918 15.9713C30.5814 15.6445 30.1958 15.3746 29.7466 15.1543C29.7222 15.2965 29.6959 15.4407 29.6643 15.5896Z"
                    fill="#2790C3"
                  />
                  <path
                    d="M28.6473 14.7367C28.4821 14.6921 28.3154 14.6526 28.1473 14.6183C27.9714 14.5826 27.7943 14.5514 27.6165 14.525C26.9799 14.4297 26.2844 14.3848 25.5376 14.3848H19.2377C19.0873 14.3845 18.9388 14.4157 18.8034 14.4761C18.6561 14.5411 18.5282 14.6383 18.4307 14.7593C18.3333 14.8804 18.2691 15.0215 18.244 15.1706L16.9049 23.0221L16.8662 23.251C16.9543 22.7344 17.4321 22.3533 17.998 22.3533H20.3565C24.9883 22.3533 28.6151 20.6136 29.6745 15.5808C29.706 15.4319 29.7325 15.2877 29.7568 15.1455C29.4885 15.0146 29.1982 14.9014 28.8854 14.8055C28.8065 14.7813 28.7272 14.7584 28.6474 14.7367"
                    fill="#1F264F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2139_99227">
                    <rect
                      width="22"
                      height="24"
                      fill="white"
                      transform="translate(10 9)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              onClick={() => setOpc(5)}
              className="cursor-pointer items-center w-full h-[60px] flex mt-5 shadow bg-[#f7f9ff] border-solid rounded-[16px] border-[#9a6aff] justify-between ml-[-3px]"
            >
              <p className="ml-4 text-[14px]">Add Bank Account</p>
              <svg
                className="mr-4"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="42" height="42" rx="8" fill="#E9F2FF" />
                <path
                  d="M12.411 15.271C12.0902 15.3993 11.8335 15.7843 11.8335 16.1235V19.1668C11.8335 19.671 12.246 20.0835 12.7502 20.0835H29.2502C29.7543 20.0835 30.1668 19.671 30.1668 19.1668V16.1235C30.1668 15.7843 29.9102 15.3993 29.5893 15.271L21.3393 11.971C21.156 11.8977 20.8443 11.8977 20.661 11.971L16.2243 13.7494"
                  stroke="#4162FF"
                  stroke-width="0.916667"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.1668 30.1667H11.8335V27.4167C11.8335 26.9125 12.246 26.5 12.7502 26.5H29.2502C29.7543 26.5 30.1668 26.9125 30.1668 27.4167V30.1667Z"
                  stroke="#4162FF"
                  stroke-width="0.916667"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.6665 26.5007V20.084"
                  stroke="#4162FF"
                  stroke-width="0.916667"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.3335 26.5007V20.084"
                  stroke="#4162FF"
                  stroke-width="0.916667"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 26.5007V20.084"
                  stroke="#4162FF"
                  stroke-width="0.916667"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.6665 26.5007V20.084"
                  stroke="#4162FF"
                  stroke-width="0.916667"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.3335 26.5007V20.084"
                  stroke="#4162FF"
                  stroke-width="0.916667"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9165 30.166H31.0832"
                  stroke="#4162FF"
                  stroke-width="0.916667"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 17.791C21.7594 17.791 22.375 17.1754 22.375 16.416C22.375 15.6566 21.7594 15.041 21 15.041C20.2406 15.041 19.625 15.6566 19.625 16.416C19.625 17.1754 20.2406 17.791 21 17.791Z"
                  stroke="#4162FF"
                  stroke-width="0.916667"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full grid justify-center items-center place-items-center z-40  absolute ${
          opc == 2 ? "visible bg-black bg-opacity-60" : "hidden"
        }`}
      >
        <div
          className={`w-[408px] z-50 h-[605px] visible object-center rounded-[24px] shadow border-slate-200 bg-white`}
        >
          <div className="p-[24px]">
            <div className="flex justify-between mx-2">
              <p className="text-[20px] font-semibold font-freesans mt-[-1px]">
                Add New Account
              </p>
              <svg
                className="cursor-pointer"
                onClick={() => setOpc(0)}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9998 6.49982C17.8123 6.31235 17.558 6.20703 17.2928 6.20703C17.0277 6.20703 16.7733 6.31235 16.5858 6.49982L11.9998 11.0858L7.41382 6.49982C7.22629 6.31235 6.97198 6.20703 6.70682 6.20703C6.44165 6.20703 6.18735 6.31235 5.99982 6.49982C5.81235 6.68735 5.70703 6.94165 5.70703 7.20682C5.70703 7.47198 5.81235 7.72629 5.99982 7.91382L10.5858 12.4998L5.99982 17.0858C5.81235 17.2733 5.70703 17.5277 5.70703 17.7928C5.70703 18.058 5.81235 18.3123 5.99982 18.4998C6.18735 18.6873 6.44165 18.7926 6.70682 18.7926C6.97198 18.7926 7.22629 18.6873 7.41382 18.4998L11.9998 13.9138L16.5858 18.4998C16.7733 18.6873 17.0277 18.7926 17.2928 18.7926C17.558 18.7926 17.8123 18.6873 17.9998 18.4998C18.1873 18.3123 18.2926 18.058 18.2926 17.7928C18.2926 17.5277 18.1873 17.2733 17.9998 17.0858L13.4138 12.4998L17.9998 7.91382C18.1873 7.72629 18.2926 7.47198 18.2926 7.20682C18.2926 6.94165 18.1873 6.68735 17.9998 6.49982Z"
                  fill="#374957"
                />
              </svg>
            </div>
            <div className="mx-[5px] border-t-[1px] border-solid border-slate-200"></div>
            <div className="mt-5">
              <p className="text-[#374151] pt-3">Account Holder Name</p>
              <div className="relative mx-auto">
                <input
                  placeholder="Type Accout Holder Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`h-[14px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[12px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25977 10H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 15H21"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.25977 20H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0498 5H20.9998"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H5.98"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {errorMessage && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {errorMessage}
                </span>
              )}
            </div>
            <div className="mt-5">
              <p className="text-[#374151] pt-3">Account Number</p>
              <div className="relative mx-auto">
                <input
                  type="number"
                  placeholder="Type Account Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className={`h-[14px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[12px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25977 10H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 15H21"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.25977 20H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0498 5H20.9998"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H5.98"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {errorMessageN && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {errorMessageN}
                </span>
              )}
            </div>
            <div className="mt-5">
              <p className="text-[#374151] pt-3">Confirm Account</p>
              <div className="relative mx-auto">
                <input
                  type="number"
                  placeholder="Confirm Account Number"
                  value={cnumber}
                  onChange={(e) => setCnumber(e.target.value)}
                  className={`h-[14px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[12px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25977 10H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 15H21"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.25977 20H16.7398"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0498 5H20.9998"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 5H5.98"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {errorMessageE && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {errorMessageE}
                </span>
              )}
            </div>
            <div className="mt-5">
              <p className="text-[#374151] pt-3">IFSC Code</p>
              <div className="relative mx-auto">
                <input
                  type="number"
                  value={ifsc}
                  onChange={(e) => setIfsc(e.target.value)}
                  placeholder="Enter IFSC Code"
                  className={`h-[14px] w-[320px] mt-[-8px] rounded-[8px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro `}
                />
                <svg
                  className="absolute top-0 mt-[9px] mr-[14px] right-0"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.02992 14.4999C8.63992 13.9299 8.41992 13.2399 8.41992 12.4999C8.41992 10.5199 10.0199 8.91992 11.9999 8.91992C13.9799 8.91992 15.5799 10.5199 15.5799 12.4999C15.5799 14.4799 13.9799 16.0799 11.9999 16.0799"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5598 6.08047C15.8698 4.88047 13.9698 4.23047 11.9998 4.23047C8.46984 4.23047 5.17984 6.31047 2.88984 9.91047C1.98984 11.3205 1.98984 13.6905 2.88984 15.1005C5.17984 18.7005 8.46984 20.7805 11.9998 20.7805C15.5298 20.7805 18.8198 18.7005 21.1098 15.1005C22.0098 13.6905 22.0098 11.3205 21.1098 9.91047"
                    stroke="#767783"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {errorMessageP && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {errorMessageP}
                </span>
              )}
            </div>
            <div className="mx-[5px] border-t-[1px] my-5 border-solid border-slate-200"></div>
            <div className="flex justify-end items-end">
              <div className="mx-2 justify-center cursor-pointer w-[132px] h-[36px] rounded-md flex items-center border-2 border-slate-200 border-solid text-white">
                <p
                  onClick={() => setOpc(0)}
                  className="text-[14px] text-black font-[400]"
                >
                  Cancel
                </p>
              </div>
              <div
                onClick={handleFormSubmit}
                className="mx-2 justify-center cursor-pointer w-[132px] h-[36px] rounded-md flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white"
              >
                <p className="text-[14px] font-[400]">Add</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full grid place-items-center z-40  absolute ${
          opc == 1 ? "visible bg-black bg-opacity-60" : "hidden"
        }`}
      >
        <div
          className={`w-[308px] z-50 h-[255px] visible object-center rounded-[24px] shadow border-slate-200 bg-white`}
        >
          <div className="p-[24px]">
            <div className="flex justify-between mx-2">
              <p className="text-[20px] font-semibold font-freesans mt-[1px]">
                Select Account Type
              </p>
              <svg
                className="cursor-pointer"
                onClick={() => setOpc(0)}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9998 6.49982C17.8123 6.31235 17.558 6.20703 17.2928 6.20703C17.0277 6.20703 16.7733 6.31235 16.5858 6.49982L11.9998 11.0858L7.41382 6.49982C7.22629 6.31235 6.97198 6.20703 6.70682 6.20703C6.44165 6.20703 6.18735 6.31235 5.99982 6.49982C5.81235 6.68735 5.70703 6.94165 5.70703 7.20682C5.70703 7.47198 5.81235 7.72629 5.99982 7.91382L10.5858 12.4998L5.99982 17.0858C5.81235 17.2733 5.70703 17.5277 5.70703 17.7928C5.70703 18.058 5.81235 18.3123 5.99982 18.4998C6.18735 18.6873 6.44165 18.7926 6.70682 18.7926C6.97198 18.7926 7.22629 18.6873 7.41382 18.4998L11.9998 13.9138L16.5858 18.4998C16.7733 18.6873 17.0277 18.7926 17.2928 18.7926C17.558 18.7926 17.8123 18.6873 17.9998 18.4998C18.1873 18.3123 18.2926 18.058 18.2926 17.7928C18.2926 17.5277 18.1873 17.2733 17.9998 17.0858L13.4138 12.4998L17.9998 7.91382C18.1873 7.72629 18.2926 7.47198 18.2926 7.20682C18.2926 6.94165 18.1873 6.68735 17.9998 6.49982Z"
                  fill="#374957"
                />
              </svg>
            </div>
            <div className="mx-[5px] border-t-[1px] border-solid border-slate-200"></div>
            <div
              onClick={() => setOpc(2)}
              className="cursor-pointer items-center w-full h-[60px] flex mt-5 shadow bg-[#f7f9ff] border-solid rounded-[16px] border-[#9a6aff] justify-between ml-[-3px]"
            >
              <p className="ml-4 text-[14px]">Local Bank Account</p>
            </div>
            <div
              onClick={() => setOpc(3)}
              className="cursor-pointer items-center w-full h-[60px] flex mt-5 shadow bg-[#f7f9ff] border-solid rounded-[16px] border-[#9a6aff] justify-between ml-[-3px]"
            >
              <p className="ml-4 text-[14px]">International Bank Account</p>
            </div>
          </div>
        </div>
      </div>
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
                <div className="flex ml-5 mb-5">
                  <div
                    onClick={() => setCurrStep(1)}
                    className={`cursor-pointer flex items-center ${
                      currStep == 1
                        ? "bg-[url('/partner_assets/bd.svg')] text-white"
                        : "text-[#6B7280] "
                    } hover:bg-[url('/partner_assets/hover.svg')] hover:text-[#6B7280] bg-no-repeat w-[102px] rounded-3xl h-[36px]`}
                  >
                    <div className="flex justify-center items-center p-4">
                      <svg
                        className={`pr-1 ${
                          currStep == 1 ? " text-white" : "text-[#6B7280]"
                        }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.69193 2.01602C9.50026 1.54935 10.5003 1.54935 11.3169 2.01602L16.2669 4.87434C17.0753 5.34101 17.5753 6.20771 17.5753 7.14938V12.8493C17.5753 13.7827 17.0753 14.6494 16.2669 15.1244L11.3169 17.9827C10.5086 18.4494 9.50859 18.4494 8.69193 17.9827L3.74193 15.1244C2.93359 14.6577 2.43359 13.791 2.43359 12.8493V7.14938C2.43359 6.21604 2.93359 5.34934 3.74193 4.87434L5.32526 3.9577"
                          stroke="currentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.0003 9.16651C11.0726 9.16651 11.9419 8.29719 11.9419 7.22483C11.9419 6.15248 11.0726 5.2832 10.0003 5.2832C8.92791 5.2832 8.05859 6.15248 8.05859 7.22483C8.05859 8.29719 8.92791 9.16651 10.0003 9.16651Z"
                          stroke="currentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.3337 13.8826C13.3337 12.3826 11.842 11.166 10.0003 11.166C8.15866 11.166 6.66699 12.3826 6.66699 13.8826"
                          stroke="currentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="text-[14px]">Profile</p>
                    </div>
                  </div>
                  <div
                    onClick={() => setCurrStep(2)}
                    className={`cursor-pointer flex items-center ml-3 ${
                      currStep == 2
                        ? "bg-[url('/partner_assets/bd.svg')] text-white"
                        : "text-[#6B7280] "
                    } hover:bg-[url('/partner_assets/hover.svg')] hover:text-[#6B7280] bg-no-repeat w-[124px] rounded-3xl h-[36px]`}
                  >
                    <div className="flex justify-center items-center p-3.5">
                      <svg
                        className={`pr-2 mb-1 ${
                          currStep == 2 ? " text-white" : "text-[#6B7280]"
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
                      <p className="text-[14px]">Payments</p>
                    </div>
                  </div>
                </div>
                <div className="flex-col shadow font-freesans  bg-white border-b mx-5 border-slate-200 rounded-lg h-full w-full">
                  <div className=" flex items-center justify-between py-5 pl-6">
                    <div className="flex items center">
                      <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="42" height="42" rx="12" fill="#E9F2FF" />
                        <path
                          d="M11.63 14.7498C11.28 14.8898 11 15.3098 11 15.6798V18.9998C11 19.5498 11.45 19.9998 12 19.9998H30C30.55 19.9998 31 19.5498 31 18.9998V15.6798C31 15.3098 30.72 14.8898 30.37 14.7498L21.37 11.1498C21.17 11.0698 20.83 11.0698 20.63 11.1498L15.79 13.0898"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M31 31H11V28C11 27.45 11.45 27 12 27H30C30.55 27 31 27.45 31 28V31Z"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 27V20"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 27V20"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 27V20"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25 27V20"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M29 27V20"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 31H32"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 17.5C21.8284 17.5 22.5 16.8284 22.5 16C22.5 15.1716 21.8284 14.5 21 14.5C20.1716 14.5 19.5 15.1716 19.5 16C19.5 16.8284 20.1716 17.5 21 17.5Z"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="text-[16px] ml-2 font-semibold font-freesans">
                        Currently Added Accounts
                      </p>
                    </div>
                    <div className="pr-10">
                      <div
                        onClick={() => setOpc(1)}
                        className="mx-3 justify-center cursor-pointer w-full h-[36px] rounded-lg flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.33301 11.0007C2.33301 6.22596 6.22498 2.33398 10.9997 2.33398C15.7744 2.33398 19.6663 6.22596 19.6663 11.0007C19.6663 15.7753 15.7744 19.6673 10.9997 19.6673C6.22498 19.6673 2.33301 15.7753 2.33301 11.0007ZM12.1872 14.6673V12.1882H14.6663C15.3183 12.1882 15.8538 11.6526 15.8538 11.0007C15.8538 10.3487 15.3183 9.81315 14.6663 9.81315H12.1872V7.33398C12.1872 6.68201 11.6516 6.14648 10.9997 6.14648C10.3477 6.14648 9.81217 6.68201 9.81217 7.33398V9.81315H7.33301C6.68103 9.81315 6.14551 10.3487 6.14551 11.0007C6.14551 11.6526 6.68103 12.1882 7.33301 12.1882H9.81217V14.6673C9.81217 15.3193 10.3477 15.8548 10.9997 15.8548C11.6516 15.8548 12.1872 15.3193 12.1872 14.6673Z"
                            fill="#F9FAFB"
                            stroke="#F9FAFB"
                          />
                        </svg>

                        <p className="text-[14px] font-[400] ml-2">
                          Add New Account
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="flex justify-center items-center">
                    <div className="flex-col justify-center items-center my-5">
                      <img
                        src={"/partner_assets/pic.svg"}
                        alt="empty"
                        className="w-[192px] h-[192px]"
                      />
                      <p className="text-[16px] mt-[-16px] ml-4">
                        No account added yet
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-col shadow font-freesans mt-5  bg-white border-b mx-5 border-slate-200 rounded-lg h-full w-full">
                  <div className=" flex items-center justify-between py-5 pl-6">
                    <div className="flex items-center">
                      <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="42" height="42" rx="12" fill="#E9F2FF" />
                        <path
                          d="M23.1602 19H23.7502"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.25 19H20.65"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.5002 20V27.3C12.5002 29.96 13.9602 30.59 15.7302 28.69L15.7402 28.68C16.5602 27.81 17.8102 27.88 18.5202 28.83L19.5302 30.18C20.3402 31.25 21.6502 31.25 22.4602 30.18L23.4702 28.83C24.1902 27.87 25.4402 27.8 26.2602 28.68C28.0402 30.58 29.4902 29.95 29.4902 27.29V16.04C29.4902 12.01 28.5502 11 24.7702 11H17.2102C13.4302 11 12.4902 12.01 12.4902 16.04"
                          stroke="#4162FF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="text-[16px] ml-2 font-semibold">
                        Recent Transactions
                      </p>
                    </div>
                    <div className="pr-7">
                      <div className="px-2 justify-center cursor-pointer w-[112px] h-[36px] rounded-lg flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.25 13.1543V15.5835L10.0833 13.7501"
                            stroke="#F9FAFB"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.25 10.084V11.0007"
                            stroke="#F9FAFB"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.25033 15.5833L6.41699 13.75"
                            stroke="#F9FAFB"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.83301 8.25065C1.83301 3.66732 3.66634 1.83398 8.24967 1.83398H12.833"
                            stroke="#F9FAFB"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.1663 9.16602V13.7493C20.1663 18.3327 18.333 20.166 13.7497 20.166H8.24967C3.66634 20.166 1.83301 18.3327 1.83301 13.7493V11.8977"
                            stroke="#F9FAFB"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.4997 9.16732C13.7497 9.16732 12.833 8.25065 12.833 5.50065V1.83398L20.1663 9.16732"
                            stroke="#F9FAFB"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <p className="text-[14px] ml-2 font-[400]">Download</p>
                      </div>
                    </div>
                  </div>
                  <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="flex justify-center items-center">
                    <div className="flex-col justify-center items-center my-5">
                      <img
                        src={"/partner_assets/pic.svg"}
                        alt="empty"
                        className="w-[192px] h-[192px]"
                      />
                      <p className="text-[16px] mt-[-16px] ml-4">
                        No recent transactions
                      </p>
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

export default dashboard6;
