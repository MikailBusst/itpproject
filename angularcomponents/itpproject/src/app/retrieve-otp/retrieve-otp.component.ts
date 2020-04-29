import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrieve-otp',
  templateUrl: './retrieve-otp.component.html',
  styleUrls: ['./retrieve-otp.component.css']
})
export class RetrieveOtpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 375){
           $("body").removeClass("body-desktop");
           $("body").addClass("body-mobile");
       }
    
    if(width < 601){
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
    
    if(width <= 375){
           $("body").removeClass("body-desktop");
           $("body").addClass("body-mobile");
       }
       else{
           $("body").removeClass("body-mobile");
           $("body").addClass("body-desktop");
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

}
