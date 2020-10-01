import { RegisterComponent } from './backoffice/register/register.component';
import { LoginComponent } from './backoffice/login/login.component';
import { PropriUpdateComponent } from './backoffice/proprietaire/propri-update/propri-update.component';
import { PropriListComponent } from './backoffice/proprietaire/propri-list/propri-list.component';
import { TravauxPageComponent } from './pages/travaux-page/travaux-page.component';
import { ParcellePageComponent } from './pages/parcelle-page/parcelle-page.component';
import { PersonnelPageComponent } from './pages/personnel-page/personnel-page.component';
import { ProprietairePageComponent } from './pages/proprietaire-page/proprietaire-page.component';
import { DashboardPageComponent } from './backoffice/dashboard-page/dashboard-page.component';
import { AdminLandpageComponent } from './pages/admin-landpage/admin-landpage.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandpageComponent } from './pages/landpage/landpage.component';
import { PropriAddformComponent } from './backoffice/proprietaire/propri-addform/propri-addform.component';

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
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {
        path: 'proprietaire', component: ProprietairePageComponent,
        children: [
          {path: '', component: PropriListComponent} ,
          {path: 'list', component: PropriListComponent} ,
          {path: 'add', component: PropriAddformComponent} ,
          {path: 'update/:id', component: PropriUpdateComponent},
          {path: '**', redirectTo: '', pathMatch: 'full'} ,
  ]},
      {path: 'personnel', component: PersonnelPageComponent},
      {path: 'parcelle', component: ParcellePageComponent},
      {path: 'travaux', component: TravauxPageComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
{
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
