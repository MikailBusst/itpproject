import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resubmit-documents',
  templateUrl: './resubmit-documents.component.html',
  styleUrls: ['./resubmit-documents.component.css']
})
export class ResubmitDocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  onResize(event) {
    this.check_resize()
  }

  redirect(): void {
    window.location.href = "/itpproject/registration_complete"
  }

  check_resize(){
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
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile");
        $("#proceed_section").addClass("proceed_section");
    }
  }

  display_manual_registration_form(data): void {
    var manual_registration_form_file_name = data.manual_registration_form
    
    document.getElementById("manual_registration_form_file_name").innerHTML = manual_registration_form_file_name.split("\\").pop()
  }

  display_checklist(data): void {
    var checklist_file_name = data.checklist
    
    document.getElementById("checklist_file_name").innerHTML = checklist_file_name.split("\\").pop()
  } 

  display_online_transcripts(data): void {
    var online_transcripts_file_name = data.online_transcripts
    
    document.getElementById("online_transcripts_file_name").innerHTML = online_transcripts_file_name.split("\\").pop()
  }

  display_course_structure(data): void {
    var course_structure_file_name = data.course_structure
    
    document.getElementById("course_structure_file_name").innerHTML = course_structure_file_name.split("\\").pop()
  }

  display_insurance(data): void {
    var insurance_file_name = data.insurance
    
    document.getElementById("insurance_file_name").innerHTML = insurance_file_name.split("\\").pop()
  }

  display_resume(data): void {
    var resume_file_name = data.resume
    
    document.getElementById("resume_file_name").innerHTML = resume_file_name.split("\\").pop()
  }

  display_cover_letter(data): void {
    var cover_letter_file_name = data.cover_letter_file
    
    document.getElementById("cover_letter_file_name").innerHTML = cover_letter_file_name.split("\\").pop()
  }

  display_undertaking(data): void {
    var undertaking_file_name = data.undertaking
    
    document.getElementById("undertaking_file_name").innerHTML = undertaking_file_name.split("\\").pop()
  }

  display_offer_letter(data): void {
    var offer_letter_file_name = data.offer_letter
    
    document.getElementById("offer_letter_file_name").innerHTML = offer_letter_file_name.split("\\").pop()
  }
}
