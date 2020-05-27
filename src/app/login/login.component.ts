import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.check_mode()
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 888){
      $("body").removeClass("login")
      $("body").addClass("login-mobile")
      
      $("#card").removeClass("card-login")
      $("#card").addClass("card-login-mobile")
      
      $("#card-left").removeClass("create-account")
      $("#card-left").addClass("create-account-mobile")
      
      $("#login-section").removeClass("login-area")
      $("#login-section").addClass("login-area-mobile")
      
      $("#login-below").removeClass("create-account-2")
      $("#login-below").addClass("create-account-mobile-2")
    }
  }

  onResize(event) {
    this.check_resize()
  }

  check_resize(): void {
    var width = window.innerWidth
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 888){
        $("body").removeClass("login")
        $("body").addClass("login-mobile")
        
        $("#card").removeClass("card-login")
        $("#card").addClass("card-login-mobile")
        
        $("#card-left").removeClass("create-account")
        $("#card-left").addClass("create-account-mobile")
        
        $("#login-section").removeClass("login-area")
        $("#login-section").addClass("login-area-mobile")
        
        $("#login-below").removeClass("create-account-2")
        $("#login-below").addClass("create-account-mobile-2")
    }
    
    else{
        $("body").removeClass("login-mobile")
        $("body").addClass("login")
        
        $("#card").removeClass("card-login-mobile")
        $("#card").addClass("card-login")
        
        $("#card-left").removeClass("create-account-mobile")
        $("#card-left").addClass("create-account")
        
        $("#login-section").removeClass("login-area-mobile")
        $("#login-section").addClass("login-area")
        
        $("#login-below").removeClass("create-account-mobile-2")
        $("#login-below").addClass("create-account-2")
    }
  }

  check_empty(data): void {
    var email = data.email
    var password = data.password
    
    if(email == "" && password == ""){
        event.preventDefault()
        document.getElementById("login_error").innerHTML = "Please enter your email address and password."
    }
    else if(email == ""){
        event.preventDefault()
        document.getElementById("login_error").innerHTML = "Please enter your email address."
    }
    else if(password == ""){
        event.preventDefault()
        document.getElementById("login_error").innerHTML = "Please enter your password"
    }
    else{
        document.getElementById("login_error").innerHTML = ""
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
