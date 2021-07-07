import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const PlayerForm = ({ playerName, setPlayerName }) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setPlayerName(data);
    history.push("/game");
    console.log(playerName);
  };
  return (
    <div>
      <div className="flex flex-row h-screen w-screen justify-center items-center dark:bg-black dark:text-white">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex flex-col text-xl">
            <span className="text-2xl"> Player 1 </span>
            <input
              {...register("Player1", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength: {
                  value: 4,
                  message: "Must be between 4 and 8 characters",
                },
                maxLength: {
                  value: 8,
                  message: "Must be between 4 and 8 characters",
                },
              })}
              type="text"
              id="Player1"
              className="outline-none border-b-2 dark:bg-black"
              placeholder=" Please insert your name"
            />
            {errors.Player1 && (
              <div className="text-red-500 text-sm">
                {errors.Player1.message}
              </div>
            )}
          </label>
          <label className="mt-10 flex flex-col text-xl">
            <span className="text-2xl"> Player 2 </span>
            <input
              {...register("Player2", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength: {
                  value: 4,
                  message: "Must be between 4 and 8 characters",
                },
                maxLength: {
                  value: 8,
                  message: "Must be between 4 and 8 characters",
                },
              })}
              type="text"
              id="Player2"
              className="outline-none border-b-2 dark:bg-black"
              placeholder=" Please insert your name"
            />
            {errors.Player2 && (
              <div className="text-red-500  text-sm">
                {errors.Player2.message}
              </div>
            )}
          </label>
          <button
            type="submit"
            className="mt-10 text-xl w-1/3 p-1 rounded-md font-bold bg-black text-white transform hover:scale-105 dark:bg-white dark:text-black"
          >
            Play
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerForm;
