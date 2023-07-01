
setheader();

function setheader(){
let appHeader = `    

	<header>
    <img id="logo" src="media/logo.png" />
	  
    <nav>  
	    <button onclick="toggle()" id="hamburger-icon"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button>
            <div class="menu">
                 <div  id ="index" onclick='goto(this.id)'>     Home</div>
                 <div id="Textbooks" onclick='goto(this.id)'>   Books</div>
                 <div id="classes" onclick='goto(this.id)'>     Classes</div>                
                 <div id="experiments" onclick='goto(this.id)'> Experiments</div>
                
            </div>
    </nav>
  </header>      
`;

document.getElementById("app-header").innerHTML = appHeader;

}





