import React, { useState } from 'react';
import './App.css';
import zer1 from './Images/zer1.png';
import zer2 from './Images/zer2.png';
import zer3 from './Images/zer3.png';
import zer4 from './Images/zer4.png';
import zer5 from './Images/zer5.png';
import zer6 from './Images/zer6.png';

const Dice = () => {
  const [currentFace1, setCurrentFace1] = useState(1);
  const [currentFace2, setCurrentFace2] = useState(1);

  const faces = [zer1, zer2, zer3, zer4, zer5, zer6];

  const rollDice1 = () => {
    const randomFace1 = Math.floor(Math.random() * 6) + 1;
    setCurrentFace1(randomFace1);
  };

  const rollDice2 = () => {
    const randomFace2 = Math.floor(Math.random() * 6) + 1;
    setCurrentFace2(randomFace2);
  };

  return (
    <div className="dice-container">
      <div className="dice" onClick={rollDice1}>
        <img src={faces[currentFace1 - 1]} alt={`Zer ${currentFace1}`} />
      </div>
      <div className="dice" onClick={rollDice2}>
        <img src={faces[currentFace2 - 1]} alt={`Zer ${currentFace2}`} />
      </div>
    </div>
  );
};

export default Dice;
