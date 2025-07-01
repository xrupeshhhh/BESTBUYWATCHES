 
    // To display alert 
function start(){
    alert("WELCOME TO BEST BUY WATCHES !!");
}
  
function validateForm() {
    let valid = true;
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    document.getElementById("usernameError").style.display = username ? "none" : "block";
    document.getElementById("passwordError").style.display = password ? "none" : "block";

    if (!username || !password) {
      valid = false;
    }

    return valid; 
}