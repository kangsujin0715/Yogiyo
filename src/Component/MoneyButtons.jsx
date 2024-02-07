import React from 'react';

const MoneyButtons = ({ onButtonClick, moneyTabList }) => {
  return (
    <div>
      {moneyTabList.map((moneyItem, index) => (
        <button key={index} onClick={() => onButtonClick(moneyItem.price)}>
          {moneyItem.price}
        </button>
      ))}
    </div>
  );
};

export default MoneyButtons;