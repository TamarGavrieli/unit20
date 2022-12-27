
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
  let user = window.localStorage.getItem(myphone);
  if (user == undefined) {
    alert('phone number is incorrect');
  }
  else {
      document.cookie = `phone=${myphone}`; 
  }

} 

function checkPswd() { 
    var pw1 = document.getElementById("pass1").value; 
    var pw2 = document.getElementById("pass2").value;
    if(pw1 != pw2)  
    {   
      alert("Passwords did not match");  
    } else {  
      alert("Password created successfully");  
      let myname=document.getElementById("name").value; 
      let myphone=document.getElementById("phone").value; ``
      let mypass=document.getElementById("pass1").value; 
      let myscore;
      let myarr=[];
      const user={name:myname, phone: myphone, password: mypass, score:myscore, arr:myarr };
      window.localStorage.setItem(myphone, JSON.stringify(user));
      Document.cookie=myphone;
      document.location="play.html";
    }  
  }  

  