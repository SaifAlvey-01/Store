import React from "react";

export default function Plans({ setShowUpgradePlan }) {
  const data = [
    {
      plan: { title: "Silver", description: "Billed Quarterly" },
      date: "Jul 31, 2023",
      charges: "₹1,999",
    },
    {
      plan: { title: "Silver", description: "Billed Quarterly" },
      date: "Jul 31, 2023",
      charges: "₹500",
    },
    {
      plan: { title: "Silver", description: "Billed Quarterly" },
      date: "Jul 31, 2023",
      charges: "₹500",
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
      <div className="flex justify-between items-center">
        <h3
          className="m-0"
          style={{
            color: "#4B4B4B",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Plans
        </h3>
      </div>

      <div
        style={{
          border: "1px solid #EAECF0",
          padding: "14px",
          borderRadius: "8px",
        }}
        className="mt-4"
      >
        <div>
          <div className="font-freesans flex flex-col items-start justify-start">
            <span
              className="font-freesans mb-2"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Plan Details
            </span>
            <span
              className="m-0 font-freesans"
              style={{
                color: "#8E8E8E",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              You are currently on Gold plan with Quarterly billing.
            </span>
          </div>
        </div>

        {/* New div for span and button */}
        <div className="flex justify-between items-center mt-6">
          <span
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Your plan will renew on 17 Oct 2023{" "}
          </span>
          <button
            // onClick={() => setShowUpgradePlan(true)}
            style={{
              backgroundColor: "#FF5353",
              color: "white",
              padding: "10px 18px",
              borderRadius: "4px",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Upgrade Plan{" "}
          </button>
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
        <div>
          <div className="font-freesans flex flex-col items-start justify-start">
            <span
              className="font-freesans mb-2"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Plan History{" "}
            </span>
            <span
              className="m-0 font-freesans"
              style={{
                color: "#8E8E8E",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              Here are your previous plan history.{" "}
            </span>
          </div>
        </div>

        {/* New div for span and button */}
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
                  Plan
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
                  Date
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
                  Charges
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={index}>
                  <td
                    className="flex flex-col py-3 px-4"
                    style={{
                      borderBottom: "1px solid var(--gray-200, #EAECF0)",
                    }}
                  >
                    <span
                      style={{
                        color: "#4B4B4B",
                        fontSize: "12px",
                        marginBottom: 6,
                      }}
                    >
                      {" "}
                      {row.plan.title}
                    </span>
                    <span
                      style={{
                        color: "#8E8E8E",
                        fontSize: "12px",
                      }}
                    >
                      {row.plan.description}
                    </span>
                  </td>
                  <td
                    className="py-3 px-4"
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
                      {" "}
                      {row.date}
                    </span>{" "}
                  </td>
                  <td
                    className="py-3 px-4"
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
                      {" "}
                      {row.charges}
                    </span>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
