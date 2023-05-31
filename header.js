

let appHeader = `    

	<title>CU Bsc Physics</title>
	<nav>
	    <img id="logo" src="media/logo.png" />
	    <button id="hamburger-icon"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button>
            <ul class="menu">
                <li> <div  id ="index" onclick='goto(this.id)'>     Home</div></li>
                <li> <div id="Textbooks" onclick='goto(this.id)'>   Books</div></li>
                <li> <div id="classes" onclick='goto(this.id)'>     Classes</div></li>                
                <li> <div id="experiments" onclick='goto(this.id)'> Experiments</div></li>
                
            </ul>
        </nav>
`;

document.getElementById("app-header").innerHTML = appHeader;


window.onload=function Highlight(){
//get the name of the current page
var path = window.location.pathname;
var page = path.split("/").pop();
var name = page.split(".")[0];
console.log( name );
//get the button with that name
var Button = document.getElementById(name);
//change that color of the button
Button.style.border="3px solid black";
}



 function goto(buttonID){
        file_name =buttonID+".html"	
	window.open(file_name,"_self")
}

  const hamburgerIcon = document.getElementById('hamburger-icon');
  const menu = document.getElementsByClassName('menu')[0];

 
hamburgerIcon.addEventListener('click', function() {
  const computedStyle = getComputedStyle(menu);
  if (computedStyle.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

