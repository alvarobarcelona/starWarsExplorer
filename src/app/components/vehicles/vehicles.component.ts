import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../interfaces/swapi.interfaces';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit, OnChanges {
  @Input() searchQuery: string = '';

  vehiclesList: Vehicle[] = [];
  filteredList: Vehicle[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getVehicles().subscribe({
      next: (data) => {
        this.vehiclesList = data.results;
        this.filteredList = this.vehiclesList;
      },
      error: (err) => console.error('Error to load the API:', err),
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
      this.filteredList = this.vehiclesList.filter((vehicle) =>
        vehicle.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    console.log('Filtered results in Vehicles:', this.filteredList);
  }
}
