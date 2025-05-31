const createBoard = (rows, columns) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return {
        row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false,
        nearMines: 0,
      }
    })
  })
}

const spreadMines = (board, minesAmount) => {
  const rows = board.length
  const columns = board[0].length
  let minesPlanted = 0

  while (minesPlanted < minesAmount) {
    const rowSel = parseInt(Math.random() * rows, 10)
    const columnSel = parseInt(Math.random() * columns, 10)

    if(!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true
      minesPlanted++
    }
  }
}

export const cloneBoard = board => {
  return board.map(rows => {
    return rows.map(field => {
      return {...field}
    })
  })
}

const getNeighbors = (board, row, column) => {
  const neighbors = []
  const lines = [row - 1, row, row + 1]
  const columns = [column - 1, column, column + 1]
  lines.forEach(r => {
    columns.forEach(c => {
      const different = r !== row || c !== column
      const validValue = r >= 0 && r < board.length
      const columnValid = c >= 0 && c < board[0].length
      if(different && validValue && columnValid) {
        neighbors.push(board[r][c])
      }
    })
  })
  return neighbors
}

const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined
  return getNeighbors(board, row, column).reduce(safes, true)
}

export const openField = (board, row, column)  => {
  const field  = board[row][column]
  if(!field.opened) {
    field.opened = true
    if(field.mined) {
      field.exploded = true
    } else if(safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column))
    } else {
      const neighbors = getNeighbors(board, row, column)
      field.nearMines = neighbors.filter(n => n.mined).length
    }
  }
}

const fields = board => [].concat(...board)

export const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0

export const wonGame = board => fields(board).filter(
  field => (field.mined && !field.flagged) || (!field.mined && !field.opened)
).length === 0

export const showMines = board => fields(board)
  .filter(field => field.mined)
  .forEach(field => field.opened = true)

export const toggleFlag = (board, row, column) => {
  const field = board[row][column]
  field.flagged = !field.flagged
}

export const flagUsed = board => fields(board).filter(field => field.flagged).length

export const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)
  return board
}