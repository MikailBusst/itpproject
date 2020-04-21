function check_size(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 375){
           $("body").removeClass("body-desktop");
           $("body").addClass("body-mobile");
       }
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width <= 375){
           $("body").removeClass("body-desktop");
           $("body").addClass("body-mobile");
       }
       else{
           $("body").removeClass("body-mobile");
           $("body").addClass("body-desktop");
       }
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile");
        $("#proceed_section").addClass("proceed_section");
    }
}

function check_empty(){
    var password = document.forms["retrieve_otp"]["password"].value;
    var password_status = false;
    
    if(password == ""){
        event.preventDefault();
        password_status = false;
        document.getElementById("password_error").innerHTML = "Please enter your One Time Password";
    }
    else{
        password_validation();
    }
}

function password_validation(){
    var password = document.forms["retrieve_otp"]["password"].value;
    var password_status = false;
    
    if(password == ""){
        event.preventDefault();
        password_status = false;
        document.getElementById("password_error").innerHTML = "Please enter your One Time Password";
    }
    else{
        if(password == "password"){
            event.preventDefault();
            password_status = true;
            document.getElementById("password_error").innerHTML = "";
            window.location.href = "reset.html";
        }
        else{
            event.preventDefault();
            password_status = false;
            document.getElementById("password_error").innerHTML = "The password typed in is incorrect.";
        }
    }
}
