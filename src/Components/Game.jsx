import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import Modal from "./Modal";
import checkDiagonal from "../Utils/checkDiagonal";
import checkHorizontal from "../Utils/checkHorizontal";
import checkVertical from "../Utils/checkVertical";
import ErrorPlayer from "../Components/ErrorPlayer";

const Game = ({ playerName }) => {
  const [player, setPlayer] = useState({
    player1: {
      name: (playerName || {}).Player1,
      sign: "X",
    },
    player2: {
      name: (playerName || {}).Player2,
      sign: "O",
    },
    state: true,
  });
  const [winner, setWinner] = useState(false);
  const [arena, setArena] = useState(Array(9).fill(null));
  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState(player.player1.name);

  const checkDraw = () => {
    if (count === 9) {
      arena.forEach((block) => {
        if (block === null) {
          return 0;
        }
        return 1;
      });
    }
  };

  const allChecks = async () => {
    const v = checkVertical(arena);
    const h = await checkHorizontal(arena);
    const d = checkDiagonal(arena);
    const dolan = [v, h, d];

    dolan.forEach((element) => {
      if (element) {
        setWinner(element);
        setScore({
          ...score,
          [element]: score[element] + 1,
        });
        setModalOpen(true);
      }
    });
  };

  const handleClick = async (x) => {
    const newArena = arena.slice();
    if (newArena[x] === null) {
      newArena[x] = player.state ? player.player1.sign : player.player2.sign;
      setPlayer({ ...player, state: !player.state });
      setArena(newArena);
      setCount(() => count + 1);
      setTurn(player.state ? player.player2.name : player.player1.name);
    }
  };
  useEffect(() => {
    allChecks();
  }, [arena]);

  useEffect(() => {
    if (count === 9) {
      setModalOpen(false);
      checkDraw();
    }
  }, [count]);

  return !playerName ? (
    <ErrorPlayer />
  ) : (
    <div className="flex justify-center items-center flex-col relative dark:bg-black dark:text-white">
      <Modal
        modalOpen={modalOpen}
        winner={winner}
        setArena={setArena}
        setModalOpen={setModalOpen}
        setCount={setCount}
        count={count}
        player={player}
      />
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <div className=" font-bold text-4xl pb-10">Tic Tac Toe</div>
        <div>
          Next Turn : <strong> {turn}</strong>
        </div>
        <div className="flex flex-col h-60 w-60">
          <div className="flex flex-row h-full  w-full flex-wrap">
            {arena.map((elm, i) => (
              <Cell key={i} value={i} arena={arena} handleClick={handleClick} />
            ))}
          </div>
        </div>
        <div className="text-2xl font-bold mt-8">
          {`${player.player1.name} : ${score.X}`} <br />
          {`${player.player2.name} : ${score.O}`}
        </div>
      </div>
    </div>
  );
};

export default Game;
