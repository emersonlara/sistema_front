// importar-arquivo.component.ts
import { Component } from '@angular/core';
///import { XlsxService } from './xlsx.service';
import { XlsxService }  from 'src/app/servicos/xlsx.service'

@Component({
  selector: 'app-importar-arquivo',
  templateUrl: './importar-arquivo.component.html',
  styleUrls: ['./importar-arquivo.component.css']
})
export class ImportarArquivoComponent {

  constructor(private xlsxService: XlsxService) { }

  async onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const data = await this.xlsxService.lerArquivo(file);
      console.log(data); // Aqui você pode fazer o que quiser com os dados      
    }
  }
}
