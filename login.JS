function addUser() {
    player_name = document.getElementById("player1_name_input").value;
    player_name = document.getElementById("player2_name_input").value;
    
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
  
    window.location = "gp.HTML"
  }
  
  