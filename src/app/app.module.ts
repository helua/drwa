import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WarsztatyComponent } from './pages/warsztaty/warsztaty.component';
import { MainComponent } from './pages/main/main.component';
import { RealizacjeComponent } from './pages/realizacje/realizacje.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { WiedzaComponent } from './pages/wiedza/wiedza.component';
import { WhatComponent } from './pages/main/what/what.component';
import { MissionComponent } from './pages/main/mission/mission.component';
import { PartnersComponent } from './pages/main/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WarsztatyComponent,
    MainComponent,
    RealizacjeComponent,
    KontaktComponent,
    WiedzaComponent,
    WhatComponent,
    MissionComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
