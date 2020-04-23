function check_size(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 375){
        $("body").removeClass("body-desktop");
        $("body").addClass("body-mobile");
    }
    
    if(width < 723){
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
    
   if(width < 723){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile");
        $("#proceed_section").addClass("proceed_section");
    }
}

function check_empty(){
    var email = document.forms["retrieve_email"]["email"].value;
    var email_status = false;
    
    if(email == ""){
        event.preventDefault();
        email_status = false;
        document.getElementById("email_error").innerHTML = "Please enter your email address";
    }
    else{
        email_validation();
    }
}

function email_validation(){
    var email = document.forms["retrieve_email"]["email"].value;
    var email_status = false;
    
    if(email == ""){
        event.preventDefault();
        email_status = false;
         document.getElementById("email_error").innerHTML = "Please enter your email address";
    }
    else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(mailformat.test(email)){
            if(email.indexOf("@student.mmu.edu.my", email.length - "@student.mmu.edu.my".length) !== -1){
                email_status = true;
                document.getElementById("email_error").innerHTML = "";
            }
            else{
                document.getElementById("email_error").innerHTML = "You must have an MMU student email address in order for you to continue.";
            }
        }
        else{
            email_status = false;
            document.getElementById("email_error").innerHTML = "Please enter a valid email address.";
        }
    }
}
