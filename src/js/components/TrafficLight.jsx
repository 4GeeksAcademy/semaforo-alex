import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="text-center">
      <div className="traffic-light">
        <Light
          color="red"
          active={color === "red"}
          onClick={() => setColor("red")}
        />
        <Light
          color="yellow"
          active={color === "yellow"}
          onClick={() => setColor("yellow")}
        />
        <Light
          color="green"
          active={color === "green"}
          onClick={() => setColor("green")}
        />
      </div>
    </div>
  );
};

const Light = ({ color, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`light ${color} ${active ? "glow" : ""}`}
    ></div>
  );
};

export default TrafficLight;