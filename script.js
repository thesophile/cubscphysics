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

// $("#hamburger-icon").click(
//   function(){
//   $(".menu").toggle();
// });


// $("#hamburger-icon").ontouchstart = menu_toggle;

// function menu_toggle(){
//   $(".menu").toggle();
// }

// const menu = document.querySelector(".menu");

// document.getElementById("hamburger-icon").onclick = myFunction;


// document.getElementById("hamburger-icon").ontouchstart = myFunction;


// function myFunction() {
  
//   $(".menu").toggle();

// }

// const hamburgerIcon = document.getElementById('hamburger-icon');
// const menu = document.getElementsByClassName('menu')[0];

 
// hamburgerIcon.addEventListener('click', function() {
//   const computedStyle = getComputedStyle(menu);
//   if (computedStyle.display === "none") {
//     menu.style.display = "block";
//   } else {
//     menu.style.display = "none";
//   }
// });
