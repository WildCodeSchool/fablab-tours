import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from 'ng-fullcalendar';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { EquipeComponent } from './equipe/equipe.component';
import { CommentCaMarcheComponent } from './comment-ca-marche/comment-ca-marche.component';
import { GalerieMachinesComponent } from './galerie-machines/galerie-machines.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule  } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { SearchResultComponent } from './search-result/search-result.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
export function tokenGetter() {
  return sessionStorage.getItem('access_token');
}
import { AccueilUserComponent } from './accueil-user/accueil-user.component';
import { ModifSupEquipeComponent } from './modif-sup-equipe/modif-sup-equipe.component';
import { ModifSupMachineComponent } from './modif-sup-machine/modif-sup-machine.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    FooterComponent,
    LocalisationComponent,
    AdhesionComponent,
    AccueilComponent,
    AgendaComponent,
    ContactComponent,
    EquipeComponent,
    CommentCaMarcheComponent,
    GalerieMachinesComponent,
    PartenaireComponent,
    SearchResultComponent,
    AccueilUserComponent,
    ModifSupEquipeComponent,
    ModifSupMachineComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularOpenlayersModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    FullCalendarModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/api/auth']
      }
    }),
    NgxPaginationModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],


  providers: [
    {provide: LOCALE_ID, useValue: 'fr-CA' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
