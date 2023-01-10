const indexToRowCol = (index) => { 
    return {row: Math.floor(index/9), col: index%9} 
}
// row, column back to index 
let board = [];
const RowColToindex = (row, col) => (row * 9 + col)
const acceptable = (board, index, value) => {
    let { row, col } = indexToRowCol(index);
    for (let r = 0; r < 9; ++r) {
        if (board[RowColToindex(r, col)] == value){
            return false;
        } 
    }
    for (let c = 0; c < 9; ++c) {
        if (board[RowColToindex(row, c)] == value){
            return false;
        } 
    }

    let r1 = Math.floor(row / 3) * 3;
    let c1 = Math.floor(col / 3) * 3;
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            if (board[RowColToindex(r, c)] == value){
                return false;
            }
        }
    }
    return true;
}

function insertToBoard(index, value){
    if(value>=1 && value<=9){
       return acceptable(document.querySelectorAll('input'), index, value);
    }
    else if(value){
        return false;
    }
}


export {acceptable, insertToBoard};