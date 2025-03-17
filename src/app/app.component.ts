import { CommonModule } from '@angular/common';
import { Component,ViewChild, AfterViewInit } from '@angular/core';



import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenschenComponent } from './components/menschen/menschen.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DroidenComponent } from './components/droiden/droiden.component';
import { FilmsComponent } from './components/films/films.component';
import { FahrzeugeComponent } from "./components/fahrzeuge/fahrzeuge.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, MenschenComponent, FooterComponent, SearchBarComponent, DroidenComponent, FilmsComponent, FahrzeugeComponent,RouterOutlet], // We import the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  selectedFilters: string[] = [];
  searchQuery: string = '';

    // Referencias a los componentes hijos
    @ViewChild(MenschenComponent) menschenComponent!: MenschenComponent;
    @ViewChild(DroidenComponent) droidenComponent!: DroidenComponent;
    @ViewChild(FahrzeugeComponent) fahrzeugeComponent!: FahrzeugeComponent;
    @ViewChild(FilmsComponent) filmsComponent!: FilmsComponent;
  
    ngAfterViewInit(): void {
      //Aseguramos que las referencias se asignan después de que los hijos se inicialicen
    
    }

  onFilter(filter: string): void {
    if (this.selectedFilters.includes(filter)) {
      // Si ya está seleccionado, lo quitamos
      this.selectedFilters = this.selectedFilters.filter(f => f !== filter);
    } else {
      // Si no está seleccionado, lo agregamos
      this.selectedFilters.push(filter);
    }
    console.log("Filtros seleccionados:", this.selectedFilters);
  }

  onSearch(query: string) {
    //hacer la busqueda mas segura convirtiendo las entradas en minusculas
    this.searchQuery = query.toLowerCase();
  }


  getExportData(): any[] {
    let data: any[] = [];
  
    if (this.selectedFilters.includes('menschen')) {
      data = data.concat(this.menschenComponent?.filteredList || []);
    }
    if (this.selectedFilters.includes('droiden')) {
      data = data.concat(this.droidenComponent?.filteredList || []);
    }
    if (this.selectedFilters.includes('fahrzeuge')) {
      data = data.concat(this.fahrzeugeComponent?.filteredList || []);
    }
    if (this.selectedFilters.includes('filme')) {
      data = data.concat(this.filmsComponent?.filteredList || []);
    }
  
    return data;
  }
  
}
