import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer-verification',
  templateUrl: './disclaimer-verification.component.html',
  styleUrls: ['./disclaimer-verification.component.css']
})
export class DisclaimerVerificationComponent implements OnInit {

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

}
