import React from "react";

const Winner = ({ winner }) => {
  return (
    <div className="text-3xl">
      The winner is <span className="font-bold">{winner}</span>
    </div>
  );
};

export default Winner;
