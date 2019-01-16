import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manuel',
  templateUrl: './manuel.component.html',
  styleUrls: ['./manuel.component.css']
})
export class ManuelComponent implements OnInit {

  constructor() { }

  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  ngOnInit() {
  }

}
