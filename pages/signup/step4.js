import { useEffect, useState } from "react";
import { countryOptions } from "../../components/countryOptions";
import { useRouter } from "next/navigation";
import Loading from "../../components/loading";
import Cookie from "js-cookie";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import CountrySelect from "./../../components/dropdown-selects/CountrySelect";

const SignUp4 = ({ setloading, setCurrentStep }) => {
  const { resdata, error, loading, putData: putRequest } = useAxios();
  const router = useRouter();
  const [defaultCountry, setDefault] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [isActive, setIsactive] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [business, setBusiness] = useState("");
  let id = Number(Cookie.get("id"));

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
      setCurrentStep(5);
    }

    if (business.length > 0 && Object.keys(selectedCountry).length > 0) {
      setIsactive(true);
    } else {
      setIsactive(false);
    }
  }, [loading, business, selectedCountry, resdata, isActive, defaultCountry]);

  const handleChange = (e) => {
    setBusiness(e.target.value);
  };

  const handleSignInClick = () => {
    // this is done in signup
    // setCurrentStep(5)
    // setloading(true)
    // const timer = setTimeout(() => {
    //   router.push("/dashboard");
    // }, 2000);
    // return () => clearTimeout(timer);

    setloading(loading);
    putRequest(`/accounts/add-business-detail/${id}`, {
      business,
      country: selectedCountry.label,
    });
    Cookie.remove("email");
  };

  return (
    <>
      <div className=" w-full sm:w-[450px] md:w-[450px] lg:w-[450px] min-h-[calc(100% - 100px)] text-11xl text-neutral-600">
        <div
          style={{
            margin: "0px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
          className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden mx-2 py-8 px-4 items-center justify-center border-[0.8px] border-solid border-gainsboro"
        >
          <div className=" w-full flex flex-col items-center justify-start gap-[31px]">
            <b className="text-neutral-600 font-semibold text-24 font-freesans  tracking-normal">
              Enter Store Name
            </b>
            <div className=" w-full flex flex-col items-center justify-center text-sm text-dimgray">
              <div className=" w-full flex flex-col items-start justify-start gap-[28px]">
                <div className="w-full flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="relative leading-[20px] font-medium">
                      <span>{`Country *`}</span>
                    </div>
                  </div>

                  {/* contury select */}
                  <div className="w-full">
                    <CountrySelect
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      options={countryOptions}
                    />
                    <div></div>
                  </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="relative leading-[20px] font-medium">
                      <span>{`Store Name `}</span>
                      <span className="text-tomato">*</span>
                    </div>
                    <div className="relative leading-[160%] font-body-sm text-indication-colors-error opacity-[0]">
                      *
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-start justify-start gap-[4px]">
                    <input
                      type="text"
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Store Name"
                      className="focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-3 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro"
                    />
                  </div>
                  <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                    {resdata.message}
                  </p>
                </div>
                <div
                  className={`rounded ${
                    isActive ? "bg-primary-300-main" : "bg-primary-100"
                  } w-full flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white`}
                  onClick={handleSignInClick}
                >
                  <div className="relative w-[90px] h-0" />
                  {loading ? (
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline mr-3 w-6 h-6 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  ) : (
                    <div className="relative leading-[24px] font-medium">
                      Finish
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp4;
