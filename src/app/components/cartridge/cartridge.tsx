import React from 'react';
import './cartridge.scss';

interface CartridgeProps {
  image?: string;
}

const Cartridge: React.FC<CartridgeProps> = ({ image }) => {
  return (
    <div className="cartridge">
      <div className="top">
        <img src={image ?? 'img/empty.png'} />
      </div>
      <div className="bottom"></div>
      <div className="back"></div>
      <div className="front">
        <img src={image ?? 'img/empty.png'} />
      </div>
    </div>
  );
};

export default Cartridge;
