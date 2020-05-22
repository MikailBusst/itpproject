import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.check_mode()
  }

  check_mode(): void  {
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
  }

  activateDark(): void  {
      $("#navbar").removeClass("navbar navbar-expand-lg navbar-light bg-light")
      $("#navbar").addClass("navbar navbar-expand-lg navbar-dark bg-dark")
  }
}
