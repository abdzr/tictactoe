import allEqual from "./allEqual";

const checkVertical = (arena) => {
    for (let i = 0; i < 3; i++) {
      if (
        allEqual([arena[i], arena[i + 3], arena[i + 6]]) &&
        arena[i] !== null
      ) {
        return arena[i];
      }
    }
  };

  export default checkVertical