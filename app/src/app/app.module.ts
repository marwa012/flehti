import { PropriAddformComponent } from './backoffice/proprietaire/propri-addform/propri-addform.component';
import { FrontofficeModule } from './frontoffice/frontoffice.module';
import { BackofficeModule } from './backoffice/backoffice.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// import { LotComponent } from './accueil/lot/lot.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PagesModule,
    RouterModule,
    BackofficeModule,
    FrontofficeModule
  ],
  entryComponents: [
    PropriAddformComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
