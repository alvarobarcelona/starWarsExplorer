import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() filterEvent = new EventEmitter<string>();

  selectFilter(filter: string) {
    console.log("Filtro emitido:", filter);
    this.filterEvent.emit(filter);
  }
}

