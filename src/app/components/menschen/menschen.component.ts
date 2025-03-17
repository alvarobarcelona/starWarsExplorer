import { Component, OnChanges, OnInit, Input, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../../services/swapi.service';
import { MenschenDetailsComponent } from '../menschen-details/menschen-details.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-menschen',
  standalone: true,
  imports: [CommonModule, FormsModule, MenschenDetailsComponent],
  templateUrl: './menschen.component.html',
  styleUrls: ['./menschen.component.css']
})

export class MenschenComponent implements OnInit, OnChanges {

  @Input() searchQuery: string = '';
  
  menschenList: any[] = [];
  filteredList: any[] = [];
  selectedPerson: any | null = null;


  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getMenschen().subscribe((data) => {
      console.log("Menschen from API", data.results);
      this.menschenList = data.results;
      this.filteredList = this.menschenList;
      
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
      this.applyFilter();
    }
  }

  applyFilter(): void {
    if (!this.searchQuery.trim()) {
      this.filteredList = this.menschenList;
    } else {
      this.filteredList = this.menschenList.filter((person) =>
        person.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  /*  filterMenschen(): void {
    this.filteredList = this.menschenList.filter((person) =>
      person.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  } */

    //for details
  selectPerson(person: any): void {
    this.selectedPerson = person;
  } 


  getImageUrl(name: string): string {
    return 'assets/pic/' + name.replace(/\s+/g, '-') + '.jpg';
  }
  


  // not using now
  formatImageName(name: string): string {
    return name
      .toLowerCase()
      .replace(/ /g, '-') // Reemplaza espacios con '-'
       + '.jpg'; // Elimina caracteres especiales
  }

  /* .replace(/[^a-z0-9-]/g, '') */
  
}
