import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';
import { ButtonComponent } from './components/button/button.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CoverComponent } from './components/post-list/cover/cover.component';
import { MainComponent } from './pages/main/main.component';
import { WhatComponent } from './pages/main/what/what.component';
import { MissionComponent } from './pages/main/mission/mission.component';
import { PartnersComponent } from './pages/main/partners/partners.component';
import { CalendarComponent } from './pages/main/calendar/calendar.component';
import { RealizacjeComponent } from './pages/realizacje/realizacje.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { WiedzaComponent } from './pages/wiedza/wiedza.component';
import { PostComponent } from './components/post-list/post/post.component';

import { LOCALE_ID } from '@angular/core';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { WarsztatyComponent } from './pages/warsztaty/warsztaty.component';

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
    SlideshowComponent,
    PostComponent,
    NavMobileComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pl-PL" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
