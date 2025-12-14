import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../interfaces/swapi.interfaces';

@Component({
  selector: 'app-people-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css'],
})
export class PeopleDetailsComponent {
  @Input() person: Person | null = null;
}
