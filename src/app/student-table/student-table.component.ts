import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.check_mode()
    var width = window.innerWidth
    
    //document.getElementById("width").innerHTML = width;
    
    this.default_size()
    
    if(width <= 991) {
        $("#navbarResponsive").addClass("collapse navbar-collapse")
    }
    else {
        $("#navbarResponsive").addClass("navbar-collapse")
    }
    
    if(width < 601){
        $("#proceed_section").removeClass("proceed_section")
        $("#proceed_section").addClass("proceed_section_mobile")
        
        $("#filter-area").removeClass("filter-area")
        $("#filter-area").addClass("filter-area-mobile")
    }
  }

  onResize(event) {
    this.check_resize()
  }

  cancel(): void {
    window.history.back()
  }

  check_resize(): void {
    var width = window.innerWidth;
    
    //document.getElementById("width").innerHTML = width;
    
    if(width <= 991) {
        $("#navbarResponsive").removeClass("navbar-collapse")
        $("#navbarResponsive").addClass("collapse navbar-collapse")
    }
    else {
        $("#navbarResponsive").removeClass("collapse navbar-collapse")
        $("#navbarResponsive").addClass("navbar-collapse")
    }
    
     if(width < 601){
               $("#proceed_section").removeClass("proceed_section")
               $("#proceed_section").addClass("proceed_section_mobile")
         
                $("#filter-area").removeClass("filter-area")
                $("#filter-area").addClass("filter-area-mobile")
           }
           else{
               $("#proceed_section").removeClass("proceed_section_mobile")
               $("#proceed_section").addClass("proceed_section")
               
               $("#filter-area").removeClass("filter-area-mobile")
               $("#filter-area").addClass("filter-area")
           }
  }

  default_size(): void{
    $(".twenty_button").addClass('active')
  }

  activate_twenty(): void {
    $(".twenty_button").addClass('active')
    $(".fifty_button").removeClass('active')
    $(".hundred_button").removeClass('active')
  }

  activate_fifty(): void{
    $(".twenty_button").removeClass('active')
    $(".fifty_button").addClass('active')
    $(".hundred_button").removeClass('active')
  }

  activate_hundred(): void{
    $(".twenty_button").removeClass('active')
    $(".fifty_button").removeClass('active')
    $(".hundred_button").addClass('active')
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
    $("#navbar").removeClass("navbar navbar-expand-lg navbar-dark bg-dark")
    $("#navbar").addClass("navbar navbar-expand-lg navbar-light bg-light")

    $("body").removeClass("darkBody")
  }

  activateDark(): void {
    $("#navbar").removeClass("navbar navbar-expand-lg navbar-light bg-light")
    $("#navbar").addClass("navbar navbar-expand-lg navbar-dark bg-dark")

    $("body").addClass("darkBody")
  }
}
