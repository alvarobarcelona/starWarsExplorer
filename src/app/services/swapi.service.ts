import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) {}


  getMenschen(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/people/');
  }

  getSpecies(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/species/');
  }

  getFilms(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/films/');
  }

  getVehicles(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/vehicles/');
  }
  getPlanets(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/planets/');
  }
  

  
}
