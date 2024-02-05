import Sidebar from "../../Sidebar";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { countryOptions } from "../../../../../components/constants/countryOptions";
import { useEffect, useState } from "react";
import useAxios from "../../../../../hooks/useAxios";
import axios from "axios";
import CountrySelect from "../../../../../components/dropdown-selects/CountrySelect";
import Cookie from "js-cookie";
import pageload from "/public/logoutLoader.json";
import Lottie from "lottie-react";

const dashboard5 = ({ setCurrentStep, currentStep, currStep, setCurrStep }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [note, setNote] = useState(0);
  const [data, setData] = useState(" ");
  const [errorMessageN, setErrorMessageN] = useState("");
  const [errorMessageE, setErrorMessageE] = useState("");
  const [errorMessageP, setErrorMessageP] = useState("");

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

  const getProf = () => {
    setNote(1);
    if (note == 1) {
      setData("Profile Updated successfully.");
    }
    if (note == 2) {
      setData("Password Updated Successfully.");
    }
    if (note == 0) {
      setData(" ");
    }
    setTimeout(() => {
      setNote(0);
    }, 4000);
  };

  const getPass = () => {
    setNote(2);
    if (note == 1) {
      setData("Profile Updated successfully.");
    }
    if (note == 2) {
      setData("Password Updated Successfully.");
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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);

  function togglePasswordVisibility1() {
    setIsPasswordVisible1((prevState) => !prevState);
  }
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);

  function togglePasswordVisibility2() {
    setIsPasswordVisible2((prevState) => !prevState);
  }

  const handleFormSubmit1 = (e) => {
    e.preventDefault();
    setErrorMessageN("");
    setErrorMessageE("");
    setErrorMessageP("");

    const emailPattern =
      /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|^\+[0-9]{10,15}$)/i;
    const phonePattern = /^(\+\d{3,17}$)/i;
    // api & condition

    if (!name) {
      setErrorMessageN("Please enter valid name.");
      return;
    }

    if (!emailPattern.test(email) || !email) {
      setErrorMessageE("Please enter valid email.");
      return;
    }

    if (!phonePattern.test(phone) || !phone) {
      setErrorMessageP("Please enter valid phone number.");
      return;
    }

    // postRequest("/auth/forget-password", data);
    getProf();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setErrorMessage1("");

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$.!%*?&#]+$/i;

    // api & condition

    if (!password || !confirmPassword) {
      setErrorMessage("Please fill out password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!passwordPattern.test(password) || password.length < 8) {
      setErrorMessage("Please enter valid password.");
      return;
    }

    // postRequest("/auth/forget-password", data);
    getPass();
  };
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
                    <p className="text-[16px] font-semibold font-freesans">
                      My Profile
                    </p>
                  </div>
                  <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="flex justify-start items-center">
                    <div className="ml-6 lg:ml-10">
                      <p className="text-[#374151] text-[14px] pt-5">
                        Your Name
                      </p>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          fontSize: "16px",
                          color: "#9CA3AF",
                          "::placeholder": { color: "#9CA3AF" },
                        }}
                        placeholder="Enter Your Name"
                        className={`'mr-3 ml-[-8px] relative cursor-default lg:w-[260px] mt-[-8px] rounded-[8px] pl-5 ring-0 ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-2 border-solid`}
                      />
                      {errorMessageN && (
                        <span className="text-red-500 text-[12px] mt-1 ">
                          {errorMessageN}
                        </span>
                      )}
                    </div>
                    <div className="ml-14">
                      <p className="text-[#374151] text-[14px] pt-5">Email</p>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          fontSize: "16px",
                          color: "#9CA3AF",
                          "::placeholder": { color: "#9CA3AF" },
                        }}
                        placeholder="Enter Your Name"
                        className={`'mr-3 ml-[-8px] relative cursor-default lg:w-[260px] mt-[-8px] rounded-[8px] pl-5 ring-0 ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-2 border-solid `}
                      />
                      {errorMessageE && (
                        <span className="text-red-500 text-[12px] mt-1 ">
                          {errorMessageE}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-start items-center pb-7">
                    <div className="ml-6 lg:ml-10">
                      <p className="text-[#374151] text-[14px] pt-5">
                        Phone Number
                      </p>
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          fontSize: "16px",
                          color: "#9CA3AF",
                          "::placeholder": { color: "#9CA3AF" },
                        }}
                        placeholder="Enter Phone Number"
                        className="mr-3 ml-[-8px] relative cursor-default lg:w-[260px] mt-[-8px] rounded-[8px] pl-5 ring-0 ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-2 border-solid"
                      />
                      {errorMessageP && (
                        <span className="text-red-500 text-[12px] mt-1 ">
                          {errorMessageP}
                        </span>
                      )}
                    </div>
                    <div className="ml-10 mt-[21px]">
                      <p className="text-[#374151] text-[14px]">Country</p>
                      <div className="mr-3 ml-[-8px] relative cursor-default mt-[-8px] rounded-[8px] ring-0 ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row items-center justify-start text-[#4B4B4B] font-roboto border-2 border-solid">
                        <CountrySelect
                          className="w-[390px]"
                          value={selectedCountry}
                          onChange={handleCountryChange}
                          options={countryOptions}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pb-7">
                    <div
                      onClick={(e) => handleFormSubmit1(e)}
                      className="ml-6 lg:ml-8 justify-center cursor-pointer w-[112px] h-[36px] rounded-lg flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white"
                    >
                      <p className="text-[14px] font-[400]">Update</p>
                    </div>
                  </div>
                </div>

                <div className="flex-col shadow font-freesans mt-5  bg-white border-b mx-5 border-slate-200 rounded-lg h-full w-full">
                  <div className=" flex items-center py-5 pl-6">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="42" height="42" rx="12" fill="#E9F2FF" />
                      <path
                        d="M20.02 28.5H16.5C15.88 28.5 15.33 28.48 14.84 28.41C12.21 28.12 11.5 26.88 11.5 23.5V18.5C11.5 15.12 12.21 13.88 14.84 13.59C15.33 13.52 15.88 13.5 16.5 13.5H19.96"
                        stroke="#4162FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M30.4995 22.3398V23.4998C30.4995 26.8798 29.7895 28.1198 27.1595 28.4098C26.6695 28.4798 26.1195 28.4998 25.4995 28.4998H24.0195"
                        stroke="#4162FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.0195 13.5H25.4995C26.1195 13.5 26.6695 13.52 27.1595 13.59C29.7895 13.88 30.4995 15.12 30.4995 18.5"
                        stroke="#4162FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24 11V31"
                        stroke="#4162FF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.4945 21H20.5035"
                        stroke="#4162FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.0941 21H16.1031"
                        stroke="#4162FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="text-[16px] ml-2 font-semibold font-freesans">
                      Password
                    </p>
                  </div>
                  <div className="mx-[25px] border-t-[1px] border-solid border-slate-200"></div>
                  <div className="flex justify-start items-center">
                    <div className="ml-6 lg:ml-10">
                      <p className="text-[#374151] text-[14px]">
                        Current Password
                      </p>
                      <div className="text-[14px] relative mx-auto">
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="Enter Current Password"
                          value={password1}
                          onChange={(e) => setPassword1(e.target.value)}
                          className={`'mr-3 ml-[-8px] relative cursor-default h-[20px] text-[16px] lg:w-[260px] mt-[-8px] rounded-[8px] pl-5 ring-0 ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-2 border-solid ${
                            errors.password ? "border-red-500" : ""
                          }`}
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-4 text-gray-600"
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
                      {errorMessage1 && (
                        <span className="text-red-500 text-[12px] mt-1 ">
                          {errorMessage1}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-start items-center pb-7 mt-5">
                    <div className="ml-6 lg:ml-10">
                      <p className="text-[#374151] text-[14px]">New Password</p>
                      <div className="text-[14px] relative mx-auto">
                        <input
                          type={isPasswordVisible1 ? "text" : "password"}
                          placeholder="New Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={`'mr-3 ml-[-8px] relative cursor-default h-[20px] text-[16px] lg:w-[260px] mt-[-8px] rounded-[8px] pl-5 ring-0 ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-2 border-solid ${
                            errors.password ? "border-red-500" : ""
                          }`}
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-4 text-gray-600"
                          onClick={togglePasswordVisibility1}
                        >
                          {isPasswordVisible1 ? (
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
                      {errorMessage && (
                        <span className="text-red-500 text-[12px] mt-1 ">
                          {errorMessage}
                        </span>
                      )}
                    </div>
                    <div className="ml-12">
                      <p className="text-[#374151] text-[14px]">
                        Confirm Password
                      </p>
                      <div className="text-[14px] relative mx-auto">
                        <input
                          type={isPasswordVisible2 ? "text" : "password"}
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className={`'mr-3 ml-[-8px] relative cursor-default h-[20px] text-[16px] lg:w-[260px] mt-[-8px] rounded-[8px] pl-5 ring-0 ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-2 border-solid ${
                            errors.password ? "border-red-500" : ""
                          }`}
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-4 text-gray-600"
                          onClick={togglePasswordVisibility2}
                        >
                          {isPasswordVisible2 ? (
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
                      {errorMessage && (
                        <span className="text-red-500 text-[12px] mt-1 ">
                          {errorMessage}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="pb-7">
                    <div
                      onClick={(e) => handleFormSubmit(e)}
                      className="ml-6 lg:ml-8 justify-center cursor-pointer w-[112px] h-[36px] rounded-lg flex items-center border-2 bg-[#4162ff] border-[#4162ff] border-solid text-white"
                    >
                      <p className="text-[14px] font-[400]">Update</p>
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
