import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  machineForm: FormGroup;
  membreForm: FormGroup;

  constructor(private flashMessages: FlashMessagesService, private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {

// Champs machine
    this.machineForm = this.fb.group({
      nom_machine: ['', Validators.required],
      photo: ['', Validators.required],
      description: ['', Validators.required]
    });

// Champs membre equipe
    this.membreForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      image: ['', Validators.required],
      poste: ['', Validators.required],
      linkedin: ['']
    });

  }
// creation machine
  createMachine(form) {
    // this.submitted = true;
    this.loginService.sendMachine(form).subscribe(() => {
      swal('Creation machine', 'Votre machine a bien été créer', 'success');
    });
  }

  // creation membre equipe
  createMembre(form) {
    // this.submitted = true;
    this.loginService.sendMember(form).subscribe(() => {
      swal('Creation membre équipe', 'Votre membre d\'équipe a bien été créer', 'success');
    });
  }
}
