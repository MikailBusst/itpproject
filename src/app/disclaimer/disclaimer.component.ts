import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section")
        $("#proceed_section").addClass("proceed_section_mobile")
    }
    
    if(width < 420){
      $("#paper").removeClass("paper")
      $("#paper").addClass("paper-mobile")
    }
  }

  onResize(event) {
    this.check_resize()
  }

  redirect_back(): void {
    window.location.href = "/itpproject/submit_appendix_a"
  }

  redirect_forward(): void {
    window.location.href = "/itpproject/disclaimer_verification"
  }

  check_resize(): void {
    var width = window.innerWidth;
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section")
        $("#proceed_section").addClass("proceed_section_mobile")
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile")
        $("#proceed_section").addClass("proceed_section")
    }
    
    if(width < 420){
           $("#paper").removeClass("paper")
           $("#paper").addClass("paper-mobile")
    }
    else{
        $("#paper").removeClass("paper-mobile")
        $("#paper").addClass("paper")
    }
  }

}
