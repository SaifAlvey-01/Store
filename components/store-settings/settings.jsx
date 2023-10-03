import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";
import GrowthChart from "../bar-charts/growth";
import StoreSettingsLinks from "./settings-link";
import Billings from "./billings-components/billings";
import Preferences from "./preferences-components/preferences-components/preferences";
import Plans from "./plans-components/plans";
import StaffAccounts from "./staff-accounts-components/staff-accounts";
import Payments from "./payments-components/payments";
import Shipping from "./shipping-components/shipping";
import Warehouse from "./warehouse-components/warehouse";
import Tax from "./tax-components/tax";
import ExtraCharges from "./extra-charges-components/extra-charges";
import Checkout from "./checkout-components/checkout";
import SupportAndSocial from "./support-and-social-components/support-and-social";
import Domains from "./domain-components/domains";
import Policies from "./policies-components/policies";
import Languages from "./languages-components/languages";
import KYCVerification from "./kyc-verification-components/kyc-verification";

export default function StoreSettings() {
  const [activeDiv, setActiveDiv] = useState("plans");

  function modifySVGColor(svg, color) {
    return svg.replace(/#4B4B4B/g, color);
  }

  return (
    <div
      className="h-auto overflow-y-auto flex flex-col items-center justify-between "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
        padding: "30px ",
      }}
    >
      <div className="flex flex-row w-[100%] items-stretch">
        <div
          className="mr-3 w-[35%] h-[30%] text-white p-3"
          style={{
            borderRadius: "10px",
            backgroundColor: "var(--white-color, #FFF)",
            border: "1px solid #e3e3e3",
          }}
        >
          <ul className="m-0 px-0 font-medium list-none">
            {StoreSettingsLinks.map((link) => (
              <li
                key={link.id}
                style={{
                  borderRadius: "10px",
                  backgroundColor: activeDiv === link.id ? "#F6F7FF" : "",
                }}
              >
                <div
                  onClick={() => setActiveDiv(link.id)}
                  className="no-underline cursor-pointer flex items-center p-3 mb-1 text-gray-900 hover:text-primary-300 rounded-lg text-neutral-500 hover:bg-neutral-200 group"
                >
                  <div
                    className="w-6 h-6"
                    dangerouslySetInnerHTML={{
                      __html: modifySVGColor(
                        link.icon,
                        activeDiv === link.id ? "#2A48D6" : "#4B4B4B"
                      ),
                    }}
                  />
                  <span
                    className="ml-3"
                    style={{
                      color: activeDiv === link.id ? "#2A48D6" : "#4B4B4B",
                    }}
                  >
                    {link.label}
                  </span>{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {activeDiv === "plans" && <Plans />}
        {activeDiv === "billings" && <Billings />}
        {activeDiv === "preferences" && <Preferences />}
        {activeDiv === "staff-accounts" && <StaffAccounts />}
        {activeDiv === "payments" && <Payments />}
        {activeDiv === "shipping" && <Shipping />}
        {activeDiv === "warehouse" && <Warehouse />}
        {activeDiv === "tax" && <Tax />}
        {activeDiv === "extra-charges" && <ExtraCharges />}
        {activeDiv === "checkout" && <Checkout />}
        {activeDiv === "support" && <SupportAndSocial />}
        {activeDiv === "domains" && <Domains />}
        {activeDiv === "policies" && <Policies />}
        {activeDiv === "languages" && <Languages />}
        {activeDiv === "kyc-verification" && <KYCVerification />}
      </div>
      <div className="w-[90%] mx-4 mb-4 mt-8 flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
