import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer-verification',
  templateUrl: './disclaimer-verification.component.html',
  styleUrls: ['./disclaimer-verification.component.css']
})
export class DisclaimerVerificationComponent implements OnInit {

  ic = ""
  password = ""
  ic_status = false
  password_status = false

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
    this.ic = data.ic
    this.password = data.password
    
    if(this.ic == ""){
        event.preventDefault();
        this.ic_status = false;
        document.getElementById("ic_error").innerHTML = "Please enter your IC number without any dashes or spaces.";
    }
    else{
        this.verify_ic(data);
    }
    
    if(this.password == ""){
        event.preventDefault();
        this.password_status = false;
        document.getElementById("password_error").innerHTML = "Please enter your password.";
    }
    else{
        this.verify_password(data);
    }
    
    this.master_verify();
  }

  verify_ic(data): void {
    this.ic = data.ic
    
    if(this.ic == ""){
        event.preventDefault();
        this.ic_status = false;
        document.getElementById("ic_error").innerHTML = "Please enter your IC number without any dashes or spaces.";
    }
    else{
        if(isNaN(Number(this.ic)) || this.ic.length != 12){
            event.preventDefault();
            this.ic_status = false;
            document.getElementById("ic_error").innerHTML = "Please enter a valid IC number without any dashes or spaces.";
        }
        else{
            this.ic_status = true;
            document.getElementById("ic_error").innerHTML = "";
        }
    }
  }

  verify_password(data): void {
    this.password = data.password
    
    if(this.password == ""){
        event.preventDefault();
        this.password_status = false;
        document.getElementById("password_error").innerHTML = "Please enter your password.";
    }
    else{
        this.password_status = true;
        document.getElementById("password_error").innerHTML = "";
    }
  }

  master_verify(): void {
    if(this.ic_status == false || this.password_status == false){
        document.getElementById("master_error").innerHTML = "Please fill in the required details.";
    }
    else{
        event.preventDefault();
        document.getElementById("master_error").innerHTML = "";
        window.location.href = 'registration_complete.html'
    }
  }

}
