'use client';
import React from 'react';
import './cartridge.scss';

interface CartridgeProps {
  image?: string;
  link?: string;
}

const Cartridge: React.FC<CartridgeProps> = ({ image, link }) => {
  const handleClick = () => {
    const element = document.getElementById(link ?? '');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a className="cartridge" onClick={handleClick}>
      <div className="top">
        <img src={image ?? 'img/empty.png'} />
      </div>
      <div className="bottom"></div>
      <div className="back"></div>
      <div className="front">
        <img src={image ?? 'img/empty.png'} />
      </div>
    </a>
  );
};

export default Cartridge;
