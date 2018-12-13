
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebarDisplayed: boolean;
  constructor() { }

  ngOnInit() {
    this.sidebarDisplayed = false;
  }
  showSidebar() {
    this.sidebarDisplayed = !this.sidebarDisplayed;
  }
}
