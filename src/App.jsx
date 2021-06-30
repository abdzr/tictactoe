import React, { useEffect, useState } from 'react';
import Cell from './Components/Cell';
import checkDiagonal from './Utils/checkDiagonal';
import checkHorizontal from './Utils/checkHorizontal';
import checkVertical from './Utils/checkVertical';
import Modal from './Components/Modal'

function App() {
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(false);
  const [arena, setArena] = useState(Array(9).fill(null));
  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });
  const [count, setCount] = useState(0);

const checkDraw = () => {
if(count === 9){
  arena.forEach(block => {
  if(block === null){
    return 0;
  }
  return 1;
})
}
}

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
      newArena[x] = player ? 'X' : 'O';
      setPlayer(!player);
      setArena(newArena);
      setCount(() => count + 1);
    }
  };
  useEffect(() => {
  
    allChecks();
  }, [arena]);
useEffect(()=> {
  if(count === 9){ 
    setModalOpen(true); 
  checkDraw();
}
}, [count])
  return (
    <div className="flex justify-center items-center flex-col relative">
      <Modal 
      modalOpen={modalOpen}
      winner={winner}
      setArena={setArena}
      setModalOpen={setModalOpen}
      setCount={setCount}
      count={count}/>
      <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className=" font-bold text-4xl pb-10">Tic Tac Toe</div>
        <div className="flex flex-col h-60 w-60">
          <div className="flex flex-row h-full  w-full flex-wrap">
            {arena.map((elm, i) => (
              <Cell key={i} value={i} arena={arena} handleClick={handleClick} />
            ))}
          </div>
        </div>
        <div className="text-2xl font-bold mt-8">
          {`X : ${score.X}`} <br /> {`O : ${score.O}`}
        </div>
      </div>
    </div>
  );
}

export default App;
