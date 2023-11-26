import React from 'react';
import './cartridge.scss';

interface CartridgeProps {
  frontImage: string;
  topImage: string;
}

const Cartridge: React.FC<CartridgeProps> = ({ frontImage, topImage }) => {
  return (
    <div className="cartridge">
      <div className="top">
        <img src="https://musingsofamariominion.files.wordpress.com/2016/05/118124213847.jpg?w=604" />
      </div>
      <div className="bottom"></div>
      <div className="back"></div>
      <div className="front">
        <img src="https://upload.wikimedia.org/wikipedia/en/c/c7/Missile_Command_flyer.jpg" />
      </div>
    </div>
  );
};

export default Cartridge;
