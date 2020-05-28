import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  student_email = ""
  student_id = ""
  student_name = ""
  major = ""
  final_semester = ""
  student_mobile = ""
  student_total_credit_hours = ""
  student_current_credit_hours = ""
  
  student_email_status = false
  student_id_status = false
  student_name_status = false
  major_status = false
  final_semester_status = false
  student_mobile_status = false
  student_total_credit_hours_status = false
  student_current_credit_hours_status = false
  resume_status = false

  constructor() {}

  ngOnInit(): void {
    this.check_mode()
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 940) {
        $(".file_submission_label").removeClass("file_submission")
        $(".file_submission_label").addClass("file_submission_mobile")
    }
    
    if(width < 410) {
        $("#proceed_section").removeClass("proceed_section")
        $("#proceed_section").addClass("proceed_section_mobile")
    }
  }

  onResize(event) {
    this.check_resize()
  }

  check_resize(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 940) {
        $(".file_submission_label").removeClass("file_submission")
        $(".file_submission_label").addClass("file_submission_mobile")
    }
    else{
        $(".file_submission_label").removeClass("file_submission_mobile")
        $(".file_submission_label").addClass("file_submission")
    }
    
     if(width < 410) {
           $("#proceed_section").removeClass("proceed_section")
           $("#proceed_section").addClass("proceed_section_mobile")
     }
       else{
           $("#proceed_section").removeClass("proceed_section_mobile")
           $("#proceed_section").addClass("proceed_section")
       }
  }

  check_empty(data): void {
    this.student_email = data.student_email
    this.student_id = data.student_id
    this.student_name = data.student_name
    this.major = data.sm
    this.final_semester = data.t3
    this.student_mobile = data.student_mobile
    this.student_total_credit_hours = data.student_credit_hours
    this.student_current_credit_hours = data.student_credit_hours_trimester
    
    if(this.student_email == "") {
        event.preventDefault()
        document.getElementById("student_email_error").innerHTML = "Please enter your email address."
        document.getElementById("master_error").innerHTML = "Please enter all the required details."
    }
    else{
        this.validate_student_email(data)
    }
    
    if(this.student_id == "") {
        event.preventDefault()
        document.getElementById("student_id_error").innerHTML = "Please enter you Student ID."
        document.getElementById("master_error").innerHTML = "Please enter all the required details."
    }
    else {
        this.validate_student_id(data)
    }
    
    if(this.student_name == "") {
        event.preventDefault()
        document.getElementById("student_name_error").innerHTML = "Please enter your full name."
        document.getElementById("master_error").innerHTML = "Please enter all the required details."
    }
    else{
        this.validate_student_name(data)
    }
    
    if(this.major == "") {
        event.preventDefault()
        document.getElementById("sm_error").innerHTML = "Please select your major."
        document.getElementById("master_error").innerHTML = "Please enter all the required details."
    }
    else{
        this.validate_major()
    }
    
    if(this.student_total_credit_hours == "") {
          event.preventDefault()
          document.getElementById("student_credit_hours_error").innerHTML = "Please enter your total credit hours (excluding arts & humanities)."
      }
      else{
          this.validate_student_credit_hours(data)
      }
      
      if(this.student_current_credit_hours == "") {
          event.preventDefault()
          document.getElementById("student_credit_hours_trimester_error").innerHTML = "Please enter the total credit hours for the current trimester (excluding arts & humanities)."
      }
      else{
          this.validate_student_credit_hours_trimester(data)
      }
    
    if(this.final_semester == "") {
        event.preventDefault()
        document.getElementById("t3_error").innerHTML = "Please tell us if this is your final semester or not."
        document.getElementById("master_error").innerHTML = "Please enter all the required details."
    }
    else {
        this.validate_final_semester()
    }
    
    if(this.student_mobile == "") {
        event.preventDefault()
        document.getElementById("student_mobile_error").innerHTML = "Please enter your phone number."
        document.getElementById("master_error").innerHTML = "Please enter all the required details."
    }
    else {
        this.validate_student_mobile(data)
    }
    
    if(this.resume_status == false) {
        event.preventDefault()
        document.getElementById("resume_file_name").innerHTML = "<span style='color: red; font-weight: 900;'>Please upload the latest version of your resume.</span>"
    }
    
    this.validate_master()
  }

  validate_student_email(data): void {
    this.student_email = data.student_email
    
    if(this.student_email == "") {
        this.student_email_status = false
        document.getElementById("student_email_error").innerHTML = "Please enter your email address."
    }
    else {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        
        if(mailformat.test(this.student_email)) {
            if(this.student_email.indexOf("@student.mmu.edu.my", this.student_email.length - "@student.mmu.edu.my".length) !== -1) {
                this.student_email_status = true
                document.getElementById("student_email_error").innerHTML = ""
            }
            else {
                document.getElementById("student_email_error").innerHTML = "You must have an MMU student email address in order to continue."
            }
        }
        else {
            this.student_email_status = false
            document.getElementById("student_email_error").innerHTML = "Please enter a valid email address."
        }
    }
  }

  validate_student_id(data): void {
    this.student_id = data.student_id
    if(this.student_id == "") {
        this.student_id_status = false
        document.getElementById("student_id_error").innerHTML = "Please enter you Student ID."
    }
    else {
        var numbers = /^[0-9]+$/
        
        if(this.student_id.length == 10 && numbers.test(this.student_id)) {
            this.student_id_status = true
            document.getElementById("student_id_error").innerHTML = ""
        }
        else{
            this.student_id_status = false
            document.getElementById("student_id_error").innerHTML = "Please enter a valid Student ID."
        }
    }
  }

  validate_student_name(data): void {
    this.student_name = data.student_name
    if(this.student_name == "") {
        this.student_name_status = false
        document.getElementById("student_name_error").innerHTML = "Please enter a valid name."
    }
    else{
        this.student_name_status = true
        document.getElementById("student_name_error").innerHTML = ""
    }
  }

  validate_major(): void {
    this.major_status = true
    
    document.getElementById("sm_error").innerHTML = ""
  }

  validate_final_semester(): void {
    this.final_semester_status = true
    
    document.getElementById("t3_error").innerHTML = ""
  }

  validate_student_mobile(data): void {
    this.student_mobile = data.student_mobile
    if(this.student_mobile == "") {
        this.student_mobile_status = false
        document.getElementById("student_mobile_error").innerHTML = "Please enter your phone number."
    }
    else {
        if(!isNaN(Number(this.student_mobile)) && this.student_mobile.length <= 14 && this.student_mobile.length >= 6) {
            this.student_mobile_status = true
            document.getElementById("student_mobile_error").innerHTML = ""
        }
        else {
            this.student_mobile_status = false
            document.getElementById("student_mobile_error").innerHTML = "Please enter a valid phone number."
        }
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

  validate_student_credit_hours(data): void {
    this.student_total_credit_hours = data.student_credit_hours
    
    if(this.student_total_credit_hours == "") {
        event.preventDefault()
        document.getElementById("student_credit_hours_error").innerHTML = "Please enter your total credit hours (excluding arts & humanities)."
    }
    else{
        if(isNaN(Number(this.student_total_credit_hours))) {
            event.preventDefault()
            document.getElementById("student_credit_hours_error").innerHTML = "Your total credit hours should be a number."
        }
        else{
            if(Number(this.student_total_credit_hours) < 70) {
                event.preventDefault()
                document.getElementById("student_credit_hours_error").innerHTML = "You need to have at least 70 credit hours before you can apply for ITP."
            }
            else{
                document.getElementById("student_credit_hours_error").innerHTML = ""
                this.student_total_credit_hours_status = true
            }
        }
    }
  }

  validate_student_credit_hours_trimester(data): void {
    this.student_current_credit_hours = data.student_credit_hours_trimester
    
    if(this.student_current_credit_hours == "") {
        event.preventDefault()
        document.getElementById("student_credit_hours_trimester_error").innerHTML = "Please enter the total credit hours for the current trimester (excluding arts & humanities)."
        return
    }
    else{
        if(isNaN(Number(this.student_current_credit_hours))) {
            event.preventDefault()
            document.getElementById("student_credit_hours_trimester_error").innerHTML = "Your total credit hours should be a number."
        }
        else {
            document.getElementById("student_credit_hours_trimester_error").innerHTML = ""
            this.student_current_credit_hours_status = true
        }
    }
  }

  setPDFValues(): void {
    localStorage.setItem("reference_student_name", this.student_name)
    localStorage.setItem("reference_student_id", this.student_id)
  }

  validate_master(): void {
    if(this.student_email_status == false || this.student_id_status == false || this.student_name_status == false || this.major_status == false || this.final_semester_status == false || this.student_mobile_status == false || this.student_total_credit_hours_status == false || this.student_current_credit_hours_status == false || this.resume_status == false) {
        event.preventDefault()
        
        document.getElementById("master_error").innerHTML = "Please enter all the required details."
    }
    else {
        this.setPDFValues()
        document.getElementById("master_error").innerHTML = ""
        window.location.href="/itpproject/submit_documents"
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
