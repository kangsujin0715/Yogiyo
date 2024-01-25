import React, { useState } from 'react';
import '../css/toastStyle.css';

const Toast = () => {
  const [isToastShown, setIsToastShown] = useState(false);

  const showToast = () => {
    if (isToastShown) return;
    setIsToastShown(true);

    setTimeout(() => {
      setIsToastShown(false);
    }, 2700);
  };

  return (
    <div>
        <button onClick={showToast}>Toast Button</button>
        <div className={`toast ${isToastShown ? 'show' : ''}`}>
            <span>Toast Message</span>
        </div>
    </div>
  );
};

export default Toast;