import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itp-advisor-assign',
  templateUrl: './itp-advisor-assign.component.html',
  styleUrls: ['./itp-advisor-assign.component.css']
})
export class ItpAdvisorAssignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      window.location.href="/itpproject/itp_advisor_assigned"
  }, 5000)
  }

  redirect(): void {
    window.location.href = "/itpproject/company_registration"
  }

}
