import { useState, useCallback } from "react";
import FrameComponent from "./frame-component";
import PortalPopup from "./portal-popup";

const SignUp5 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onPrimaryContainerClick = useCallback(() => {
    // Please sync "Sign Up 6" to the project
  }, []);

  return (
    <>
      <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-2xs-5 text-midnightblue font-freesans bg-[url('/Background.png')]">
        <img
          className="absolute h-[77.31%] w-full top-[15.27%] right-[0%] bottom-[7.42%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-3.svg"
        />
        <div className="absolute top-[calc(50%_-_241px)] left-[calc(50%_-_589px)] w-[1179px] h-[483px]">
        <div className="absolute left-[0.41px] w-[605.47px] h-[482.61px]">
          <img 
            className=""
            src="/signupImg.png"/>
        </div>
          <div className="absolute top-[45px] left-[770.5px] w-[408px] h-[373px] text-11xl text-neutral-600">
            <div className="absolute top-[-0.4px] left-[-0.4px] rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start border-[0.8px] border-solid border-stroke-color-200">
              <div className="flex flex-col items-center justify-start gap-[31px]">
                <b className="relative">Enter business details</b>
                <div className="flex flex-col items-center justify-start text-sm text-dimgray">
                  <div className="flex flex-col items-end justify-start">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-start justify-start gap-[28px]">
                        <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="relative leading-[20px] font-medium">
                              <span>{`Country `}</span>
                              <span className="text-tomato">*</span>
                            </div>
                            <div className="relative leading-[160%] font-body-sm text-indication-colors-error opacity-[0]">
                              *
                            </div>
                          </div>
                          <div
                            className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-4 items-center justify-start gap-[20px] cursor-pointer text-textcolor-placeholder-color-400 font-roboto border-[1.5px] border-solid border-stroke-color-200"
                            onClick={openFrame}
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
        </div>
        <img
          className="absolute top-[calc(50%_-_480px)] left-[calc(50%_-_656px)] w-[167px] h-[35px] object-cover"
          alt=""
          src="/logo-1@2x.png"
        />
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
