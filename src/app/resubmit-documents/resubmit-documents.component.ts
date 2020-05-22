import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resubmit-documents',
  templateUrl: './resubmit-documents.component.html',
  styleUrls: ['./resubmit-documents.component.css']
})
export class ResubmitDocumentsComponent implements OnInit {
  manual_registration_form_error = false
  checklist_error = false
  online_transcripts_error = false
  course_structure_error = false
  insurance_error = false
  resume_error = false
  cover_letter_error = false
  undertaking_error = false
  offer_letter_error = false

  constructor() { }

  ngOnInit(): void {
    this.check_mode()
    var width = window.innerWidth
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission")
        $("input[type=file]").addClass("file_submission_mobile")
    }
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section")
        $("#proceed_section").addClass("proceed_section_mobile")
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
        $("input[type=file]").removeClass("file_submission")
        $("input[type=file]").addClass("file_submission_mobile")
    }
    else{
        $("input[type=file]").removeClass("file_submission_mobile")
        $("input[type=file]").addClass("file_submission")
    }
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section")
        $("#proceed_section").addClass("proceed_section_mobile")
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile")
        $("#proceed_section").addClass("proceed_section")
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
      this.manual_registration_form_error = true
    }
    else {
      this.manual_registration_form_error = false
    }
  }

  display_checklist(data): void {
    var file_extension = ""
    var checklist_file_name = data.checklist
    var final_checklist_file_name = checklist_file_name.split("\\").pop()

    file_extension = final_checklist_file_name.split('.').pop()
    
    document.getElementById("checklist_file_name").innerHTML = final_checklist_file_name

    if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
      this.checklist_error = true
      document.getElementById("checklist_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
    }
    else {
      this.checklist_error = false
    }
  } 

  display_online_transcripts(data): void {
    var file_extension = ""
    var online_transcripts_file_name = data.online_transcripts
    var final_online_transcripts_file_name = online_transcripts_file_name.split("\\").pop()

    file_extension = final_online_transcripts_file_name.split('.').pop()
    
    document.getElementById("online_transcripts_file_name").innerHTML = final_online_transcripts_file_name

    if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
      this.online_transcripts_error = true
      document.getElementById("online_transcripts_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
    }
    else {
      this.online_transcripts_error = false
    }
  }

  display_course_structure(data): void {
    var file_extension = ""
    var course_structure_file_name = data.course_structure
    var final_course_structure_file_name = course_structure_file_name.split("\\").pop()

    file_extension = final_course_structure_file_name.split('.').pop()
    
    document.getElementById("course_structure_file_name").innerHTML = final_course_structure_file_name

    if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
      this.course_structure_error = true
      document.getElementById("course_structure_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
    }
    else {
      this.course_structure_error = false
    }
  }

  display_insurance(data): void {
    var file_extension = ""
    var insurance_file_name = data.insurance
    var final_insurance_file_name = insurance_file_name.split("\\").pop()

    file_extension = final_insurance_file_name.split('.').pop()
    
    document.getElementById("insurance_file_name").innerHTML = final_insurance_file_name

    if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
      this.insurance_error = true
      document.getElementById("insurance_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
    }
    else {
      this.insurance_error = false
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
        this.resume_error = true
    }
    else {
        this.resume_error = false
    }
  }

  display_cover_letter(data): void {
    var file_extension = ""
    var cover_letter_file_name = data.cover_letter_file
    var final_cover_letter_file_name = cover_letter_file_name.split("\\").pop()

    file_extension = final_cover_letter_file_name.split('.').pop()
    
    document.getElementById("cover_letter_file_name").innerHTML = final_cover_letter_file_name

    if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
      this.cover_letter_error = true
      document.getElementById("cover_letter_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
    }
    else {
      this.cover_letter_error = false
    }
  }

  display_undertaking(data): void {
    var file_extension = ""
    var undertaking_file_name = data.undertaking
    var final_undertaking_file_name = undertaking_file_name.split("\\").pop()

    file_extension = final_undertaking_file_name.split('.').pop()
    
    document.getElementById("undertaking_file_name").innerHTML = final_undertaking_file_name

    if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
      this.undertaking_error = true
      document.getElementById("undertaking_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
    }
    else {
      this.undertaking_error = false
    }
  }

  display_offer_letter(data): void {
    var file_extension = ""
    var offer_letter_file_name = data.offer_letter
    var final_offer_letter_file_name = offer_letter_file_name.split("\\").pop()

    file_extension = final_offer_letter_file_name.split('.').pop()
    
    document.getElementById("offer_letter_file_name").innerHTML = final_offer_letter_file_name

    if(file_extension == "exe" || file_extension == "wsf" || file_extension == "scpt" || file_extension == "js" || file_extension == "vbs" || file_extension == "php" || file_extension == "asp") {
      this.offer_letter_error = true
      document.getElementById("offer_letter_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>You cannot upload this file.</span>"
    }
    else {
      this.offer_letter_error = false
    }
  }

  check_file_error(): void {
    if(this.manual_registration_form_error == false && this.checklist_error == false && this.online_transcripts_error == false && this.course_structure_error == false && this.insurance_error == false && this.resume_error == false && this.cover_letter_error == false && this.undertaking_error == false && this.offer_letter_error == false) {
      this.redirect()
    }
    else {
      event.preventDefault()
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
