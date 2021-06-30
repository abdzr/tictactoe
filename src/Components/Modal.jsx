import React from 'react'
import Draw from './Draw';
import Winner from './Winner';

const Modal = ({modalOpen, winner, setArena, setModalOpen, setCount, count}) => {
         return( <div
        className={`h-screen w-screen bg-black absolute bg-opacity-60 flex justify-center items-center ${
          modalOpen ? '' : 'hidden'
        }`}>
        <div className="h-1/2 w-1/2 bg-white rounded-xl flex flex-col justify-center items-center relative">
          {count === 9 ? <Draw /> : <Winner winner={winner}/>}
          <div
            className="absolute top-4 right-5 font-bold cursor-pointer text-red-600"
            onClick={() => {
              setArena(Array(9).fill(null));
              setModalOpen(false);
              setCount(0);
            }} >
            X
          </div>
          <div
            onClick={() => {
              setArena(Array(9).fill(null));
              setModalOpen(false);
              setCount(0); 
            }}
            className="mt-10 p-2 rounded-md cursor-pointer font-bold bg-black text-white transform hover:scale-105" >
            Play Again
          </div>
        </div>
      </div>)
}

export default Modal;