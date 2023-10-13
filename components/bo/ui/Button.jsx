import React from 'react';

import '../../../asset/bo/component-css/button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = (props) => {
  const size = props.size;
  const label = props.label;

  return (
    <button type="button" className={`storybook-button--${size || 'small'}`}>
      {label}
    </button>
  );
};
