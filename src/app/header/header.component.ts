import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebarDisplayed: boolean;
  connectForm: FormGroup;

  constructor(private flashMessages: FlashMessagesService, private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.sidebarDisplayed = false;


  // Champs connection
  this.connectForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });


  }
  showSidebar(isShow: boolean) {
    this.sidebarDisplayed = isShow;
  }

  connectUser(form) {
    // this.submitted = true;
    this.loginService.sendUser(form).subscribe(() => {
      swal('Connection', 'Vous ête bien connecter', 'success');
    });
  }

}
