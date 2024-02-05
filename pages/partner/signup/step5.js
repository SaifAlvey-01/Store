import { useEffect, useState } from "react";
import { countryOptions } from "../../../components/constants/countryOptions";
import { useRouter } from "next/navigation";
import Loading from "../../../components/loading";
import Cookie from "js-cookie";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import CountrySelect from "../../../components/dropdown-selects/CountrySelect";
import { Inter, Outfit } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

const step5 = ({ setloading, setCurrentStep }) => {
  const { resdata, error, loading, putData: putRequest } = useAxios();
  const router = useRouter();
  const [defaultCountry, setDefault] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [isActive, setIsactive] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
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

  const handleSignInClick = () => {
    // this is done in signup
    setCurrentStep(6);
    // setloading(true)
    // const timer = setTimeout(() => {
    //   router.push("/dashboard");
    // }, 2000);
    // return () => clearTimeout(timer);

    setloading(loading);
    // putRequest(`/accounts/add-business-detail/${id}`, {
    //   country: selectedCountry.label,
    // });
    Cookie.remove("email");
  };

  return (
    <div className={`bg-[url('/partner_assets/bg-gradient.svg')] overflow-hidden justify-center items-center w-screen h-screen flex ${inter.className}`}>
      <div className="bg-[#E9F2FF] flex w-[398px] h-[590] lg:w-[1140px] lg:h-[636px] rounded-[32px]">
          <div className="bg-[url('/partner_assets/signup-image.svg')] bg-[length:742px_582px] hidden lg:flex bg-no-repeat mt-14 ml-[32px] h-[686px] w-[840px]"></div>
          <div className="bg-white w-[398px] h-[590px] lg:h-[636px] lg:w-[400px] flex content-center rounded-[32px]">
            <div className="my-[84px] mx-[32px] lg:my-[115px] lg:mx-[32px] ">
            <img
              src={"/partner_assets/launch-logo.svg"}
              alt="launch my store logo"
              className="w-[167px] h-[35px] mb-1"
            />
            <p className={`${outfit.className} text-[#374151] font-bold text-[24px] w-[364px]`}>
              Enter Your Basics
            </p>
            <p className=" mt-[-10px] text-[#4B5563] text-[14px] font-normal w-[364px] leading-[20px]">
              Enter essential details to initialize your dashboard.
              <br /> setup seamlessly and efficiently.
            </p>
            <p className="text-[#374151] pt-3">Country</p>
            <div className="h-[20px] w-[334px] mt-[-12px] text-[#9CA3AF] rounded-[12px] px-3 mr-3 ml-[-8px] focus:border-blue-500 relative cursor-default ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4162FF]">
              <CountrySelect
                value={selectedCountry}
                onChange={handleCountryChange}
                options={countryOptions}
              />

              <div
                className={`rounded mt-5 text-[16px] cursor-pointer flex justify-center items-center font-normal leading-[24px] h-[44px] w-[364px]  ${
                  isActive ? "bg-[#4162FF]" : "bg-primary-100"
                } w-full flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white`}
                onClick={handleSignInClick}
              >
                <div className="relative w-[80px] h-0" />
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
              <p className="text-[11.5px] ml-2 font-normal leading-[18px] font-chivo text-[#6B7280]">
                By continuing, you agree to our Terms of Use and Privacy Policy.
              </p>
              <p className="text-[14px] ml-[15px] font-normal mt-8 leading-[20px] font-roboto text-[#6B7280]">
                Already have an partner program account?{" "}
                <span className="cursor-pointer text-[#4162FF]">Sign In</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default step5;
