import React from "react";
import '../App.css';

import inr from "/inr.png";
import usd from "/e.png";
import eur from "/er.png";


function FallingDivs() {
  const images = [inr, usd, eur];
  const items = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none ">
      {items.map((_, i) => {
        const randomImage =
          images[Math.floor(Math.random() * images.length)];

        return (
          <img
            key={i}
            src={randomImage}
            alt="falling"
            className="absolute animate-fall opacity-20 rounded-full"
            style={{
              width: `${40 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default FallingDivs;