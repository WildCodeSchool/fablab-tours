import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manuel',
  templateUrl: './manuel.component.html',
  styleUrls: ['./manuel.component.css']
})
export class ManuelComponent implements OnInit {

  constructor() { }

  src = 'assets/images/manuel_d_utilisation/manuel_d_utilisation_funlab_tours.pdf';

  ngOnInit() {
  }

}
