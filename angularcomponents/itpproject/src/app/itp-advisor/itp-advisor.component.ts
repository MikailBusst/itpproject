import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itp-advisor',
  templateUrl: './itp-advisor.component.html',
  styleUrls: ['./itp-advisor.component.css']
})
export class ItpAdvisorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirect(): void {
    window.location.href = "/registration_complete"
  }

}
