import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planetsList: any[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getPlanets().subscribe(data => {
      this.planetsList = data.results;
    });
  }
}
