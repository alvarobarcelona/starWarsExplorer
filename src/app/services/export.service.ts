import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() {}

  //  Exportar datos en formato JSON
  exportToJson(data: any[], filename: string): void {
    const jsonStr = JSON.stringify(data, null, 2);
    this.downloadFile(jsonStr, filename + '.json', 'application/json');
  }

  //  Exportar datos en formato XML
  exportToXml(data: any[], filename: string): void {
    let xmlStr = '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n';
    data.forEach(item => {
      xmlStr += '  <item>\n';
      Object.keys(item).forEach(key => {
        xmlStr += `    <${key}>${item[key]}</${key}>\n`;
      });
      xmlStr += '  </item>\n';
    });
    xmlStr += '</root>';

    this.downloadFile(xmlStr, filename + '.xml', 'application/xml');
  }

  //  Función auxiliar para descargar archivos
  private downloadFile(content: string, filename: string, contentType: string): void {
    const blob = new Blob([content], { type: contentType });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }
}
