import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";

const SignUp2 = ({ setCurrentStep, setFormData, email }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { resdata, error, loading, putData: putRequest } = useAxios();
  const [customError, setCustomError] = useState(null);

  useEffect(() => {
    if (
      resdata.message &&
      resdata.message === "OTP has been send on provided email"
    ) {
      setCurrentStep(3);
    }

    if (resdata.message && resdata.state === "success") {
      setCustomError(resdata.message);
    }
    
  }, [resdata]);

  const onSubmit = (data) => {
    const savedEmail = Cookie.get("email");
    putRequest("/auth/create-password", { password: data.password, email: savedEmail});
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <div className=" w-full sm:w-[450px] md:w-[450px]lg:w-[450px] min-h-[calc(100% - 80px)] text-11xl text-neutral-600">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full text-11xl text-neutral-600">
          <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden mx-3 py-8 px-2 items-center justify-center border-[0.8px] border-solid border-gainsboro">
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <b className="relative">Create a password</b>
              <div className="flex flex-col w-full items-center justify-center text-sm text-dimgray gap-[28px]">
                <div className="w-full flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="relative leading-[20px] font-medium">
                      Password
                    </div>
                  </div>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className={`focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row  py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&#]{8,}$/,
                        message:
                          "Password must be at least 8 characters, 1 uppercase, 1 lowercase & 1 number",
                      },
                    })}
                  />

                  {errors.password && (
                    <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                      {customError? customError : errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  className="rounded bg-primary-300-main w-full flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                  type="submit"
                >
                  <div className="relative w-[90px] h-0" />
                  <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                    {loading ? (
                      <svg
                        aria-hidden="true"
                        role="status"
                        class="inline mr-3 w-6 h-6 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        ></path>
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    ) : (
                      <div>Continue</div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp2;
