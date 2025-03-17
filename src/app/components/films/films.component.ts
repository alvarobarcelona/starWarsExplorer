import { Component, OnInit, Input} from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-films',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  @Input() searchQuery: string = '';
  filmsList: any[] = [];
  filteredList: any[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getFilms().subscribe(data => {
      this.filmsList = data.results;
      this.filteredList = this.filmsList;
    });
  }
}
