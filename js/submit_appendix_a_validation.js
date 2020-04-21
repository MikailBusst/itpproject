var undertaking_status, offer_letter_status;

function check_size(){
    set_defaults();
    
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 1800){
        $("section").removeClass("download_section_special");
        $("section").addClass("download_section");
    }
    
    if(width < 940){
           $("input[type=file]").removeClass("file_submission");
           $("input[type=file]").addClass("file_submission_mobile");
       }
    
    if(width < 420){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile");
        
        $("dc").removeClass("document_card");
        $("dc").addClass("document_card_mobile");
        
        $("ct").addClass("document_card_mobile_text");
    }
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
}

function check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 1800){
        $("section").removeClass("download_section_special");
        $("section").addClass("download_section");
    }
    else{
        $("section").removeClass("download_section");
        $("section").addClass("download_section_special");
    }
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    else{
        $("input[type=file]").removeClass("file_submission_mobile");
        $("input[type=file]").addClass("file_submission");
    }
    
    if(width < 464){
        $("#submit").removeClass("submit");
        $("#submit").addClass("submit_mobile");
    }
    else{
        $("#submit").removeClass("submit_mobile");
        $("#submit").addClass("submit");
    }
    
    if(width < 420){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile_special");
        
        $("dc").removeClass("document_card");
        $("dc").addClass("document_card_mobile");
        
        $("ct").addClass("document_card_mobile_text");
    }
    else{
        $("section").removeClass("download_section_mobile_special");
        $("section").addClass("download_section");
        
        $("dc").removeClass("document_card_mobile");
        $("dc").addClass("document_card");
        
        $("ct").removeClass("document_card_mobile_text");
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

function set_defaults(){
    undertaking_status = false;
    offer_letter_status = false;
}

function display_undertaking(){
    var undertaking_file_name = document.getElementById("undertaking");
    
    document.getElementById("undertaking_file_name").innerHTML = undertaking_file_name.value.split("\\").pop();
    
    undertaking_status = true;
}

function display_offer_letter(){
    var offer_letter_file_name = document.getElementById("offer_letter");
    
    document.getElementById("offer_letter_file_name").innerHTML = offer_letter_file_name.value.split("\\").pop();
    
    offer_letter_status = true;
}

function check_files(){
    if(undertaking_status == false || offer_letter_status == false){
        event.preventDefault();
        
        if(undertaking_status == false){
            document.getElementById("undertaking_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your letter of undertaking.</span>";
        }
        
        if(offer_letter_status == false){
            document.getElementById("offer_letter_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your offer letter.</span>";
        }
    }
    else{
        event.preventDefault();
        window.location.href = "disclaimer.html";
    }
}
