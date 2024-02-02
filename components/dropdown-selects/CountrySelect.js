import React from "react";
import Select from "react-select";

const CountrySelect = ({ value, onChange, options }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  const flag = (imageUrl) => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      content: `" "`,
      display: "block",
      height: 20,
      width: 26,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
  });

  const customStyles = {
    control: (provided) => ({
      ...provided,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: "6px 8px",
      cursor: "pointer",
      borderRadius: "0.375rem",
      backgroundColor: "white",
      border: "1.5px solid gainsboro",
      color: "var(--textcolor-placeholder-color-400)",
      fontFamily: "Roboto, sans-serif",
      gap: "20px",
      width: "100%",
      maxHeight: "46px",
      cursor: "pointer",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#CBD5E0" : "white",
      color: state.isSelected ? "black" : "inherit",
      cursor: "pointer",
    }),

    menu: (provided) => ({
      ...provided,
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
      border: "1px solid rgb(229 231 235 / var(--tw-border-opacity)) ",
      margin: "6px 0px",
      borderRadius: "6px",
      overflow: "hidden",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: 170,
      overflowY: "scroll",
      overflowX: "hidden",
      cursor: "pointer",
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      padding: "0px",
    }),

    customOption: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    countryImage: {
      width: "24px",
      height: "24px",
    },
    input: (provided) => ({ ...provided, ...flag(value?.image) }),
    placeholder: (provided) => ({ ...provided, ...flag(value?.image) }),
    singleValue: (provided, { data }) => ({
      ...provided,
      ...flag(data.flagImageUrl),
    }),
  };
  const NoOptionsMessage = () => {
    return (
      <div className="flex justify-center text-center items-center p-2">
        Countries Will Be Added Soon.
      </div>
    );
  };
  const CustomOption = ({ innerProps, label, data }) => (
    <div
      {...innerProps}
      className="flex items-center gap-8 h-12 justify-between "
    >
      <div className="flex-raw flex ">
        <img src={data.image} alt={label} className="w-6 h-6 pl-2 " />
<<<<<<< HEAD
        <div className="justify-center items-center flex pl-4  font-roboto text-[#8E8E8E]">
=======
        <div className="justify-center items-center flex pl-4 font-roboto text-[#8E8E8E]">
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
          {label}
        </div>
      </div>
      <div
        style={{ marginRight: "30px" }}
<<<<<<< HEAD
        className="m-2 font-roboto w-12 text-center border-2 border-solid m"
=======
        className="m-2 font-roboto w-12 text-center m"
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
      >
        <p className="p-2 rounded-sm text-sm bg-[#F6F7FF] w-full text-[#4162FF] font-medium">
          {data.cur}
        </p>
      </div>
    </div>
  );
  return (
    <Select
      value={value}
      onChange={handleChange}
      options={options}
      isSearchable
      placeholder="Select a country..."
      styles={customStyles}
      components={{
        Option: CustomOption,
        NoOptionsMessage,
      }}
    />
  );
};

export default CountrySelect;
