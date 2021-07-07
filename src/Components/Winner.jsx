import React from "react";

const Winner = ({ winner, player }) => {
  let winnerName = "";
  if (player.player1.sign === winner) {
    winnerName = player.player1.name;
  }
  if (player.player2.sign === winner) {
    winnerName = player.player2.name;
  }
  return (
    <div className="text-3xl">
      The winner is <span className="font-bold">{winnerName}</span>
    </div>
  );
};

export default Winner;
