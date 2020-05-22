import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-appendix-a',
  templateUrl: './submit-appendix-a.component.html',
  styleUrls: ['./submit-appendix-a.component.css']
})
export class SubmitAppendixAComponent implements OnInit {
    undertaking_status = false
    offer_letter_status = false

    constructor() { }

    ngOnInit(): void {
        this.check_mode()
        var width = window.innerWidth
        
        //document.getElementById("width").innerHTML = width;
        
        if(width < 1800){
            $("section").removeClass("download_section_special")
            $("section").addClass("download_section")
        }
        
        if(width < 940){
            $("input[type=file]").removeClass("file_submission")
            $("input[type=file]").addClass("file_submission_mobile")
        }
        
        if(width < 420){
            $("section").removeClass("download_section")
            $("section").addClass("download_section_mobile")
            
            $(".dc").removeClass("document_card")
            $(".dc").addClass("document_card_mobile")
            
            $(".ct").addClass("document_card_mobile_text")
        }
        
        if(width < 410){
            $("#proceed_section").removeClass("proceed_section")
            $("#proceed_section").addClass("proceed_section_mobile")
        }
    }

    onResize(event) {
        this.check_resize()
    }

    redirect(): void {
        window.location.href = "/itpproject/itp_advisor_assigned"
    }

    check_resize(): void {
        var width = window.innerWidth;
        
        //document.getElementById("width").innerHTML = width;
        
        if(width < 1800){
            $("section").removeClass("download_section_special")
            $("section").addClass("download_section")
        }
        else{
            $("section").removeClass("download_section")
            $("section").addClass("download_section_special")
        }
        
        if(width < 940){
            $("input[type=file]").removeClass("file_submission")
            $("input[type=file]").addClass("file_submission_mobile")
        }
        else{
            $("input[type=file]").removeClass("file_submission_mobile")
            $("input[type=file]").addClass("file_submission")
        }
        
        if(width < 464){
            $("#submit").removeClass("submit")
            $("#submit").addClass("submit_mobile")
        }
        else{
            $("#submit").removeClass("submit_mobile")
            $("#submit").addClass("submit")
        }
        
        if(width < 420){
            $("section").removeClass("download_section")
            $("section").addClass("download_section_mobile_special")
            
            $(".dc").removeClass("document_card")
            $(".dc").addClass("document_card_mobile")
            
            $(".ct").addClass("document_card_mobile_text")
        }
        else{
            $("section").removeClass("download_section_mobile_special")
            $("section").addClass("download_section")
            
            $(".dc").removeClass("document_card_mobile")
            $(".dc").addClass("document_card")
            
            $(".ct").removeClass("document_card_mobile_text")
        }
        
        if(width < 410){
            $("#proceed_section").removeClass("proceed_section")
            $("#proceed_section").addClass("proceed_section_mobile")
        }
        else{
            $("#proceed_section").removeClass("proceed_section_mobile")
            $("#proceed_section").addClass("proceed_section")
        }
    }

    display_undertaking(data): void {
        var file_extension = ""
        var undertaking_file_name = data.undertaking
        var final_undertaking_file_name = undertaking_file_name.split("\\").pop()

        file_extension = final_undertaking_file_name.split('.').pop()
        
        document.getElementById("undertaking_file_name").innerHTML = final_undertaking_file_name

        if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
            document.getElementById("undertaking_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
        }
        else {
            this.undertaking_status = true
        }
    }

    display_offer_letter(data): void {
        var file_extension = ""
        var offer_letter_file_name = data.offer_letter
        var final_offer_letter_file_name = offer_letter_file_name.split("\\").pop()

        file_extension = final_offer_letter_file_name.split('.').pop()
        
        document.getElementById("offer_letter_file_name").innerHTML = final_offer_letter_file_name

        if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
            document.getElementById("offer_letter_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
        }
        else {
            this.offer_letter_status = true
        }
    }
    
    check_files(): void {
        if(this.undertaking_status == false || this.offer_letter_status == false) {
            event.preventDefault()
            
            if(this.undertaking_status == false) {
                document.getElementById("undertaking_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your letter of undertaking.</span>"
            }
            
            if(this.offer_letter_status == false) {
                document.getElementById("offer_letter_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your offer letter.</span>"
            }
        }
        else {
            window.location.href = "/itpproject/disclaimer"
        }
    }

    check_mode(): void {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.activateDark()
        }
        else {
            this.activateLight()
        }
      }
    
      activateLight(): void {
          $("body").removeClass("darkBody")
      }
    
      activateDark(): void {
          $("body").addClass("darkBody")
      }
}
