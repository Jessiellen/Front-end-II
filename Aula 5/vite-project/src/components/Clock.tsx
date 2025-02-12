import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); 
    }, 1000); 

    return () => clearInterval(intervalo);
  }, []); 

  return (
    <div>
      <div style={{ fontSize: "50px" }}>{time}</div>
    </div>
  );
};

export default Clock;
