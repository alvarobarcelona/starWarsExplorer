import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PeopleComponent } from './components/people/people.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SpeciesComponent } from './components/species/species.component';
import { FilmsComponent } from './components/films/films.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    PeopleComponent,
    FooterComponent,
    SearchBarComponent,
    SpeciesComponent,
    FilmsComponent,
    VehiclesComponent,
    RouterOutlet,
  ], // We import the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedFilters: string[] = [];
  searchQuery: string = '';

  // Referencias a los componentes hijos
  @ViewChild(PeopleComponent) peopleComponent!: PeopleComponent;
  @ViewChild(SpeciesComponent) speciesComponent!: SpeciesComponent;
  @ViewChild(VehiclesComponent) vehiclesComponent!: VehiclesComponent;
  @ViewChild(FilmsComponent) filmsComponent!: FilmsComponent;

  ngAfterViewInit(): void {
    //Aseguramos que las referencias se asignan después de que los hijos se inicialicen
  }

  onFilter(filter: string): void {
    if (this.selectedFilters.includes(filter)) {
      // Si ya está seleccionado, lo quitamos
      this.selectedFilters = this.selectedFilters.filter((f) => f !== filter);
    } else {
      // Si no está seleccionado, lo agregamos
      this.selectedFilters.push(filter);
    }
    console.log('Filtros seleccionados:', this.selectedFilters);
  }

  onSearch(query: string) {
    //hacer la busqueda mas segura convirtiendo las entradas en minusculas
    this.searchQuery = query.toLowerCase();
  }

  getExportData(): any[] {
    let data: any[] = [];

    if (this.selectedFilters.includes('people')) {
      data = data.concat(this.peopleComponent?.filteredList || []);
    }
    if (this.selectedFilters.includes('species')) {
      data = data.concat(this.speciesComponent?.filteredList || []);
    }
    if (this.selectedFilters.includes('vehicles')) {
      data = data.concat(this.vehiclesComponent?.filteredList || []);
    }
    if (this.selectedFilters.includes('films')) {
      data = data.concat(this.filmsComponent?.filteredList || []);
    }

    return data;
  }
}
