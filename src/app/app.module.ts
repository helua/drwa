import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { WarsztatyComponent } from './pages/warsztaty/warsztaty.component';
import { CoverComponent } from './pages/warsztaty/cover/cover.component';
import { WhatComponent } from './pages/main/what/what.component';
import { MissionComponent } from './pages/main/mission/mission.component';
import { PartnersComponent } from './pages/main/partners/partners.component';

import { MainComponent } from './pages/main/main.component';
import { RealizacjeComponent } from './pages/realizacje/realizacje.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { WiedzaComponent } from './pages/wiedza/wiedza.component';
import { ButtonComponent } from './components/button/button.component';


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
    PartnersComponent,
    CoverComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
