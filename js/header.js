
setheader();

function setheader(){
let appHeader = `    

	<header>
    <div class="top_banner">
      <img id="banner" src="media/banner_logo.png" />
      <h1>CU BSc Physics</h1>
    </div>
	  
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

  <style>
  .top_banner{
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .top_banner h1{
  color:black;
  }
  </style>   
`;

document.getElementById("app-header").innerHTML = appHeader;

}





