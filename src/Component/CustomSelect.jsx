import React, { useState } from 'react';

const CustomSelect = ({ options, onSelect, pSelectTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (value, label) => {
    setSelectedOption(label);
    onSelect(value);
    setIsOpen(false);
  };

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-select">
      <div className={`select-box ${isOpen ? 'open' : ''}`} onClick={toggleSelect}>
        {selectedOption || pSelectTitle}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value, option.label)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


CustomSelect.defaultProps = {
    pSelectTitle: '',
}
export default CustomSelect;
