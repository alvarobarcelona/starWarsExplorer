import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';
import { Film } from '../../interfaces/swapi.interfaces';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit, OnChanges {
  @Input() searchQuery: string = '';
  filmsList: Film[] = [];
  filteredList: Film[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getFilms().subscribe((data) => {
      this.filmsList = data.results;
      this.filteredList = this.filmsList;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
      this.applyFilter();
    }
  }

  applyFilter(): void {
    if (!this.searchQuery.trim()) {
      this.filteredList = this.filmsList;
    } else {
      this.filteredList = this.filmsList.filter((film) =>
        film.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
