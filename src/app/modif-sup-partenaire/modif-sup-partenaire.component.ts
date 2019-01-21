import { Component, OnInit } from '@angular/core';
import { PartenairesService } from '../common/partenaires.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modif-sup-partenaire',
  templateUrl: './modif-sup-partenaire.component.html',
  styleUrls: ['./modif-sup-partenaire.component.css']
})
export class ModifSupPartenaireComponent implements OnInit {

  partenaires: any[];
  partenaireForm: FormGroup;


  constructor(public partenairesService: PartenairesService, private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {

    // récuperer les données partenaires.
    this.partenairesService.getPartenaire().subscribe(res => {
      this.partenaires = res;
    });

    // Champs partenaires
    this.partenaireForm = this.fb.group({
      image: ['', Validators.required],
      status: ['', Validators.required],
      url_site: ['', Validators.required]
    });

  }

  // ouvrir modal
  open(content) {
    this.modalService.open(content, { centered: true });
  }

  // modification machine
  updatePartenaire(form, id) {
    this.partenairesService.updatePartenaire(form, id).subscribe();
  }

  // creation partenare
  createPartenaire(form) {
    this.partenairesService.sendPartenaire(form).subscribe(() => {
    });
  }

  // suppression parteanire
  deletePartenaire(id) {
    this.partenairesService.deletePartenaire(id).subscribe(() => {
        const index = this.partenaires.findIndex(e => e.id_partenaire === id);
        this.partenaires.splice(index, 1);
      });
  }

}
