/*import { drawBoard } from './draw_board.js'*/

const levels = [
    [
        [0,8,0, 0,9,6, 0,3,0,
        0,2,0, 7,4,0, 0,0,8,
            9,0,4, 0,0,0, 2,0,0,
            0,0,6, 8,0,0, 0,1,2,
            1,3,0, 0,6,0, 0,5,4,
            8,9,0, 0,0,1, 7,0,0,
            0,0,9, 0,0,0, 1,0,6,
            6,0,0, 0,7,2, 0,4,0,
            0,1,0, 6,8,0, 0,2,0],

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
        [  [7,0,0, 8,0,0, 0,1,0,
            1,0,0, 0,0,3, 8,0,0,
            0,5,0, 0,6,0, 0,0,2,
            2,0,0, 6,0,0, 4,0,9,
            3,0,0, 9,0,4, 0,0,5,
            9,0,4, 0,0,5, 0,0,1,
            5,0,0, 0,4,0, 0,2,0,
            0,0,1, 7,0,0, 0,0,8,
            0,8,0, 0,0,2, 0,0,3],

         [0,0,2, 9,0,0, 0,6,7,
            0,0,6, 3,0,0, 2,0,0,
            0,0,3, 0,0,6, 0,1,0,
            0,0,8, 0,0,3, 5,0,0,
            0,1,0, 0,7,0, 0,2,0,
            0,0,4, 0,1,8, 6,0,0,
            0,2,0, 4,0,0, 7,0,0,
            0,0,9, 0,0,2, 1,0,0,
            3,5,0, 0,0,9, 4,0,0] ],

[            [0,0,5, 0,1,0, 0,0,0,
            0,0,9, 0,0,8, 6,0,0,
            6,0,0, 7,2,0, 0,3,0,
            8,0,0, 0,0,0, 0,0,0,
            0,0,2, 1,0,0, 5,0,0,
            0,0,0, 0,4,0, 0,0,7,
            0,7,0, 0,6,1, 0,0,8,
            0,0,4, 9,0,0, 2,0,0,
            0,6,0, 0,5,0, 3,0,0],

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
  ];

function drawBoard() {
    const sudokuBoard = document.querySelector("#puzzle");
    const squares = 81;

  

    for (let i=0; i<squares; i++) {
        const inputElement = document.createElement("input");
        inputElement.setAttribute('type', 'number');
        inputElement.setAttribute('min', '1');
        inputElement.setAttribute('max', '9');

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

function loadRandomBoard() {
    const inputs = document.querySelectorAll('input');
    let index = Math.floor(Math.random()*size);
    let savedBoard = levels[0][index];
    
    for(let i=0; i<savedBoard.length; i++) {
        if(savedBoard[i] == 0) {
             inputs[i].value = ""
             inputs[i].classList.add('empty')
        } else {
            inputs[i].value = savedBoard[i]
            inputs[i].classList.add('knowledge')
            inputs[i].readOnly = true
        }
    }
    savedBoard = []
}

function main() {
    drawBoard();
    loadRandomBoard();
}

main()