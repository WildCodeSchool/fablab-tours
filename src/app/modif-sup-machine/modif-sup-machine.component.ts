import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../common/machines.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../common/login/login.service';

@Component({
  selector: 'app-modif-sup-machine',
  templateUrl: './modif-sup-machine.component.html',
  styleUrls: ['./modif-sup-machine.component.css']
})
export class ModifSupMachineComponent implements OnInit {
  p = 1;
  machineForm: FormGroup;
  machines: any[];

  // tslint:disable-next-line:max-line-length
  constructor(private config: NgbModalConfig, public service: MachinesService, private fb: FormBuilder, private modalService: NgbModal, public loginService: LoginService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

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

  // modal
  open(content) {
    this.modalService.open(content, { centered: true });
  }

  // modification machine
  updateMachine(form, id) {
    this.loginService.updateMachine(form, id).subscribe();
  }

  // creation machine
  createMachine(form) {
    this.loginService.sendMachine(form).subscribe();
  }

  // suppression machine
  deleteMachine(id) {
    this.loginService.deleteMachine(id).subscribe(() => {
        const index = this.machines.findIndex(e => e.id === id);
        this.machines.splice(index, 1);
      });
  }
}
