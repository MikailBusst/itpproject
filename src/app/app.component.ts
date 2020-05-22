import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itpproject';

  ngOnInit(): void {
    //$('html').css('overflow', 'hidden')
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
      $("html").removeClass("darkBody")
      $("html").addClass("lightBody")
  }

  activateDark(): void {
      $("html").removeClass("lightBody")
      $("html").addClass("darkBody")
  }
}
