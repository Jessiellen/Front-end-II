import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [contador, setContador] = useState(0); 
  const [pausado, setPausado] = useState(false); 

  const incrementar = () => {
    setContador(prevContador => prevContador + 1);
  };

  useEffect(() => {
    if (pausado) return;

    const interval = setInterval(incrementar, 1000);


    return () => clearInterval(interval);
  }, [pausado]); 

  const pausar = () => {
    setPausado(true); 
  };

  const continuar = () => {
    setPausado(false); 
  };

  return (
    <div>
      <div style={{ fontSize: "50px" }}>{contador}</div>
      <div>
        <button onClick={pausar} disabled={pausado}>Pause</button>
        <button onClick={continuar} disabled={!pausado}>Play</button>
      </div>
    </div>
  );
};

export default Counter;
