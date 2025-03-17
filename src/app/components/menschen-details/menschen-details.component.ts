import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menschen-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menschen-details.component.html',
  styleUrls: ['./menschen-details.component.css']
})
export class MenschenDetailsComponent {
  @Input() person: any;
}
