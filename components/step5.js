import { useState, useCallback } from "react";
import FrameComponent from "./frame-component";
import PortalPopup from "./portal-popup";
import CountrySelect from './CountrySelect';


const SignUp5 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryOptions = [
    { label: 'United States', value: 'US',image: '/afg.png' },
    { label: 'Canada', value: 'CA',image: '/afg.png' },
    { label: 'India', value: 'IND',image: '/afg.png' },
    { label: 'Pakistan', value: 'PAK',image: '/afg.png' },
   
  ];


 

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };


  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const handleChange = () =>{
    setOpen(!isOpen)
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

                          {/* <div
                            className="self-stretch rounded-lg md:bg-white flex flex-row py-2.5 px-4 items-center justify-start gap-[20px] cursor-pointer text-textcolor-placeholder-color-400 font-roboto border-[1.5px] border-solid  border-gainsboro"
                            onClick={handleChange}
                          >
                            <div className="flex-1 relative h-6">
                              <div className="absolute w-full top-[8.33%] left-[0%] leading-[20px] inline-block">
                                India
                              </div>
                            </div>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/angledown.svg"
                            />



                             <div className={`absolute ${isOpen ? "transform opacity-100 scale-100" : "transform opacity-0 scale-95" } z-10 mt-52 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                              <div  role="none">
                                
                                <a href="#" class="text-gray-700 block px-4 py-2.5 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                <a href="#" class="text-gray-700 block px-4 py-2.5 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                <a href="#" class="text-gray-700 block px-4 py-2.5 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                                <form method="POST" action="#" role="none">
                                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                                </form>
                              </div>
                            </div>
                          </div> */}


                            {/* contury selecy */}
                            <div className="w-full">
                                {/* <h1>Select a Country</h1> */}
                                <CountrySelect
                                
                                 
                                  value={selectedCountry}
                                  onChange={handleCountryChange}
                                  options={countryOptions}
                                />
                                <div>
                                  {selectedCountry && (
                                    <p>Selected Country: {selectedCountry.label} ({selectedCountry.value})</p>
                                  )}
                                </div>
                                {/* <img src="afg.png"></img> */}
                              </div>


                          {/* <div class="relative inline-block text-left">
                            <div>
                              <button onClick={handleChange} type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Options
                                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                              </button>
                            </div>

                            
                            <div className={`absolute ${isOpen ? "transform opacity-100 scale-100" : "transform opacity-0 scale-95" }right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                              <div class="py-1" role="none">
                                
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                                <form method="POST" action="#" role="none">
                                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                                </form>
                              </div>
                            </div>
                          </div> */}
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
                          <div className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-4 items-center justify-start gap-[20px] text-textcolor-placeholder-color-400 font-roboto border-[1.5px] border-solid border-stroke-color-200">
                            <img
                              className="relative w-6 h-6 hidden"
                              alt=""
                              src="/vuesaxlineararrowleft.svg"
                            />
                            <div className="flex-1 relative h-6">
                              <div className="absolute w-full top-[8.33%] left-[0%] leading-[20px] inline-block">
                                Enter business name
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="rounded bg-primary-100 w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
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
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default SignUp5;
