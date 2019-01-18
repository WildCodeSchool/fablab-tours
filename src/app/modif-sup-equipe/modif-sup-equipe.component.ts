import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../common/equipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modif-sup-equipe',
  templateUrl: './modif-sup-equipe.component.html',
  styleUrls: ['./modif-sup-equipe.component.css']
})
export class ModifSupEquipeComponent implements OnInit {

// renitialisation de numero de la premiere page à 1
  p = 1;
  equipes: any[];
  membreForm: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder, public equipeService: EquipeService) {
   }

  ngOnInit() {

    // récupère données concernant l'équipe dans bdd.
    this.equipeService.getEquipe().subscribe(res => {
      this.equipes = res;
    });

    // Champs membre equipe
    this.membreForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      image: [''],
      poste: ['', Validators.required],
      linkedin: [''],
      email: ['', Validators.email],
    });

  }

  // ouvrir modal
  open(content) {
    this.modalService.open(content, { centered: true  });
  }

  // modification membre equipe
  updateMembre(form , id) {
    this.equipeService.updateMembre(form, id).subscribe();
  }

  // creation membre equipe
  createMembre(form) {
    this.equipeService.sendMember(form).subscribe(() => {
    });
  }

  // suppression membre equipe
  deleteMembre(id) {
    this.equipeService.deleteMembre(id).subscribe(() => {
      const index = this.equipes.findIndex(e => e.id === id);
      this.equipes.splice(index, 1);
    });
  }

}
