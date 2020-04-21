function check_size(){
    var width = window.innerWidth;
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    
    if(width < 420){
           $("#paper").removeClass("paper");
           $("#paper").addClass("paper-mobile");
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
    
    if(width < 420){
           $("#paper").removeClass("paper");
           $("#paper").addClass("paper-mobile");
    }
    else{
        $("#paper").removeClass("paper-mobile");
        $("#paper").addClass("paper");
    }
}
