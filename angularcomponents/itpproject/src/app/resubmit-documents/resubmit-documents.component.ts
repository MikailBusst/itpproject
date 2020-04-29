import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resubmit-documents',
  templateUrl: './resubmit-documents.component.html',
  styleUrls: ['./resubmit-documents.component.css']
})
export class ResubmitDocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
  }

  onResize(event) {
    this.check_resize()
  }

  check_resize(){
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 940){
        $("input[type=file]").removeClass("file_submission");
        $("input[type=file]").addClass("file_submission_mobile");
    }
    else{
        $("input[type=file]").removeClass("file_submission_mobile");
        $("input[type=file]").addClass("file_submission");
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
