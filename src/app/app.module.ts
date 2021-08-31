import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ButtonComponent } from './components/button/button.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

import { WarsztatyComponent } from './pages/warsztaty/warsztaty.component';
import { CoverComponent } from './pages/warsztaty/cover/cover.component';

import { MainComponent } from './pages/main/main.component';
import { WhatComponent } from './pages/main/what/what.component';
import { MissionComponent } from './pages/main/mission/mission.component';
import { PartnersComponent } from './pages/main/partners/partners.component';
import { CalendarComponent } from './pages/main/calendar/calendar.component';

import { RealizacjeComponent } from './pages/realizacje/realizacje.component';

import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { WiedzaComponent } from './pages/wiedza/wiedza.component';

import { LOCALE_ID } from '@angular/core';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

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
    ButtonComponent,
    CalendarComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pl-PL" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
