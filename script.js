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
Button.style.color="blue";
}


// To go to the page when the link from the menu is clicked
function goto(buttonID){
        file_name =buttonID+".html"	
	window.open(file_name,"_self")
}

// const hamburger = document.getElementById("hamburger-icon");

// toggle display of menu
	// hamburger.onclick = myFunction;
	
	function toggle(){
	  		$(".menu").toggle();
	}


