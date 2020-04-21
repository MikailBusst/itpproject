var student_email, student_id, student_name, major, final_semester, student_mobile, student_total_credit_hours, student_current_credit_hours, student_email_status, student_id_status, student_name_status, major_status, final_semester_status, student_mobile_status, student_total_credit_hours_status, student_current_credit_hours_status, resume_status;

function page_load(){
    check_size();
    
    student_email_status = false;
    student_id_status = false;
    student_name_status = false;
    major_status = false;
    final_semester_status = false;
    student_mobile_status = false;
    student_total_credit_hours_status = false;
    student_current_credit_hours_status = false;
    resume_status = false;
}

function validate_master(){
    if(student_email_status == false || student_id_status == false || student_name_status == false || major_status == false || final_semester_status == false || student_mobile_status == false || student_total_credit_hours_status == false || student_current_credit_hours_status == false || resume_status == false){
        event.preventDefault();
        
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
    }
    else{
        event.preventDefault();
        document.getElementById("master_error").innerHTML = "";
        window.location.href = "submit_documents.html";
    }
}

function check_empty(){
    student_email = document.forms["student_registration"]["student_email"].value;
    student_id = document.forms["student_registration"]["student_id"].value;
    student_name = document.forms["student_registration"]["student_name"].value;
    major = document.forms["student_registration"]["sm"].value;
    final_semester = document.forms["student_registration"]["t3"].value;
    student_mobile = document.forms["student_registration"]["student_mobile"].value;
    student_total_credit_hours = document.forms["student_registration"]["student_credit_hours"].value;
    student_current_credit_hours = document.forms["student_registration"]["student_credit_hours_trimester"].value;
    
    if(student_email == ""){
        event.preventDefault();
        document.getElementById("student_email_error").innerHTML = "Please enter your email address.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else{
        validate_student_email();
    }
    
    if(student_id == ""){
        event.preventDefault();
        document.getElementById("student_id_error").innerHTML = "Please enter you Student ID.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else{
        validate_student_id();
    }
    
    if(student_name == ""){
        event.preventDefault();
        document.getElementById("student_name_error").innerHTML = "Please enter your full name.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else{
        validate_student_name();
    }
    
    if(major == ""){
        event.preventDefault();
        document.getElementById("sm_error").innerHTML = "Please select your major.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else{
        validate_major();
    }
    
    if(student_total_credit_hours == ""){
          event.preventDefault();
          document.getElementById("student_credit_hours_error").innerHTML = "Please enter your total credit hours (excluding arts & humanities).";
          return;
      }
      else{
          validate_student_credit_hours();
      }
      
      if(student_current_credit_hours == ""){
          event.preventDefault();
          document.getElementById("student_credit_hours_trimester_error").innerHTML = "Please enter the total credit hours for the current trimester (excluding arts & humanities).";
          return;
      }
      else{
          validate_student_credit_hours_trimester();
      }
    
    if(final_semester == ""){
        event.preventDefault();
        document.getElementById("t3_error").innerHTML = "Please tell us if this is your final semester or not.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else{
        validate_final_semester();
    }
    
    if(student_mobile == ""){
        event.preventDefault();
        document.getElementById("student_mobile_error").innerHTML = "Please enter your phone number.";
        document.getElementById("master_error").innerHTML = "Please enter all the required details.";
        return;
    }
    else{
        validate_student_mobile();
    }
    
    if(resume_status == false){
        event.preventDefault();
        document.getElementById("resume_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload the latest version of your resume.</span>";
    }
    
    validate_master();
}

function validate_student_email(){
    student_email = document.forms["registration"]["student_email"].value;
    
    if(student_email == ""){
        student_email_status = false;
        document.getElementById("student_email_error").innerHTML = "Please enter your email address.";
    }
    else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(mailformat.test(student_email)){
            if(student_email.indexOf("@student.mmu.edu.my", student_email.length - "@student.mmu.edu.my".length) !== -1){
                student_email_status = true;
                document.getElementById("student_email_error").innerHTML = "";
            }
            else{
                document.getElementById("student_email_error").innerHTML = "You must have an MMU student email address in order to continue.";
            }
        }
        else{
            student_email_status = false;
            document.getElementById("student_email_error").innerHTML = "Please enter a valid email address.";
        }
    }
}

function validate_student_id(){
    student_id = document.forms["registration"]["student_id"].value;
    if(student_id == ""){
        student_id_status = false;
        document.getElementById("student_id_error").innerHTML = "Please enter you Student ID.";
    }
    else{
        var numbers = /^[0-9]+$/;
        
        if(student_id.length == 10 && numbers.test(student_id)){
            student_id_status = true;
            document.getElementById("student_id_error").innerHTML = "";
        }
        else{
            student_id_status = false;
            document.getElementById("student_id_error").innerHTML = "Please enter a valid Student ID.";
        }
    }
}

function validate_student_name(){
    student_name = document.forms["registration"]["student_name"].value;
    if(student_name == ""){
        student_name_status = false;
        document.getElementById("student_name_error").innerHTML = "Please enter a valid name.";
    }
    else{
        student_name_status = true;
        document.getElementById("student_name_error").innerHTML = "";
    }
}

function validate_major(){
    major_status = true;
    
    document.getElementById("sm_error").innerHTML = "";
}

function validate_final_semester(){
    final_semester_status = true;
    
    document.getElementById("t3_error").innerHTML = "";
}

function validate_student_mobile(){
    student_mobile = document.forms["registration"]["student_mobile"].value;
    if(student_mobile == ""){
        student_mobile_status = false;
        document.getElementById("student_mobile_error").innerHTML = "Please enter your phone number.";
    }
    else{
        if(!isNaN(student_mobile) && student_mobile.length <= 14 && student_mobile.length >= 6){
            student_mobile_status = true;
            document.getElementById("student_mobile_error").innerHTML = "";
        }
        else{
            student_mobile_status = false;
            document.getElementById("student_mobile_error").innerHTML = "Please enter a valid phone number.";
        }
    }
}

function display_resume(){
    var resume_file_name = document.getElementById("resume");
    
    document.getElementById("resume_file_name").innerHTML = resume_file_name.value.split("\\").pop();
    
    resume_status = true;
}

function validate_student_credit_hours(){
    student_total_credit_hours = document.forms["student_registration"]["student_credit_hours"].value;
    
    if(student_total_credit_hours == ""){
        event.preventDefault();
        document.getElementById("student_credit_hours_error").innerHTML = "Please enter your total credit hours (excluding arts & humanities).";
    }
    else{
        if(isNaN(student_total_credit_hours)){
            event.preventDefault();
            document.getElementById("student_credit_hours_error").innerHTML = "Your total credit hours should be a number.";
        }
        else{
            if(student_total_credit_hours < 70){
                event.preventDefault();
                document.getElementById("student_credit_hours_error").innerHTML = "You need to have at least 70 credit hours before you can apply for ITP.";
            }
            else{
                document.getElementById("student_credit_hours_error").innerHTML = "";
                student_total_credit_hours_status = true;
            }
        }
    }
}

function validate_student_credit_hours_trimester(){
    student_current_credit_hours = document.forms["student_registration"]["student_credit_hours_trimester"].value;
    
    if(student_current_credit_hours == ""){
        event.preventDefault();
        document.getElementById("student_credit_hours_trimester_error").innerHTML = "Please enter the total credit hours for the current trimester (excluding arts & humanities).";
        return;
    }
    else{
        if(isNaN(student_current_credit_hours)){
            event.preventDefault();
            document.getElementById("student_credit_hours_trimester_error").innerHTML = "Your total credit hours should be a number.";
        }
        else{
            document.getElementById("student_credit_hours_trimester_error").innerHTML = "";
            student_current_credit_hours_status = true;
        }
    }
}

function check_size(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    else{
        $("input[type=file]").removeClass("file_submission_mobile");
        $("input[type=file]").addClass("file_submission");
    }
    
     if(width < 410){
           $("#proceed_section").removeClass("proceed_section");
           $("#proceed_section").addClass("proceed_section_mobile");
     }
       else{
           $("#proceed_section").removeClass("proceed_section_mobile");
           $("#proceed_section").addClass("proceed_section");
       }
}
