import { TravauxPageComponent } from './pages/travaux-page/travaux-page.component';
import { ParcellePageComponent } from './pages/parcelle-page/parcelle-page.component';
import { PersonnelPageComponent } from './pages/personnel-page/personnel-page.component';
import { ProprietairePageComponent } from './pages/proprietaire-page/proprietaire-page.component';
import { DashboardPageComponent } from './backoffice/dashboard-page/dashboard-page.component';
import { AdminLandpageComponent } from './pages/admin-landpage/admin-landpage.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandpageComponent } from './pages/landpage/landpage.component';

const routes: Routes = [
  // {path:"",component:AccueilComponent},
  {
    path: 'home',
    component: LandpageComponent
  },
  {
    path: 'admin',
    component: AdminLandpageComponent,
    children: [
      {path: 'home', component: DashboardPageComponent},
      {path: 'proprietaire', component: ProprietairePageComponent},
      {path: 'personnel', component: PersonnelPageComponent},
      {path: 'parcelle', component: ParcellePageComponent},
      {path: 'travaux', component: TravauxPageComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  {
    path: "**",
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
