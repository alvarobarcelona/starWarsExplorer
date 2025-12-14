import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../../services/swapi.service';
import { Species } from '../../interfaces/swapi.interfaces';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
})
export class SpeciesComponent implements OnInit, OnChanges {
  @Input() searchQuery: string = '';

  speciesList: Species[] = [];
  filteredList: Species[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    console.log('Loading species from API');

    this.swapiService.getSpecies().subscribe({
      next: (data) => {
        console.log('Species received from API:', data.results);

        this.speciesList = data.results;
        this.filteredList = this.speciesList;
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
    if (!this.speciesList.length) return;

    //trim remove the start and back white spaces
    if (!this.searchQuery.trim()) {
      this.filteredList = [...this.speciesList];
    } else {
      this.filteredList = this.speciesList.filter((species) =>
        species.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    console.log('Filtered results in Species:', this.filteredList);
  }
}
