import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-company-registration',
  templateUrl: './edit-company-registration.component.html',
  styleUrls: ['./edit-company-registration.component.css']
})
export class EditCompanyRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
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
