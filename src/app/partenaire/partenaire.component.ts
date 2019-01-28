import { Component, OnInit } from '@angular/core';
import { PartenairesService } from '../common/partenaires.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {

  partFinancier: any[];
  partTechnique: any[];

  constructor(public partenairesService: PartenairesService) { }

  ngOnInit() {

    // récuperer les données partenaires financiers.
    this.partenairesService.getPartenaireFinancier().subscribe(res => {
      this.partFinancier = res;
    });

    // récuperer les données partenaires techniques.
    this.partenairesService.getPartenaireTechnique().subscribe(res => {
      this.partTechnique = res;
    });

  }

}
