var ic, password, ic_status, password_status;

function check_size(){
    set_defaults();
    
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

function set_defaults(){
    ic_status = false;
    password_status = false;
}

function check_empty(){
    ic = document.forms["disclaimer_verification"]["ic"].value;
    password = document.forms["disclaimer_verification"]["password"].value;
    
    if(ic == ""){
        event.preventDefault();
        ic_status = false;
        document.getElementById("ic_error").innerHTML = "Please enter your IC number without any dashes or spaces.";
    }
    else{
        verify_ic();
    }
    
    if(password == ""){
        event.preventDefault();
        password_status = false;
        document.getElementById("password_error").innerHTML = "Please enter your password.";
    }
    else{
        verify_password();
    }
    
    master_verify();
}

function verify_ic(){
    ic = document.forms["disclaimer_verification"]["ic"].value;
    
    if(ic == ""){
        event.preventDefault();
        ic_status = false;
        document.getElementById("ic_error").innerHTML = "Please enter your IC number without any dashes or spaces.";
    }
    else{
        if(isNaN(ic) || ic.length != 12){
            event.preventDefault();
            ic_status = false;
            document.getElementById("ic_error").innerHTML = "Please enter a valid IC number without any dashes or spaces.";
        }
        else{
            ic_status = true;
            document.getElementById("ic_error").innerHTML = "";
        }
    }
}

function verify_password(){
    password = document.forms["disclaimer_verification"]["password"].value;
    
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

function master_verify(){
    if(ic_status == false || password_status == false){
        document.getElementById("master_error").innerHTML = "Please fill in the required details.";
    }
    else{
        event.preventDefault();
        document.getElementById("master_error").innerHTML = "";
        window.location.href = 'registration_complete.html'
    }
}
