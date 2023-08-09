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
    
      setCurrentStep(((prevStep) => prevStep + 1))
    
  }, []);

  return (
      <div className=" w-[408px] h-[346px] text-11xl text-neutral-600">
    <div className="rounded-3xl md:bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start md:border-[0.8px] border-solid border-gainsboro">
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
                          className="flex-1 relative h-6 input-box border-transparent" style={{ outline: "none"}}
                          type="number"
                          value={value}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>

                 


                </div>
                <button onClick={onTextFieldContainer1Click} className={`rounded ${ inputValues[inputValues.length-1] !== "" ? "bg-primary-300-main" : "bg-primary-100"} w-[360px] flex flex-col p-2 box-border items-center justify-center text-center text-white font-poppins`}>
                  <div className="relative w-[90px] h-0" />
                      Verify
                  {/* <div className="relative leading-[24px] font-medium"  >
                    Verify
                  </div> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignUp3;
