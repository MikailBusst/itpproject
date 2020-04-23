function check_size(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    default_size();
    
    if(width <= 991) {
        $("#navbarResponsive").addClass("collapse navbar-collapse");
    }
    else {
        $("#navbarResponsive").addClass("navbar-collapse");
    }
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
        
        $("#filter-area").removeClass("filter-area");
        $("#filter-area").addClass("filter-area-mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width <= 991) {
        $("#navbarResponsive").removeClass("navbar-collapse");
        $("#navbarResponsive").addClass("collapse navbar-collapse");
    }
    else {
        $("#navbarResponsive").removeClass("collapse navbar-collapse");
        $("#navbarResponsive").addClass("navbar-collapse");
    }
    
     if(width < 601){
               $("#proceed_section").removeClass("proceed_section");
               $("#proceed_section").addClass("proceed_section_mobile");
         
                $("#filter-area").removeClass("filter-area");
                $("#filter-area").addClass("filter-area-mobile");
           }
           else{
               $("#proceed_section").removeClass("proceed_section_mobile");
               $("#proceed_section").addClass("proceed_section");
               
               $("#filter-area").removeClass("filter-area-mobile");
               $("#filter-area").addClass("filter-area");
           }
}


function default_size(){
    $(".twenty_button").addClass('active');
}

function activate_twenty(){
    $(".twenty_button").addClass('active');
    $(".fifty_button").removeClass('active');
    $(".hundred_button").removeClass('active');
}

function activate_fifty(){
    $(".twenty_button").removeClass('active');
    $(".fifty_button").addClass('active');
    $(".hundred_button").removeClass('active');
}

function activate_hundred(){
    $(".twenty_button").removeClass('active');
    $(".fifty_button").removeClass('active');
    $(".hundred_button").addClass('active');
}
