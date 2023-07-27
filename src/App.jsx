import React, { useEffect } from 'react';
import Particles from 'particlesjs';
import Clock from './features/clock';

function App() {
  useEffect(() => {
    window.onload = function () {
      Particles.init({
        selector: '.background',
        maxParticles: 100,
        sizeVariations: 3,
        color: ["#DBC4F0", "#FFCACC", "#D4E2D4", "#FAF3F0"],
        misDistance: 500,
      });
    };
  });


  return (
    <>
      <Clock />
    </>
  )
}

export default App
