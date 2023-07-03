
setheader();

function setheader(){
let appHeader = `    

	<header>
    <img id="banner" src="media/banner.png" />
	  
    <nav>  
	    <button onclick="toggle()" id="hamburger-icon"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button>
            <div class="menu">
                 <div id ="index"      class="menu-items" onclick='goto(this.id)'>     Home</div>
                 <div id="Textbooks"   class="menu-items" onclick='goto(this.id)'>   Books</div>
                 <div id="classes"     class="menu-items" onclick='goto(this.id)'>     Classes</div>                
                 <div id="experiments" class="menu-items" onclick='goto(this.id)'> Experiments</div>
                
            </div>
    </nav>
  </header>      
`;

document.getElementById("app-header").innerHTML = appHeader;

}





