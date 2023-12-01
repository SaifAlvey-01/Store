import { useEffect, useRef, useState } from "react";
import AddVariants from "./product-module/add-variants";
import EditVariants from "./product-module/edit-variants";
import EditProductVariant from "./product-module/edit-product-variant";
import AddProduct from "./order-module/add-product";
import AddCustomerDetails from "./order-module/add-customer-details";
import AddNewCustomer from "./order-module/add-new-customer";
import AddNotes from "./order-module/add-notes";
import ShipOrder from "./order-module/ship-order";
import ChooseDeliveryTime from "./order-module/choose-delivery time";
import PickupTimeAndPartner from "./order-module/pickup-time-and-partner";
import AddTrackingDetails from "./order-module/add-tracking-details";
import ShipmentWeight from "./order-module/shipment-weight";
import MyCredit from "./order-module/my-credit";
import AutoAcceptOrders from "./settings-module/auto-accept-orders";
import SenderEmail from "./settings-module/sender-email";
import WhatsAppNotifications from "./settings-module/whatsapp-notificatios";
import AddStaff from "./settings-module/add-staff";
import SetupStripe from "./settings-module/setup-stripe";
import SetupManualPayment from "./settings-module/setup-manual-payment";
import AddWarehouse from "./settings-module/add-warehouse";
import AddCheckoutFields from "./settings-module/add-checkout-fields";
import ConnectDomain from "./settings-module/connect-domain";
import AddLanguages from "./settings-module/add-languages";
import KYCVerification from "./settings-module/kyc-verification";

export default function CustomDrawer({
  showSidebar,
  setShowSidebar,
  contentType,
  setContentType,
  onSetUpButtonClick,
  setShowConnectExistingDomain,
  onAddLanguages,
  setIsKYCVerified,
}) {
  const [addingNewCustomer, setAddingNewCustomer] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showSidebar) {
      setAddingNewCustomer(false);
    }
  }, [showSidebar]);

  return (
    <div>
      {showSidebar && (
        <div
          style={{
            boxShadow: "-2px 0px 4px 4px rgba(55, 58, 60, 0.04)",
            borderRadius: "30px 0px 0px 30px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            transform: "translateX(0%)",
            transition: "transform 0.3s ease-in-out",
          }}
          className="fixed top-0 right-0 w-[400px] bg-white z-50 p-4 shadow-lg"
          ref={sidebarRef}
        >
          <div
            className="scroll-section"
            style={{
              flex: "1",
              overflowY: "auto",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              position: "relative",
            }}
          >
            <img
              src="/cross.png"
              alt="Close"
              className="cursor-pointer h-5 w-5 self-end mt-2 mr-2"
              style={{ position: "absolute", top: 10, right: 0 }}
              onClick={() => setShowSidebar(false)}
            />{" "}
            {contentType === "add-variant" && (
              <AddVariants setShowSidebar={setShowSidebar} />
            )}
            {contentType === "edit-variant" && (
              <EditVariants setShowSidebar={setShowSidebar} />
            )}
            {contentType === "edit-product-variant" && (
              <EditProductVariant setShowSidebar={setShowSidebar} />
            )}
            {contentType === "add-product" && (
              <AddProduct setShowSidebar={setShowSidebar} />
            )}
            {contentType === "add-customer-details" && !addingNewCustomer && (
              <AddCustomerDetails
                setShowSidebar={setShowSidebar}
                contentType={contentType}
                setAddingNewCustomer={setAddingNewCustomer}
              />
            )}
            {(contentType === "add-new-customer" || addingNewCustomer) && (
              <AddNewCustomer setShowSidebar={setShowSidebar} />
            )}
            {contentType === "add-notes" && !addingNewCustomer && (
              <AddNotes setShowSidebar={setShowSidebar} />
            )}
            {contentType === "ship-order" && (
              <ShipOrder setContentType={setContentType} />
            )}
            {contentType === "pickup-time" && (
              <PickupTimeAndPartner setContentType={setContentType} />
            )}
            {contentType === "delivery-time" && (
              <ChooseDeliveryTime setShowSidebar={setShowSidebar} />
            )}
            {contentType === "tracking-details" && (
              <AddTrackingDetails setShowSidebar={setShowSidebar} />
            )}
            {contentType === "shipment-weight" && (
              <ShipmentWeight setShowSidebar={setShowSidebar} />
            )}
            {contentType === "my-credit" && (
              <MyCredit setShowSidebar={setShowSidebar} />
            )}
            {contentType === "auto-accept-orders" && (
              <AutoAcceptOrders setShowSidebar={setShowSidebar} />
            )}
            {contentType === "sender-email" && (
              <SenderEmail setShowSidebar={setShowSidebar} />
            )}
            {contentType === "whatsApp-notifications" && (
              <WhatsAppNotifications setShowSidebar={setShowSidebar} />
            )}
            {contentType === "add-staff" && (
              <AddStaff setShowSidebar={setShowSidebar} />
            )}
            {contentType === "setup-stripe" && (
              <SetupStripe setShowSidebar={setShowSidebar} />
            )}
            {contentType === "setup-manual-payment" && (
              <SetupManualPayment
                setShowSidebar={setShowSidebar}
                onSetUpButtonClick={onSetUpButtonClick}
              />
            )}
            {contentType === "add-warehouse" && (
              <AddWarehouse setShowSidebar={setShowSidebar} />
            )}
            {contentType === "add-checkout-fields" && (
              <AddCheckoutFields setShowSidebar={setShowSidebar} />
            )}
            {contentType === "connect-existing-domain" && (
              <ConnectDomain
                setShowSidebar={setShowSidebar}
                setShowConnectExistingDomain={setShowConnectExistingDomain}
              />
            )}
            {contentType === "add-languages" && (
              <AddLanguages
                setShowSidebar={setShowSidebar}
                onAddLanguages={onAddLanguages}
              />
            )}
            {contentType === "kyc-verification" && (
              <KYCVerification
                setShowSidebar={setShowSidebar}
                setIsKYCVerified={setIsKYCVerified}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
