
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagesModule } from './../pages/pages.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent]
})
export class FrontofficeModule { }
