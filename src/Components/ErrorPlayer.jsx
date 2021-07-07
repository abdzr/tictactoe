import React from "react";

const ErrorPlayer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-2xl">
          cannot access game before setting the player names
        </h1>
        <button
          type="submit"
          className="mt-10 text-xl p-1 pl-6 pr-6 rounded-md font-bold bg-black text-white transform hover:scale-105"
        >
          <a href="/"> Go home</a>
        </button>
      </div>
    </div>
  );
};

export default ErrorPlayer;
