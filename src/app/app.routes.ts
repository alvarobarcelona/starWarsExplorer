import { Routes } from '@angular/router';
/* import { HomeComponent } from './components/home/home.component'; */
import { PeopleComponent } from './components/people/people.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { FilmsComponent } from './components/films/films.component';
import { PlanetsComponent } from './components/planets/planets.component';

export const routes: Routes = [
  /* { path: '', component: HomeComponent }, */ // Página de inicio
  { path: 'people', component: PeopleComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: '**', redirectTo: '' }, // Redirige cualquier ruta desconocida a Home
];
