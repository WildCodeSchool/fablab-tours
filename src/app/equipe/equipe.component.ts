import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../common/equipe.service';


@Component({
    selector: 'app-equipe',
    templateUrl: './equipe.component.html',
    styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
    
    equipes: any[];
    
    constructor(public service: EquipeService) { }
    
    ngOnInit() {
        // récupère données concernant l'équipe dans bdd.
        this.service.getEquipe().subscribe(res => {
            this.equipes = res;
        });
    }
    
    
    
}
