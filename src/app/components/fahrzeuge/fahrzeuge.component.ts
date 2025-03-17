import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fahrzeuge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fahrzeuge.component.html',
  styleUrls: ['./fahrzeuge.component.css']
})
export class FahrzeugeComponent implements OnInit, OnChanges {
  @Input() searchQuery: string = '';

  vehiclesList: any[] = [];
  filteredList: any[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getVehicles().subscribe({
      next: (data) => {    
        this.vehiclesList = data.results;
        this.filteredList = this.vehiclesList; 
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
      if (!this.vehiclesList.length) return;
  
      //trim remove the start and back white spaces 
      if (!this.searchQuery.trim()) {
        this.filteredList = [...this.vehiclesList];
      } else {
        this.filteredList = this.vehiclesList.filter((fahrzeuge) =>
          fahrzeuge.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
  
      console.log("Resultados filtrados en Droiden:", this.filteredList);
    }
}
