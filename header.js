var rendered = false;

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





  if (!rendered) {
    rendered = true;
    document.getElementById("app-header").innerHTML = appHeader;

  }




