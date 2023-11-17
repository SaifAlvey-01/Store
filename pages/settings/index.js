import React from "react";
import Layout from "../../components/Layout";
import StoreSettings from "../../components/store-settings/settings";
import { useDispatch, useSelector } from "react-redux";
import { setShowUpgradePlan } from "../../redux/slices/storeSettingsSlices/upgradePlanSlice";

export default function StoreSettingsPage() {
  const dispatch = useDispatch();
  const showUpgradePlan = useSelector((state) => state.showUpgradePlan);

  const handleGoBack = () => {
    if (showUpgradePlan) {
      dispatch(setShowUpgradePlan(false));
    }
  };

  const backText = showUpgradePlan ? "Upgrade Plan" : undefined;

  const backImageUrl = showUpgradePlan ? "/back-arrow.png" : undefined;

  return (
    <Layout
      backText={backText}
      backImageUrl={backImageUrl}
      backUrl={handleGoBack}
      showUpgradePlan={showUpgradePlan}
    >
      <StoreSettings
        showUpgradePlan={showUpgradePlan}
        setShowUpgradePlan={(value) => dispatch(setShowUpgradePlan(value))}
      />
    </Layout>
  );
}
