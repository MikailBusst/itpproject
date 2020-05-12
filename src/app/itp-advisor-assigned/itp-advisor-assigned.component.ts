import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itp-advisor-assigned',
  templateUrl: './itp-advisor-assigned.component.html',
  styleUrls: ['./itp-advisor-assigned.component.css']
})
export class ItpAdvisorAssignedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirect_back(): void {
    window.location.href = "/itpproject/company_registration"
  }

  redirect_forward(): void {
    window.location.href = "/itpproject/submit_appendix_a"
  }

}
