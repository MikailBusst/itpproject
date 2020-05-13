import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrieve-email',
  templateUrl: './retrieve-email.component.html',
  styleUrls: ['./retrieve-email.component.css']
})
export class RetrieveEmailComponent implements OnInit {
  email_status = false
  captcha_status = false

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    console.log(width)
    
    if(width < 375){
        $("body").removeClass("body-desktop");
        $("body").addClass("body-mobile");
    }
    
    if(width < 723){ 
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
  }

  onResize(event) {
    this.check_resize()
  }

  cancel(): void {
    window.history.back()
  }

  check_resize(): void {
    var width = window.innerWidth
    
    console.log(width)
    
    if(width <= 375){
        $("body").removeClass("body-desktop")
        $("body").addClass("body-mobile")
    }
    else{
        $("body").removeClass("body-mobile")
        $("body").addClass("body-desktop")
    }
    
   if(width < 723){
        $("#proceed_section").removeClass("proceed_section")
        $("#proceed_section").addClass("proceed_section_mobile")
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile")
        $("#proceed_section").addClass("proceed_section")
    }
  }

  check_empty(data): void {
    event.preventDefault()

    var email = data.email
    
    if(email == ""){
        event.preventDefault()
        document.getElementById("email_error").innerHTML = "Please enter your email address."
        this.email_status = false
    }
    else{
        this.email_validation(data)
    }

    if(this.captcha_status == false) {
      document.getElementById("captcha_error").innerHTML = "Please check the CAPTCHA box."
    }

    this.master_verify()
  }

  email_validation(data): void {
    var email = data.email
    
    if(email == ""){
        event.preventDefault()
        document.getElementById("email_error").innerHTML = "Please enter your email address."
        this.email_status = false
    }
    else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        
        if(mailformat.test(email)){
            if(email.indexOf("@student.mmu.edu.my", email.length - "@student.mmu.edu.my".length) !== -1){
              document.getElementById("email_error").innerHTML = ""
              this.email_status = true
            }
            else{
                document.getElementById("email_error").innerHTML = "Please enter your MMU student email address."
                this.email_status = false
            }
        }
        else{
          document.getElementById("email_error").innerHTML = "Please enter a valid email address."
          this.email_status = false
        }
    }
  }

  master_verify(): void {
    if(this.email_status == true && this.captcha_status == true) {
      window.location.href = "/itpproject/retrieve_otp"
    }
    else {
      event.preventDefault()
    }
  }

  recaptcha: any[]

  resolved(captchaResponse: any[]) {
    this.recaptcha = captchaResponse
    console.log(this.recaptcha)
    this.captcha_status = true
    document.getElementById("captcha_error").innerHTML = ""
  }

}
