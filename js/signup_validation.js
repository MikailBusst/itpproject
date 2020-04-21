var first_name, last_name, email, password, confirm_password, first_name_status, last_name_status, email_status, password_status, confirm_password_status, warn_status;

function set_values(){
    check_size();
    
    first_name_status = false;
    last_name_status = false;
    email_status = false;
    password_status = false;
    confirm_password_status = false;
    warn_status = false;
}

function check_empty(){
    first_name = document.forms["signup"]["first_name"].value;
    last_name = document.forms["signup"]["last_name"].value;
    email = document.forms["signup"]["email"].value;
    password = document.forms["signup"]["password"].value;
    confirm_password = document.forms["signup"]["confirm_password"].value;
    
    if(first_name == ""){
        event.preventDefault();
        first_name_status = false;
        document.getElementById("first_name_error").innerHTML = "Please enter your first name.";
    }
    else{
        verify_first_name();
    }
    
    if(last_name == ""){
        event.preventDefault();
        last_name_status = false;
        document.getElementById("last_name_error").innerHTML = "Please enter your last name.";
    }
    else{
        verify_last_name();
    }
    
    if(email == ""){
        event.preventDefault();
        email_status = false;
        document.getElementById("email_error").innerHTML = "Please enter your email address.";
    }
    else{
        verify_email();
    }
    
    if(password == ""){
        event.preventDefault();
        password_status = false;
        document.getElementById("password_error").innerHTML = "Please enter your password.";
    }
    else{
        verify_password();
    }
    
    if(confirm_password == ""){
        event.preventDefault();
        confirm_password_status = false;
        document.getElementById("confirm_password_error").innerHTML = "Please confirm your password.";
    }
    else{
        verify_confirm_password();
    }
    
    master_verify();
}

function master_verify(){
    if(first_name_status == true && last_name_status == true && email_status == true && password_status == true && confirm_password_status == true){
        document.getElementById("master_error").innerHTML = "";
    }
    else{
        event.preventDefault();
        document.getElementById("master_error").innerHTML = "Please fill in the required details.";
    }
}

function verify_first_name(){
    first_name = document.forms["signup"]["first_name"].value;
    
    if(first_name == ""){
        event.preventDefault();
        first_name_status = false;
        document.getElementById("first_name_error").innerHTML = "Please enter your first name.";
    }
    else{
        first_name_status = true;
        document.getElementById("first_name_error").innerHTML = "";
    }
}

function verify_last_name(){
    last_name = document.forms["signup"]["last_name"].value;
    if(last_name == ""){
           event.preventDefault();
           last_name_status = false;
           document.getElementById("last_name_error").innerHTML = "Please enter your last name.";
       }
       else{
           last_name_status = true;
           document.getElementById("last_name_error").innerHTML = "";
       }
}

function verify_email(){
    email = document.forms["signup"]["email"].value;
    
    if(email == ""){
        event.preventDefault();
        email_status = false;
        document.getElementById("email_error").innerHTML = "Please enter your email address.";
    }
    else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(mailformat.test(email)){
            email_status = true;
            document.getElementById("email_error").innerHTML = "";
        }
        else{
            event.preventDefault();
            email_status = false;
            document.getElementById("email_error").innerHTML = "Please enter a valid email address.";
        }
    }
}

function verify_password(){
    password = document.forms["signup"]["password"].value;
    
    if(password == ""){
        event.preventDefault();
        password_status = false;
        document.getElementById("password_error").innerHTML = "Please enter your password.";
    }
    else{
        password_status = true;
        document.getElementById("password_error").innerHTML = "";
    }
}

function verify_confirm_password(){
    password = document.forms["signup"]["password"].value;
    confirm_password = document.forms["signup"]["confirm_password"].value;
    
    if(confirm_password == ""){
        event.preventDefault();
        confirm_password_status = false;
        document.getElementById("confirm_password_error").innerHTML = "Please confirm your password.";
    }
    else{
        if(password != confirm_password){
            event.preventDefault();
            confirm_password_status = false;
            document.getElementById("confirm_password_error").innerHTML = "Your confirmed password does not match your new password.";
        }
        else{
            var character_counter = 0;
            var last_character;
            var password_format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/;
            
            for(var i = 0; i < password.length; i++){
                if(password.charAt(i) == last_character){
                    character_counter++;
                    
                    if(character_counter >= 2){
                        event.preventDefault();
                        confirm_password_status = false;
                        document.getElementById("confirm_password_error").innerHTML = "Your password must be at least 8 characters long, has at least one lowercase letter, one uppercase letter, one numeric digit, one special character, no spaces and cannot have a character repeated three times in a row.";
                        return;
                    }
                }
                else{
                    character_counter = 0;
                    last_character = password.charAt(i);
                }
                
            }
            
            if(password_format.test(password)){
                confirm_password_status = true;
                warn_status = true;
                document.getElementById("confirm_password_error").innerHTML = "";
            }
            else{
                event.preventDefault();
                confirm_password_status = false;
                document.getElementById("confirm_password_error").innerHTML = "Your password must be at least 8 characters long, has at least one lowercase letter, one uppercase letter, one numeric digit, one special character, no spaces and cannot have a character repeated three times in a row.";
            }
        }
    }
}

function check_size(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
   if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 410){
          $("#proceed_section").removeClass("proceed_section");
          $("#proceed_section").addClass("proceed_section_mobile");
    }
      else{
          $("#proceed_section").removeClass("proceed_section_mobile");
          $("#proceed_section").addClass("proceed_section");
      }
}

