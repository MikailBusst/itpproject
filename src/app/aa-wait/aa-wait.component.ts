import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aa-wait',
  templateUrl: './aa-wait.component.html',
  styleUrls: ['./aa-wait.component.css']
})
export class AaWaitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      window.location.href="/itpproject/download_reference"
  }, 5000)
  }

  redirect(): void {
    window.location.href="/itpproject/submit_documents"
  }

}
