import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-appendix-a',
  templateUrl: './submit-appendix-a.component.html',
  styleUrls: ['./submit-appendix-a.component.css']
})
export class SubmitAppendixAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 1800){
        $("section").removeClass("download_section_special");
        $("section").addClass("download_section");
    }
    
    if(width < 940){
           $("input[type=file]").removeClass("file_submission");
           $("input[type=file]").addClass("file_submission_mobile");
       }
    
    if(width < 420){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile");
        
        $(".dc").removeClass("document_card");
        $(".dc").addClass("document_card_mobile");
        
        $(".ct").addClass("document_card_mobile_text");
    }
    
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
    
    if(width < 1800){
        $("section").removeClass("download_section_special");
        $("section").addClass("download_section");
    }
    else{
        $("section").removeClass("download_section");
        $("section").addClass("download_section_special");
    }
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    else{
        $("input[type=file]").removeClass("file_submission_mobile");
        $("input[type=file]").addClass("file_submission");
    }
    
    if(width < 464){
        $("#submit").removeClass("submit");
        $("#submit").addClass("submit_mobile");
    }
    else{
        $("#submit").removeClass("submit_mobile");
        $("#submit").addClass("submit");
    }
    
    if(width < 420){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile_special");
        
        $(".dc").removeClass("document_card");
        $(".dc").addClass("document_card_mobile");
        
        $(".ct").addClass("document_card_mobile_text");
    }
    else{
        $("section").removeClass("download_section_mobile_special");
        $("section").addClass("download_section");
        
        $(".dc").removeClass("document_card_mobile");
        $(".dc").addClass("document_card");
        
        $(".ct").removeClass("document_card_mobile_text");
    }
    
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
