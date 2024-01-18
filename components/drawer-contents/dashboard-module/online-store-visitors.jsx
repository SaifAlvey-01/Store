import React, { useEffect } from "react";

const headers = [{ title: "Date" }, { title: "Views" }, { title: "Changes" }];

const data = [
  {
    date: "Today",
    views: "03",
    changes: "Nil",
  },
  {
    date: "Yesterday",
    views: "01",
    changes: "100%",
  },
  {
    date: "Jul 24, 2023",
    views: "01",
    changes: "Nil",
  },
  {
    date: "Jul 24, 2023",
    views: "01",
    changes: "Nil",
  },
  {
    date: "Jul 24, 2023",
    views: "01",
    changes: "Nil",
  },
  {
    date: "Jul 24, 2023",
    views: "05",
    changes: "66%",
  },
  {
    date: "Jul 24, 2023",
    views: "01",
    changes: "Nil",
  },
  {
    date: "Jul 24, 2023",
    views: "01",
    changes: "Nil",
  },
  {
    date: "Jul 24, 2023",
    views: "01",
    changes: "Nil",
  },
];

export default function OnlineStoreVisitors({ setShowSidebar }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Online Store Visitors{" "}
          </h3>
        </div>

        <div
          className="px-3 py-2 box-border mt-2"
          style={{
            borderRadius: "12px",
            backgroundColor: "#FFF",
            border: "1px solid #EAECF0",
          }}
        >
          <div className="flex justify-between items-center">
            <div className="self-stretch font-freesans flex flex-row items-start justify-start">
              <h3
                style={{ color: "#4B4B4B", fontWeight: 500, fontSize: "15px" }}
              >
                Total Store View{" "}
              </h3>
            </div>

            <div className="flex flex-row">
              <button
                style={{
                  borderRadius: "8px",
                  fontSize: "22px",
                  color: "#8E8E8E",
                  backgroundColor: "#FAFAFA",
                  fontWeight: 500,
                }}
                className="flex items-center px-6 py-1.5 "
              >
                16{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-1 overflow-y-auto pb-[80px]"
        style={{ overflowY: "scroll" }}
      >
        <div className="flex justify-between items-center mt-6">
          <table
            className="w-full font-freesans"
            style={{
              borderRadius: "8px",
              borderCollapse: "separate",
            }}
          >
            <thead>
              <tr>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="py-3 px-4 bg-f9fafb text-start font-freesans "
                    style={{
                      borderBottom: "1px solid #EAECF0",
                      backgroundColor: "#F9FAFB",
                      color: "#1D2939",
                      fontSize: "12px",
                    }}
                  >
                    <div className="flex flex-row items-center">
                      {header.title}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((storeVisitor, index) => (
                <tr key={index}>
                  <td
                    style={{ borderBottom: "1px solid #EAECF0" }}
                    className="items-center px-3 py-5 w-full flex flex-row"
                  >
                    <span
                      className="font-freesans"
                      style={{
                        color: "#8E8E8E",
                        fontSize: "13px",
                        fontWeight: 400,
                      }}
                    >
                      {storeVisitor.date}
                    </span>
                  </td>
                  <td
                    className="px-6 py-4 w-[26%] "
                    style={{
                      borderBottom: "1px solid #EAECF0",
                    }}
                  >
                    <span
                      className="font-freesans "
                      style={{
                        color: "#8E8E8E",
                        fontSize: "13px",
                        fontWeight: 400,
                      }}
                    >
                      {storeVisitor.views}
                    </span>
                  </td>
                  <td
                    className="px-6 py-4 w-[26%]"
                    style={{
                      borderBottom: "1px solid #EAECF0",
                    }}
                  >
                    {storeVisitor.changes === "Nil" && (
                      <span
                        className="font-freesans"
                        style={{
                          color: "#8E8E8E",
                          fontSize: "13px",
                          fontWeight: 400,
                        }}
                      >
                        {storeVisitor.changes}
                      </span>
                    )}
                    {storeVisitor.changes === "100%" && (
                      <div className="flex flex-row items-center">
                        <img src={"/fold-up.png"} className="mr-1.5 w-3 h-3" />

                        <h3
                          className="my-0"
                          style={{
                            color: "#00CD08",
                            fontWeight: 400,
                            fontSize: "13px",
                          }}
                        >
                          {storeVisitor.changes}
                        </h3>
                      </div>
                    )}

                    {parseInt(storeVisitor.changes) < 100 && (
                      <div className="flex flex-row items-center">
                        <img
                          src={"/fold-down.png"}
                          className="mr-1.5 w-3 h-3"
                        />

                        <h3
                          className="my-0"
                          style={{
                            color: "#FF5353",
                            fontWeight: 400,
                            fontSize: "13px",
                          }}
                        >
                          {storeVisitor.changes}
                        </h3>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button
        className="bg-blue-600 text-[#7A91FF] px-8 py-2.5 rounded cursor-pointer w-full mb-8"
        style={{
          position: "sticky",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px dashed #7A91FF",
        }}
      >
        Download Report{" "}
      </button>

      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          padding: "16px 0",
          position: "sticky",
          bottom: 16,
          background: "white",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="bg-blue-600 text-white px-8 py-2.5 rounded cursor-pointer"
        >
          Close{" "}
        </button>
      </div>
    </div>
  );
}
