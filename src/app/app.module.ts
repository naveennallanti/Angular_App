import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {dashboardComponent} from '../components/dashboard.component';

@NgModule({
  declarations: [
   AppComponent,
    dashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // bootstrap:[dashboardComponent]
  // schemas: [NgModule] 
})
export class AppModule { }
