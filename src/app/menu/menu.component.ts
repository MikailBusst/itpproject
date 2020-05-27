import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.check_page()
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

  check_page(): void {
    if(this.router.url == "/login" || this.router.url == "/signup" || this.router.url == "/retrieve_email" || this.router.url == "/retrieve_otp" || this.router.url == "/reset_password") {
      $("#registration").removeClass("current-page")

      $("#login").addClass("current-page")
    }
    else if(this.router.url == "/disclaimer" || this.router.url == "/aa_wait" || this.router.url == "/itp_advisor_assign" || this.router.url == "/registration_failure" || this.router.url == "/registration_complete" || this.router.url == "/itp_advisor_assigned" || this.router.url == "/itp_advisor" || this.router.url == "download_reference" || this.router.url == "/redownload_reference" || this.router.url == "/resubmit_documents" || this.router.url == "/submit_documents" || this.router.url == "/submit_appendix_a" || this.router.url == "/disclaimer_verification" || this.router.url == "/student_registration" || this.router.url == "/" || this.router.url == "/company_registration" || this.router.url == "/edit_company_registration") {
      $("#login").removeClass("current-page")

      $("#registration").addClass("current-page")
    }
  }
}
