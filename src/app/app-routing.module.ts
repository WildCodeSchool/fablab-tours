import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AgendaComponent } from './agenda/agenda.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ContactComponent } from './contact/contact.component';
import { GalerieMachinesComponent } from './galerie-machines/galerie-machines.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AuthGuard } from './common/auth.guard';
import { AccueilUserComponent } from './accueil-user/accueil-user.component';
import { ModifSupEquipeComponent } from './modif-sup-equipe/modif-sup-equipe.component';
import { ModifSupMachineComponent } from './modif-sup-machine/modif-sup-machine.component';
import { ManuelComponent } from './manuel/manuel.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'machine', component: GalerieMachinesComponent },
  { path: 'recherche', component: SearchResultComponent },
  { path: 'admin', component: AccueilUserComponent, canActivate: [AuthGuard] },
  { path: 'modifsupequipe', component: ModifSupEquipeComponent, canActivate: [AuthGuard] },
  { path: 'manuel', component: ManuelComponent, canActivate: [AuthGuard] },
  { path: 'modifsupemachine', component: ModifSupMachineComponent, canActivate: [AuthGuard] },
  { path: 'recherche', component: SearchResultComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
