var game_name = "animtion";
var game_level = "easy";
function before() {
  document.getElementById('myImage')
    .src = "../image/italy3.jpg";
  document.getElementById('message')
    .innerHTML = "Hii! GeeksforGeeks people";
}

function afterr() {
  document.getElementById('myImage')
    .src = "../image/italy2.jpg";
  document.getElementById('message')
    .innerHTML = "Bye! GeeksforGeeks people";
}



function changeImageT(x) {
  findLetter(x);
}

function findLetter(l) {
  let letABC = document.getElementById(l.toString());
  letABC.src = "../image/" + l + ".png";
  score();
}

function levelHard(l) {
  game_level = "hard";
  document.location = "../html/hard.html";
}
function levelAdvance(l) {
  game_level = "advance";
  document.location = "../html/advance.html";
}

function levelEasy(l) {
  game_level = "easy";
  let x = document.getElementById(l.toString());
  document.location = "../html/easy.html";
}


function score() {
  const phone = document.cookie;
  const emailvalue = phone.substring(phone.indexOf('=') + 1);
  // alert("emailvalue: "+emailvalue);
  let user = localStorage.getItem(emailvalue);
  // alert("user: "+user);
  let userjson = JSON.parse(user);
  let corrtime = new Date();
  userjson.score += 5;
 const userPlay = { gname: game_name, glevel: game_level, cscore: userjson.cscore, date: corrtime.getDate(), time: corrtime.getTime() };
  userjson.arr.push(JSON.stringify(userPlay));
  let myscore= userjson.score;
  window.localStorage.setItem(emailvalue, JSON.stringify(userjson));
  // alert(myscore);
}