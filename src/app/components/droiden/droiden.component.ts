import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-droiden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './droiden.component.html',
  styleUrls: ['./droiden.component.css']
})
export class DroidenComponent implements OnInit, OnChanges {
  @Input() searchQuery: string = '';  // Recibe la búsqueda del usuario

  droidenList: any[] = [];  // Lista de Droiden
  filteredList: any[] = [];  // Lista filtrada

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    console.log("Cargando especies desde la API");

    this.swapiService.getSpecies().subscribe({
      next: (data) => {
        console.log("Fahrzeuge recibidas de la API:", data.results);
        
        // Filtramos para obtener solo los Droiden
        this.droidenList = data.results;
        this.filteredList = this.droidenList; // Mostrar todos al inicio
      },
      error: (err) => console.error("Error to load the API:", err)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
      this.applyFilter();
    }
  }

  applyFilter(): void {
    if (!this.droidenList.length) return;

    //trim remove the start and back white spaces 
    if (!this.searchQuery.trim()) {
      this.filteredList = [...this.droidenList]; // Mostrar todos si no hay búsqueda
    } else {
      this.filteredList = this.droidenList.filter((droid) =>
        droid.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    console.log("Resultados filtrados en Droiden:", this.filteredList);
  }
}
