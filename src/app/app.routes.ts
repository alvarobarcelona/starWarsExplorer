import { Routes } from '@angular/router';
/* import { HomeComponent } from './components/home/home.component'; */
import { MenschenComponent } from './components/menschen/menschen.component';
import { DroidenComponent } from './components/droiden/droiden.component';
import { FahrzeugeComponent } from './components/fahrzeuge/fahrzeuge.component';
import { FilmsComponent } from './components/films/films.component';
import { PlanetsComponent } from './components/planets/planets.component';

export const routes: Routes = [
  /* { path: '', component: HomeComponent }, */ // Página de inicio
  { path: 'menschen', component: MenschenComponent },
  { path: 'droiden', component: DroidenComponent },
  { path: 'fahrzeuge', component: FahrzeugeComponent },
  { path: 'filme', component: FilmsComponent },
  { path: 'planeten', component: PlanetsComponent },
  { path: '**', redirectTo: '' } // Redirige cualquier ruta desconocida a Home
];
