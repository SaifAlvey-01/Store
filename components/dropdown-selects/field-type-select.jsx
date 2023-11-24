import React from "react";
import Select from "react-select";

const fieldType = [
  {
    value: "textField",
    label: "Text Field",
    description:
      "Additional requirements, cooking instructions, landmark, etc.",
  },
  {
    value: "email",
    label: "Email",
    description: "Ticket, Invoices, Digital Services, etc.",
  },
  {
    value: "datePicker",
    label: "Date Picker",
    description: "Appointments, scheduling, state date, end date etc.",
  },
  {
    value: "timePicker",
    label: "Time Picker",
    description: "Delivery time, appointments, start time, end time, etc.",
  },
  {
    value: "imageUploader",
    label: "Image Uploader",
    description: "Medical prescriptions, images, screenshots, etc.",
  },
  {
    value: "customDropdown",
    label: "Custom Dropdown",
    description: "For adding multiple options regarding delivery, order, etc.",
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
    width: "100%",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "12px",
    border: "1px solid #EDEDED",
    background: "#FFF",
    boxShadow: "-1px 4px 4px 0px rgba(28, 28, 75, 0.08)",
  }),
};

const FieldTypeSelect = ({ onChange, value }) => {
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
        Field Type{" "}
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
        options={fieldType}
        styles={customStyles}
        isSearchable={true}
        onChange={onChange}
        value={value}
        placeholder="Choose Field Type"
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default FieldTypeSelect;
