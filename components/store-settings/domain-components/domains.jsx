import React from "react";

export default function Domains() {
  const data = [
    {
      domain: {
        name: "https://launchmystore.io/ahmedakram",
        description1: "Provided By",
        description2: "LaunchMyStore",
      },
      status: "Live",
      dateAdded: "Sep 18, 2023",
    },
  ];

  return (
    <div
      className="ml-3 w-[65%] h-auto text-blue-600 p-4"
      style={{
        borderRadius: "10px",
        backgroundColor: "var(--white-color, #FFF)",
        border: "1px solid #e3e3e3",
      }}
    >
      <div className="flex flex-row items-center">
        <h3
          className="m-0 mr-4"
          style={{
            color: "#4B4B4B",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Domains
        </h3>

        <div className="flex flex-row items-center">
          {" "}
          <img
            style={{
              color: "#8E8E8E",
            }}
            src={"/question-circle.png"}
            className="mr-1 w-4 h-4"
          />
          <span
            style={{
              color: "#8E8E8E",
              fontSize: "12px",
            }}
          >
            {" "}
            How it works{" "}
          </span>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #EAECF0",
          padding: "14px",
          borderRadius: "8px",
        }}
        className="mt-6"
      >
        {" "}
        <span
          className="font-freesans"
          style={{
            color: "#4B4B4B",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Launch my Store Managed Domain{" "}
        </span>
        <div className="flex justify-between items-center mt-6">
          <table className="min-w-full divide-y divide-gray-200 font-freesans">
            <thead>
              <tr>
                <th
                  className="py-3 px-4 bg-f9fafb text-left font-freesans"
                  style={{
                    borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    backgroundColor: "#F9FAFB",
                    color: "#1D2939",
                    fontSize: "12px",
                  }}
                >
                  Domain Name & Provider
                </th>
                <th
                  className="py-3 px-4 bg-f9fafb text-left"
                  style={{
                    borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    backgroundColor: "#F9FAFB",
                    color: "#1D2939",
                    fontSize: "12px",
                  }}
                >
                  Status
                </th>
                <th
                  className="py-3 px-4 bg-f9fafb text-left"
                  style={{
                    borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    backgroundColor: "#F9FAFB",
                    color: "#1D2939",
                    fontSize: "12px",
                  }}
                >
                  Date Added
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index}>
                  <td
                    className="flex flex-col py-4 px-4"
                    style={{
                      borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    }}
                  >
                    <span
                      style={{
                        color: "#4162FF",
                        fontSize: "12px",
                        marginBottom: 8,
                      }}
                    >
                      {row.domain.name}
                    </span>

                    <div className="flex">
                      <span
                        style={{
                          color: "#8E8E8E",
                          fontSize: "12px",
                          marginRight: 4,
                        }}
                      >
                        {row.domain.description1}:
                      </span>
                      <span
                        style={{
                          color: "#4B4B4B",
                          fontSize: "12px",
                        }}
                      >
                        {row.domain.description2}
                      </span>
                    </div>
                  </td>
                  <td
                    className="py-4 px-4"
                    style={{
                      borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    }}
                  >
                    <div
                      className="px-2 py-1 w-[26%]"
                      style={{ borderRadius: "16px", background: "#ECFDF3" }}
                    >
                      <img
                        style={{
                          color: "#8E8E8E",
                        }}
                        src={"/dot.png"}
                        className="mr-1 w-2 h-2"
                      />

                      <span
                        style={{
                          color: "#47B263",
                          fontSize: "12px",
                        }}
                      >
                        {row.status}
                      </span>
                    </div>
                  </td>
                  <td
                    className="py-4 px-4"
                    style={{
                      borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    }}
                  >
                    <span
                      style={{
                        color: "#8E8E8E",
                        fontSize: "12px",
                      }}
                    >
                      {row.dateAdded}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #EAECF0",
          padding: "16px 14px",
          borderRadius: "8px",
        }}
        className="mt-6"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {" "}
            <div className="flex flex-col ">
              {" "}
              <span
                className="mb-2"
                style={{ color: "#4B4B4B", fontSize: "14px" }}
              >
                Find your perfect domain{" "}
              </span>
              <p style={{ color: "#8E8E8E", fontSize: "12px" }} className="m-0">
                Search for the domain name best suited for your brand.{" "}
              </p>
            </div>
          </div>

          <button
            className="cursor-pointer whitespace-nowrap"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 18px",
              borderRadius: "4px",
            }}
          >
            Set Up{" "}
          </button>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #EAECF0",
          padding: "16px 14px",
          borderRadius: "8px",
        }}
        className="mt-6"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {" "}
            <div className="flex flex-col ">
              {" "}
              <span
                className="mb-2"
                style={{ color: "#4B4B4B", fontSize: "14px" }}
              >
                Already have a domain?{" "}
              </span>
              <p style={{ color: "#8E8E8E", fontSize: "12px" }} className="m-0">
                You can connect your existing domain to Dukaan in a few minutes.{" "}
              </p>
            </div>
          </div>

          <button
            className="cursor-pointer whitespace-nowrap"
            style={{
              backgroundColor: "#4162FF",
              color: "#ffffff",
              padding: "10px 14px",
              borderRadius: "4px",
            }}
          >
            Connect{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
