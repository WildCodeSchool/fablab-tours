import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../common/equipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../common/login/login.service';

@Component({
  selector: 'app-modif-sup-equipe',
  templateUrl: './modif-sup-equipe.component.html',
  styleUrls: ['./modif-sup-equipe.component.css']
})
export class ModifSupEquipeComponent implements OnInit {
  
  p = 1;
  equipes: any[];
  membreForm: FormGroup;
  
  constructor(public service: EquipeService, private modalService: NgbModal, private fb: FormBuilder, public loginService: LoginService) { }
  
  ngOnInit() {
    
    // récupère données concernant l'équipe dans bdd.
    this.service.getEquipe().subscribe(res => {
      this.equipes = res;
    });
    
    // Champs membre equipe
    this.membreForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      image: ['', Validators.required],
      poste: ['', Validators.required],
      email: [''],
      linkedin: ['']
    });
    
  }
  
  // modal
  openLg(content) {
    this.modalService.open(content, { centered: true  });
  }
  
  // modification membre equipe
  updateMembre(form , id) {
    this.loginService.updateMembre(form, id).subscribe();
  }
  
  // creation membre equipe
  createMembre(form) {
    this.loginService.sendMember(form).subscribe(() => {
    });
  }
  
  // suppression membre equipe
  deleteMembre(id) {
    this.loginService.deleteMembre(id).subscribe(() => {
      const index = this.equipes.findIndex(e => e.id === id);
      this.equipes.splice(index, 1);
    });
  }
  
}
