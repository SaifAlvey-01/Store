import React, { useState } from "react";
import FreeTrialFooter from "../free-trial-footer";
import StoreSettingsLinks from "./settings-link";
import Billings from "./billings-components/billings";
import Preferences from "./preferences-components/preferences-components/preferences";
import Plans from "./plans-components/plans";
import UpgradePlan from "./plans-components/upgrade-plan";
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
import ConnectExistingDomains from "./domain-components/connect-existing-domains";
import SetupCustomDomains from "./domain-components/setup-custom-domain";

export default function StoreSettings({
  showUpgradePlan,
  setShowUpgradePlan,
  showConnectExistingDomain,
  setShowConnectExistingDomain,
  showSetupCustomDomain,
  setShowSetupCustomDomain,
}) {
  const [activeDiv, setActiveDiv] = useState("plans");
  const [showCustomDomain, setShowCustomDomain] = useState(false);
  const components = [
    {
      id: "plans",
      component: (
        <Plans
          showUpgradePlan={showUpgradePlan}
          setShowUpgradePlan={setShowUpgradePlan}
        />
      ),
    },
    { id: "billings", component: <Billings /> },
    { id: "preferences", component: <Preferences /> },
    { id: "staff-accounts", component: <StaffAccounts /> },
    { id: "payments", component: <Payments /> },
    { id: "shipping", component: <Shipping /> },
    { id: "warehouse", component: <Warehouse /> },
    { id: "tax", component: <Tax /> },
    { id: "extra-charges", component: <ExtraCharges /> },
    { id: "checkout", component: <Checkout /> },
    { id: "support", component: <SupportAndSocial /> },
    {
      id: "domains",
      component: (
        <Domains
          showConnectExistingDomain={showConnectExistingDomain}
          setShowConnectExistingDomain={setShowConnectExistingDomain}
          showCustomDomain={showCustomDomain}
          showSetupCustomDomain={showSetupCustomDomain}
          setShowSetupCustomDomain={setShowSetupCustomDomain}
        />
      ),
    },
    { id: "policies", component: <Policies /> },
    { id: "languages", component: <Languages /> },
    { id: "kyc-verification", component: <KYCVerification /> },
  ];

  function modifySVGColor(svg, color) {
    return svg.replace(/#4B4B4B/g, color);
  }

  if (showConnectExistingDomain) {
    return (
      <ConnectExistingDomains
        goBack={() => setShowConnectExistingDomain(false)}
        setShowCustomDomain={setShowCustomDomain}
      />
    );
  }

  if (showUpgradePlan) {
    return (
      <UpgradePlan
        goBack={() => setShowUpgradePlan(false)}
        setShowUpgradePlan={setShowUpgradePlan}
      />
    );
  }

  if (showSetupCustomDomain) {
    return (
      <SetupCustomDomains goBack={() => setShowSetupCustomDomain(false)} />
    );
  }

  return (
    <div
      className="min-h-[calc(100vh-180px)] sm:min-h-[calc(100% - 100px)] overflow-y-auto flex flex-col items-center justify-between "
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
        {components.map((item) => {
          if (item.id === activeDiv) {
            return React.cloneElement(item.component, {
              showUpgradePlan,
              setShowUpgradePlan,
              showConnectExistingDomain,
              setShowConnectExistingDomain,
              showCustomDomain,
              showSetupCustomDomain,
              setShowSetupCustomDomain,
            });
          }
          return null;
        })}
      </div>
      <div className="w-[90%] mx-4 mb-4 mt-8 flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
