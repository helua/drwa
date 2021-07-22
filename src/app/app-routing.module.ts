import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarsztatyComponent } from './pages/warsztaty/warsztaty.component';
import { MainComponent } from './pages/main/main.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { RealizacjeComponent } from './pages/realizacje/realizacje.component';
import { WiedzaComponent } from './pages/wiedza/wiedza.component';

const routes: Routes = [
  { path: '', redirectTo: '/ciesielstwo', pathMatch: 'full' },
  { path: 'ciesielstwo', component: MainComponent },
  { path: 'warsztaty', component: WarsztatyComponent },
  { path: 'realizacje', component: RealizacjeComponent },
  { path: 'wiedza', component: WiedzaComponent },
  { path: 'kontakt', component: KontaktComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
