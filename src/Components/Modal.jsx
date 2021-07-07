import React from "react";
import Draw from "./Draw";
import Winner from "./Winner";

const Modal = ({
  modalOpen,
  winner,
  setArena,
  setModalOpen,
  setCount,
  count,
  player,
}) => {
  return (
    <div
      className={`h-screen w-screen bg-black absolute bg-opacity-40 flex justify-center items-center dark:text-white dark:bg-white ${
        modalOpen ? "" : "hidden"
      }`}
    >
      <div className="h-1/2 w-1/2 bg-white rounded-xl flex flex-col justify-center items-center relative dark:bg-black">
        {count === 9 && winner === false ? (
          <Draw />
        ) : (
          <Winner winner={winner} player={player} />
        )}
        <div
          className="absolute top-4 right-5 font-bold cursor-pointer text-red-600"
          onClick={() => {
            setArena(Array(9).fill(null));
            setModalOpen(false);
            setCount(0);
          }}
        >
          X
        </div>
        <div
          onClick={() => {
            setArena(Array(9).fill(null));
            setModalOpen(false);
            setCount(0);
          }}
          className="mt-10 p-2 rounded-md cursor-pointer font-bold bg-black text-white transform hover:scale-105 dark:bg-white dark:text-black"
        >
          Play Again
        </div>
      </div>
    </div>
  );
};

export default Modal;
