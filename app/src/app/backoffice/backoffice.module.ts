import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProprietaireserviceService } from './proprietaire/proprietaireservice.service';
import { FrontofficeModule } from './../frontoffice/frontoffice.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './../shared/material/material.module';
import { PagesModule } from './../pages/pages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { PropriListComponent } from './proprietaire/propri-list/propri-list.component';
import { PropriAddformComponent } from './proprietaire/propri-addform/propri-addform.component';
import { PropriUpdateComponent } from './proprietaire/propri-update/propri-update.component';


@NgModule({
  declarations: [AdminNavbarComponent,
     DashboardPageComponent,
     PropriListComponent,
      PropriAddformComponent,
      PropriUpdateComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FrontofficeModule,
    BrowserAnimationsModule
  ],
  providers: [ProprietaireserviceService],
  exports: [AdminNavbarComponent,
    DashboardPageComponent,
    PropriListComponent,
      PropriAddformComponent,
      PropriUpdateComponent]
})
export class BackofficeModule { }
