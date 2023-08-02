import { useState, useCallback } from "react";
import FrameComponent from "../../../components/frame-component";
import PortalPopup from "../../../components/portal-popup";

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
      <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-2xs-5 text-midnightblue font-body-body-md-medium">
        <img
          className="absolute h-[77.31%] w-full top-[15.27%] right-[0%] bottom-[7.42%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-3.svg"
        />
        <div className="absolute top-[calc(50%_-_241px)] left-[calc(50%_-_589px)] w-[1179px] h-[483px]">
          <div className="absolute top-[0.43px] left-[-0.09px] w-[605.47px] h-[482.61px]">
            <div className="absolute top-[175.86px] left-[0px] rounded-[50%] [background:linear-gradient(147.09deg,_#4162ff,_#96a8ff)] w-[75px] h-[75px]" />
            <div className="absolute top-[120.36px] left-[35.25px] w-[335.87px] h-[344.79px] text-grey-scale-body font-body-sm">
              <div className="absolute top-[88.26px] left-[0px] rounded-[7.11px] bg-white w-[258.06px] h-[272.99px] [transform:_rotate(-20deg)] [transform-origin:0_0]" />
              <div className="absolute top-[128.16px] left-[29.65px] rounded-[7.11px] bg-whitesmoke w-[229.63px] h-[209.72px] [transform:_rotate(-20deg)] [transform-origin:0_0]" />
              <img
                className="absolute top-[76.34px] left-[39.38px] w-[272.43px] h-[234.19px]"
                alt=""
                src="/group-87.svg"
              />
              <div className="absolute top-[95.89px] left-[19.07px] w-[196.19px] h-[21.33px] [transform:_rotate(-20deg)] [transform-origin:0_0]">
                <div className="absolute top-[4.22px] left-[1.54px] leading-[13.5px] font-semibold [transform:_rotate(-20deg)] [transform-origin:0_0]">
                  Store Activities
                </div>
                <div className="absolute top-[-41.81px] left-[114.88px] w-[73.94px] h-[21.33px] [transform:_rotate(-20deg)] [transform-origin:0_0] text-[7.11px] text-lightslategray">
                  <div className="absolute top-[0px] left-[0px] rounded-[3.55px] bg-white box-border w-[73.94px] h-[21.33px] [transform:_rotate(-20deg)] [transform-origin:0_0] border-[0.7px] border-solid border-lightslategray" />
                  <img
                    className="absolute top-[-13.11px] left-[56.91px] w-[4.1px] h-[5.16px]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className="absolute top-[2.12px] left-[12.88px] font-semibold [transform:_rotate(-20deg)] [transform-origin:0_0]">
                    Live Activity
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[110.5px] w-[398.27px] h-[220.73px] flex flex-row items-start justify-start">
              <div className="relative w-[135px] h-[132px] [transform:_rotate(-20deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs-5 bg-white shadow-[0px_6px_30px_-1.5px_rgba(6,_12,_59,_0.08)]" />
                <div className="absolute top-[9.09%] left-[8.89%] tracking-[0.04em] leading-[13.5px] font-medium">
                  Create Store
                </div>
                <div className="absolute h-[3.41%] w-[67.78%] top-[76.14%] right-[7.78%] bottom-[20.45%] left-[24.44%] rounded-5xs-5 bg-silver" />
                <div className="absolute h-[3.41%] w-[11.11%] top-[76.14%] right-[81.11%] bottom-[20.45%] left-[7.78%] rounded-5xs-5 bg-silver" />
                <div className="absolute h-[3.41%] w-[67.78%] top-[84.09%] right-[7.78%] bottom-[12.5%] left-[24.44%] rounded-5xs-5 bg-silver" />
                <div className="absolute h-[3.41%] w-[11.11%] top-[84.09%] right-[81.11%] bottom-[12.5%] left-[7.78%] rounded-5xs-5 bg-silver" />
                <img
                  className="absolute h-[49.52%] w-[48.42%] top-[-0.6%] right-[13.98%] bottom-[51.08%] left-[37.6%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/createdashboard.svg"
                />
              </div>
              <div className="relative shadow-[-3px_-1.5px_24px_rgba(99,_99,_99,_0.25)] w-[225px] h-[153px] [transform:_rotate(-20deg)] [transform-origin:0_0] ml-[-37.5px] text-5xs-5 text-slategray font-chivo">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs-5 bg-white shadow-[0px_6px_30px_-1.5px_rgba(6,_12,_59,_0.08)]" />
                <div className="absolute h-[0.49%] w-[78.67%] top-[79.17%] right-[6.17%] bottom-[20.34%] left-[15.17%] box-border opacity-[0.2] border-t-[0.8px] border-solid border-silver" />
                <div className="absolute h-[0.49%] w-[78.67%] top-[65.93%] right-[6.17%] bottom-[33.58%] left-[15.17%] box-border opacity-[0.2] border-t-[0.8px] border-solid border-silver" />
                <div className="absolute h-[0.49%] w-[78.67%] top-[52.7%] right-[6.17%] bottom-[46.81%] left-[15.17%] box-border opacity-[0.2] border-t-[0.8px] border-solid border-silver" />
                <div className="absolute h-[0.49%] w-[78.67%] top-[39.46%] right-[6.17%] bottom-[60.05%] left-[15.17%] box-border opacity-[0.2] border-t-[0.8px] border-solid border-silver" />
                <div className="absolute h-[0.49%] w-[78.67%] top-[26.23%] right-[6.17%] bottom-[73.28%] left-[15.17%] box-border opacity-[0.2] border-t-[0.8px] border-solid border-silver" />
                <div className="absolute h-[58.82%] w-[6.22%] top-[23.53%] right-[88.44%] bottom-[17.65%] left-[5.33%]">
                  <div className="absolute top-[22.5%] left-[0%] leading-[120%]">
                    60k
                  </div>
                  <div className="absolute top-[45%] left-[0%] leading-[120%]">
                    30k
                  </div>
                  <div className="absolute top-[67.5%] left-[0%] leading-[120%]">
                    10k
                  </div>
                  <div className="absolute top-[90%] left-[0%] leading-[120%]">
                    0
                  </div>
                  <div className="absolute top-[0%] left-[0%] leading-[120%]">
                    90k
                  </div>
                </div>
                <div className="absolute h-[5.88%] w-[76.22%] top-[86.27%] right-[8.44%] bottom-[7.84%] left-[15.33%]">
                  <div className="absolute top-[0%] left-[0%] leading-[120%]">
                    Mar
                  </div>
                  <div className="absolute top-[0%] left-[24.05%] leading-[120%]">
                    Apr
                  </div>
                  <div className="absolute top-[0%] left-[46.79%] leading-[120%]">
                    May
                  </div>
                  <div className="absolute top-[0%] left-[70.85%] leading-[120%]">
                    Jun
                  </div>
                  <div className="absolute top-[0%] left-[93.59%] leading-[120%]">
                    Jul
                  </div>
                </div>
                <div className="absolute top-[7.84%] left-[5.33%] text-2xs-5 leading-[13.5px] font-medium font-body-body-md-medium text-midnightblue">
                  Sale Products
                </div>
                <img
                  className="absolute h-[86.9%] w-[85.12%] top-[-17.24%] right-[-8.11%] bottom-[30.34%] left-[22.99%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-82.svg"
                />
                <div className="absolute h-[24.02%] w-[23.33%] top-[23.53%] right-[30.33%] bottom-[52.45%] left-[46.33%] text-4xs text-white">
                  <div className="absolute h-[75.51%] w-full top-[0%] right-[0%] bottom-[24.49%] left-[0%]">
                    <img
                      className="absolute h-[31.12%] w-[23.11%] top-[29.89%] right-[27.28%] bottom-[38.99%] left-[49.6%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/polygon-2.svg"
                    />
                    <div className="absolute h-[89.19%] w-full top-[0%] right-[0%] bottom-[10.81%] left-[0%] rounded-10xs bg-primary-300-main" />
                    <div className="absolute top-[13.51%] left-[11.43%] leading-[110%]">
                      48k
                    </div>
                    <div className="absolute top-[51.35%] left-[11.43%] text-7xs leading-[110%] opacity-[0.8]">
                      Visitor
                    </div>
                    <img
                      className="absolute h-[48.5%] w-[25.63%] top-[-34.45%] right-[5.53%] bottom-[85.96%] left-[68.83%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-871.svg"
                    />
                  </div>
                  <div className="absolute h-[16.33%] w-[11.43%] top-[83.67%] right-[44.29%] bottom-[0%] left-[44.29%] rounded-[50%] bg-primary-300-main box-border border-[0.8px] border-solid border-primary-300-main" />
                </div>
              </div>
            </div>
            <div className="absolute top-[281.61px] left-[285px] w-[320.47px] h-[167.66px] flex flex-row items-start justify-start">
              <div className="relative w-[177px] h-[114px] [transform:_rotate(-20deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs-5 bg-white shadow-[0px_6px_30px_-1.5px_rgba(6,_12,_59,_0.08)]" />
                <div className="absolute top-[10.53%] left-[6.78%] leading-[13.5px] font-medium">
                  Ready to Grow
                </div>
                <img
                  className="absolute h-[91.76%] w-[86.45%] top-[-13.08%] right-[-4.12%] bottom-[21.32%] left-[17.67%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-80.svg"
                />
              </div>
              <div className="relative w-[95.25px] h-[75px] [transform:_rotate(-20deg)] [transform-origin:0_0] text-lg font-roboto">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs-5 bg-white shadow-[0px_6px_30px_-1.5px_rgba(6,_12,_59,_0.08)]" />
                <div className="absolute top-[50%] left-[12.99%] leading-[21px]">
                  8000+
                </div>
                <div className="absolute top-[16%] left-[12.6%] text-2xs-5 leading-[15px] font-medium font-body-body-md-medium">
                  Daily Visitor
                </div>
              </div>
            </div>
            <img
              className="absolute top-[393.36px] left-[81.75px] w-[141.75px] h-[141.75px]"
              alt=""
              src="/group-10.svg"
            />
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
