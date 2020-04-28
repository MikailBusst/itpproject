import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redownload-reference',
  templateUrl: './redownload-reference.component.html',
  styleUrls: ['./redownload-reference.component.css']
})
export class RedownloadReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    
    if(width < 420){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile");
        
        $("#dc").removeClass("document_card");
        $("#dc").addClass("document_card_mobile");
        
        $("#ct").addClass("document_card_mobile_text");
    }
  }

  onResize(event) {
    this.check_proceed_resize()
  }

  check_proceed_resize(): void {
    var width = window.innerWidth;
    
    if(width < 410){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile");
        $("#proceed_section").addClass("proceed_section");
    }
    
    if(width < 420){
        $("section").removeClass("download_section");
        $("section").addClass("download_section_mobile");
        
        $("#dc").removeClass("document_card");
        $("#dc").addClass("document_card_mobile");
        
        $("#ct").addClass("document_card_mobile_text");
    }
    else{
        $("section").removeClass("download_section_mobile");
        $("section").addClass("download_section");
        
        $("#dc").removeClass("document_card_mobile");
        $("#dc").addClass("document_card");
        
        $("#ct").removeClass("document_card_mobile_text");
    }
}

}
