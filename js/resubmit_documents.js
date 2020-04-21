function check_size(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    else{
        $("input[type=file]").removeClass("file_submission_mobile");
        $("input[type=file]").addClass("file_submission");
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

function display_manual_regisration_form(){
    var manual_regisration_form_file_name = document.getElementById("manual_regisration_form");
    
    document.getElementById("manual_regisration_form_file_name").innerHTML = manual_regisration_form_file_name.value.split("\\").pop();
}

function display_checklist(){
    var checklist_file_name = document.getElementById("checklist");
    
    document.getElementById("checklist_file_name").innerHTML = checklist_file_name.value.split("\\").pop();
}

function display_online_transcripts(){
    var online_transcripts_file_name = document.getElementById("online_transcripts");
    
    document.getElementById("online_transcripts_file_name").innerHTML = online_transcripts_file_name.value.split("\\").pop();
}

function display_course_structure(){
    var course_structure_file_name = document.getElementById("course_structure");
    
    document.getElementById("course_structure_file_name").innerHTML = course_structure_file_name.value.split("\\").pop();
}

function display_insurance(){
    var insurance_file_name = document.getElementById("insurance");
    
    document.getElementById("insurance_file_name").innerHTML = insurance_file_name.value.split("\\").pop();
}

function display_resume(){
    var resume_file_name = document.getElementById("resume");
    
    document.getElementById("resume_file_name").innerHTML = resume_file_name.value.split("\\").pop();
}

function display_cover_letter(){
    var cover_letter_file_name = document.getElementById("cover_letter_file");
    
    document.getElementById("cover_letter_file_name").innerHTML = cover_letter_file_name.value.split("\\").pop();
}

function display_undertaking(){
    var undertaking_file_name = document.getElementById("undertaking");
    
    document.getElementById("undertaking_file_name").innerHTML = undertaking_file_name.value.split("\\").pop();
}

function display_offer_letter(){
    var offer_letter_file_name = document.getElementById("offer_letter");
    
    document.getElementById("offer_letter_file_name").innerHTML = offer_letter_file_name.value.split("\\").pop();
}
