import Lottie from "lottie-react";
import animationData from "../../public/celebration.json";

export default function UpgradeYourPlanModal({ isOpen, onClose }) {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("bg-black")) {
      onClose();
    }
  };

  return (
    <div
      className={`z-40 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
      onClick={handleModalClick}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div
          style={{
            borderRadius: "12px",
            border: "1px solid #EDEDED",
            background: "#FFF",
            boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
          }}
          className="relative py-4 px-5"
        >
          <div className="flex flex-row items-center justify-between mb-1">
            <h3 className="text-[16px] my-0 font-semibold font-lato">
              Upgrade Your Plan{" "}
            </h3>

            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-lg ms-auto inline-flex justify-center items-center cursor-pointer p-0"
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.9998 5.99982C17.8123 5.81235 17.558 5.70703 17.2928 5.70703C17.0277 5.70703 16.7733 5.81235 16.5858 5.99982L11.9998 10.5858L7.41382 5.99982C7.22629 5.81235 6.97198 5.70703 6.70682 5.70703C6.44165 5.70703 6.18735 5.81235 5.99982 5.99982C5.81235 6.18735 5.70703 6.44165 5.70703 6.70682C5.70703 6.97198 5.81235 7.22629 5.99982 7.41382L10.5858 11.9998L5.99982 16.5858C5.81235 16.7733 5.70703 17.0277 5.70703 17.2928C5.70703 17.558 5.81235 17.8123 5.99982 17.9998C6.18735 18.1873 6.44165 18.2926 6.70682 18.2926C6.97198 18.2926 7.22629 18.1873 7.41382 17.9998L11.9998 13.4138L16.5858 17.9998C16.7733 18.1873 17.0277 18.2926 17.2928 18.2926C17.558 18.2926 17.8123 18.1873 17.9998 17.9998C18.1873 17.8123 18.2926 17.558 18.2926 17.2928C18.2926 17.0277 18.1873 16.7733 17.9998 16.5858L13.4138 11.9998L17.9998 7.41382C18.1873 7.22629 18.2926 6.97198 18.2926 6.70682C18.2926 6.44165 18.1873 6.18735 17.9998 5.99982Z"
                  fill="#374957"
                />
              </svg>
            </button>
          </div>
          <span className="font-lato text-[12px] text-[#8E8E8E] font-[500]">
            You need to upgrade your plan to get more features.{" "}
          </span>{" "}
          <div className="flex items-center justify-center h-60 w-76 mx-auto mt-4">
            <Lottie
              animationData={animationData}
              options={{
                loop: true,
                autoplay: true,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
          <div className="w-full flex flex-row justify-center items-center box-border">
            <button
              className="cursor-pointer"
              style={{
                backgroundColor: "#4162FF",
                color: "#ffffff",
                padding: "10px 30px",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            >
              Check Plans{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
