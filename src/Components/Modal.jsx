import React from 'react'

const Modal = ({modalOpen, winner, setArena, setModalOpen }) => {
         return( <div
        className={`h-screen w-screen bg-black absolute bg-opacity-60 flex justify-center items-center ${
          modalOpen ? '' : 'hidden'
        }`}>
        <div className="h-1/2 w-1/2 bg-white rounded-xl flex flex-col justify-center items-center relative">
          <div className="text-3xl">
            The winner is <span className="font-bold">{winner}</span>
          </div>
          <div
            className="absolute top-4 right-5 font-bold cursor-pointer text-red-600"
            onClick={() => {
              setArena(Array(9).fill(null));
              setModalOpen(false);
            }} >
            X
          </div>
          <div
            onClick={() => {
              setArena(Array(9).fill(null));
              setModalOpen(false);
            }}
            className="mt-10 p-2 rounded-md cursor-pointer font-bold bg-black text-white transform hover:scale-105" >
            Play Again
          </div>
        </div>
      </div>)
}

export default Modal;