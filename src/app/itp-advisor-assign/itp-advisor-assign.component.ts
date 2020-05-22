import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itp-advisor-assign',
  templateUrl: './itp-advisor-assign.component.html',
  styleUrls: ['./itp-advisor-assign.component.css']
})
export class ItpAdvisorAssignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.check_mode()
    setInterval(() => {
      window.location.href="/itpproject/itp_advisor_assigned"
  }, 5000)
  }

  redirect(): void {
    window.location.href = "/itpproject/company_registration"
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
