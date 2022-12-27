
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
	

	
function  changeImageT(x) {
    findLetter(x);
  }
 
  function findLetter(l){
    let letABC= document.getElementById(l.toString());
    letABC.src ="./image/"+ l+".png";
  }

  function levelHard(){
    document.location="hard.html";
  }
  function levelAdvance(){
	document.location="advance.html";
  }