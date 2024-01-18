import React from "react";
import Layout from "../../components/Layout";
import StoreSettings from "../../components/store-settings/settings";
import { useDispatch, useSelector } from "react-redux";
import { setShowUpgradePlan } from "../../redux/slices/storeSettingsSlices/upgradePlanSlice";
import { setShowConnectExistingDomain } from "../../redux/slices/storeSettingsSlices/connectExistingDomain";
import { setShowSetupCustomDomain } from "../../redux/slices/storeSettingsSlices/setupCustomDomain";

export default function StoreSettingsPage() {
  const dispatch = useDispatch();
  const showUpgradePlan = useSelector((state) => state.showUpgradePlan);
  const showConnectExistingDomain = useSelector(
    (state) => state.showConnectExistingDomain
  );
  const showSetupCustomDomain = useSelector(
    (state) => state.showSetupCustomDomain
  );

  const handleGoBack = () => {
    if (showUpgradePlan) {
      dispatch(setShowUpgradePlan(false));
    } else if (showConnectExistingDomain) {
      dispatch(setShowConnectExistingDomain(false));
    } else if (showSetupCustomDomain) {
      dispatch(setShowSetupCustomDomain(false));
    }
  };

  const backText = showUpgradePlan
    ? "Upgrade Plan"
    : showConnectExistingDomain
    ? "Connect your existing domain"
    : showSetupCustomDomain
    ? "Setup Custom Domain"
    : undefined;

  const backImageUrl = showUpgradePlan
    ? "/back-arrow.png"
    : showConnectExistingDomain
    ? "/back-arrow.png"
    : showSetupCustomDomain
    ? "/back-arrow.png"
    : undefined;

  return (
    <Layout
      backText={backText}
      backImageUrl={backImageUrl}
      backUrl={handleGoBack}
      showUpgradePlan={showUpgradePlan}
      showConnectExistingDomain={showConnectExistingDomain}
      showSetupCustomDomain={showSetupCustomDomain}
    >
      <StoreSettings
        showUpgradePlan={showUpgradePlan}
        setShowUpgradePlan={(value) => dispatch(setShowUpgradePlan(value))}
        showConnectExistingDomain={showConnectExistingDomain}
        showSetupCustomDomain={showSetupCustomDomain}
        setShowSetupCustomDomain={(value) =>
          dispatch(setShowSetupCustomDomain(value))
        }
      />
    </Layout>
  );
}
