import React, { useState } from 'react';
import '../css/test.css';


function App() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const sensitivity = 1;

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
    setTouchStartY(event.touches[0].clientY);
  }

  const handleTouchMove = (event) => {
    if (touchStartX === 0 && touchStartY === 0) {
      return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    setRotationAngle(rotationAngle + deltaX * sensitivity);

    setTouchStartX(touchEndX);
    setTouchStartY(touchEndY);
  }

  const handleTouchEnd = (event) => {
    const finalRotation = Math.round(rotationAngle / 90) * 90;
    setRotationAngle(finalRotation);

    if (finalRotation % 180 !== 0) {
      setRotationAngle(finalRotation + 90);
    }

    setTimeout(() => {
      setIsRotating(false);
      setShowButtons(true);
    }, 500);
  }

  const flipCard = (face) => {
    if (!isRotating) {
      setIsRotating(true);

      if (face === 'back') {
        setRotationAngle(rotationAngle + 180);
      } else if (face === 'front') {
        setRotationAngle(rotationAngle + 180);
      }

      setShowButtons(false);
    }
  }

  return (
    <div className="card-container" id="cardContainer"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="card" id="card" style={{ transform: `rotateY(${rotationAngle}deg)`, transition: 'transform 0.5s ease' }}>
        <div className="card-face front">
          <button className={`flip-button ${showButtons ? '' : 'hide'}`} onClick={() => flipCard('back')}>뒤로 뒤집기</button>
        </div>
        <div className="card-face back">
          <button className={`flip-button ${showButtons ? '' : 'hide'}`} onClick={() => flipCard('front')}>앞으로 뒤집기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
