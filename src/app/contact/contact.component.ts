import { Component, OnInit } from '@angular/core';
import { ContactService } from '../common/contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  touchForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
     }
  ngOnInit() {
    this.touchForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sujet: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(100)]]
    });
  }

  contactForm(form) {
    this.submitted = true;
    this.contactService.sendMessage(form).subscribe(() => {
      swal('Formulaire de contact', 'Votre message a bien été envoyé', 'success');
    });
  }
}



