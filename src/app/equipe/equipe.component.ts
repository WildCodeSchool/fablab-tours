import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../common/equipe.service';
import * as $ from 'jquery';


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

    $(function() {
      $('.material-card > .mc-btn-action').click(function () {
          const card = $(this).parent('.material-card');
          const icon = $(this).children('i');
          icon.addClass('fa-spin-fast');

          if (card.hasClass('mc-active')) {
              card.removeClass('mc-active');

              window.setTimeout(function() {
                  icon
                      .removeClass('fa-arrow-left')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-bars');

              }, 500);
          } else {
              card.addClass('mc-active');

              window.setTimeout(function() {
                  icon
                      .removeClass('fa-bars')
                      .removeClass('fa-spin-fast')
                      .addClass('fa-arrow-left');

              }, 500);
          }
      });
  });
  }



}
