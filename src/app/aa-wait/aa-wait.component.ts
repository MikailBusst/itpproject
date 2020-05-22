import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aa-wait',
  templateUrl: './aa-wait.component.html',
  styleUrls: ['./aa-wait.component.css']
})
export class AaWaitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.check_mode()
    setInterval(() => {
      window.location.href="/itpproject/download_reference"
  }, 5000)
  }

  redirect(): void {
    window.location.href="/itpproject/submit_documents"
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
