import { useState, useCallback } from "react";
// import FrameComponent from "../frame-component";
import PortalPopup from "../portal-popup";
import CountrySelect from '../CountrySelect';
import { countryOptions } from "../countryOptions";

const SignUp5 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isActive, setIsactive] = useState(false)


 

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };


  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const handleChange = (e) =>{
    if(e.target.value.length > 0 ){
      setIsactive(true)

    }else{
      setIsactive(false)
    }
  }
  const onPrimaryContainerClick = useCallback(() => {
    
  }, []);

  return (
    <>
    <div className="w-[408px] h-[373px] text-11xl text-neutral-600 font-FreeSans ">
            <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start md:border-[0.8px] border-solid  border-gainsboro">
              <div className="flex flex-col items-center justify-start gap-[31px]">
                <b className="text-neutral-600 font-semibold text-24 font-FreeSans  tracking-normal">Enter business details</b>
                <div className="flex flex-col items-center justify-start text-sm text-dimgray">
                  <div className="flex flex-col items-end justify-start">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-start justify-start gap-[28px]">
                        <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="relative leading-[20px] font-medium">
                              <span>{`Country *`}</span>
                            </div>
                            
                          </div>

                            {/* contury selecy */}
                            <div className="w-full">
                                <CountrySelect
                                  value={selectedCountry}
                                  onChange={handleCountryChange}
                                  options={countryOptions}
                                />
                                <div>
                                </div>
                              </div>
                        
                        </div>
                        <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="relative leading-[20px] font-medium">
                              <span>{`Business Name `}</span>
                              <span className="text-tomato">*</span>
                            </div>
                            <div className="relative leading-[160%] font-body-sm text-indication-colors-error opacity-[0]">
                              *
                            </div>
                          </div>
                          <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                         
                          <input
                              type="text"
                              onChange={(e)=>handleChange(e)}
                              placeholder="Enter business name"
                              className="focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro"
                            />
                        </div>
                        </div>
                        <div
                          
                          className= {`rounded ${ isActive ? "bg-primary-300-main" : "bg-primary-100"} w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white`}
                          onClick={onPrimaryContainerClick}
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
            </div>
          </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          {/* <FrameComponent onClose={closeFrame} /> */}
        </PortalPopup>
      )}
    </>
  );
};

export default SignUp5;
