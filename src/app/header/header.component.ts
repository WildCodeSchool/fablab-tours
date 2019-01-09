import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login/login.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import swal from 'sweetalert2';
import { SearchResultService } from '../common/search-result.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebarDisplayed: boolean;
  connectForm: FormGroup;
  rechercheForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private service: SearchResultService, private flashMessages: FlashMessagesService, private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.sidebarDisplayed = false;

  // Champs connection
  this.connectForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });


// champs de recherche
    this.rechercheForm = this.fb.group({
      input: ['', Validators.required],
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

  onSubmit() {
    this.service.getSearch(this.rechercheForm.value.input);
    this.router.navigate(['/recherche']);

  }
}
