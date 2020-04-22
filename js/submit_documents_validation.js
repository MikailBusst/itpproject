var manual_regisration_status, checklist_status, online_transcripts_status, course_structure_status, insurance_status, resume_status, cover_letter_status;

function check_size(){
    set_defaults();
    
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 375) {
        $("h1").removeClass("big_header");
        $("h1").addClass("small_header");
    }
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    
    if(width < 510){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile");
        
        $("dc").removeClass("document_card");
        $("dc").addClass("document_card_mobile");
        
        $("ct").addClass("document_card_mobile_text");
        
        $("#inner-download-section").removeClass("inner-download-section");
    }
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 375) {
        $("h1").removeClass("big_header");
        $("h1").addClass("small_header");
    }
    else {
        $("h1").removeClass("small_header");
        $("h1").addClass("big_header");
    }
    
    if(width < 410){
          $("#proceed_section").removeClass("proceed_section");
          $("#proceed_section").addClass("proceed_section_mobile");
    }
      else{
          $("#proceed_section").removeClass("proceed_section_mobile");
          $("#proceed_section").addClass("proceed_section");
      }
    
    if(width < 510){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile");
        
        $("dc").removeClass("document_card");
        $("dc").addClass("document_card_mobile");
        
        $("ct").addClass("document_card_mobile_text");
        
        $("#inner-download-section").removeClass("inner-download-section");
    }
    else{
        $("section").removeClass("download_section_mobile");
        $("section").addClass("download_section");
        
        $("dc").removeClass("document_card_mobile");
        $("dc").addClass("document_card");
        
        $("ct").removeClass("document_card_mobile_text");
        
        $("#inner-download-section").addClass("inner-download-section");
    }
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    else{
        $("input[type=file]").removeClass("file_submission_mobile");
        $("input[type=file]").addClass("file_submission");
    }
}

function display_manual_regisration_form(){
    var manual_regisration_form_file_name = document.getElementById("manual_regisration_form");
    
    document.getElementById("manual_regisration_form_file_name").innerHTML = manual_regisration_form_file_name.value.split("\\").pop();
    
    manual_regisration_status = true;
}

function display_checklist(){
    var checklist_file_name = document.getElementById("checklist");
    
    document.getElementById("checklist_file_name").innerHTML = checklist_file_name.value.split("\\").pop();
    
    checklist_status = true;
}

function display_online_transcripts(){
    var online_transcripts_file_name = document.getElementById("online_transcripts");
    
    document.getElementById("online_transcripts_file_name").innerHTML = online_transcripts_file_name.value.split("\\").pop();
    
    online_transcripts_status = true;
}

function display_course_structure(){
    var course_structure_file_name = document.getElementById("course_structure");
    
    document.getElementById("course_structure_file_name").innerHTML = course_structure_file_name.value.split("\\").pop();
    
    course_structure_status = true;
}

function display_insurance(){
    var insurance_file_name = document.getElementById("insurance");
    
    document.getElementById("insurance_file_name").innerHTML = insurance_file_name.value.split("\\").pop();
    
    insurance_status = true;
}

function display_resume(){
    var resume_file_name = document.getElementById("resume");
    
    document.getElementById("resume_file_name").innerHTML = resume_file_name.value.split("\\").pop();
    
    resume_status = true;
}

function display_cover_letter(){
    var cover_letter_file_name = document.getElementById("cover_letter_file");
    
    document.getElementById("cover_letter_file_name").innerHTML = cover_letter_file_name.value.split("\\").pop();
    
    cover_letter_status = true;
}

function set_defaults(){
    manual_regisration_status = false;
    checklist_status = false;
    online_transcripts_status = false;
    course_structure_status = false;
    insurance_status = false;
    resume_status = false;
    cover_letter_status = false;
}

function check_files(){
    if(manual_regisration_status == false || checklist_status == false || online_transcripts_status == false || course_structure_status == false || insurance_status == false || resume_status == false || cover_letter_status == false){
        event.preventDefault();
        
        document.getElementById("master_error").innerHTML = "Please submit the required documents before continuing.";
        
        if(manual_regisration_status == false){
            document.getElementById("manual_regisration_form_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your manual registration form.</span>";
        }
        
        if(checklist_status == false){
            document.getElementById("checklist_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your checklist.</span>";
        }
        
        if(online_transcripts_status == false){
            document.getElementById("online_transcripts_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your online transcript.</span>";
        }
        
        if(course_structure_status == false){
            document.getElementById("course_structure_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your course structure.</span>";
        }
        
        if(insurance_status == false){
            document.getElementById("insurance_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload the original copy of your insurance payment document.</span>";
        }
        
        if(resume_status == false){
            document.getElementById("resume_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your resume.</span>";
        }
        
        if(cover_letter_status == false){
            document.getElementById("cover_letter_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload a sample of your cover letter.</span>";
        }
    }
    else{
        event.preventDefault();
        document.getElementById("master_error").innerHTML = "";
        window.location.href = "aa_wait.html";
    }
}
