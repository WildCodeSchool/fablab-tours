import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../common/machines.service';


@Component({
  selector: 'app-galerie-machines',
  templateUrl: './galerie-machines.component.html',
  styleUrls: ['./galerie-machines.component.css']
})
export class GalerieMachinesComponent implements OnInit {

  machines: any[];

  constructor(public service: MachinesService) { }

  ngOnInit() {
    // récuperer les données concernant les machines de la base de données.
    this.service.getMachines().subscribe(res => {
      this.machines = res;
    });

  }

}
