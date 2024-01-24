import { useEffect } from "react";
import { useRouter } from "next/navigation";

const step6 = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/partner/dashboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[url('/partner_assets/bg-gradient.svg')] flex w-screen h-screen ">
      <img
        src={"/partner_assets/loading.svg"}
        alt=""
        className="w-[300px] h-full mx-auto my-auto"
      />
    </div>
  );
};

export default step6;
