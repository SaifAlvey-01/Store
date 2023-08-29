import React, { useState } from 'react';
import Search from './Search';

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 lg:shadow bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-2 lg:px-8 ">
        
        <div className="flex flex-wrap flow-col items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className=" lg:hidden bg-white"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <img src='/burgerIcon.png' className='w-[24px] h-[24px] bg-white '/>
            </button>
            <p className='text-[#4B5563] font-bold sm:text-base lg:text-lg leading-18 font-FreeSans'>Dashboard</p>
          </div>

          {/* Header: Right side */}
          <div className="order-1 w-full sm:order-none sm:w-auto">
              <Search />
          </div>
          {/* third div */}
          <div className="flex items-center sw-[256px] h-12 top-24 left-920 lg:gap-2">
            
                <img src='/nav/needhelp.png' className='hidden sm:block w-[112px] h-[32px] cursor-pointer '/>
                <img src='/nav/download.png'  className='w-[32px] h-[32px] cursor-pointer'/>
                <img src='/nav/bell.png'  className='w-[32px] h-[32px] cursor-pointer'/>
                <img src='/nav/open.png'  className='w-[32px] h-[32px] cursor-pointer'/>

            
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
