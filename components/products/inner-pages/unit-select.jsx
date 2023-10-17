import React from "react";
import Select from "react-select";

const units = [
  "piece",
  "kg",
  "gm",
  "ml",
  "liter",
  "mm",
  "ft",
  "meter",
  "sq.ft",
  "sq. meter",
  "km",
  "set",
  "hour",
  "day",
  "bunch",
  "bundle",
  "month",
  "year",
  "service",
  "work",
  "packet",
  "box",
  "pound",
  "dozen",
  "gunta",
  "pair",
  "minute",
  "quintal",
  "ton",
  "capsule",
  "tablet",
  "plate",
  "inch",
  "ounce",
  "bottle",
  "night",
];

const selectOptions = units.map((unit) => ({
  value: unit,
  label: unit,
}));

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: "100%",
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    width: "100px",
    color: "#4B5563",
    fontSize: "13px",
  }),
  option: (provided) => ({
    ...provided,
    color: "#4B4B4B",
    fontWeight: "500",
    fontSize: "14px",
  }),
  input: (provided) => ({
    ...provided,
    color: "#4B5563",
    fontSize: "12px",
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

const UnitSelect = ({ onChange, value }) => (
  <Select
    options={selectOptions}
    styles={customStyles}
    isSearchable={true}
    onChange={onChange}
    value={value}
    menuPlacement="top"
    placeholder="unit" // This sets the placeholder text
  />
);

export default UnitSelect;
