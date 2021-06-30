import React from 'react'

const Cell = ({ value, arena, handleClick }) => {
  return (
    <div
      className={`flex border border-black w-1/3 h-1/3  justify-center items-center text-3xl font-bold bg-white cursor-pointer ${!arena[value] ? 'hover:bg-blue-100' : ''}`}
      onClick={() => handleClick(value)}
    >
      {arena[value]}
    </div>
  );
};

export default Cell;
