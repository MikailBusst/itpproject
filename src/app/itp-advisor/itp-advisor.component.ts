import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itp-advisor',
  templateUrl: './itp-advisor.component.html',
  styleUrls: ['./itp-advisor.component.css']
})
export class ItpAdvisorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.check_mode()
  }

  redirect(): void {
    window.location.href = "/itpproject/registration_complete"
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
