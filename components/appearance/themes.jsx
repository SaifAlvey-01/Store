import React from "react";
import FreeTrialFooter from "../free-trial-footer";

export default function Themes() {
  const cardsData = [
    { imgSrc: "/1.png", title: "Amaze" },
    { imgSrc: "/2.png", title: "Hawaii" },
    { imgSrc: "/3.png", title: "Tinker" },
    { imgSrc: "/3.png", title: "Ursa" },
    { imgSrc: "/2.png", title: "Amaze" },
    { imgSrc: "/1.png", title: "Hawaii" },
    { imgSrc: "/2.png", title: "Tinker" },
    { imgSrc: "/1.png", title: "Ursa" },
    { imgSrc: "/3.png", title: "Amaze" },
    { imgSrc: "/3.png", title: "Hawaii" },
    { imgSrc: "/1.png", title: "Tinker" },
    { imgSrc: "/2.png", title: "Ursa" },

    //... Add more objects here for other cards
  ];
  return (
    <div
      className="h-auto p-6  "
      style={{
        backgroundColor: "var(--white-color, #FFF)",
        borderRadius: "10px",
        boxShadow: `#00000011 0px 2px 4px 2px`,
        marginBottom: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Content */}
        <div>
          <h2 className="mb-3 mt-0">Live Theme</h2>
          <p
            style={{
              color: "#8E8E8E",
              fontWeight: "normal",
              fontSize: "16px",
              margin: 0,
              width: "100%",
              maxWidth: "370px",
            }}
          >
            This is the theme customers see when they visit your store.
          </p>
          <button
            className="mt-10 cursor-pointer"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 24px",
              borderRadius: "4px",
            }}
          >
            Change Theme
          </button>
        </div>

        {/* Right Content */}
        <div style={{ position: "relative", width: "370px" }}>
          <img
            src={"/1.png"}
            style={{
              width: "370px",
              height: "300px",
              boxShadow: `#00000011 0px 2px 4px 2px`,
              borderRadius: "10px",
              overflow: "hidden",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: -1,
              height: "18%",
              width: "344px",
              backgroundColor: "#1F1D2B",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 14px",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <span style={{ color: "white", fontSize: "14px" }}>
              Active: Oxford
            </span>
            <button
              className="cursor-pointer"
              style={{
                backgroundColor: "#FF5353",
                color: "#ffffff",
                padding: "8px 22px",
                borderRadius: "4px",
              }}
            >
              Customize
            </button>
          </div>
        </div>
      </div>

      <hr className="my-10 h-0.5 border-t-0 bg-gray-300 dark:opacity-50" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px", // Adjust for spacing between cards
          overflowY: "auto",
          maxHeight: "660px", // Adjust height if needed
          padding: "16px 0", // Some vertical padding for aesthetic reasons
        }}
      >
        {cardsData.map((item, index) => (
          <div key={index} style={{ position: "relative", width: "250px" }}>
            <img
              src={item.imgSrc}
              style={{
                width: "260px",
                height: "220px",
                boxShadow: `#00000011 0px 2px 4px 2px`,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "19%",
                width: "244px",
                backgroundColor: "#FAFAFA",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 8px",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                border: "1px solid #E1E1E1",
              }}
            >
              <span
                style={{
                  color: "#4B4B4B",
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "Roboto",
                }}
              >
                {item.title}
              </span>

              <div>
                <button
                  className="cursor-pointer"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#8E8E8E",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    border: "1px solid #8E8E8E",
                    marginRight: 6,
                  }}
                >
                  Preview
                </button>
                <button
                  className="cursor-pointer"
                  style={{
                    backgroundColor: "#4162FF",
                    color: "#ffffff",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    border: "1px solid #4162FF",
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[90%] mx-6 my-8 flex flex-col items-center justify-between">
        <FreeTrialFooter />
      </div>
    </div>
  );
}
