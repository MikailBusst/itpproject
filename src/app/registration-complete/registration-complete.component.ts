import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-complete',
  templateUrl: './registration-complete.component.html',
  styleUrls: ['./registration-complete.component.css']
})
export class RegistrationCompleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.check_mode()
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
      $("body").removeClass("darkBody")
  }

  activateDark(): void {
      $("body").addClass("darkBody")
  }

}
