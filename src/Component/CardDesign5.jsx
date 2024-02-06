import React, { useEffect, useState } from 'react';
import '../css/index5.css';

const CardViewer = () => {
  const [isAutoSpinning, setAutoSpinning] = useState(true);

  useEffect(() => {
    const card = document.querySelector('.card');
    let resumeTimeoutId;

    // Function to rotate the card
    const rotate = ({ y = 0 } = {}) => {
      card.style.transform = `rotateY(${y}deg)`;
    };

    // Function to resume auto-spin
    const resumeSpin = () => {
      clearTimeout(resumeTimeoutId);
      card.style.transition = 'transform 0.5s ease-in-out';
      card.style.transform = 'translateY(0)';
      resumeTimeoutId = setTimeout(() => {
        card.style.transition = '';
        setAutoSpinning(true);
      }, 500);
    };

    // Function to handle cursor movement
    const handleCursorMove = (e) => {
      clearTimeout(resumeTimeoutId);
      setAutoSpinning(false);

      const cursor = e.touches ? e.touches[0] : e;
      const rect = card.getBoundingClientRect();
      const xPercent = Math.abs(rect.x - cursor.clientX) / rect.width * 100;

      let y = 0;
      if (e.touches) {
        y = (xPercent - 50) * 4;
      } else {
        y = -(xPercent - 50) * 6;
      }

      card.classList.remove('card--autospin');
      rotate({ y });

      if (!e.touches) {
        resumeTimeoutId = setTimeout(resumeSpin, 1500);
      }
    };

    // Function to handle cursor leave
    const handleCursorLeave = () => {
      clearTimeout(resumeTimeoutId);
      resumeTimeoutId = setTimeout(resumeSpin, 500);
    };

    // Event listeners
    document.documentElement.addEventListener('mousemove', handleCursorMove);
    document.documentElement.addEventListener('touchmove', handleCursorMove);
    document.documentElement.addEventListener('mouseleave', handleCursorLeave);
    document.documentElement.addEventListener('touchend', handleCursorLeave);

    // Clean-up on component unmount
    return () => {
      clearTimeout(resumeTimeoutId);
      document.documentElement.removeEventListener('mousemove', handleCursorMove);
      document.documentElement.removeEventListener('touchmove', handleCursorMove);
      document.documentElement.removeEventListener('mouseleave', handleCursorLeave);
      document.documentElement.removeEventListener('touchend', handleCursorLeave);
    };
  }, []); // useEffect runs once on component mount

  return (
    <div className="viewer">
      <div className={`card ${isAutoSpinning ? 'card--autospin' : ''}`}>
        <div className="card-front">
          <h3 className="txt">앞</h3>
        </div>
        <div className="card-back">
          <h3 className="txt">뒤</h3>
        </div>
      </div>
    </div>
  );
};

export default CardViewer;