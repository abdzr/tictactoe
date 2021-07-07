import allEqual from "./allEqual";

const checkHorizontal = (arena) => {
  for (let i = 0; i < 3; i++) {
    if (
      allEqual([arena[i * 3], arena[i * 3 + 1], arena[i * 3 + 2]]) &&
      arena[i * 3] !== null
    ) {
      return arena[i * 3];
    }
  }
};

export default checkHorizontal;
