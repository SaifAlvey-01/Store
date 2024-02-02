import { useEffect } from "react";
import { useRouter } from "next/navigation";
import pageload from "/public/logoutLoader.json";
import Lottie from "lottie-react";

const step6 = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/partner/dashboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
        style={{ backgroundColor: "#F7F9FB" }}
        className="bg-[url('/partner_assets/bg-gradient.svg')] flex h-screen overflow-hidden"
      >
        <div className=" overflow-y-auto flex flex-col items-center justify-center w-full">
          <div className="h-1/2 w-96 mx-auto my-auto">
            <Lottie animationData={pageload} loop={true} autoplay={true} />;
          </div>
        </div>
      </div>
  );
};

export default step6;
