import React, { useEffect, useRef, useState } from "react";

function Header() {
  return (
    <>
      <header className="sticky m-6 items-center rounded-lg top-0 lg:shadow flex bg-white border-b border-slate-200 h-[52px]">
        <div>
          <p className="text-[20px] font-freesans font-semibold ml-5 content-center">
            Dashboard
          </p>
        </div>
        <img
          className="w-[28px] h-[28px] mr-5 absolute right-0"
          src="/partner_assets/profile.svg"
        />
      </header>
    </>
  );
}

export default Header;
