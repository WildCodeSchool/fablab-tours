import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SearchResultService } from '../common/search-result.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

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
  error: string;

  constructor(private flashMessages: FlashMessagesService, private service: SearchResultService, private modalService: NgbModal,
  private fb: FormBuilder, public authService: AuthService, private router: Router) { }

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

    // affichage de la bar
    showSidebar(isShow: boolean) {
      this.sidebarDisplayed = isShow;
    }
    // envois requete connection
    submit() {
      const val = this.connectForm.value;
      this.authService.login(val.username, val.password)
        .pipe(first())
        .subscribe(
          result => this.router.navigate(['admin']),
          err => this.error = 'Erreur lors de la connexion'
        );
    }
    // deconnection
    logout() {
      this.authService.logout();
      this.router.navigate(['']);
    }
    // envois requete recherche
    onSubmit() {
      this.service.getSearch(this.rechercheForm.value.input);
      this.router.navigate(['/recherche']);
    }
    // Open Modal
    open(content) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.submit();
        this.connectForm.reset();

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
}
