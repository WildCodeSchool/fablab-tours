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

  equipes: any[];
  membreForm: FormGroup;
  constructor(public service: EquipeService, private modalService: NgbModal, private fb: FormBuilder, ) { }

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
      linkedin: ['']
    });

  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
