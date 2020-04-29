import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-documents',
  templateUrl: './submit-documents.component.html',
  styleUrls: ['./submit-documents.component.css']
})
export class SubmitDocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 375) {
        $("h1").removeClass("big_header");
        $("h1").addClass("small_header");
    }
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    
    if(width < 510){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile");
        
        $(".dc").removeClass("document_card");
        $(".dc").addClass("document_card_mobile");
        
        $(".ct").addClass("document_card_mobile_text");
        
        $("#inner-download-section").removeClass("inner-download-section");
    }
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
  }

  onResize(event) {
    this.check_resize()
  }

  check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 375) {
        $("h1").removeClass("big_header");
        $("h1").addClass("small_header");
    }
    else {
        $("h1").removeClass("small_header");
        $("h1").addClass("big_header");
    }
    
    if(width < 410){
          $("#proceed_section").removeClass("proceed_section");
          $("#proceed_section").addClass("proceed_section_mobile");
    }
      else{
          $("#proceed_section").removeClass("proceed_section_mobile");
          $("#proceed_section").addClass("proceed_section");
      }
    
    if(width < 510){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile");
        
        $(".dc").removeClass("document_card");
        $(".dc").addClass("document_card_mobile");
        
        $(".ct").addClass("document_card_mobile_text");
        
        $("#inner-download-section").removeClass("inner-download-section");
    }
    else{
        $("section").removeClass("download_section_mobile");
        $("section").addClass("download_section");
        
        $(".dc").removeClass("document_card_mobile");
        $(".dc").addClass("document_card");
        
        $(".ct").removeClass("document_card_mobile_text");
        
        $("#inner-download-section").addClass("inner-download-section");
    }
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    else{
        $("input[type=file]").removeClass("file_submission_mobile");
        $("input[type=file]").addClass("file_submission");
    }
}

}
