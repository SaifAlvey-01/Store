'use client'
import { useCallback } from "react";
 
import { useRouter } from 'next/navigation'

const SignUp1 = () => {
  const router = useRouter()


  const onPrimaryContainerClick = useCallback(() => {
    // Please sync "Sign Up 2" to the project
      router.push('/signup/step2')
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "LogIn 1" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-2xs-5 text-midnightblue font-freesans">
      <img
        className="absolute h-[77.31%] w-full top-[15.27%] right-[0%] bottom-[7.42%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-3.svg"
      />
      <div className="absolute top-[calc(50%_-_275px)] left-[calc(50%_-_589.5px)] w-[1179px] h-[551px]">
        <div className="absolute top-[34px] left-[0.41px] w-[605.47px] h-[482.61px]">
          <div className="absolute top-[175.86px] left-[0px] rounded-[50%] [background:linear-gradient(147.09deg,_#4162ff,_#96a8ff)] w-[75px] h-[75px]" />
          <div className="absolute top-[120.36px] left-[35.25px] w-[335.87px] h-[344.79px] text-grey-scale-body font-poppins">
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
              <div className="absolute top-[7.84%] left-[5.33%] text-2xs-5 leading-[13.5px] font-medium font-freesans text-midnightblue">
                Sale Products
              </div>
              <img
                className="absolute h-[86.9%] w-[85.12%] top-[-17.24%] right-[-8.11%] bottom-[30.34%] left-[22.99%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-82.svg"
              />
              <div className="absolute h-[24.02%] w-[23.33%] top-[23.53%] right-[30.33%] bottom-[52.45%] left-[46.33%] text-[9px] text-white">
                <div className="absolute h-[75.51%] w-full top-[0%] right-[0%] bottom-[24.49%] left-[0%]">
                  <img
                    className="absolute h-[31.12%] w-[23.11%] top-[29.89%] right-[27.28%] bottom-[38.99%] left-[49.6%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/polygon-2.svg"
                  />
                  <div className="absolute h-[89.19%] w-full top-[0%] right-[0%] bottom-[10.81%] left-[0%] rounded-[3px] bg-primary-300-main" />
                  <div className="absolute top-[13.51%] left-[11.43%] leading-[110%]">
                    48k
                  </div>
                  <div className="absolute top-[51.35%] left-[11.43%] text-[6px] leading-[110%] opacity-[0.8]">
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
            <div className="relative w-[95.25px] h-[75px] [transform:_rotate(-20deg)] [transform-origin:0_0] text-[18px] font-roboto">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs-5 bg-white shadow-[0px_6px_30px_-1.5px_rgba(6,_12,_59,_0.08)]" />
              <div className="absolute top-[50%] left-[12.99%] leading-[21px]">
                8000+
              </div>
              <div className="absolute top-[16%] left-[12.6%] text-2xs-5 leading-[15px] font-medium font-freesans">
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
        <div className="absolute top-[0px] left-[771px] w-[408px] h-[551px] text-[30px] text-neutral-600">
          <div className="absolute top-[-0.4px] left-[-0.4px] rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start border-[0.8px] border-solid border-gainsboro">
            <div className="flex flex-col items-center justify-start gap-[92px]">
              <div className="flex flex-col items-center justify-start gap-[32px]">
                <b className="relative">Start 7 Days Free Trail</b>
                <div className="flex flex-col items-center justify-start gap-[24px] text-sm text-dimgray">
                  <div className="flex flex-col items-end justify-start gap-[32px]">
                    <div className="flex flex-col items-center justify-start gap-[32px]">
                      <div className="flex flex-col items-start justify-start gap-[28px]">
                        <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="relative leading-[20px] font-medium">
                              Email or Mobile Number
                            </div>
                          </div>
                          <input
                              type="text"
                              placeholder="Enter Email or Mobile Number"
                              className="self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-darkgray font-roboto border-[1.5px] border-solid border-gainsboro"
                            />
                        </div>
                        <div
                          className="rounded bg-primary-300-main w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                          onClick={onPrimaryContainerClick}
                        >
                          <div className="relative w-[90px] h-0" />
                          <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                            Get Stated
                          </div>
                        </div>
                      </div>
                      <div className="relative w-[328px] h-[17px] text-[11.25px] text-darkslategray font-poppins">
                        <div className="absolute top-[0px] left-[113.66px] font-medium inline-block w-[100.67px]">
                          Or continue with
                        </div>
                        <img
                          className="absolute top-[8px] left-[0px] w-[106.09px] h-px"
                          alt=""
                          src="/rectangle-3.svg"
                        />
                        <img
                          className="absolute top-[8px] left-[221.91px] w-[106.09px] h-px"
                          alt=""
                          src="/rectangle-4.svg"
                        />
                      </div>
                    </div>
                    <div className="rounded bg-white box-border w-[360px] flex flex-col p-2 items-center justify-center text-center text-base text-neutral-600 border-[1px] border-solid border-neutral-300">
                      <div className="relative w-[90px] h-0" />
                      <div className="flex flex-row items-center justify-center gap-[6px]">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/google.svg"
                        />
                        <div className="relative leading-[24px] font-medium">
                          Google
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[12px] leading-[20px] font-roboto">
                    By continuing, you agree to our Terms of Use and Privacy
                    Policy.
                  </div>
                </div>
              </div>
              <div
                className="relative text-sm tracking-[0.25px] leading-[20px] text-center cursor-pointer text-darkslategray font-roboto"
                onClick={onAlreadyHaveAnClick}
              >
                <span>
                  <span>Already have an account?</span>
                  <span className="text-mediumslateblue">{` `}</span>
                </span>
                <span className="font-medium text-primary-300-main">
                  Sign In
                </span>
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
  );
};

export default SignUp1;
