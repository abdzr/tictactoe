const checkDiagonal = (arena) => {
  if (
    (arena[0] === arena[4] && arena[0] === arena[8]) ||
    (arena[2] === arena[4] && arena[2] === arena[6])
  ) {
    return arena[4];
  }
};

export default checkDiagonal;
