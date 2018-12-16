import { Component, OnInit } from '@angular/core';
import { ContactService } from '../common/contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  angForm: FormGroup;
  constructor(private flashMessages: FlashMessagesService, private fb: FormBuilder, private contactService: ContactService) {
      // this.createForm();
     }
    //  createForm() {
    //   this.angForm = this.fb.group({
    //     name: ['', Validators.required],
    //     email: ['', Validators.required],
    //     message: ['', Validators    // sendMail(name, email, message) {
    //   this.contactService.sendEmail(name, email, message).subscribe(success => {
    //     this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
    //     console.log(success);
    //   }, error => {
    //     this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
    //   });
    // }.required],
    //   });
    // }
    // sendMail(name, email, message) {
    //   this.contactService.sendEmail(name, email, message).subscribe(success => {
    //     this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
    //     console.log(success);
    //   }, error => {
    //     this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
    //   });
    // }
  ngOnInit() {
  }

  contactForm(form) {
    this.contactService.sendMessage(form).subscribe(() => {
    swal('Formulaire de contact', 'Votre message a bien été envoyé', 'success');
    });
    }
}
