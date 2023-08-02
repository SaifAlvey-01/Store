const FrameComponent = ({ onClose }) => {
    return (
      <div className="relative rounded-lg bg-white overflow-hidden flex flex-col p-4 box-border items-start justify-start gap-[10px] max-w-full max-h-full text-left text-sm text-neutral-500 font-roboto">
        <div className="rounded-lg bg-white w-[328px] flex flex-row py-2.5 px-4 box-border items-center justify-start gap-[20px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/emojioneflagforindia.svg"
          />
          <div className="relative w-52 h-6">
            <div className="absolute w-full top-[8.33%] left-[0%] leading-[20px] inline-block">
              India
            </div>
          </div>
          <img
            className="relative rounded w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/lucideindianrupee.svg"
          />
        </div>
        <div className="rounded-lg bg-white w-[328px] flex flex-row py-2.5 px-4 box-border items-center justify-start gap-[20px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/emojioneflagforpakistan.svg"
          />
          <div className="relative w-52 h-6">
            <div className="absolute w-full top-[8.33%] left-[0%] leading-[20px] inline-block">
              Pakistan
            </div>
          </div>
          <img
            className="relative rounded-10xs w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/lucideindianrupee1.svg"
          />
        </div>
        <div className="rounded-lg bg-white w-[328px] flex flex-row py-2.5 px-4 box-border items-center justify-start gap-[20px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/circleflagsuk.svg"
          />
          <div className="relative w-52 h-6">
            <div className="absolute w-full top-[8.33%] left-[0%] leading-[20px] inline-block">
              United Kingdom
            </div>
          </div>
          <img
            className="relative rounded-10xs w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/lucideindianrupee2.svg"
          />
        </div>
      </div>
    );
  };
  
  export default FrameComponent;
  