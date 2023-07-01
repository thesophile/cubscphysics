
setheader();

function setheader(){
let appHeader = `    

	<header>
    <img id="logo" src="media/logo.png" />
	  
    <nav>  
	    <button id="hamburger-icon"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button>
            <ul class="menu">
                <li> <div  id ="index" onclick='goto(this.id)'>     Home</div></li>
                <li> <div id="Textbooks" onclick='goto(this.id)'>   Books</div></li>
                <li> <div id="classes" onclick='goto(this.id)'>     Classes</div></li>                
                <li> <div id="experiments" onclick='goto(this.id)'> Experiments</div></li>
                
            </ul>
    </nav>
  </header>      
`;

document.getElementById("app-header").innerHTML = appHeader;

}

// get the name of the current page
getpage();
function getpage(){
var path = window.location.pathname;
var page = path.split("/").pop();
var name = page.split(".")[0];
console.log( name );
//get the button with that name
var Button = document.getElementById(name);
//change that color of the button
Button.style.border="3px solid black";
}


// To go to the page when the link from the menu is clicked
function goto(buttonID){
        file_name =buttonID+".html"	
	window.open(file_name,"_self")
}

const menu = document.getElementsByClassName("menu")[0];
const hamburger = document.getElementById("hamburger-icon");

// toggle display of menu
	hamburger.onclick = myFunction;
	
	function myFunction() {
	  		menu.toggle();
	}


