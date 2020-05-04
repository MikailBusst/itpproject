import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aa-approve',
  templateUrl: './aa-approve.component.html',
  styleUrls: ['./aa-approve.component.css']
})
export class AaApproveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    
    if(width < 850){
        $("#sectionrs").removeClass("right-section");
    }
  }

  onResize(event) {
    this.check_resize()
  }

  check_resize(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section");
        $("#proceed_section").addClass("proceed_section_mobile");
    }
    else{
        $("#proceed_section").removeClass("proceed_section_mobile");
        $("#proceed_section").addClass("proceed_section");
    }
    
    if(width < 850){
        $(".sectionrs").removeClass("right-section");
    }
    else{
        $(".sectionrs").addClass("right-section");
    }
}

}
