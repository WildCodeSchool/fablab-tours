import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../common/machines.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modif-sup-machine',
  templateUrl: './modif-sup-machine.component.html',
  styleUrls: ['./modif-sup-machine.component.css']
})
export class ModifSupMachineComponent implements OnInit {
  p = 1;
  machineForm: FormGroup;
  machines: any[];

  constructor(public service: MachinesService, private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    // récuperer les données concernant les machines de la base de données.
    this.service.getMachines().subscribe(res => {
      this.machines = res;
    });
    // Champs machine
    this.machineForm = this.fb.group({
      nom_machine: ['', Validators.required],
      photo: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
