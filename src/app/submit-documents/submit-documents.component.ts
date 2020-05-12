import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-documents',
  templateUrl: './submit-documents.component.html',
  styleUrls: ['./submit-documents.component.css']
})
export class SubmitDocumentsComponent implements OnInit {
    manual_registration_status = false
    checklist_status = false
    online_transcript_status = false
    course_structure_status = false
    insurance_status = false
    resume_status = false
    cover_letter_status = false

    constructor() { }

    ngOnInit(): void {
        var width = window.innerWidth;
        
        //document.getElementById("width").innerHTML = width;
        
        if(width < 375) {
            $("h1").removeClass("big_header")
            $("h1").addClass("small_header")
        }
        
        if(width < 410){
            $("#proceed_section").removeClass("proceed_section")
            $("#proceed_section").addClass("proceed_section_mobile")
        }
        
        if(width < 510){
            $("section").removeClass("download_section")
            $("section").addClass("download_section_mobile")
            
            $(".dc").removeClass("document_card")
            $(".dc").addClass("document_card_mobile")
            
            $(".ct").addClass("document_card_mobile_text")
            
            $("#inner-download-section").removeClass("inner-download-section")
        }
        
        if(width < 940){
            $("input[type=file]").removeClass("file_submission")
            $("input[type=file]").addClass("file_submission_mobile")
        }
    }

    onResize(event) {
        this.check_resize()
    }

    redirect(): void {
        window.location.href = "/itpproject/student_registration"
    }

    check_resize(){
        var width = window.innerWidth
        
        //document.getElementById("width").innerHTML = width;
        
        if(width < 375) {
            $("h1").removeClass("big_header")
            $("h1").addClass("small_header")
        }
        else {
            $("h1").removeClass("small_header")
            $("h1").addClass("big_header")
        }
        
        if(width < 410){
            $("#proceed_section").removeClass("proceed_section")
            $("#proceed_section").addClass("proceed_section_mobile")
        }
        else{
            $("#proceed_section").removeClass("proceed_section_mobile")
            $("#proceed_section").addClass("proceed_section")
        }
        
        if(width < 510){
            $("section").removeClass("download_section")
            $("section").addClass("download_section_mobile")
        
            $(".dc").removeClass("document_card")
            $(".dc").addClass("document_card_mobile")
            
            $(".ct").addClass("document_card_mobile_text")
            
            $("#inner-download-section").removeClass("inner-download-section")
        }
        else{
            $("section").removeClass("download_section_mobile")
            $("section").addClass("download_section")
            
            $(".dc").removeClass("document_card_mobile")
            $(".dc").addClass("document_card")
        
            $(".ct").removeClass("document_card_mobile_text")
            
            $("#inner-download-section").addClass("inner-download-section")
        }
        
        if(width < 940){
            $("input[type=file]").removeClass("file_submission")
            $("input[type=file]").addClass("file_submission_mobile")
        }
        else{
            $("input[type=file]").removeClass("file_submission_mobile")
            $("input[type=file]").addClass("file_submission")
        }
    }

    display_manual_registration_form(data): void {
        var manual_registration_form_file_name = data.manual_registration_form

        //document.getElementById("manual_registration_form_file_name").innerHTML = manual_registration_form_file_name
        
        document.getElementById("manual_registration_form_file_name").innerHTML = manual_registration_form_file_name.split("\\").pop()
        
        this.manual_registration_status = true
    }

    display_checklist(data): void {
        var checklist_file_name = data.checklist
        
        document.getElementById("checklist_file_name").innerHTML = checklist_file_name.split("\\").pop()
        
        this.checklist_status = true
    }

    display_online_transcripts(data): void {
        var online_transcripts_file_name = data.online_transcripts
        
        document.getElementById("online_transcripts_file_name").innerHTML = online_transcripts_file_name.split("\\").pop()
        
        this.online_transcript_status = true
    }

    display_course_structure(data): void {
        var course_structure_file_name = data.course_structure
        
        document.getElementById("course_structure_file_name").innerHTML = course_structure_file_name.split("\\").pop()
        
        this.course_structure_status = true
    }

    display_insurance(data): void {
        var insurance_file_name = data.insurance
        
        document.getElementById("insurance_file_name").innerHTML = insurance_file_name.split("\\").pop()
        
        this.insurance_status = true
    }

    display_resume(data): void {
        var resume_file_name = data.resume
        
        document.getElementById("resume_file_name").innerHTML = resume_file_name.split("\\").pop()
        
        this.resume_status = true
    }

    display_cover_letter(data): void {
        var cover_letter_file_name = data.cover_letter_file
        
        document.getElementById("cover_letter_file_name").innerHTML = cover_letter_file_name.split("\\").pop()
        
        this.cover_letter_status = true
    }

    check_files(): void {
        if(this.manual_registration_status == false || this.checklist_status == false || this.online_transcript_status == false || this.course_structure_status == false || this.insurance_status == false || this.resume_status == false || this.cover_letter_status == false){
            event.preventDefault();
            
            document.getElementById("master_error").innerHTML = "Please submit the required documents before continuing.";
            
            if(this.manual_registration_status == false){
                document.getElementById("manual_regisration_form_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your manual registration form.</span>";
            }
            
            if(this.checklist_status == false){
                document.getElementById("checklist_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your checklist.</span>";
            }
            
            if(this.online_transcript_status == false){
                document.getElementById("online_transcripts_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your online transcript.</span>";
            }
            
            if(this.course_structure_status == false){
                document.getElementById("course_structure_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your course structure.</span>";
            }
            
            if(this.insurance_status == false){
                document.getElementById("insurance_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload the original copy of your insurance payment document.</span>";
            }
            
            if(this.resume_status == false){
                document.getElementById("resume_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your resume.</span>";
            }
            
            if(this.cover_letter_status == false){
                document.getElementById("cover_letter_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload a sample of your cover letter.</span>";
            }
        }
        else{
            document.getElementById("master_error").innerHTML = ""
            window.location.href = "/itpproject/aa_wait"
        }
    }

}
