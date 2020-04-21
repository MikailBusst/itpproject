var new_password, confirm_password;

function verify_password(){
    new_password = document.forms["reset"]["password"].value;
    
    if(new_password == ""){
        document.getElementById("password_error").innerHTML = "Please enter your new password.";
    }
    else{
        document.getElementById("password_error").innerHTML = "";
    }
}

function verify_confirm_password(){
    confirm_password = document.forms["reset"]["confirm_password"].value;
    
    if(confirm_password == ""){
        document.getElementById("confirm_password_error").innerHTML = "Please confirm your new password.";
    }
    else{
        document.getElementById("confirm_password_error").innerHTML = "";
    }
}

function check_empty(){
    new_password = document.forms["reset"]["password"].value;
    confirm_password = document.forms["reset"]["confirm_password"].value;
    
    if(new_password == "" && confirm_password == ""){
        event.preventDefault();
        document.getElementById("reset_error").innerHTML = "Please enter your new password.";
    }
    else if(new_password == ""){
        event.preventDefault();
        document.getElementById("password_error").innerHTML = "Please enter your new password.";
    }
    else if(confirm_password == ""){
        event.preventDefault();
        document.getElementById("confirm_password_error").innerHTML = "Please confirm your new password.";
    }
    else{
        document.getElementById("reset_error").innerHTML = "";
        check_same();
    }
}

function check_same(){
    if(new_password != confirm_password){
        event.preventDefault();
        document.getElementById("reset_error").innerHTML = "Your confirmed password does not match your new password.";
    }
    else{
        document.getElementById("reset_error").innerHTML = "";
        check_strength();
    }
}

function check_strength(){
    var character_counter = 0;
    var last_character;
    var password_format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/;
    
    new_password = document.forms["reset"]["password"].value;
    
    for(var i = 0; i < new_password.length; i++){
        if(new_password.charAt(i) == last_character){
            character_counter++;
            
            if(character_counter >= 2){
                event.preventDefault();
                document.getElementById("reset_error").innerHTML = "Your password must be at least 8 characters long, has at least one lowercase letter, one uppercase letter, one numeric digit, one special character, no spaces and cannot have a character repeated three times in a row.";
                return;
            }
        }
        else{
            character_counter = 0;
            last_character = new_password.charAt(i);
        }
        
    }
    
    if(password_format.test(new_password)){
        document.getElementById("reset_error").innerHTML = "";
    }
    else{
        event.preventDefault();
        document.getElementById("reset_error").innerHTML = "Your password must be at least 8 characters long, has at least one lowercase letter, one uppercase letter, one numeric digit, one special character, no spaces and cannot have a character repeated three times in a row.";
    }
}


function check_size(){
    var width = window.innerWidth;
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    if(width < 410){
          $("#proceed_section").removeClass("proceed_section");
          $("#proceed_section").addClass("proceed_section_mobile");
    }
      else{
          $("#proceed_section").removeClass("proceed_section_mobile");
          $("#proceed_section").addClass("proceed_section");
      }
}
