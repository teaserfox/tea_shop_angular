import {Component, NgZone} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'tee_shop_angular';

  constructor(private router: Router, private ngZone: NgZone) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngZone.runOutsideAngular(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'auto' });
          });
        });
      }
    });
  }
}
