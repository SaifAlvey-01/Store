import { useCallback, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

const Forgot4 = ({setCurrentStep}) => {
  const router = useRouter()
  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
  const [active, setActive] = useState(false)
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
        <div className="flex flex-col items-center justify-start text-base text-neutral-500">
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col items-start justify-start gap-[28px]">
                <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-center justify-center">
                  <h1 className="text-neutral-600 font-semibold text-24 font-FreeSans tracking-normal">
                  Confirmation Code
                            <span className="flex text-neutral-500 font-roboto font-normal text-sm pt-4 justify-center items-center">
                            Code sent to your please write it here.</span></h1>
                  </div>
                </div>
                <div
                  className="w-[360px] flex flex-col items-start justify-start gap-[4px] cursor-pointer text-sm text-dimgray"
                >
                  <div className="w-[360px] flex flex-row items-start justify-between">
                    {inputValues.map((value, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-white box-border w-12 flex flex-row py-2.5 px-4 items-center justify-start border-[1.5px] border-solid border-gainsboro"
                      >
                        <input
                          className="flex-1 relative h-6 input-box border-transparent w-5" style={{ outline: "none", appearance: "textfield"} }
                          type="number"
                          inputMode="numeric" // Add this attribute
                          pattern="[0-9]*"
                          value={value}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>

                 


                </div>
                <button onClick={onTextFieldContainer1Click} className={`rounded ${ inputValues[inputValues.length-1] !== "" ? "bg-primary-300-main" : "bg-primary-100"} w-[360px] flex flex-col p-2 box-border items-center justify-center text-center text-white font-poppins`}>
                  <div className="relative w-[90px] h-0" />
                      Continue
                  {/* <div className="relative leading-[24px] font-medium"  >
                    Verify
                  </div> */}
                </button>
                <div
                  className="relative text-sm tracking-[0.25px] leading-[20px] text-center cursor-pointer text-darkslategray font-roboto"
                >
                        <span>
                            <span>Remembered your password?</span>
                            <span className="text-mediumslateblue">{` `}</span>
                        </span>
                        <span className="font-roboto font-normal text-primary-300-main">
                            Sign In
                        </span>
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

export default Forgot4;
