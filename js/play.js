
	function before(){
		document.getElementById('myImage')
		.src="./image/italy3.jpg"
		document.getElementById('message')
		.innerHTML="Hii! GeeksforGeeks people";
	}
	
	function afterr(){
		document.getElementById('myImage')
		.src="./image/italy2.jpg"
		document.getElementById('message')
		.innerHTML="Bye! GeeksforGeeks people";
	}
	

	
function changeImageT(x) {
    findLetter(x);
  }
 
  function findLetter(l){
    let letABC= document.getElementById(l.toString());
    letABC.src ="./image/"+ l+".png";
	score();
  }

  function levelHard(l){
    document.location="hard.html";
  }
  function levelAdvance(l){
	document.location="advance.html";
  }

  function levelEasy(l){
	let x= document.getElementById(l.toString());
	
	document.location="easy.html";
  }


  function score(){
  const phone = document.cookie.id;
  alert(phone);
  const emailvalue = phone.substring(phone.indexOf('=') + 1);
  let user = localStorage.getItem(emailvalue);
  let userjson = JSON.parse(user);
  userjson.score += 5;
  let myscore= userjson.score;
  window.localStorage.setItem(emailvalue, JSON.stringify(userjson));
  alert(myscore);

  }