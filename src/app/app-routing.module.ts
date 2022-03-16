import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralisationComponent } from './centralisation/centralisation.component';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { EnrichissementClientComponent } from './enrichissement-client/enrichissement-client.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { GroupementsComponent } from './groupements/groupements.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ParametresComponent } from './parametres/parametres.component';


const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: '', component: LandingPageComponent, canActivate: [AuthGuard] },
  { path: 'centralisation/:id', component: CentralisationComponent, canActivate: [AuthGuard] },
  { path: 'enrichissement', component: EnrichissementClientComponent, canActivate: [AuthGuard] },
  { path: 'fournisseurs', component: FournisseursComponent, canActivate: [AuthGuard] },
  { path: 'groupements', component: GroupementsComponent, canActivate: [AuthGuard] },
  { path: 'parametres', component: ParametresComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
