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
      // marginRight: 4,
      height: 20,
      width: 30,
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
      padding: "6px 10px", // py-2.5 px-4
      cursor: "pointer",
      borderRadius: "0.375rem", // rounded-lg
      backgroundColor: "white", // md:bg-white
      border: "1.5px solid gainsboro", // border-[1.5px] border-solid border-gainsboro
      color: "var(--textcolor-placeholder-color-400)", // text-textcolor-placeholder-color-400
      fontFamily: "Roboto, sans-serif", // font-roboto
      gap: "20px", // gap-[20px]
      width: "100%",
      maxHeight: "46px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#CBD5E0" : "white",
      color: state.isSelected ? "black" : "inherit",
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
    }),

    // Additional styles for the custom option component
    customOption: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    countryImage: {
      width: "24px", // Adjust size as needed
      height: "24px", // Adjust size as needed
    },
    input: (provided) => ({ ...provided, ...flag(value?.image) }), // Replace with actual flag image path
    placeholder: (provided) => ({ ...provided, ...flag(value?.image) }), // Replace with actual flag placeholder image path
    singleValue: (provided, { data }) => ({
      ...provided,
      ...flag(data.flagImageUrl),
    }),
  };

  const CustomOption = ({ innerProps, label, data }) => (
    <div
      {...innerProps}
      className="flex items-center gap-8 h-12 justify-between "
    >
      <div className="flex-raw flex ">
        <img src={data.image} alt={label} className="w-6 h-6 pl-2 " />
        <div className="justify-center items-center flex pl-4 font-roboto text-[#8E8E8E]">
          {label}
        </div>
      </div>
      <div
        style={{ marginRight: "30px" }}
        className="m-2 font-roboto w-12 text-center m"
      >
        <p className="p-2 rounded-sm text-sm bg-[#F6F7FF] w-full text-[#4162FF] font-medium">
          {data.cur}
        </p>
      </div>
    </div>
  );
  return (
    <Select
      //   className="self-stretch rounded-lg md:bg-white flex flex-row py-2.5 px-4 items-center justify-start gap-[20px] cursor-pointer text-textcolor-placeholder-color-400 font-roboto border-[1.5px] border-solid  border-gainsboro"
      value={value}
      onChange={handleChange}
      options={options}
      isSearchable
      placeholder="Select a country..."
      styles={customStyles}
      components={{
        Option: CustomOption,
      }}
    />
  );
};

export default CountrySelect;
