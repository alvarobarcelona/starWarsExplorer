import { Component, Input } from '@angular/core';
import { ExportService } from '../../services/export.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() exportDataList: any[] = []; //Recibe datos desde el AppComponent

  constructor(private exportService: ExportService) {}

  exportData(format: string): void {
    if (!this.exportDataList || this.exportDataList.length === 0) {
      alert('Nicht zu exportieren');
      return;
    }
  const filename = 'star_wars_data';

    if (format === 'json') {
      this.exportService.exportToJson(this.exportDataList, filename);
    } else if (format === 'xml') {
      this.exportService.exportToXml(this.exportDataList, filename);
    }
  }
}
