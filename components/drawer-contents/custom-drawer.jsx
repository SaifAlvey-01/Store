import { useEffect, useRef, useState } from "react";
import UnitSelect from "../dropdown-selects/unit-select";
import AddVariants from "./add-variants";
import EditVariants from "./edit-variants";
import EditProductVariant from "./edit-product-variant";
import AddProduct from "./add-product";
import AddCustomerDetails from "./add-customer-details";
import AddNewCustomer from "./add-new-customer";
import AddNotes from "./add-notes";

export default function CustomDrawer({
  showSidebar,
  setShowSidebar,
  contentType,
}) {
  const [addingNewCustomer, setAddingNewCustomer] = useState(false);
  const sidebarRef = useRef(null);

  const handleAddNewCustomer = () => {
    setAddingNewCustomer(true);
    setShowSidebar(true);
  };

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
    setAddingNewCustomer(false);
  }, [contentType]);

  useEffect(() => {
    if (!showSidebar) {
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
          className="fixed top-0 right-0 w-[460px] bg-white z-50 p-4 shadow-lg"
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
              <AddCustomerDetails setShowSidebar={setShowSidebar} />
            )}
            {(contentType === "add-new-customer" || addingNewCustomer) && (
              <AddNewCustomer setShowSidebar={setShowSidebar} />
            )}
            {contentType === "add-notes" && !addingNewCustomer && (
              <AddNotes setShowSidebar={setShowSidebar} />
            )}
          </div>

          <div
            style={{
              borderTop: "1px solid #E5E7EB",
              padding: "16px 0",
              position: "sticky",
              bottom: "0",
              background: "white",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {contentType === "add-variant" && (
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded cursor-pointer">
                Add Variant{" "}
              </button>
            )}

            {contentType === "edit-variant" && (
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded cursor-pointer">
                Edit Variant{" "}
              </button>
            )}
            {contentType === "edit-product-variant" && (
              <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
                Save{" "}
              </button>
            )}
            {contentType === "add-product" && (
              <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
                Add Products{" "}
              </button>
            )}

            {contentType === "add-customer-details" && !addingNewCustomer && (
              <button
                style={{
                  borderRadius: "6px",
                  border: "1px dashed #7A91FF",
                  fontSize: "14px",
                  color: "#7A91FF",
                  backgroundColor: "#ffffff",
                }}
                className="px-7 py-2.5 rounded cursor-pointer mr-4"
                onClick={handleAddNewCustomer}
              >
                Add New Customer{" "}
              </button>
            )}
            {contentType === "add-customer-details" && !addingNewCustomer && (
              <button className="bg-blue-600 text-white px-8 py-2.5 rounded cursor-pointer">
                Select{" "}
              </button>
            )}

            {(contentType === "add-new-customer" || addingNewCustomer) && (
              <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
                Add Customer{" "}
              </button>
            )}

            {contentType === "add-notes" && (
              <button className="bg-blue-600 text-white px-7 py-2.5 rounded cursor-pointer">
                Save{" "}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
