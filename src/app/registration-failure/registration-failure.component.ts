import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-failure',
  templateUrl: './registration-failure.component.html',
  styleUrls: ['./registration-failure.component.css']
})
export class RegistrationFailureComponent implements OnInit {

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
