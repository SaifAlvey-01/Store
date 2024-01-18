import React from "react";
import Select from "react-select";

const roles = [
  {
    value: "admin",
    label: "Admin",
    description: "Can access all the features of your dashboard.",
  },
  {
    value: "manager",
    label: "Manager - Store",
    description:
      "Can access all the features of your store dashboard expect payouts, Account & Report.",
  },
  {
    value: "staff",
    label: "Staff - Store",
    description:
      "Can access only the order & delivery features of your store dashboard.",
  },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
    color: "#4B5563",
    fontSize: "13px",
    border: "1.5px solid #E5E7EB",
    borderRadius: "10px",
    cursor: "pointer",
  }),
  option: (provided) => ({
    ...provided,
    color: "#4B4B4B",
    fontWeight: "400",
    fontSize: "14px",
    cursor: "pointer",
  }),
  input: (provided) => ({
    ...provided,
    color: "#4B5563",
    fontSize: "12px",
    fontWeight: "400",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#CACACA",
    fontSize: "14px",
    paddingLeft: "10px",
    width: "100px",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "12px",
    border: "1px solid #EDEDED",
    background: "#FFF",
    boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
  }),
};

const RoleSelect = ({ onChange, value }) => {
  const formatOptionLabel = ({ label, description }) => (
    <div className="flex flex-col mx-4">
      <div className="text-[#4B4B4B] font-[600] text-[14px] mb-2">{label}</div>
      <div className="text-[#8E8E8E] font-[500] text-[13px]">{description}</div>
    </div>
  );

  return (
    <div className="px-0.5">
      <span
        className="font-freesans"
        style={{
          color: "#4B4B4B",
          fontWeight: 500,
          fontSize: "13px",
        }}
      >
        Role{" "}
        <span
          style={{
            color: "#FF3A3A",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          *
        </span>
      </span>
      <Select
        className="mt-1"
        options={roles}
        styles={customStyles}
        isSearchable={true}
        onChange={onChange}
        value={value}
        placeholder="Select State"
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default RoleSelect;
