import React, { useState } from "react";
import "./styles/SponsorCard.css";

export function SponsorCard({ frontImage, backText, link }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flipping-card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleCardFlip}
      onMouseLeave={handleCardFlip}
    >
      <div className="card-front">
        <img src={frontImage} alt="Front" />
      </div>
      <div className="card-back">
        <h2>{backText}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Go to Link
        </a>
      </div>
    </div>
  );
}
