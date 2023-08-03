import { useCallback, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

const SignUp3 = ({setCurrentStep}) => {
  const router = useRouter()
  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
  const [active, setactive] = useState(false)
  // Function to update input value in the state array
  const handleInputChange = (index, value) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
   

  };

  useEffect(()=>{

    if(inputValues.length === 6 && !inputValues.includes('')){
      console.log("Active")

      setactive(true)
    }
  
  },[inputValues])

  const onTextFieldContainer1Click = useCallback(() => {
    console.log(active)
    // Please sync "Sign Up 4" to the project
    // if (active){
      setCurrentStep(((prevStep) => prevStep + 1))
    // }
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-2xs-5 text-midnightblue font-freesans">
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
        <div className="absolute top-[58.5px] left-[770.5px] w-[408px] h-[346px] text-11xl text-neutral-600">
          <div className="absolute top-[-0.4px] left-[-0.4px] rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start border-[0.8px] border-solid border-gainsboro">
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <b className="relative">Verify Code</b>
              <div className="flex flex-col items-center justify-start text-base text-neutral-500">
                <div className="flex flex-col items-end justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-col items-start justify-start gap-[28px]">
                      <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="relative leading-[20px] font-medium">
                            Enter code sent to you at
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start text-sm text-dimgray">
                          <div className="relative leading-[20px] font-medium">
                            ahmedakram018@gmail.com
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[360px] flex flex-col items-start justify-start gap-[4px] cursor-pointer text-sm text-dimgray"
                        onClick={onTextFieldContainer1Click}
                      >
                        <div className="self-stretch flex flex-row items-start justify-between">
                          <div className="relative leading-[20px] font-medium">
                            Code
                          </div>
                          <div className="relative leading-[20px] font-medium text-right">
                            <span>{`Didn’t get the code? `}</span>
                            <span className="text-primary-300-main">
                              Resend OPT
                            </span>
                          </div>
                        </div>

                        <div className="w-[360px] flex flex-row items-start justify-between">
                          {inputValues.map((value, index) => (
                            <div
                              key={index}
                              className="rounded-lg bg-white box-border w-11 flex flex-row py-2.5 px-4 items-center justify-start border-[1.5px] border-solid border-gainsboro"
                            >
                              <input
                                className="flex-1 relative h-6 input-box border-transparent"
                                type="number"
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                              />
                            </div>
                          ))}
                        </div>

                       


                      </div>
                      <div onClick={onTextFieldContainer1Click} className={`rounded ${ active ? "bg-primary-300-main" : "bg-primary-100"} w-[360px] flex flex-col p-2 box-border items-center justify-center text-center text-white font-poppins`}>
                        <div className="relative w-[90px] h-0" />
                        
                        <div className="relative leading-[24px] font-medium"  >
                          Verify
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
  );
};

export default SignUp3;
