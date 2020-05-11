import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  first_name = ""
  last_name = ""
  email = ""
  password = ""
  confirm_password = ""

  first_name_status = false
  last_name_status = false
  email_status = false
  password_status = false
  confirm_password_status = false
  warn_status = false

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
   if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
  }

  onResize(event) {
    this.check_resize()
  }

  check_resize(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 410){
          $("#proceed_section").removeClass("proceed_section");
          $("#proceed_section").addClass("proceed_section_mobile");
    }
      else{
          $("#proceed_section").removeClass("proceed_section_mobile");
          $("#proceed_section").addClass("proceed_section");
      }
  }

  check_empty(data): void {
    this.first_name = data.first_name
    this.last_name = data.last_name
    this.email = data.email
    this.password = data.password
    this.confirm_password = data.confirm_password
    
    if(this.first_name == "") {
        event.preventDefault()
        this.first_name_status = false
        document.getElementById("first_name_error").innerHTML = "Please enter your first name."
    }
    else {
        this.verify_first_name(data)
    }
    
    if(this.last_name == "") {
        event.preventDefault()
        this.last_name_status = false
        document.getElementById("last_name_error").innerHTML = "Please enter your last name."
    }
    else {
        this.verify_last_name(data)
    }
    
    if(this.email == "") {
        event.preventDefault()
        this.email_status = false
        document.getElementById("email_error").innerHTML = "Please enter your email address."
    }
    else {
        this.verify_email(data)
    }
    
    if(this.password == "") {
        event.preventDefault()
        this.password_status = false
        document.getElementById("password_error").innerHTML = "Please enter your password."
    }
    else {
        this.verify_password(data)
    }
    
    if(this.confirm_password == "") {
        event.preventDefault()
        this.confirm_password_status = false
        document.getElementById("confirm_password_error").innerHTML = "Please confirm your password."
    }
    else{
        this.verify_confirm_password(data)
    }
    
    this.master_verify();
  }

  verify_first_name(data): void {
    this.first_name = data.first_name
    
    if(this.first_name == "") {
        event.preventDefault()
        this.first_name_status = false
        document.getElementById("first_name_error").innerHTML = "Please enter your first name."
    }
    else{
        this.first_name_status = true
        document.getElementById("first_name_error").innerHTML = ""
    }
  }

  verify_last_name(data): void {
    this.last_name = data.last_name
    
    if(this.last_name == "") {
           event.preventDefault()
           this.last_name_status = false
           document.getElementById("last_name_error").innerHTML = "Please enter your last name."
       }
    else {
        this.last_name_status = true
        document.getElementById("last_name_error").innerHTML = ""
    }
  }

  verify_email(data): void {
    this.email = data.email
    
    if(this.email == "") {
        event.preventDefault()
        this.email_status = false
        document.getElementById("email_error").innerHTML = "Please enter your email address."
    }
    else {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        
        if(mailformat.test(this.email)) {
            this.email_status = true
            document.getElementById("email_error").innerHTML = ""
        }
        else {
            event.preventDefault()
            this.email_status = false
            document.getElementById("email_error").innerHTML = "Please enter a valid email address."
        }
    }
  }

  verify_password(data): void {
    this.password = data.password
    
    if(this.password == "") {
        event.preventDefault()
        this.password_status = false
        document.getElementById("password_error").innerHTML = "Please enter your password."
    }
    else {
        this.password_status = true
        document.getElementById("password_error").innerHTML = ""
    }
  }
  
  verify_confirm_password(data): void {
    this.password = data.password
    this.confirm_password = data.confirm_password
    
    if(this.confirm_password == "") {
        event.preventDefault()
        this.confirm_password_status = false
        document.getElementById("confirm_password_error").innerHTML = "Please confirm your password."
    }
    else {
        if(this.password != this.confirm_password) {
            event.preventDefault()
            this.confirm_password_status = false
            document.getElementById("confirm_password_error").innerHTML = "Your confirmed password does not match your new password."
        }
        else {
            var character_counter = 0
            var last_character
            var password_format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/
            
            for(var i = 0; i < this.password.length; i++) {
                if(this.password.charAt(i) == last_character) {
                    character_counter++
                    
                    if(character_counter >= 2) {
                        event.preventDefault()
                        this.confirm_password_status = false
                        document.getElementById("confirm_password_error").innerHTML = "Your password must be at least 8 characters long, has at least one lowercase letter, one uppercase letter, one numeric digit, one special character, no spaces and cannot have a character repeated three times in a row."
                        return
                    }
                }
                else {
                    character_counter = 0
                    last_character = this.password.charAt(i)
                }
                
            }
            
            if(password_format.test(this.password)) {
                this.confirm_password_status = true
                this.warn_status = true
                document.getElementById("confirm_password_error").innerHTML = ""
            }
            else{
                event.preventDefault()
                this.confirm_password_status = false
                document.getElementById("confirm_password_error").innerHTML = "Your password must be at least 8 characters long, has at least one lowercase letter, one uppercase letter, one numeric digit, one special character, no spaces and cannot have a character repeated three times in a row."
            }
        }
    }
  }

  master_verify(): void {
    if(this.first_name_status == true && this.last_name_status == true && this.email_status == true && this.password_status == true && this.confirm_password_status == true){
        document.getElementById("master_error").innerHTML = ""
        window.location.href = "/login"
    }
    else{
        event.preventDefault()
        document.getElementById("master_error").innerHTML = "Please fill in the required details."
    }
  }
}
