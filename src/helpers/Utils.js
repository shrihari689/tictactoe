const checkXorO = (row) => {
  return (
    row.filter((col) => col === "X").length === 3 ||
    row.filter((col) => col === "O").length === 3
  );
};

const checkDiagonal = (entries) => {
  const rightDiagonal = [entries[0][0], entries[1][1], entries[2][2]];
  const leftDiagonal = [entries[0][2], entries[1][1], entries[2][0]];

  const checkRightDiagonal = checkXorO(rightDiagonal);
  const checkLeftDiagonal = checkXorO(leftDiagonal);

  if (checkLeftDiagonal)
    return [
      [0, 2],
      [1, 1],
      [2, 0],
    ];
  if (checkRightDiagonal)
    return [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
  return false;
};

const checkRows = (entries) => {
  for (let i = 0; i < entries.length; i++) {
    const Xs = entries[i].filter((col) => col === "X").length === 3;
    const Os = entries[i].filter((col) => col === "O").length === 3;
    if (Xs || Os) return entries[i];
  }
  return false;
};

const checkColumns = (entries) => {
  for (let i = 0; i < entries.length; i++) {
    const columns = [entries[0][i], entries[1][i], entries[2][i]];
    const Xs = columns.filter((col) => col === "X").length === 3;
    const Os = columns.filter((col) => col === "O").length === 3;
    if (Xs || Os) return columns;
  }
  return false;
};

const checkForWin = (entries) => {
  const diagonals = checkDiagonal(entries);
  if (diagonals) {
    return diagonals;
  }
  const rows = checkRows(entries);
  if (rows) {
    return rows;
  }
  const columns = checkColumns(entries);
  if (columns) {
    return columns;
  }
  return false;
};

export default checkForWin;
