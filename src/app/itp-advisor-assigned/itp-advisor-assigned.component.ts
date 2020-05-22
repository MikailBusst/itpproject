import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itp-advisor-assigned',
  templateUrl: './itp-advisor-assigned.component.html',
  styleUrls: ['./itp-advisor-assigned.component.css']
})
export class ItpAdvisorAssignedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.check_mode()
  }

  redirect_back(): void {
    window.location.href = "/itpproject/company_registration"
  }

  redirect_forward(): void {
    window.location.href = "/itpproject/submit_appendix_a"
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
