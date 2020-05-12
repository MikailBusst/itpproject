import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrieve-email',
  templateUrl: './retrieve-email.component.html',
  styleUrls: ['./retrieve-email.component.css']
})
export class RetrieveEmailComponent implements OnInit {

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
    var width = window.innerWidth;
    
    console.log(width)
    
    if(width <= 375){
        $("body").removeClass("body-desktop");
        $("body").addClass("body-mobile");
    }
    else{
        $("body").removeClass("body-mobile");
        $("body").addClass("body-desktop");
    }
    
   if(width < 723){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile");
        $("#proceed_section").addClass("proceed_section");
    }
  }

  check_empty(data): void {
    event.preventDefault()

    var email = data.email
    
    if(email == ""){
        event.preventDefault()
        document.getElementById("email_error").innerHTML = "Please enter your email address"
    }
    else{
        this.email_validation(data)
    }
  }

  email_validation(data): void {
    var email = data.email
    
    if(email == ""){
        event.preventDefault()
        document.getElementById("email_error").innerHTML = "Please enter your email address"
    }
    else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        
        if(mailformat.test(email)){
            if(email.indexOf("@student.mmu.edu.my", email.length - "@student.mmu.edu.my".length) !== -1){
              document.getElementById("email_error").innerHTML = ""
              window.location.href = "/itpproject/retrieve_otp"
            }
            else{
                document.getElementById("email_error").innerHTML = "You must have an MMU student email address in order for you to continue."
            }
        }
        else{
          document.getElementById("email_error").innerHTML = "Please enter a valid email address."
        }
    }
  }

}
