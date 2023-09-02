import React, { useState } from "react";

function SidebarLinkGroup({ children, activecondition }) {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`p-[12px] w-[200px]  font-freesans mb-0.5 last:mb-0 ${
        activecondition && "bg-white text-[#1F1D2B] rounded-2xl"
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;
