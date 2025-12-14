import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../../services/swapi.service';
import { PeopleDetailsComponent } from '../people-details/people-details.component';
import { FormsModule } from '@angular/forms';
import { Person } from '../../interfaces/swapi.interfaces';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, FormsModule, PeopleDetailsComponent],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit, OnChanges {
  @Input() searchQuery: string = '';

  peopleList: Person[] = [];
  filteredList: Person[] = [];
  selectedPerson: Person | null = null;

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getPeople().subscribe((data) => {
      console.log('People from API', data.results);
      this.peopleList = data.results;
      this.filteredList = this.peopleList;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
      this.applyFilter();
    }
  }

  applyFilter(): void {
    if (!this.searchQuery.trim()) {
      this.filteredList = this.peopleList;
    } else {
      this.filteredList = this.peopleList.filter((person) =>
        person.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  //for details
  selectPerson(person: Person): void {
    this.selectedPerson = person;
  }

  getImageUrl(name: string): string {
    return 'assets/pic/' + name.replace(/\s+/g, '-') + '.jpg';
  }
}
