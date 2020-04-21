function check_size(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 1247){
        $("date").removeClass("date_submitted");
        $("student").removeClass("student_name");
        
        $("date").addClass("date_submitted_mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 1247){
        $("date").removeClass("date_submitted");
        $("student").removeClass("student_name");
        
        $("date").addClass("date_submitted_mobile");
    }
    else{
        $("date").removeClass("date_submitted_mobile");
        
        $("date").addClass("date_submitted");
        $("student").addClass("student_name");
    }
}
