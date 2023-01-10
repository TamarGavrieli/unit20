import { acceptable, insertToBoard } from "./board_check";
import { levelCases, loadRandomBoard } from "./board_load";
import { drawBoard } from "./board_draw";
/*

*/ 
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


//  function isWin()
//  {
//     alert("hi!");
//     for(let i = 0; i<81; i++){
//         if(board[i]<0 || board[i]>9 || !acceptable(board, i, board[i]))
//         {
//             alert(":)");
//             return false;
//         }
//     }
//     alert("win!");
//  }
 
// function streamGame()
// {

// }

const levelSelector = document.querySelector("#difficulty_setting"); 
const cellInput = document.getElementById("puzzle");
const checkButton = document.querySelector("#check-button");


function main() {
   
  
    drawBoard();
    loadRandomBoard();

    // when client clicked on select element 
    levelSelector.addEventListener("click", () => {
    // if default value is changed
    levelSelector.addEventListener("change", () => {

        prompt()
        // if value switched by client
       levelCases(levelSelector.value);
        // loadRandomBoard(levelSelector.value);
    });
    });

    cellInput.addEventListener("input", (e) => {
            let index = e.target.index;
            let value = e.target.value;
            let typein = e.type;
            alert(typein);
            if(!value.checkValidity())
            {
                alert("not corect num");
            }
            if(!insertToBoard(index, value)){
                e.target.value = "";
                e.target.style.borderColor  = 'red';
            }
            else {
                e.target.style.borderColor  =  '#808080';
            }
    });

    // checkButton.addEventListener("click", () => {
    //     isWin();
    // });

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