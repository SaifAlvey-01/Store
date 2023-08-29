import { useForm } from "react-hook-form";

const SignUp2 = ({ setCurrentStep, setFormData }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" w-[408px] h-[274px] text-11xl text-neutral-600">
        <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start border-[0.8px] border-solid border-gainsboro">
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

                      <input
                        type="password"
                        placeholder="Enter your password"
                        className={`focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro ${
                          errors.password ? "border-red-500" : ""
                        }`}
                        {...register("password", {
                          required: "Password is required",
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&#]{8,}$/,
                            message:
                              "Password must contain at least one uppercase letter, one lowercase letter, and one number, and be at least 8 characters long.",
                          },
                        })}
                      />

                      {errors.password && (
                        <p className="text-[#F64C4C] my-1 mx-1">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    <button
                      className="rounded bg-primary-300-main w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                      type="submit"
                    >
                      <div className="relative w-[90px] h-0" />
                      <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                        Continue
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp2;
