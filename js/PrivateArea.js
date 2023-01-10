import {setCookie, getCookie, checkCookie} from './cookie.js';

var user = JSON.parse(window.localStorage.getItem(getCookie("phone")));

function setUserInformation() {
    let userName = document.getElementById("first_name");
    let userPhone = document.getElementById("phone");
    let userPass = document.getElementById("password");
    let userScore = document.getElementById("score");
    userName.innerText = user.name;
    userPhone.innerText = user.phone;
    userPass.innerText = user.password;
    userScore.innerText = user.score;
}

function main()
{
    setUserInformation();
}

main()