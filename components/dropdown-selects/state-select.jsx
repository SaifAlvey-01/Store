import React from "react";
import Select from "react-select";

const conditions = ["Less than", "Greater than", "Equal to", "Is between"];

const selectOptions = conditions.map((condition) => ({
  value: condition,
  label: condition,
}));

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
    cursor: "pointer",
    fontSize: "14px",
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

const StateSelect = ({ onChange, value }) => (
  <div className="p-2">
    {" "}
    <span
      className="font-freesans"
      style={{
        color: "#4B4B4B",
        fontWeight: 500,
        fontSize: "13px",
      }}
    >
      State{" "}
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
      options={selectOptions}
      styles={customStyles}
      isSearchable={true}
      onChange={onChange}
      value={value}
      placeholder="Select State"
      // menuPlacement="top"
    />
  </div>
);

export default StateSelect;
