// get the name of the current page
var path = window.location.pathname;
var page = path.split("/").pop();
var name = page.split(".")[0];
console.log( name );
//get the button with that name
var Button = document.getElementById(name);
//change that color of the button
Button.style.border="3px solid black";



// To go to the page when the link from the menu is clicked

 function goto(buttonID){
        file_name =buttonID+".html"	
	window.open(file_name,"_self")
}


//toggle display of menu

// document.getElementById("hamburger-icon").onclick = myFunction;
// 	function myFunction() {
// 	  		$(".menu").toggle();	
// 	}


