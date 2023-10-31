import React from "react";
import Select from "react-select";

const tags = [
  "Electronics",
  "Fashion",
  "Home Appliance",
  "Toys",
  "Beauty",
  // Add more product tags as needed
];

const selectOptions = tags.map((tag) => ({
  value: tag,
  label: tag,
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

const TagSelect = ({ onChange, value }) => (
  <Select
    options={selectOptions}
    styles={customStyles}
    isSearchable={true}
    onChange={onChange}
    value={value}
    placeholder="tag"
  />
);

export default TagSelect;
