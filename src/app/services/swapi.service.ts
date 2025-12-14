import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  SwapiResponse,
  Person,
  Species,
  Film,
  Vehicle,
  Planet,
} from '../interfaces/swapi.interfaces';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getPeople(): Observable<SwapiResponse<Person>> {
    return this.http.get<SwapiResponse<Person>>(
      'https://swapi.dev/api/people/'
    );
  }

  getSpecies(): Observable<SwapiResponse<Species>> {
    return this.http.get<SwapiResponse<Species>>(
      'https://swapi.dev/api/species/'
    );
  }

  getFilms(): Observable<SwapiResponse<Film>> {
    return this.http.get<SwapiResponse<Film>>('https://swapi.dev/api/films/');
  }

  getVehicles(): Observable<SwapiResponse<Vehicle>> {
    return this.http.get<SwapiResponse<Vehicle>>(
      'https://swapi.dev/api/vehicles/'
    );
  }

  getPlanets(): Observable<SwapiResponse<Planet>> {
    return this.http.get<SwapiResponse<Planet>>(
      'https://swapi.dev/api/planets/'
    );
  }
}
