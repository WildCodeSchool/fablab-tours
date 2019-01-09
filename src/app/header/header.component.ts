import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login/login.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import swal from 'sweetalert2';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult: string;
  rechercheForm: FormGroup;
  
  constructor(private service: SearchResultService,private modalService: NgbModal, private flashMessages: FlashMessagesService, private fb: FormBuilder, private loginService: LoginService, private router: Router) { }
  
  ngOnInit() {
    this.sidebarDisplayed = false;
    
    // Champs connection
    this.connectForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

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
  
  connectUser() {
    // this.submitted = true;
    this.loginService.sendUser(this.connectForm.value).subscribe(() => {
      swal('Connection', 'Vous ête bien connecter', 'success');
    });
  }
  
  // Open Modal //
  
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.connectForm.reset();
      this.connectUser();
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.connectForm.reset();
    });
  }
  
  // Close modal by pressing esc or clicking on backdrop //
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  

  onSubmit() {
    this.service.getSearch(this.rechercheForm.value.input);
    this.router.navigate(['/recherche']);

  }

}