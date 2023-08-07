import { useCallback } from "react";

const SignUp2 = ({setCurrentStep}) => {
  const onPrimaryContainerClick = useCallback(() => {
    setCurrentStep(((prevStep) => prevStep + 1))
  }, []);

  return (
    <div className=" w-[408px] h-[274px] text-11xl text-neutral-600">
          <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start md:border-[0.8px] border-solid border-gainsboro">
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <b className="relative">Create a password</b>
              <div className="flex flex-col items-center justify-start text-sm text-dimgray">
                <div className="flex flex-col items-end justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-col items-start justify-start gap-[28px]">
                      <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="relative leading-[20px] font-medium">
                            Password
                          </div>
                        </div>
                        <div className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-4 items-center justify-start text-darkgray font-roboto border-[1.5px] border-solid border-gainsboro">
                          <div className="flex-1 relative h-6">
                            <div className="absolute w-full top-[calc(50%_-_8px)] left-[0%] leading-[16px] inline-block">
                              Enter your password
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded bg-primary-300-main w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                        onClick={onPrimaryContainerClick}
                      >
                        <div className="relative w-[90px] h-0" />
                        <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                          Continue
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default SignUp2;
