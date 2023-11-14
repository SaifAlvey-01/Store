import { useEffect, useRef, useState } from "react";
import AddVariants from "./add-variants";
import EditVariants from "./edit-variants";
import EditProductVariant from "./edit-product-variant";
import AddProduct from "./add-product";
import AddCustomerDetails from "./add-customer-details";
import AddNewCustomer from "./add-new-customer";
import AddNotes from "./add-notes";
import ShipOrder from "./ship-order";
import ChooseDeliveryTime from "./choose-delivery time";
import PickupTimeAndPartner from "./pickup-time-and-partner";
import AddTrackingDetails from "./add-tracking-details";
import ShipmentWeight from "./shipment-weight";

export default function CustomDrawer({
  showSidebar,
  setShowSidebar,
  contentType,
  setContentType,
  setShowDeliveredButtons,
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
          className="fixed top-0 right-0 w-[440px] bg-white z-50 p-4 shadow-lg"
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
              <AddVariants
                setShowSidebar={setShowSidebar}
                contentType={contentType}
              />
            )}
            {contentType === "edit-variant" && (
              <EditVariants
                setShowSidebar={setShowSidebar}
                contentType={contentType}
              />
            )}
            {contentType === "edit-product-variant" && (
              <EditProductVariant
                setShowSidebar={setShowSidebar}
                contentType={contentType}
              />
            )}
            {contentType === "add-product" && (
              <AddProduct
                setShowSidebar={setShowSidebar}
                contentType={contentType}
              />
            )}
            {contentType === "add-customer-details" && !addingNewCustomer && (
              <AddCustomerDetails
                setShowSidebar={setShowSidebar}
                contentType={contentType}
                setAddingNewCustomer={setAddingNewCustomer}
              />
            )}
            {(contentType === "add-new-customer" || addingNewCustomer) && (
              <AddNewCustomer
                setShowSidebar={setShowSidebar}
                contentType={contentType}
              />
            )}
            {contentType === "add-notes" && !addingNewCustomer && (
              <AddNotes
                setShowSidebar={setShowSidebar}
                contentType={contentType}
              />
            )}
            {contentType === "ship-order" && (
              <ShipOrder
                setShowSidebar={setShowSidebar}
                contentType={contentType}
                setContentType={setContentType}
              />
            )}
            {contentType === "pickup-time" && (
              <PickupTimeAndPartner
                setShowSidebar={setShowSidebar}
                contentType={contentType}
                setContentType={setContentType}
              />
            )}
            {contentType === "delivery-time" && (
              <ChooseDeliveryTime
                setShowSidebar={setShowSidebar}
                contentType={contentType}
                setShowDeliveredButtons={setShowDeliveredButtons}
              />
            )}
            {contentType === "tracking-details" && (
              <AddTrackingDetails
                setShowSidebar={setShowSidebar}
                contentType={contentType}
                setShowDeliveredButtons={setShowDeliveredButtons}
              />
            )}
            {contentType === "shipment-weight" && (
              <ShipmentWeight
                setShowSidebar={setShowSidebar}
                contentType={contentType}
                setShowDeliveredButtons={setShowDeliveredButtons}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
