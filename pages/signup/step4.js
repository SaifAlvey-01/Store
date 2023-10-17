import { useEffect, useState } from "react";
import CountrySelect from "../../components/CountrySelect";
import { countryOptions } from "../../components/countryOptions";
import { useRouter } from "next/navigation";
import Loading from "../../components/loading";
import Cookie from "js-cookie";
import useAxios from "../../hooks/useAxios";
import axios from "axios";


const SignUp4 = ({ setloading,setCurrentStep }) => {
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
    if(selectedOption){
      setIsSelect(true)
      setSelectedCountry(selectedOption);
    }
  };

  useEffect(() => {
    axios.get('https://1.1.1.1/cdn-cgi/trace').then((response) => {
      
      var locRegex = /loc=([^\s]+)/;

        // Use the regular expression to extract the value of "loc"
        var match = response.data.match(locRegex);
        console.log(match, "<----match")
        // Check if a match was found and extract the value
        var locValue = match ? match[1] : null;

        const regionNames = new Intl.DisplayNames(
          ['en'], {type: 'region'}
        );

        setDefault(regionNames.of(locValue))
    });


  //   fetch('https://1.1.1.1/cdn-cgi/trace')
  //   .then(response => {
  //     console.log(response,"<----response")
  //     setDefault(response)
  //    console.log("Country is : ", response);
  //  })
  //  .catch((data, status) => {
  //    console.log('Request failed:', data);
  //  });

 },[])


  useEffect(() => {
    if(defaultCountry && !isSelect){
      const country = countryOptions.filter((opt)=> opt.label === defaultCountry)
      setSelectedCountry(country[0])
    }
    if (resdata.state && resdata.state === "success") {
           setloading(true)
           setCurrentStep(5)
    }

    if (business.length > 0 && Object.keys(selectedCountry).length > 0) {
      console.log(business.length > 0, Object.keys(selectedCountry).length > 0);
      setIsactive(true);
    } else {
      setIsactive(false);
    }

  }, [loading, business, selectedCountry, resdata, isActive,defaultCountry]);

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
                    <div className="relative leading-[24px] font-medium">
                      Finish
                    </div>
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
