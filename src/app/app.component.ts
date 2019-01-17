import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet3-funlab';

// tslint:disable-next-line:use-life-cycle-interface
ngOnInit(): void {
AOS.init();

  }
}
