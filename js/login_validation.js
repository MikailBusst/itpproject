var email, password;

function check_empty(){
    email = document.forms["login"]["email"].value;
    password = document.forms["login"]["password"].value;
    
    if(email == "" && password == ""){
        event.preventDefault();
        document.getElementById("login_error").innerHTML = "Please enter your email address and password.";
    }
    else if(email == ""){
        event.preventDefault();
        document.getElementById("login_error").innerHTML = "Please enter your email address.";
    }
    else if(password == ""){
        event.preventDefault();
        document.getElementById("login_error").innerHTML = "Please enter your password";
    }
    else{
        document.getElementById("login_error").innerHTML = "";
    }
}

function check_size(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 888){
        $("body").removeClass("login");
        $("body").addClass("login-mobile");
        
        $("card").removeClass("card-login");
        $("card").addClass("card-login-mobile");
        
        $("card-left").removeClass("create-account");
        $("card-left").addClass("create-account-mobile");
        
        $("login").removeClass("login-area");
        $("login").addClass("login-area-mobile");
        
        $("login-below").removeClass("create-account-2");
        $("login-below").addClass("create-account-mobile-2");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 888){
        $("body").removeClass("login");
        $("body").addClass("login-mobile");
        
        $("card").removeClass("card-login");
        $("card").addClass("card-login-mobile");
        
        $("card-left").removeClass("create-account");
        $("card-left").addClass("create-account-mobile");
        
        $("login").removeClass("login-area");
        $("login").addClass("login-area-mobile");
        
        $("login-below").removeClass("create-account-2");
        $("login-below").addClass("create-account-mobile-2");
    }
    
    else{
        $("body").removeClass("login-mobile");
        $("body").addClass("login");
        
        $("card").removeClass("card-login-mobile");
        $("card").addClass("card-login");
        
        $("card-left").removeClass("create-account-mobile");
        $("card-left").addClass("create-account");
        
        $("login").removeClass("login-area-mobile");
        $("login").addClass("login-area");
        
        $("login-below").removeClass("create-account-mobile-2");
        $("login-below").addClass("create-account-2");
    }
}
