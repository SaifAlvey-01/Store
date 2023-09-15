import React, { useState } from "react";

function SidebarLinkGroup({ children, activecondition, onClick = () => {} }) {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={onClick}
      style={
        activecondition
          ? { backgroundColor: "white", borderRadius: 12 }
          : { backgroundColor: "transparent" }
      }
      className="px-[12px] py-[11px] w-[180px] font-freesans mb-2 last:mb-0 "
    >
      {children(handleClick, open)}
    </div>
  );
}

export default SidebarLinkGroup;
