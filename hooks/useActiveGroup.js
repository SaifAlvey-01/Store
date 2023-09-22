import { useEffect, useState } from "react";

const useActiveGroup = (pathname) => {
  const [activeGroup, setActiveGroup] = useState("dashboard");

  useEffect(() => {
    const groups = [
      "orders",
      "dashboard",
      "delivery",
      "products",
      "analytics",
      "payments",
      "discounts",
      "audience",
      "builder",
      "appearance",
      "tools",
      "appstore",
      "settings",
    ];

    const matchingGroup = groups.find((group) =>
      pathname.startsWith(`/${group}`)
    );
    if (matchingGroup) {
      setActiveGroup(matchingGroup);
    }
  }, [pathname]);

  return activeGroup;
};

export default useActiveGroup;
