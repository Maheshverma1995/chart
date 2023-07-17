import React, { useState } from 'react';

const DropdownLink = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Set the path instead of navigating to the selected link
    window.location.pathname = selectedValue;
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="one">One</option>
        <option value="Two">Two</option>
        <option value="three">Three</option>
      </select>
    </div>
  );
};

export default DropdownLink;
