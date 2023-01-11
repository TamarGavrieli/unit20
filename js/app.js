
const levels = {
    easy : [
        //easy board 1
          [0,8,0, 0,9,6, 0,3,0,
            0,2,0, 7,4,0, 0,0,8,
            9,0,4, 0,0,0, 2,0,0,
            0,0,6, 8,0,0, 0,1,2,
            1,3,0, 0,6,0, 0,5,4,
            8,9,0, 0,0,1, 7,0,0,
            0,0,9, 0,0,0, 1,0,6,
            6,0,0, 0,7,2, 0,4,0,
            0,1,0, 6,8,0, 0,2,0],
        //easy board 2
        [0,3,6, 2,0,0, 0,4,0,
            0,0,8, 4,9,0, 6,0,1,
            0,0,1, 0,5,0, 7,0,0,
            7,0,0, 0,0,8, 0,6,0,
            0,5,9, 0,0,7, 1,3,0,
            0,6,0, 0,4,5, 0,0,8,
            0,0,4, 0,6,0, 9,0,0,
            2,0,5, 0,1,4, 3,0,0,
            0,1,0, 0,0,9, 4,5,0] 
        ],
    medium : [
        //medium board 1
        [7,0,0, 8,0,0, 0,1,0,
            1,0,0, 0,0,3, 8,0,0,
            0,5,0, 0,6,0, 0,0,2,
            2,0,0, 6,0,0, 4,0,9,
            3,0,0, 9,0,4, 0,0,5,
            9,0,4, 0,0,5, 0,0,1,
            5,0,0, 0,4,0, 0,2,0,
            0,0,1, 7,0,0, 0,0,8,
            0,8,0, 0,0,2, 0,0,3],
        //medium board 2
        [0,0,2, 9,0,0, 0,6,7,
            0,0,6, 3,0,0, 2,0,0,
            0,0,3, 0,0,6, 0,1,0,
            0,0,8, 0,0,3, 5,0,0,
            0,1,0, 0,7,0, 0,2,0,
            0,0,4, 0,1,8, 6,0,0,
            0,2,0, 4,0,0, 7,0,0,
            0,0,9, 0,0,2, 1,0,0,
            3,5,0, 0,0,9, 4,0,0] 
        ],
    hard : [
        //hard board 1
          [0,0,5, 0,1,0, 0,0,0,
            0,0,9, 0,0,8, 6,0,0,
            6,0,0, 7,2,0, 0,3,0,
            8,0,0, 0,0,0, 0,0,0,
            0,0,2, 1,0,0, 5,0,0,
            0,0,0, 0,4,0, 0,0,7,
            0,7,0, 0,6,1, 0,0,8,
            0,0,4, 9,0,0, 2,0,0,
            0,6,0, 0,5,0, 3,0,0],
        //hard board 2
        [4,0,0, 5,0,0, 0,0,6,
            0,3,0, 0,0,1, 0,5,0,
            0,0,0, 0,0,6, 0,0,2,
            7,0,0, 0,3,0, 0,2,0,
            1,0,0, 0,9,2, 0,0,3,
            0,9,0, 0,6,0, 0,0,5,
            6,0,0, 3,0,0, 0,0,0,
            0,5,0, 4,0,0, 0,8,0,
            9,0,0, 0,0,8, 0,0,7] 
        ]
};
let board=[];
// Set the date we're counting down to
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

       timer++;
    }, 1000);
}

function drawBoard() {
    const sudokuBoard = document.querySelector("#puzzle");
    const squares = 81;

    for (let i=0; i<squares; i++) {
        const inputElement = document.createElement("input");
        inputElement.setAttribute('type', 'number');
        inputElement.setAttribute('min', '1');
        inputElement.setAttribute('max', '9');
        inputElement.index = i;
        inputElement.classList.add('input-cell');
        
        if (
            ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
            ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
            ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
            ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
            ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
        ) {
            inputElement.classList.add('odd-section');
        }

        sudokuBoard.appendChild(inputElement);
    }
}
function loadRandomBoard(level) {
    const inputs = document.querySelectorAll('input');
    let size = levels[level].length;
    let index = Math.floor(Math.random()*size);
    let savedBoard = levels[level][index];
    board = savedBoard;
    for(let i=0; i<savedBoard.length; i++) {
        if(savedBoard[i] == 0) {
             inputs[i].value = "";
             inputs[i].classList.add('empty');
        } else {
            inputs[i].value = savedBoard[i];
            inputs[i].classList.add('knowledge');
            inputs[i].readOnly = true;
            inputs[i].contentEditable = false;
        }
    }
    var fiveMinutes = 0;
    display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
    savedBoard = [];
}
const levelCases = (lev)=>{
    switch (lev) {
        case "Easy":
            loadRandomBoard("easy");
            break;  // then take break
        case "Medium":
            loadRandomBoard("medium");
             break;
        case "Hard":
            loadRandomBoard("hard");
             break; // then take break
      }
} ;
const indexToRowCol = (index) => { 
    return {row: Math.floor(index/9), col: index%9} 
}
// row, column back to index 
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
function checkValue(index, value) {
    if(!acceptable(board, index, value)){
     return false;
    }
    return true;
 }
function insertValue(element)
{
    let index = element.index;
    let value = element.value;
    let type = null;
    if(!(value>0 && value<10)) 
    {
        type = 'empty';
        // element.value = "";
        // element.borderColor  =  '#808080';
        // element.style.color  = 'black';
    }
    else if(!checkValue(index, value)){
        type = 'wrong';
    }
    else {
        type = 'correct';
        // element.style.borderColor  =  '#808080';
        // element.style.color  = 'black';
    }

    switch (type) {
        case 'wrong':
            element.style.borderColor  = 'red';
            element.style.color  = 'red';
            break;
        case 'empty':
            value = "";
        case 'correct':
            element.style.borderColor  =  '#808080';
            element.style.color  = 'black';
            break;

        default:
            alert("un-eccepted input error!");
            return;
    }
    board[index] = value;
}


 function isWin()
 {
    alert("hi!");
    for(let i = 0; i<81; i++){
        if(board[i]<0 || board[i]>9 || !acceptable(board, i, board[i]))
        {
            alert(":)");
            return false;
        }
    }
    alert("win!");
    return true;
 }
 
const levelSelector = document.querySelector("#difficulty_setting"); 
const cellInput = document.getElementById("puzzle");
const checkButton = document.querySelector("#check-button");

function main() {
    drawBoard();
    loadRandomBoard("easy");
    // when client clicked on select element 
    levelSelector.addEventListener("click", () => {
    // if default value is changed
    levelSelector.addEventListener("change", () => {
        // if value switched by client
       levelCases(levelSelector.value);
        // loadRandomBoard(levelSelector.value);
    });
    });
    cellInput.addEventListener("input", (e) => {
        insertValue(e.target);
        // let index = e.target.index;
        // let value = e.target.value;
        // let typein = e.type;
        // if(!(value>0 && value<10)) 
        // {
        //     e.target.value = "";
        //     e.target.borderColor  =  '#808080';
        //     e.target.style.color  = 'black';
        // }
        // else if(!checkValue(index, value)){
        //     // e.target.value = "";
        //     e.target.style.borderColor  = 'red';
        //     e.target.style.color  = 'red';
        // }
        // else {
        //     e.target.style.borderColor  =  '#808080';
        //     e.target.style.color  = 'black';
        // }
        });

    checkButton.addEventListener("click", () => {
        isWin();
    });

}

main()



   


// function insertValues() {
//     const inputs = document.querySelectorAll('input')
    
//     inputs.forEach((input) => {
//         if(input.value) {
//             board.push(parseInt(input.value))
//             input.classList.add('input-el') 
//         } else {
//             board.push(0)
//             input.classList.add('empty-el')
//         }
//     })
// }