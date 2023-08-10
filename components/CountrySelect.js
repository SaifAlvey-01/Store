import React from 'react';
import Select from 'react-select';

const CountrySelect = ({ value, onChange, options }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0.625rem 1rem', // py-2.5 px-4
      cursor: 'pointer',
      borderRadius: '0.375rem', // rounded-lg
      backgroundColor: 'white', // md:bg-white
      border: '1.5px solid gainsboro', // border-[1.5px] border-solid border-gainsboro
      color: 'var(--textcolor-placeholder-color-400)', // text-textcolor-placeholder-color-400
      fontFamily: 'Roboto, sans-serif', // font-roboto
      gap: '20px', // gap-[20px]
      width:"100%"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#CBD5E0' : 'white',
      color: state.isSelected ? 'black' : 'inherit',
    }),
  
    // Additional styles for the custom option component
    customOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    countryImage: {
      width: '24px', // Adjust size as needed
      height: '24px', // Adjust size as needed
    },
  };

  

  return (
    <Select
    //   className="self-stretch rounded-lg md:bg-white flex flex-row py-2.5 px-4 items-center justify-start gap-[20px] cursor-pointer text-textcolor-placeholder-color-400 font-roboto border-[1.5px] border-solid  border-gainsboro"
      value={value}
      onChange={handleChange}
      options={options}
      isSearchable
      placeholder="Select a country..."
      styles={customStyles}
      
    />
  );
};

export default CountrySelect;
