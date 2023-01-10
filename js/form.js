import { setCookie} from "./cookie";

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
  
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
    
});
  
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

function log() { 
  let myphone = document.getElementById("phoneLogin").value;
  let myname = document.getElementById("nameLogin").value; 
  let mypass = document.getElementById("pass").value;
  let user = JSON.parse(window.localStorage.getItem(myphone));
  if (user == undefined || user == null) {
    alert('You have to submit');
  }
  else if(user.name==myname && user.password==mypass){
    setCookie("phone", myphone, 30); 
    document.location="../html/main.html";
  }
  else {
    alert('Password or username is incorrect');
  }

} 

function checkPswd() { 
    let myphone = document.getElementById("phone").value;
    let user = JSON.parse(window.localStorage.getItem(myphone));
    let pw1 = document.getElementById("pass1").value; 
    let pw2 = document.getElementById("pass2").value;
    if(pw1 != pw2)  
    {   
      alert("Passwords did not match");  
    }
    else if(user != null){
      alert("This phone is already exsist, you have to login");  
    } 
    else 
    {  
      alert("Password created successfully");  
      let myname=document.getElementById("name").value; 
      let myphone=document.getElementById("phone").value; 
      let mypass=document.getElementById("pass1").value; 
      let myscore=10;
      let myarr=[];
      const user={name: myname, phone: myphone, password: mypass, score: myscore, arr: myarr};
      window.localStorage.setItem(myphone, JSON.stringify(user));
      setCookie("phone", myphone, 30);
      document.location="../html/main.html";
    }  
  }  
