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
        var width = window.innerWidth
        
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
        var file_extension = ""
        var manual_registration_form_file_name = data.manual_registration_form
        var final_manual_registration_form_file_name = manual_registration_form_file_name.split("\\").pop()

        file_extension = final_manual_registration_form_file_name.split('.').pop()
        
        document.getElementById("manual_registration_form_file_name").innerHTML = final_manual_registration_form_file_name

        if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
            document.getElementById("manual_registration_form_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
            this.manual_registration_status = false
        }
        else {
            this.manual_registration_status = true
        }
    }

    display_checklist(data): void {
        var file_extension = ""
        var checklist_file_name = data.checklist
        var final_checklist_file_name = checklist_file_name.split("\\").pop()

        file_extension = final_checklist_file_name.split('.').pop()
        
        document.getElementById("checklist_file_name").innerHTML = final_checklist_file_name

        if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
            this.checklist_status = false
            document.getElementById("checklist_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
        }
        else {
            this.checklist_status = true
        }
    }

    display_online_transcripts(data): void {
        var file_extension = ""
        var online_transcripts_file_name = data.online_transcripts
        var final_online_transcripts_file_name = online_transcripts_file_name.split("\\").pop()

        file_extension = final_online_transcripts_file_name.split('.').pop()
        
        document.getElementById("online_transcripts_file_name").innerHTML = final_online_transcripts_file_name

        if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
            this.online_transcript_status = false
            document.getElementById("online_transcripts_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
        }
        else {
            this.online_transcript_status = true
        }
    }

    display_course_structure(data): void {
        var file_extension = ""
        var course_structure_file_name = data.course_structure
        var final_course_structure_file_name = course_structure_file_name.split("\\").pop()

        file_extension = final_course_structure_file_name.split('.').pop()
        
        document.getElementById("course_structure_file_name").innerHTML = final_course_structure_file_name

        if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
            this.course_structure_status = false
            document.getElementById("course_structure_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
        }
        else {
            this.course_structure_status = true
        }
    }

    display_insurance(data): void {
        var file_extension = ""
        var insurance_file_name = data.insurance
        var final_insurance_file_name = insurance_file_name.split("\\").pop()

        file_extension = final_insurance_file_name.split('.').pop()
        
        document.getElementById("insurance_file_name").innerHTML = final_insurance_file_name

        if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
            this.insurance_status = false
            document.getElementById("insurance_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
        }
        else {
            this.insurance_status = true
        }
    }

    display_resume(data): void {
        var file_extension = ""
        var resume_file_name = data.resume
        var final_resume_file_name = resume_file_name.split("\\").pop()

        file_extension = final_resume_file_name.split('.').pop()
        
        document.getElementById("resume_file_name").innerHTML = final_resume_file_name

        if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
            document.getElementById("resume_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
            this.resume_status = false
        }
        else {
            this.resume_status = true
        }
    }

    display_cover_letter(data): void {
        var file_extension = ""
        var cover_letter_file_name = data.cover_letter_file
        var final_cover_letter_file_name = cover_letter_file_name.split("\\").pop()

        file_extension = final_cover_letter_file_name.split('.').pop()
        
        document.getElementById("cover_letter_file_name").innerHTML = final_cover_letter_file_name

        if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
            this.cover_letter_status = false
            document.getElementById("cover_letter_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
        }
        else {
            this.cover_letter_status = true
        }
    }

    check_files(): void {
        if(this.manual_registration_status == false || this.checklist_status == false || this.online_transcript_status == false || this.course_structure_status == false || this.insurance_status == false || this.resume_status == false || this.cover_letter_status == false){
            event.preventDefault()
            
            document.getElementById("master_error").innerHTML = "You must submit the required documents before you can continue."
            
            if(this.manual_registration_status == false){
                document.getElementById("manual_regisration_form_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your manual registration form.</span>"
            }
            
            if(this.checklist_status == false){
                document.getElementById("checklist_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your checklist.</span>"
            }
            
            if(this.online_transcript_status == false){
                document.getElementById("online_transcripts_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your online transcript.</span>"
            }
            
            if(this.course_structure_status == false){
                document.getElementById("course_structure_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your course structure.</span>"
            }
            
            if(this.insurance_status == false){
                document.getElementById("insurance_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload the original copy of your insurance payment document.</span>"
            }
            
            if(this.resume_status == false){
                document.getElementById("resume_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your resume.</span>"
            }
            
            if(this.cover_letter_status == false){
                document.getElementById("cover_letter_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload your sample cover letter.</span>"
            }
        }
        else{
            document.getElementById("master_error").innerHTML = ""
            window.location.href = "/itpproject/aa_wait"
        }
    }

}
