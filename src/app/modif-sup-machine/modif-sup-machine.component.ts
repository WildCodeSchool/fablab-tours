import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../common/machines.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../common/user.service';

@Component({
  selector: 'app-modif-sup-machine',
  templateUrl: './modif-sup-machine.component.html',
  styleUrls: ['./modif-sup-machine.component.css']
})
export class ModifSupMachineComponent implements OnInit {

  // renitialisation de numero de la premiere page à 1
  p = 1;
  machineForm: FormGroup;
  machines: any[];

  // tslint:disable-next-line:max-line-length
  constructor(private config: NgbModalConfig, public service: MachinesService, private fb: FormBuilder, private modalService: NgbModal, public userService: UserService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit() {

    // récuperer les données machines de la base de données et les stocker dans le tableau machines.
    this.service.getMachines().subscribe(res => {
      this.machines = res;
    });

    // Champs machine
    this.machineForm = this.fb.group({
      nom_machine: ['', Validators.required],
      photo: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // ouvrir modal
  open(content) {
    this.modalService.open(content, { centered: true });
  }

  // modification machine
  updateMachine(form, id) {
    this.userService.updateMachine(form, id).subscribe();
  }

  // creation machine
  createMachine(form) {
    this.userService.sendMachine(form).subscribe(() => {
      this.machines.push(form);
    });
  }

  // suppression machine
  deleteMachine(id) {
    this.userService.deleteMachine(id).subscribe(() => {
        const index = this.machines.findIndex(e => e.id === id);
        this.machines.splice(index, 1);
      });
  }
}
