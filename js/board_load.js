
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

function loadRandomBoard(level = "easy") {
    const inputs = document.querySelectorAll('input');
    let size = levels[level].length;
    let index = Math.floor(Math.random() * size);
    let savedBoard = levels[level][index];
    //board = savedBoard;
    for (let i = 0; i < savedBoard.length; i++) {
        if (savedBoard[i] == 0) {
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
const levelCases = (lev) => {
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
};

export {levelCases, loadRandomBoard};