import { FrontofficeModule } from './../frontoffice/frontoffice.module';
import { BackofficeModule } from './../backoffice/backoffice.module';
import { FooterComponent } from './../shared/footer/footer.component';
import { AppModule } from './../app.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandpageComponent } from './landpage/landpage.component';
import { SliderComponent } from './landpage/slider/slider.component';
import { LotComponent } from './landpage/lot/lot.component';
import { ProprietairePageComponent } from './proprietaire-page/proprietaire-page.component';
import { PersonnelPageComponent } from './personnel-page/personnel-page.component';
import { ParcellePageComponent } from './parcelle-page/parcelle-page.component';
import { EquipementPageComponent } from './equipement-page/equipement-page.component';
import { TravauxPageComponent } from './travaux-page/travaux-page.component';
import { AdminLandpageComponent } from './admin-landpage/admin-landpage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandpageComponent,
    SliderComponent,
    LotComponent,
    ProprietairePageComponent,
    PersonnelPageComponent,
    ParcellePageComponent,
    EquipementPageComponent,
    TravauxPageComponent,
    AdminLandpageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BackofficeModule,
    FrontofficeModule
  ],
  exports: [LandpageComponent, SliderComponent,
    SliderComponent,
    LotComponent,
    ProprietairePageComponent,
    PersonnelPageComponent,
    ParcellePageComponent,
    EquipementPageComponent,
    TravauxPageComponent,
    AdminLandpageComponent,
    FooterComponent],
})
export class PagesModule {}
